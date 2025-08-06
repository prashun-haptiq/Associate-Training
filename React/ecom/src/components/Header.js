import React from "react";
import '../style.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/productSearchSlice"; // Make sure the path is correct

export default function Header() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.productSearch.query);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
     <div className="wrapheader">
    <div className="container wrapheader">
      <div className="header">
        <h1>JUST DO</h1>
        <input
          type="text"
         className="search-input"
          placeholder="Search products..."
          value={query}
          onChange={handleSearch}
        />

        {/* Navigation Links */}
        <ul className="login">
          <li><Link className="li" to="/Login">Login</Link></li>
          <li><Link className="li" to="/cart">Cart</Link></li>
          <li><Link className="li" to="/Wishlist">Wishlist</Link></li>
        </ul>
      </div>
    </div>
     </div>
  );
}
