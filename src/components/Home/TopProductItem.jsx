import React from 'react'
import { FaStar } from 'react-icons/fa6'

const TopProductItem = () => {
  return (
    <div className='flex pt-7 '>
     
        <img src="topselling1.png" alt="topselling1" className='w-fit lg:w-full' />
     <div className=' py-1 px-3 rounded-lg '>
               <h3 className='w-48 text-sm md:text-base text-primary font-bold'>Nestle Original Coffee-Mate
               Coffee Creamer</h3>
                     <div className="flex gap-3  py-2">
                         <ul className='flex text-amber-400'>
                             <li>
                             <FaStar />
                             </li>
                             <li>
                             <FaStar />
                             </li>
                             <li>
                             <FaStar />
                             </li>
                             <li>
                             <FaStar />
                             </li>
                             <li>
                             <FaStar />
                             </li>
                         </ul>
                         <p className='text-xs font-normal text-secondary'>(4.0)</p>
                     </div>
                     <p className='text-sm font-normal text-secondary
                     '>
                         By <span className='text-brand'>NestFood</span> </p>
                 <div className='flex flex-col md:flex-row gap-2  items-center justify-between pt-2'>
                     <h4 className='text-sm md:text-lg font-bold  text-brand'>$28.85 
                         <span className='text-secondary 
                          text-sm line-through '>$32.8</span>
                          </h4>
                     
                 </div>
           </div>
        
    </div>
  )
}

export default TopProductItem