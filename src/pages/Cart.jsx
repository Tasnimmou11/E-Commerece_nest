import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import CartItem from '../components/utilities/CartItem'
import { PiSignOut } from 'react-icons/pi'
import { Link } from 'react-router'
import ResponsiveCart from '../components/utilities/ResponsiveCart'



const Cart = () => {
  return (
   <section className='  border-t border-[#cecece]'>
    
    <div className="container  py-8  ">
        <div>
            <BreadCrumb/>
        </div>
    </div>
    {/* <div className='hidden bg-amber-700red  border-t border-[#cecece]'></div> */}
    <div className="container py-12 ">
    <h2 className='text-6xl text-primary font-bold'>Your Cart</h2>
    <p className='py-6 text-secondary font-normal'>There are 3 products inb your cart</p>
    <div className='hidden md:block'>
      <div className=' flex gap-10'>
    <table className="w-9/12 ">
    <thead className="bg-[#ECECEC] text-primary font-bold text-base ">
      <tr>
        <th className="pl-9 pr-80 py-3">Product</th>
        <th className="px-5 py-3">Unit Price</th>
        <th className="px-5 py-3">Quantity</th>
        <th className="px-5 py-3">Subtotal</th>
        <th className="px-5 py-3">Remove</th>
      </tr>
    </thead>
    <tbody className="">
     <CartItem/>
     <CartItem/>
     <CartItem/>
     <CartItem/>
    </tbody>
  </table>

  <div className=' h-96 shadow-md border border-[#ECECEC] rounded-md'>
    {/* <div className='flex '>
    <h5 className='font-bold text-[#B6B6B6] text-base'>Subtotal</h5>
    <p className='font-bold text-brand text-2xl'>$12.31</p>
    </div> */}
     <div class="flex justify-between px-10 py-6 border-b border-[#ECECEC]">
      <span className=' font-bold text-[#B6B6B6] text-base'> Subtotal</span>
      <span class="font-bold text-brand text-2xl">$2.00</span>
    </div>
    <div class="flex justify-between  px-10 py-6 border-b border-[#ECECEC] ">
      <span className=' font-bold text-[#B6B6B6] text-base'>Shipping</span>
      <span class="font-bold text-primary text-base">Free</span>
    </div>
    <div class="flex justify-between  px-10 py-6 border-b border-[#ECECEC]">
      <span className=' font-bold text-[#B6B6B6] text-base pr-3'>Estimate for</span>
      <span class="font-bold text-primary text-base ">United Kingdom</span>
    </div>
    <div class=" pt-3 flex justify-between py-6   px-10 text-base font-semibold">
      <span className=' font-bold text-[#B6B6B6] text-base'>Total</span>
      <span className='font-bold text-brand text-2xl'>$2.00</span>
    </div>
    <div className='mx-11'>
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
   
     
    
    
     <div className=''>
      <ResponsiveCart></ResponsiveCart>
      <ResponsiveCart></ResponsiveCart>
      <ResponsiveCart></ResponsiveCart>
      <ResponsiveCart></ResponsiveCart>
    </div>
    
    
    
   </section>
  )
}

export default Cart