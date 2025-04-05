import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { LuShoppingCart } from 'react-icons/lu'

const DealCard = () => {
  return (
    <div className='relative group'>
      <div>
        <img src="/dealsbg3.png" alt="dealsbg3" className='w-full rounded-2xl' />
      </div>
      <div className='absolute top-1/2 w-5/6 left-1/2 transition-all -translate-x-1/2 group-hover:-translate-y-5'>
      <div className='flex gap-3.5 justify-center mb-4'>
        <div className='px-3.5 rounded bg-white text-center'>
          <p>22</p>
          <p>Days</p>
        </div>
        <div className='px-3.5 rounded bg-white text-center'>
          <p>22</p>
          <p>Days</p>
        </div>
        <div className='px-3.5 rounded bg-white text-center'>
          <p>22</p>
          <p>Days</p>
        </div>
      </div>
      <div className='bg-white shadow py-6 px-7 rounded-lg '>
          <h3 className=' text-sm md:text-base text-primary font-bold'>Seeds of Change Organic
                Quinoa, Brown, & Red Rice</h3>
                <div className="flex gap-3  py-2.5">
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
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between pt-6'>
                <h4 className='text-sm md:text-lg font-bold  text-brand'>$28.85 
                    <span className='text-secondary 
                     text-sm line-through '>$32.8</span>
                     </h4>
                <button className='bg-[#DEF9EC] flex justify-center items-center font-bold text-lg p-2 md:px-5 md:py-2.5 rounded-sm cursor-pointer text-brand'>
                <LuShoppingCart />
                    <span className=''>Add</span>
                </button>
            </div>
      </div>
      </div>
    </div>
  )
}

export default DealCard