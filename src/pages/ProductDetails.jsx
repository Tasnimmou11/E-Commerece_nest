import React from 'react'
import ProductSlide from "product-slide";
import { FaStar } from 'react-icons/fa6';
import { LuShoppingCart } from 'react-icons/lu';
const API = {
    images: [
      "https://i.imgur.com/QkIa5tT.jpeg",
      "https://i.imgur.com/jb5Yu0h.jpeg",
      "https://i.imgur.com/UlxxXyG.jpeg",
    ],
  };

const ProductDetails = () => {
    const settings = {
        direction: "horizontal", // or "vertical"
        zoom: true,          // or false
      };
  return (
    <section className='py-12'>
        <div className="container">
            <div className="flex gap-11">
                <div className='w-1/3'>
                <ProductSlide settings={settings} api={API.images} />
                </div>
                <div>
                    <h2 className='text-4xl font-bold text-primary'>
                    Seeds of Change Organic Quinoa, Brown
                    </h2>

                        <div className="flex gap-3  py-2.5">
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
                        <div className='flex flex-col md:flex-row gap-2 items-center justify-between pt-6'>
                            <h4 className='text-sm md:text-4xl font-bold  text-brand py-4'>$28.85 
                                <span className='text-secondary 
                                 text-sm line-through '>$32.8</span>
                                 </h4>
                                
                            
                        </div>
                        <p className='w-96 text-base font-normal text-secondary'> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
odio minus dolore impedit fuga eum eligendi.</p>
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