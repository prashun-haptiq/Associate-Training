import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';


const Products = () => {
const [product,setproduct]=useState([]);
const Categories = [
  "mens-shoes",
  "sports-accessories",
  "womens-shoes",
  

]
    useEffect(()=>{
     const fetchdata = async ()=>{
        try {
            let allproduct =[];
            for (const category of Categories) {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            // console.log({data});
            allproduct = [...allproduct,...data.products];
        }
        setproduct(allproduct);
            
        } catch (error) {
            console.log(error);
        }
     
     }
     fetchdata();
    },[])
  return (
    
    <div className=' containerproductwrap'>
      {product.map((pro,idx)=>(
        <ProductCard key={idx} product={pro}/>
      ))};
    </div>
  )
}

export default Products
