import React, { useEffect } from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import CartItem from '../components/utilities/CartItem'
import { PiSignOut } from 'react-icons/pi'
import { Link } from 'react-router'
 import ResponsiveCart from '../components/utilities/ResponsiveCart'
import { useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'




 const Cart = () => {
  const cartData = useSelector((state)=>(state.cart.cart))
 
  // console.log(cartData);
   let sum=0;
  cartData.forEach((item)=>{
    sum += item.quantity * item.productData.price
    // console.log(item.quantity, item.productData.price);
  })

  return (
   <section className='  border-t border-[#cecece]'>
    
    <div className="container  py-8  ">
        <div>
            <BreadCrumb/>
        </div>
    </div>
    {/* <div className='hidden bg-amber-700red  border-t border-[#cecece]'></div> */}
    <div className="container hidden md:block py-12 ">
    <h2 className=' text-5xl lg:text-6xl text-primary font-bold'>Your Cart</h2>
    <p className='py-6 text-secondary font-normal'>There are <span className='text-brand'>{cartData.length}</span> products inb your cart</p>
    <div className='flex flex-col lg:flex-row'>
      <div className=' flex  lg:flex-col xl:flex-row gap-20'>
    <table className="lg:w-9/12 md:w-7/12">
    <thead className="bg-[#ECECEC] text-primary font-bold text-sm lg:text-base ">
      <tr>
        <th className="pl-9 md:pr-40 lg:pr-80 py-3">Product</th>
        <th className="px-5 py-3">Unit Price</th>
         <th className="px-5 py-3">Quantity</th>
        <th className="px-5 py-3">Subtotal</th>
        <th className="px-5 py-3">Remove</th>
      </tr>
    </thead>
    <tbody className="my-4 ">
      {
        cartData.map((item)=>(
          <CartItem key={item.productData.id} data={item}/>
        ))
      }
     
     
    </tbody>
  </table>

  <div className='md:w-fit  lg:m-auto xl:m-0 h-96   shadow-md border border-[#ECECEC] rounded-md'>
    {/* <div className='flex '>
    <h5 className='font-bold text-[#B6B6B6] text-base'>Subtotal</h5>
    <p className='font-bold text-brand text-2xl'>$12.31</p>
    </div> */}
     <div className="flex justify-between px-10 py-6 border-b border-[#ECECEC]">
      <span className=' font-bold text-[#B6B6B6] text-base'> Subtotal</span>
      <span className="font-bold text-brand text-2xl">${sum}</span>
    </div>
    <div className="flex justify-between  px-10 py-6 border-b border-[#ECECEC] ">
      <span className=' font-bold text-[#B6B6B6] text-base'>Shipping</span>
      <span className="font-bold text-primary text-base">Free</span>
    </div>
    <div className="flex justify-between  px-10 py-6 border-b border-[#ECECEC]">
      <span className=' font-bold text-[#B6B6B6] text-base pr-3'>Estimate for</span>
      <span className="font-bold text-primary text-base ">United Kingdom</span>
    </div>
    <div className=" pt-3 flex justify-between py-6   px-10 text-base font-semibold">
      <span className=' font-bold text-[#B6B6B6] text-base'>Total</span>
      <span className='font-bold text-brand text-2xl'>${sum}</span>
    </div>
    <div className='mx-7'>
    <Link to="/" className=' bg-brand inline-flex justify-center gap-2 items-center  font-bold text-lg p-2 md:px-4 md:py-2 rounded-sm cursor-pointer text-brand'>
            
            <span className='text-white text-base '>Proceed To CheckOut</span>
            <PiSignOut className='text-white text-base '/>
        </Link>
    </div>
    
  </div>
    </div>
    </div>
    </div>


    {/* cart mobile device */}
   
     
    
     <div className=' container my-4 flex flex-col md:hidden'>
      <h2 className='text-4xl text-primary font-bold'>Your Cart</h2>
    <p className='py-6 text-secondary font-normal'>There are <span className='text-brand'>{cartData.length}</span> products inb your cart</p>
      {
        cartData.map((item)=>(
          <ResponsiveCart key={item.productData.id} data={item}/>
        ))
      }
      <div className='md h-96 shadow-md max-w-fit m-auto mt-5 border border-[#ECECEC] rounded-md'>
    {/* <div className='flex '>
    <h5 className='font-bold text-[#B6B6B6] text-base'>Subtotal</h5>
    <p className='font-bold text-brand text-2xl'>$12.31</p>
    </div> */}
     <div className="flex justify-between px-10 py-6 border-b border-[#ECECEC]">
      <span className=' font-bold text-[#B6B6B6] text-base'> Subtotal</span>
      <span className="font-bold text-brand text-2xl">${sum}</span>
    </div>
    <div className="flex justify-between  px-10 py-6 border-b border-[#ECECEC] ">
      <span className=' font-bold text-[#B6B6B6] text-base'>Shipping</span>
      <span className="font-bold text-primary text-base">Free</span>
    </div>
    <div className="flex justify-between  px-10 py-6 border-b border-[#ECECEC]">
      <span className=' font-bold text-[#B6B6B6] text-base pr-3'>Estimate for</span>
      <span className="font-bold text-primary text-base ">United Kingdom</span>
    </div>
    <div className=" pt-3 flex justify-between py-6   px-10 text-base font-semibold">
      <span className=' font-bold text-[#B6B6B6] text-base'>Total</span>
      <span className='font-bold text-brand text-2xl'>${sum}</span>
    </div>
    <div className='mx-11'>
    <Link to="/" className=' bg-brand inline-flex justify-center gap-2 items-center  font-bold text-lg p-2 md:px-4 md:py-2 rounded-sm cursor-pointer text-brand'>
            
            <span className='text-white text-base '>Proceed To CheckOut</span>
            <PiSignOut className='text-white text-base '/>
        </Link>
    </div>
    
  </div>
    </div>
    
    
    
   </section>
  )
}

export default Cart