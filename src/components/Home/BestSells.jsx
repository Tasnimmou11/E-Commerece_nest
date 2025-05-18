import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router'
import ProductItem from '../utilities/ProductItem'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";
import axios from 'axios';


const BestSells = () => {
     const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow customStyle="absolute top-40 right-5" />,
        prevArrow: <PrevArrow customStyle="absolute top-40  left-5" />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2,
                },
            },
            {
                breakpoint: 896,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,
                },
            },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1,
            },
        },
        {
            breakpoint: 512,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ],
    };

    
        const [productList, setProductList]= useState([]);
        useEffect(()=>{
            const api = async ()=>{
                const options = {
                    method: 'GET',
                    url: 'https://api.escuelajs.co/api/v1/products',
                    params: {page: '2', limit: '10'},
                    headers: {accept: 'application/json'}
                  };
                  
                  try {
                    const res = await axios.request(options);
                   
                    setProductList(res.data);
                    
                  } catch (error) {
                    console.error(error);
                  }
            };
            api();
        },[]);
        productList.length = 10;
  return (
   <section className='pt-12'>
    <div className="container">
    <div className="  justify-between flex md:flex-row flex-col gap-7 items-center md:items-end">
        <h2 className="section_heading">Daily Best Sells</h2>
        <ul className="flex  flex-wrap text-base font-light text-primary gap-1.5 md:gap-7">
        <li>
            <button className="hover:text-brand">
            Featured
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
            Popular
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
            New added
            </button>
            </li>
            
        </ul>
        </div>
        <div className='pt-11 flex   flex-col lg:flex-row gap-6 '>
            <div  className="p-8 md:hidden xl:block lg:py-20 lg:px-12 bg-no-repeat bg-cover rounded-xl bg-center :w-fit items-center "
                style={{ backgroundImage: "url('/bestsellbg.png') " }}> 
                    <h2 className='font-bold text-lg lg:text-2xl text-primary xl:w-62 mb-4'>Bring nature
into your
home</h2>
                    <Link to="/" className='flex items-center gap-1 w-fit bg-brand py-2 px-2.5 rounded-lg text-white text-xs'>Shop Now <FaArrowRight />
                    </Link>
                </div>
                
                <div className='xl:w-[75%] md:w-full    '>
                <Slider {...settings}>
                {/* slider div */}
                  {/* {productList.slice(0, 4).map((item) => (  */}
                    {/* <ProductItem></ProductItem>
                    
                    <ProductItem></ProductItem >
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem> */}
{/* 
        <div className="px-2 xl:px-4">
        {
            productList.map((item)=>(
                <ProductItem key={item.id} data={item}/>
            ))
        }
        </div> */}
                
                {productList.map((item) => (
    <div key={item.id} className="px-2 xl:px-4">
      <ProductItem data={item} />
    </div>
  ))}
                    </Slider>
                    </div>   
        
        </div>
    </div>
   </section>
  )
}

export default BestSells



