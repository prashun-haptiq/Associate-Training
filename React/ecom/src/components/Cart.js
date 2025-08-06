import React from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { AddCart, RemoveCart } from "../redux/CartSystem"
import {DecreaseQuantity} from "../redux/CartSystem"

function Cart() {
  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.cart;
   const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  
const dispatch = useDispatch();

  return (
    <div className=" container cartDetails">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) :
       (
        <div className="productwrap">
          {cartItems.map((item, index) => (
            <div key={index}>
              <div className="product-card">
                <div className="product-image-container">
                  <img
                    src={item.images && item.images[0]}
                    alt={item.title}
                    className="product-image"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-price">${item.price.toFixed(2)}</p>
                  <p className="product-description">{item.description}</p>
                  <div className="product-rating">
                    <span role="img" aria-label="star-rating">
                      ⭐
                    </span>{" "}
                    {item.rating}
                  </div>

                    <div className="AddRemove">
                    <button onClick={() => dispatch(DecreaseQuantity(item.id))}> − </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(AddCart(item))}> + </button>
                      </div>
                  </div>

                <button
                  className="removebtn"
                  onClick={() => dispatch(RemoveCart(item.id))} >
                  Remove
                </button>
                </div>
              </div>
          ))}
        </div>
      )}
        <h2>Total Items : {cartItems.length}</h2>
        <h2>Total Price:{totalPrice}</h2>
    </div>
  
  );
}

export default Cart;
