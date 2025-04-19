import React from 'react'
import { Link, useLocation } from 'react-router'
import BreadCramp from '../utilities/BreadCramp.JSX'

const Banner = () => {
    
  return (
    <section className='pt-8 pb-12'>
    <div className="container">
       <div className='bg-[url(/shop_bg.png)] bg-no-repeat bg-center rounded-3xl  p-20'>
        <BreadCramp></BreadCramp>
        </div> 
    </div> 
    </section>
  )
}

export default Banner