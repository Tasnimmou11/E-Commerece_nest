import React from 'react'
import { Link } from 'react-router'

const AboutProvide = () => {
  return (
    <div className='w-[424px] flex flex-col items-center justify-center  border border-[#ECECEC]'>
      <img src="/aboutlogo1.png" alt="aboutlogo1"  className='my-8'/>

      <h2 className='font-bold text-2xl  text-primary'>Best Prices & Offers</h2>
      <p className='w-80 pt-4 font-normal text-base  text-secondary'> There are many variations of passages of Lorem
Ipsum available, but the majority have suffered
alteration in some form</p>
<Link to ="/" className='my-5'>Read More</Link>
        </div>
  )
}

export default AboutProvide
