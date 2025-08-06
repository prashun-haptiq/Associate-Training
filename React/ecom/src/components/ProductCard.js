
import React from 'react';
import '../style.css'; 
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { AddCart } from '../redux/CartSystem';
import{AddWishlist} from '../redux/WishlistSystem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const ProductCard = ({ product }) => {

 const disptch = useDispatch();
  return (
    <div className="product-card">
      <div className="product-image-container">

        <img
          src={product.images && product.images[0]}
          alt={product.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
         <span role="img" aria-label="star-rating">⭐</span> {product.rating}
        </div>
         <ul className="cartBtn">
              <li>
           {/* <Link className="li" to={''}> Add to cart </Link></li> */}
               <button  className="li" onClick={()=>disptch(AddCart(product))}>Add to cart</button>
             </li>
             </ul>
            {/* <div className='wishList'>
              <button  className="li" onClick={()=>disptch(AddCart(product))}><FontAwesomeIcon icon={["fas", "heart"]} />
             </button>
            </div> */}


{/* <div className='wishList'>
  <button className="wishlist-btn" onClick={() => disptch(AddCart(product))}>
    <FontAwesomeIcon icon={["faHeart", "heart"]} />
  </button>
</div> */}


      <div className="wishList">
      <button className="wishlist-btn" onClick={() => disptch(AddWishlist(product))}>
        <FontAwesomeIcon icon={faHeart} />
        </button>
        </div>

      </div>
          
    </div>
    
  );
};

export default ProductCard;
