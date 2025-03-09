import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { IoGitCompareOutline } from "react-icons/io5";
import { Link } from 'react-router';
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUser } from "react-icons/lu";



const Navigation = () => {
  return (
   
   <header>
    {/* header top part */}
    <div className='container'>
    <div className='flex justify-between items-center py-8'>
      <Link to ="/">
      <img src="/logo.png" alt="logo" />
      </Link>
    
    <div className='border-2 border-brand p-5 rounded w-full max-w-[700px] flex items-center'>
      <select name="" id="" className='pr-3.5 border-r-2'>
        <option  value="">All Categories</option>
      </select>
      <input type="text" placeholder='Search for item' className='px-3.5 w-2/3' />
      <IoSearchOutline className='ml-auto'/>
    </div>
    <div>
     <ul className='flex gap-5'>
      <li>
       <Link to ="/" className='flex gap-2 items-end relative'>
       <span className='w-6 h-6 bg-brand rounded-full text-white flex item-center justify-center absolute -top-2 right-15'>0</span>
       <IoGitCompareOutline  className='text-3xl'/>Compare</Link>
      </li>
      <li>
       <Link to ="/" className='flex gap-2 items-end relative'>
       <span className='w-6 h-6 bg-brand rounded-full text-white flex item-center justify-center absolute -top-2 right-13'>0</span>
       <IoMdHeartEmpty className='text-3xl'/>Wishlist</Link>
      </li>
      <li>
       <Link to ="/" className='flex gap-2 items-end relative'>
       <span className='w-6 h-6 bg-brand rounded-full text-white flex item-center justify-center absolute -top-2 right-6'>0</span>
       <GrCart className='text-3xl'/>Cart</Link>
      </li>
      <li>
       <Link to ="/" className='flex gap-2 items-end relative'>
       
       <LuUser className='text-3xl'/>Account</Link>
      </li>
     </ul>
    </div>
    </div>
    </div>
   </header>
  )
}

export default Navigation