import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { LuShoppingCart } from 'react-icons/lu'

const ProductItem = () => {
  return (
    <div className='p-2 md:p-6 border  border-[#ececec] hover:shadow-md hover:border-brand rounded-2xl w-fit relative overflow-hidden '>
        <div className='absolute top-0 left-0 bg-brand text-white text-xs px-2 py-1 rounded-br-xl'>
            <p>Hot</p>
        </div>
        <img src="popularproduct1.png" alt="popularproduct1" className='w-full ' />
        <h4 className='text-xs font-normal text-secondary'>Snack</h4>
        <h3 className=' text-sm md:text-base text-primary font-bold'>Seeds of Change Organic
        Quinoa, Brown, & Red Rice</h3>
        <div className="flex gap-3  py-2.5">
            <ul className='flex text-amber-400'>
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
        <h4 className='text-sm md:text-lg font-bold  text-brand'>$28.85 
            <span className='text-secondary 
             text-sm line-through '>$32.8</span>
             </h4>
        <button className='bg-[#DEF9EC] flex justify-center items-center font-bold text-lg p-2 md:px-5 md:py-2.5 rounded-sm cursor-pointer text-brand'>
        <LuShoppingCart />
            <span className=''>Add</span>
        </button>
    </div>
    </div>
  )
}

export default ProductItem