import React from 'react'
import { Link } from 'react-router'

const DealsOfDay = () => {
  return (
    <section>
        <div className="container">
          <div className='flex justify-between flex-col md:flex-row gap-7 items-center md:items-end'>
           <h2 className='section_heading'>Daily BEST sells</h2>
           <Link to="/" className='"text-primary font-semibold'>
           All Deals
           </Link>
          </div>
            
        </div>
    </section>
  )
}

export default DealsOfDay