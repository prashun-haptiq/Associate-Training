import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/productSearchSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.productSearch.query);

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={handleChange}
      className="search-input"
    />
  );
}

export default SearchBar;
