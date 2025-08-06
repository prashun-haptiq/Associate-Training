import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import MidSection from './MidSection';
import { useSelector } from 'react-redux';

const MenProduct = () => {
  const [products, setProducts] = useState([]);
  const searchQuery = useSelector((state) =>
    state.productSearch.query.toLowerCase()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/category/mens-shoes`);
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className='container space'>
      <div>
        <MidSection />
      </div>

      <div className='productwrap'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((pro, idx) => (
            <ProductCard key={idx} product={pro} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default MenProduct;
