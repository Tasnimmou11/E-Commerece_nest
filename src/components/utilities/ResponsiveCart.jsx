import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'

const ResponsiveCart = () => {
  return (
   <div className='md:hidden container py-3 px-8'>
      <div className="  border border-gray-200 p-3 bg-white flex flex-col gap-1 ">
        <div className='flex w-35 h-35 m-auto border  border-gray-300 '>
          <img
        src="/popularproduct1.png"
        alt="cart1"
        className=""
      />
        </div>
  {/* <div className="duration-500 contrast-50 h-48 bg-gradient-to-bl from-black via-orange-900 to-indigo-600  hover:contrast-100"></div> */}
  <div className="flex flex-col gap-4">
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
       <p className=" pt-3 text-sm font-normal text-center text-primary ">Field Roast Chao Cheese Creamy Original</p>
        <div className=" flex gap-2 py-2 px-4 justify-center">
                                       <ul className='flex text-amber-400'>
                                           <li>
                                           <FaStar/>
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
                                <div className="flex justify-between items-center px-10 py-2 ">
      <span className=' font-bold text-black text-base'> price</span>
      <span className="font-bold text-[#B6B6B6]  text-base">$2.00</span>
    </div>
    <div className="flex justify-between  px-10 py-2 ">
      <span className=' font-bold text-black text-base'>Stock</span>
      <span className="font-bold text-[#B6B6B6] text-base">Free</span>
    </div>
    <div className="flex justify-between  px-10 py-2 ">
      <span className=' font-bold text-black text-base pr-3'>price</span>
      <span className="font-bold text-[#B6B6B6]  text-base ">$2.00</span>
    </div>
    <div className=" pt-3 flex justify-between py-2   px-10 text-base font-semibold">
      <span className=' font-bold text-black text-base'>Remove</span>
      <span className='font-bold text-[#B6B6B6]  text-base'><RiDeleteBinLine /></span>
    </div>
      </div>
    
    </div>
    
  </div>
</div>
    </div>
  )
}

export default ResponsiveCart