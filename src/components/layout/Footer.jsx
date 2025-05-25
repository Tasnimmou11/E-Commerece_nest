import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { LuSend } from 'react-icons/lu'
import { TfiAlarmClock, TfiHeadphoneAlt } from 'react-icons/tfi'
import { Link } from 'react-router'
import Subscribe from '../utilities/Subscribe'
import { FaFacebook, FaPhone, FaPinterest, FaSquareTwitter, FaYoutube } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'
import { FaInstagramSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='pt-16'>
      <div className="container">
        
        
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6  pb-11'>
          {/* 1st part */}
         
          <div className=''>
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
        

        <div className='ml-6'>
          <h4 className=' text-2xl font-bold pt-4 text-primary pb-4 '>Company</h4>
          <ul className=' font-normal text-base text-primary flex flex-col gap-4'>
            <li>
              <Link to="/" className=''>Delivery Information</Link>
            </li>
            <li>
              <Link to="/" className=' '>Privacy Policy</Link>
            </li>
            <li>
              <Link to="/" className=''>Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/" className=''>Contact Us</Link>
            </li>
            <li>
              <Link to="/" className=''>Support Center</Link>
            </li>
            <li>
              <Link to="/" className=''>Careers</Link>
            </li>
          </ul>
        {/* <p className='font-normal text-base pt-5 '>Delivery Information</p>
        <p className='font-normal text-base pt-2 '>Privacy Policy</p>
        <p className='font-normal text-base pt-2 '>Terms & Conditions</p>
        <p className='font-normal text-base pt-2 '>Contact Us</p>
        <p className='font-normal text-base pt-2 '>Support Center</p>
        <p className='font-normal text-base pt-2  '>Careers</p> */}
        
        </div>
        <div className=''>
           <h4 className=' text-2xl font-bold pt-4 text-primary pb-4 '>Account</h4>
          <ul className=' font-normal text-base text-primary flex flex-col gap-4'>
            <li>
              <Link to="/" className=''>Sign In</Link>
            </li>
            <li>
              <Link to="/" className=' '>View Cart</Link>
            </li>
            <li>
              <Link to="/" className=''>My Wishlist</Link>
            </li>
            <li>
              <Link to="/" className=''>Track My Order</Link>
            </li>
            <li>
              <Link to="/" className=''>Help Ticket</Link>
            </li>
            <li>
              <Link to="/" className=''>Shipping Details</Link>
            </li>
            <li>
              <Link to="/" className=''>Compare products</Link>
            </li>
          </ul>
        </div>
      







       
        <div className=''>
         <h4 className=' text-2xl font-bold pt-4 text-primary pb-4 '> Corporate</h4>
          <ul className=' font-normal text-base text-primary flex flex-col gap-4'>
            <li>
              <Link to="/" className=''>Become a Vendor</Link>
            </li>
            <li>
              <Link to="/" className=' '>Affiliate Program</Link>
            </li>
            <li>
              <Link to="/" className=''>Farm Careers
</Link>
            </li>
            <li>
              <Link to="/" className=''>Farm Business</Link>
            </li>
            <li>
              <Link to="/" className=''>Our Suppliers</Link>
            </li>
            <li>
              <Link to="/" className=''>Accessibility</Link>
            </li>
            <li>
              <Link to="/" className=''>Promotions</Link>
            </li>
          </ul>
        </div>
        








        <div className=''>
         <h4 className=' text-2xl font-bold pt-4 text-primary pb-4 '> Popular</h4>
          <ul className=' font-normal text-base text-primary flex flex-col gap-4'>
            <li>
              <Link to="/" className=''>Milk & Flavoured Milk</Link>
            </li>
            <li>
              <Link to="/" className=' '>Butter and Margarine</Link>
            </li>
            <li>
              <Link to="/" className=''>Tea & Kombucha
</Link>
            </li>
            <li>
              <Link to="/" className=''>Eggs Substitutesf</Link>
            </li>
            <li>
              <Link to="/" className=''>Marmalades</Link>
            </li>
            <li>
              <Link to="/" className=''>Sour Cream and Dips</Link>
            </li>
            <li>
              <Link to="/" className=''>Cheese</Link>
            </li>
          </ul>
        </div>
 
        <div className=''>
          <h4 className=' text-2xl font-bold pt-4 text-primary pb-4 '> Install App</h4>
          <ul className=' font-normal text-base text-primary flex flex-col gap-4'>
            <li>
              <Link to="/" className=''>From App Store or Google Play</Link>
            </li>
            <div className='flex gap-2'>
              <li>
              <Link to="/" className=' '><img src="/footerapp.png" alt="footerapp" /></Link>
            </li>
            <li>
              <Link to="/" className=' '><img src="/footerplay.png" alt="footerapp" /></Link>
            </li>
            </div>
            
            <li>
              <Link to="/" className=''>Secured Payment Gateways</Link>
            </li>
            <li>
              <Link to="/" className='py-3'><img src="/footervisa.png" alt="footervisa" /></Link>
            </li>
            
          </ul>
        
        </div>
       
        </div>
         {/* footerend */}
        <div className='py-9 border-t border-brand '>
          <div className='flex gap-1.5 justify-between '>
            <p className='text-sm lg:text-base text-secondary'>© 2024, Nest - HTML Ecommerce Template<br></br>
All rights reserved</p>
           
              <div className='hidden md:block'>
                <div className='flex  lg:gap-1.5'>
                 <Link
                      to="tel:1900 - 888"
                      className="ml-auto flex items-center gap-3 md:gap-1"
                    >
                      <FiPhone className="text-3xl md:text-base text-secondary xl:text-4xl " />
                      <div>
                        <p className="font-bold text-brand text-xl md:text-base lg:text-xl xl:text-2xl">
                          
                          1900 - 888
                        </p>
                        <p className="font-medium text-secondary  text-sm lg:text-sm md:text-xs ">
                          24/7 Support Center
                        </p>
                      </div>
                    </Link>
           
                    
                      <Link
                      to="tel:1900 - 888"
                      className="ml-auto flex items-center gap-3 md:gap-1"
                    >
                      <FiPhone className="text-3xl md:text-base text-secondary xl:text-4xl " />
                      <div>
                        <p className="font-bold text-brand text-xl md:text-base lg:text-xl xl:text-2xl">
                          
                          1900 - 888
                        </p>
                        <p className="font-medium text-secondary  text-sm lg:text-sm md:text-xs ">
                          24/7 Support Center
                        </p>
                      </div>
                    </Link>
                </div>
              </div>
               <div className='hidden md:block'>
                 <div className=' flex flex-col lg:flex-row items-center'>
                   <p className=" px-3 b-3 lg:pb-0 font-bold text-sm lg:text-base text-primary">
                                      Follow Us
                                    </p>
                  
                                    <ul className="mx-3 flex gap-2">
                                      <li>
                                        <Link to="/" className=" text-brand text-lg lg:text-2xl ">
                                          <FaFacebook />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/" className=" text-brand text-lg lg:text-2xl ">
                                          <FaSquareTwitter />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/" className=" text-brand text-lg lg:text-2xl ">
                                          <FaInstagramSquare />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/" className=" text-brand text-lg lg:text-2xl ">
                                          <FaPinterest />
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to="/" className=" text-brand text-lg lg:text-2xl ">
                                          <FaYoutube />
                                        </Link>
                                      </li>
                                    </ul>
                </div>
               </div>
                    
          </div>
        </div>
        
       </div> 

    </footer>
  )
}

export default Footer