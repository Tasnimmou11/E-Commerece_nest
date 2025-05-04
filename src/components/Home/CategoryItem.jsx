import React from 'react'
import { Link } from 'react-router'

const CategoryItem = ({data}) => {
  return (
   <div className=''>
     <Link to="/" className='p-2 md:p-6 mx-2 rounded-xl bg-[#F2FCE4] w-fit inline-block text-center hover:shadow-xl transition-all'>
      <img src="/cat-1.png" alt="cat-1" />
      <h3 className='pt-2 md:pt-4 font-bold text-xs md:text-base text-primary'>{data?.name}</h3>
      <p className='font-normal text-secondary text-xs md:text-sm'>26 items</p>
    </Link>
   </div>
  )
}

export default CategoryItem