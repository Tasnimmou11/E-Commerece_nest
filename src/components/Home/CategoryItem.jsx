import React from 'react'
import { Link } from 'react-router'

const CategoryItem = () => {
  return (
    <Link to="/" className='p-6 rounded-xl bg-[#F2FCE4] w-fit text-center hover:shadow-xl transition-all'>
      <img src="/cat-1.png" alt="cat-1" />
      <h3 className='pt-4 font-bold text-base text-primary'>Cake & Milk</h3>
      <p className='font-normal text-secondary text-sm'>26 items</p>
    </Link>
  )
}

export default CategoryItem