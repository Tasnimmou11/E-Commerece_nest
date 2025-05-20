import React, { useEffect, useState } from 'react'
import { MdGridView } from 'react-icons/md'
import ProductItem from '../utilities/ProductItem'
import axios from 'axios';

const Products = () => {
  const [productList, setProductList]= useState([]);
  const [limit, setLimit] = useState(12); 
    useEffect(()=>{
        const api = async ()=>{
            const options = {
                method: 'GET',
                url: 'https://api.escuelajs.co/api/v1/products',
                params: {page: '1', limit: '12'},
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
    },[limit]);
    
  return (
    <section className=''>
        <div className="container">
            <div className='flex justify-between pb-7'>
                <p className='text-sm md:text-lg'>We found <span className='text-brand'>{Math.min(limit, productList.length)}</span> items for you!</p>
            <div className='flex text-sm md:text-lg items-center gap-2 md:p-2 border-2 border-[#CACACA]  rounded'>
            <MdGridView />
                <label htmlFor="show">Show:</label>
                <select id="show" className='outline-0'
                value={limit} onChange={(e) => setLimit(Number(e.target.value))}
                >
                 
                <option value="12">12</option> 
                <option value="24">24</option> 
                <option value="36">36</option> 
                <option value="48">48</option> 
                </select>
            </div>
            
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-6'>
              {
                productList.slice(0, limit).map((item) =>(
                  <ProductItem key={item.id} data={item}/>
                ))
              }
                
            </div>
        </div>
    </section>
  )
}

export default Products
