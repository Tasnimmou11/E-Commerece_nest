import React from 'react'

const BannerBoxItem = ({ icon, h4, children }) => {
  return (
    <div className='flex items-center py-7   bg-[#F4F6FA] rounded-md'>
    <img src={icon} alt={icon} className='w-fit pl-5' />
    <div className='pl-4 pr-11'>
        <h4 className='font-normal text-md md:text-lg text-black text-nowrap  '>{h4}</h4>
        <p className='font-normal text-sm md:text-base text-[#ADADAD] pt-0.5 text-nowrap'>{children}</p>
    </div>
    </div>
  )
}

export default BannerBoxItem