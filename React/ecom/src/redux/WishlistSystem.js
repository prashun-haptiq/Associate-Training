import { createSlice } from "@reduxjs/toolkit";

// Get wishlist from localStorage, or fallback to an empty array
const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

const initialState = {
  wishlist: savedWishlist,
  quantity: savedWishlist.reduce((acc, item) => acc + item.quantity, 0),
};

const wishListSystem = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    // Add item to wishlist
    AddWishlist: (state, action) => {
      const itemInWishlist = state.wishlist.find(item => item.id === action.payload.id);

      if (itemInWishlist) {
        itemInWishlist.quantity += 1;
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }

      // Update quantity and persist
      state.quantity = state.wishlist.reduce((acc, item) => acc + item.quantity, 0);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    // Remove item by ID
    RemoveWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      state.quantity = state.wishlist.reduce((acc, item) => acc + item.quantity, 0);
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    // Optional: Clear entire wishlist
    ClearWishlist: (state) => {
      state.wishlist = [];
      state.quantity = 0;
      localStorage.removeItem('wishlist');
    }
  }
});

// Export actions and reducer
export const { AddWishlist, RemoveWishlist, ClearWishlist } = wishListSystem.actions;
export default wishListSystem.reducer;
