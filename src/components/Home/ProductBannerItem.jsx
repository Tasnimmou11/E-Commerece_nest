import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router'

const ProductBannerItem = ({bg, url,children}) => {
  return (
    <div  className="py-20 px-12 bg-no-repeat bg-cover rounded-xl bg-center w-full"
    style={{ backgroundImage: `url(${bg})` }}>
        <h2 className='font-bold text-2xl text-primary w-62 mb-4'>{children}</h2>
        <Link to={url} className='flex items-center gap-1 w-fit bg-brand py-2 px-2.5 rounded-md text-white'>Shop Now <FaArrowRight />
        </Link>
    </div>
  )
}

export default ProductBannerItem