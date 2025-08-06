import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RemoveWishlist } from "../redux/WishlistSystem";
import { AddCart } from "../redux/CartSystem";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wish.wishlist);
  const dispatch = useDispatch();

  const handleMoveToCart = (item) => {
    dispatch(AddCart(item));
    dispatch(RemoveWishlist(item.id));
  };

  return (
    <div className="container cartDetails">
      <h2>Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="productwrap">
          {wishlistItems.map((item, index) => (
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
                    <span role="img" aria-label="star-rating">⭐</span> {item.rating}
                  </div>

                  <div className="AddRemove">
                    <button onClick={() => handleMoveToCart(item)}>Move to Cart</button>
                  </div>
                </div>

                <button
                  className="removebtn"
                  onClick={() => dispatch(RemoveWishlist(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <h2>Total Items: {wishlistItems.length}</h2>
    </div>
  );
}

export default Wishlist;
