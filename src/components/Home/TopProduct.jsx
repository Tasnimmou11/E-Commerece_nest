import React from 'react'
import TopProductItem from './TopProductItem'

const TopProduct = () => {
  return (
    <section className='pt-8'>
        <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
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
           <div className='lg:hidden xl:block'>
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