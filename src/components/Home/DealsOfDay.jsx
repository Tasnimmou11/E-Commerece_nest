import React from 'react'
import { Link } from 'react-router'
import DealCard from './DealCard'

const DealsOfDay = () => {
  return (
    <section className='pt-12'>
        <div className="container">
          <div className='flex justify-between flex-col md:flex-row gap-7 items-center md:items-end'>
           <h2 className='section_heading'>Daily Best sells</h2>
           <Link to="/" className='"text-primary font-semibold'>
           All Deals
           </Link>
          </div>
          <div className='grid grid-cols-4 pt-11 gap-6 '>
          <DealCard></DealCard>
          <DealCard></DealCard>
          <DealCard></DealCard>
          <DealCard></DealCard>
         
          </div>
            
        </div>
    </section>
  )
}

export default DealsOfDay