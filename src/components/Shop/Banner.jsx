import React from 'react'
import BreadCrumb from '../utilities/BreadCrumb'



const Banner = () => {
    
  return (
    <section className='pt-8 pb-12'>
    <div className="container">
       <div className='bg-[url(/shop_bg.png)] bg-no-repeat bg-center rounded-3xl  p-20'>
        <BreadCrumb/>
        </div> 
    </div> 
    </section>
  )
}

export default Banner