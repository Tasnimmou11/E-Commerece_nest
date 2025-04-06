import React from 'react'
import TopProductItem from './TopProductItem'

const TopProduct = () => {
  return (
    <section className='pt-40'>
        <div className="container">
        <div className='grid grid-cols-4 gap-4'>
            <div>
            <h3 className='pb-4  text-base md:text-2xl text-primary font-bold border-b border-[#ececec] '>Top Selling</h3>
            <TopProductItem></TopProductItem>
            <TopProductItem></TopProductItem>
            <TopProductItem></TopProductItem>
            </div>

           <div>
           <h3 className='pb-4  text-base md:text-2xl text-primary font-bold border-b border-[#ececec] '>Trending Products</h3>
           <TopProductItem></TopProductItem>
           <TopProductItem></TopProductItem>
           <TopProductItem></TopProductItem>

           </div>
            <div>
            <h3 className='pb-4  text-base md:text-2xl text-primary font-bold border-b border-[#ececec] '>Recently added</h3>
            <TopProductItem></TopProductItem>
            <TopProductItem></TopProductItem>
            <TopProductItem></TopProductItem>
            
            </div>
           <div>
           <h3 className='pb-4  text-base md:text-2xl text-primary font-bold border-b border-[#ececec] '>Top Rated</h3>
           <TopProductItem></TopProductItem>
           <TopProductItem></TopProductItem>
           <TopProductItem></TopProductItem>
           </div>
           </div>
        </div>
    </section>
  )
}

export default TopProduct