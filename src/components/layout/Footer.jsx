import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { LuSend } from 'react-icons/lu'
import { TfiAlarmClock, TfiHeadphoneAlt } from 'react-icons/tfi'
import { Link } from 'react-router'


const Footer = () => {
  return (
    <footer className='pt-16'>
      <div className="container">
        
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6  pb-11'>
          {/* 1st part */}
         
          <div>
          <Link to="/" className="w-32 lg:w-auto">
              <img src="/logo.png" alt="logo" className="" />
            </Link>
            <p className='font-normal text-base pt-4 '>Awesome grocery store website
            template</p>
            <div className='flex items-start  pt-6'>
            <IoLocationOutline className="text-base text-brand mt-1" />
              <p className="text-base pl-2 text-primary "> Address: 5171 W Campbell Ave undefined Kent,<br/> Utah 53127 United States </p>
              </div>
            <div className='flex items-center pt-2.5'>
              <TfiHeadphoneAlt className="text-base text-brand " />
              <p className="text-base pl-2 text-primary"> Call Us:(+91) - 540-025-124553</p>
            </div>
            <div className='flex items-center pt-2.5'>
              <LuSend className="text-base text-brand " />
              <p className="text-base pl-2 text-primary "> Email:sale@Nest.com</p>
            </div>
            <div className='flex items-center pt-2.5 '>
            <TfiAlarmClock className="text-base text-brand  " />
              <p className="text-base pl-2 text-primary"> Hours:10:00 - 18:00, Mon - Sat</p>
            </div>
          </div>
        

        <div className='pl-6'>
          <h4 className=' text-2xl font-bold pt-4 '>Company</h4>
        <p className='font-normal text-base pt-5 '>Delivery Information</p>
        <p className='font-normal text-base pt-2 '>Privacy Policy</p>
        <p className='font-normal text-base pt-2 '>Terms & Conditions</p>
        <p className='font-normal text-base pt-2 '>Contact Us</p>
        <p className='font-normal text-base pt-2 '>Support Center</p>
        <p className='font-normal text-base pt-2  '>Careers</p>
        
        </div>
        <div className=''>
          <h4 className=' text-2xl font-bold pt-4 '>Account</h4>
        <p className='font-normal text-base pt-5 '>Sign In</p>
        <p className='font-normal text-base pt-2 '>View Cart</p>
        <p className='font-normal text-base pt-2 '>My Wishlist</p>
        <p className='font-normal text-base pt-2 '>Track My Order</p>
        <p className='font-normal text-base pt-2 '>Help Ticket</p>
        <p className='font-normal text-base pt-2  '>Shipping Details</p>
        <p className='font-normal text-base pt-2  '>Compare products</p>
        </div>
       

       
        <div className=''>
          <h4 className=' text-2xl font-bold pt-4 '>Corporate</h4>
        <p className='font-normal text-base pt-5 '>Become a Vendor</p>
        <p className='font-normal text-base pt-2 '>Affiliate Program</p>
        <p className='font-normal text-base pt-2 '>My Wishlist</p>
        <p className='font-normal text-base pt-2 '>Farm Business</p>
        <p className='font-normal text-base pt-2 '>Farm Careers</p>
        <p className='font-normal text-base pt-2  '>Accessibility</p>
        <p className='font-normal text-base pt-2  '>Promotions</p>
        </div>

        <div className=''>
          <h4 className=' text-2xl font-bold pt-4 '> Popular</h4>
        <p className='font-normal text-base pt-5 '>Milk & Flavoured Milk</p>
        <p className='font-normal text-base pt-2 '>Butter and Margarine</p>
        <p className='font-normal text-base pt-2 '>Eggs Substitutes</p>
        <p className='font-normal text-base pt-2 '>Marmalades</p>
        <p className='font-normal text-base pt-2 '>Sour Cream and Dips</p>
        <p className='font-normal text-base pt-2  '>Tea & Kombucha</p>
        <p className='font-normal text-base pt-2  '>Cheese</p>
        </div>
 
        <div className=''>
          <h4 className=' text-2xl font-bold pt-4 '> Install App</h4>
        <p className='font-normal text-base pt-5 '>From App Store or Google Play</p>
        <p className='font-normal text-base pt-2 '>Secured Payment Gateways</p>
        
        </div>
       
        </div>

        
        
       </div> 

    </footer>
  )
}

export default Footer