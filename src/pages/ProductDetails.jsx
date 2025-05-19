import React, { useEffect, useState } from 'react'
import ProductSlide from "product-slide";
import { FaStar } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
import axios from 'axios';
import { useParams } from 'react-router';
const API = {
    images: [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/jb5Yu0h.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg",
    ],
  };

const ProductDetails = () => {
    const params =useParams()
    const settings = {
        direction: "horizontal", // or "vertical"
        zoom: true,          // or false
      };

      const [productData, setProductData]= useState({});
          useEffect(()=>{
              const api = async ()=>{
                  const options = {
                      method: 'GET',
                      url: 'https://api.escuelajs.co/api/v1/products',
                    //   params: {page: '1', limit: '10'},
                      headers: {accept: 'application/json'}
                    };
                    
                    try {
                      const res = await axios.request(options);
                    res.data.find((item)=>{
                        // console.log(item.id== params.id);
                        if(item.slug== params.slug){
                            setProductData(item);
                        }

                    })
                    //   setProductData(res.data);
                      
                    } catch (error) {
                      console.error(error);
                    }
              };
              api();
          },[]);
          console.log(productData);
          
  return (
    <section className='py-12'>
        <div className="container">
            <div className=" md:flex md:gap-11">
                <div className='w-fit md:w-1/3'>
                <ProductSlide settings={settings} api={productData.images} />
                </div>
                <div>
                    <h2 className=' pt-8  md:py-0 text-2xl md:text-4xl font-bold text-primary'>
                    {productData?.title}
                    </h2>

                        <div className="flex gap-3 mt-4 md:mt-0 md:py-2.5">
                                <ul className='flex text-amber-400 text-xs'>
                                    <li>
                                    <FaStar />
                                    </li>
                                    <li>
                                    <FaStar />
                                    </li>
                                    <li>
                                    <FaStar />
                                    </li>
                                    <li>
                                    <FaStar />
                                    </li>
                                    <li>
                                    <FaStar />
                                    </li>
                                </ul>
                                <p className='text-xs font-normal text-secondary'>(4.0)</p>
                            </div>
                            <p className='text-sm font-normal text-secondary
                            '>
                                By <span className='text-brand'>NestFood</span> </p>
                        <div className='flex flex-col md:flex-row gap-2 md:items-center justify-between md:pt-6'>
                            <h4 className='text-2xl md:text-4xl font-bold  text-brand py-4 '>${productData.price}
                                <span className='text-secondary 
                                 text-sm line-through px-2'>${productData.price+100}</span>
                                 </h4>
                                
                            
                        </div>
                        <p className='w-80 md:w-96 text-base font-normal text-secondary'> {productData?.description}</p>
                <div className='flex pt-10 items-center gap-5'>
                   <input type='number' value={"1"} 
                   className='border-2 border-brand rounded-xl w-20 text-center py-3 outline-0 text-xl'/> 
                 <button className='bg-brand flex justify-center gap-2 items-center font-bold text-lg py-2 px-4 md:px-4 md:py-2 rounded-sm cursor-pointer text-white'>
                            <LuShoppingCart />
                                <span className=''>Add to cart</span>
                            </button> 
                </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails