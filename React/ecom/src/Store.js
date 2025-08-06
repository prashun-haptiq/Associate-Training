import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/CartSystem';
import  wishlistReducer from './redux/WishlistSystem';
import productSearchReducer  from './redux/productSearchSlice';
const Store= configureStore({
    reducer:{
        cart:cartReducer,
        wish: wishlistReducer,
        productSearch: productSearchReducer,

}


})
export default Store;



Store.subscribe(() => {
  const state = Store.getState();
  localStorage.setItem('cart', JSON.stringify(state.cart.cart));
});


