import React from 'react'
import ProductItem from '../utilities/ProductItem'

const PopularProduct = () => {
  return (
    <section>
        <div className="container">
        <div className="justify-between flex md:flex-row flex-col gap-7 items-center md:items-end">
        <h2 className="section_heading">Popular Products</h2>
        <ul className="flex flex-wrap text-base font-light text-primary gap-1.5 md:gap-7">
        <li>
            <button className="hover:text-brand">
                All
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
                Cake & Milk
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
                Coffes & Teas
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
                Pet Foods
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
                Vegetables
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
                    Meat
            </button>
            </li>
            <li>
            <button className="hover:text-brand">
                Fruits
            </button>
            </li>
        </ul>
        </div>
        <div className='pt-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 gap-x-6 gap-y-8' >
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
            <ProductItem></ProductItem>
        </div>
        </div>
    </section>
    
    
   
  )
}

export default PopularProduct