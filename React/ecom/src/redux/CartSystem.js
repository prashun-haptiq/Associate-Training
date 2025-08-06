import { createSlice } from "@reduxjs/toolkit";
const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
  cart: savedCart,
  quantity: savedCart.reduce((acc, item) => acc + item.quantity, 0),
};

const CartSystem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.quantity += 1; 
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); 
      }

      state.quantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },

    RemoveCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      state.quantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },

    
    DecreaseQuantity: (state, action) => {
      const item = state.cart.find(item => item.id === action.payload);

      if (item) {
        if (item.quantity === 1) {
          state.cart = state.cart.filter(i => i.id !== item.id); 
        } else {
          item.quantity -= 1;
        }
      }

      state.quantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    },

    ClearCart: (state) => {
      state.cart = [];
      state.quantity = 0;
    },


 AddWishlist: (state, action) => {
      const itemInWish = state.cart.find(item => item.id === action.payload.id);

      if (itemInWish) {
        itemInWish.quantity += 1; 
      } else {
        state.cart.push({ ...action.payload, quantity: 1 }); 
      }

      state.quantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
    }


  }
});





export const { AddCart, RemoveCart, DecreaseQuantity, ClearCart,AddWishlist } = CartSystem.actions;
export default CartSystem.reducer;
