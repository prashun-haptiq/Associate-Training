import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import MidSection from './MidSection';
import { useSelector } from 'react-redux';

const Cloths = () => {
    const [product,setproduct]=useState([]);
    const searchQuery = useSelector((state) =>
    state.productSearch.query.toLowerCase()
  );

    useEffect(()=>{
     const fetchdata = async ()=>{
        try {
          
          
            const res = await fetch(`https://dummyjson.com/products/category/mens-shirts`);
            const  data = await res.json();
            // console.log({data});
       
            setproduct(data.products);
        } catch (error) {
            console.log(error);
        }
     
     }
     fetchdata();
    },[])


    const filteredProducts = product.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div  className='container space '>
      <div>
        <MidSection/>
      </div>
      <div  className='productwrap'>
      {/* {product.map((pro,idx)=>(
        <ProductCard key={idx} product={pro}/>
      ))}; */}
      {filteredProducts.length > 0 ? (
          filteredProducts.map((pro, idx) => (
            <ProductCard key={idx} product={pro} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  )
}

export default Cloths
