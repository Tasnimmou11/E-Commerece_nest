import React, { useEffect, useState } from 'react'
import { MdGridView } from 'react-icons/md'
import ProductItem from '../utilities/ProductItem'
import axios from 'axios';

const Products = () => {
  const [productList, setProductList]= useState([]);
    useEffect(()=>{
        const api = async ()=>{
            const options = {
                method: 'GET',
                url: 'https://api.escuelajs.co/api/v1/products',
                params: {page: '1', limit: '10'},
                headers: {accept: 'application/json'}
              };
              
              try {
                const res = await axios.request(options);
                console.log(res.data);
                
                setProductList(res.data);
                
              } catch (error) {
                console.error(error);
              }
        };
        api();
    },[]);
    
  return (
    <section className=''>
        <div className="container">
            <div className='flex justify-between pb-7'>
                <p>We found 29 items for you!</p>
            <div className='flex  items-center gap-2 p-2 border-2 border-[#CACACA]  rounded'>
            <MdGridView />
                <label htmlFor="show">Show:</label>
                <select id="show" className='outline-0'>
                <option value="">50</option> 
                <option value="">100</option> 
                <option value="">150</option> 
                <option value="">200</option> 
                </select>
            </div>
            </div>
            <div className='grid grid-cols-6 gap-6'>
              {
                productList.map((item) =>(
                  <ProductItem key={item.id} data={item}/>
                ))
              }
                
            </div>
        </div>
    </section>
  )
}

export default Products
