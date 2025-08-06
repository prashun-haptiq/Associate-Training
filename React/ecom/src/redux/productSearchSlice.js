import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: "", 
};

const productSearchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    clearSearchQuery: (state) => {
      state.query = "";
    }
  }
});

export const { setSearchQuery, clearSearchQuery } = productSearchSlice.actions;
export default productSearchSlice.reducer;
