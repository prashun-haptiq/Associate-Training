import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import MenProduct from '../components/MenProduct';
import WomenProduct from '../components/WomenProduct';
import Home from '../Page/Home';
import Cart from '../components/Cart';
import Cloths from '../components/Cloths';
import Wishlist from '../components/Wishlist';
import Login from '../components/Login';
import Signup from '../components/Signup';
// import { Provider } from 'react-reducer';
import Store from '../Store';
import { Provider } from 'react-redux';
// import Wishlist from '../components/Wishlist';

const Routers = () => {
    const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
        {
         index:true,
         element:<Home/>
        },
        {
            path:"Menproduct",
            element:<MenProduct/>
        },
        {
            path:"Womenproduct",
            element:<WomenProduct/>
        
        },
         {
            path:"Cloths",
            element:<Cloths/>
        
        },
                 {
            path:"Login",
            element:<Login/>
        
        },
             {
            path:"Signup",
            element:<Signup/>
        },
        {
          path:"Cart",
          element:<Cart/>
        },

        {
          path:"Wishlist",
          element:<Wishlist/>
        }

        
        
    ]
  }
 

  
]);

  return (
    <Provider store={Store}>
      <RouterProvider router={router}/>
      </Provider>
    
  )
}


export default Routers
