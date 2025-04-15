import React from 'react'
import { LuSend } from 'react-icons/lu'

const Subscribe = () => {
  return (
    <section className='pt-8'>
    <div className="container">
        <div
                      className="px-6 py-14 lg:p-20 bg-no-repeat bg-cover rounded-4xl bg-center md:bg-right"
                      style={{ backgroundImage: "url('/bannerend.png')" }}
                    >
                      {/* <div className='bg-[url(/banner.png)] py-24'> */}
                      <h2 className=" text-2xl md:text-3xl font-bold lg:text-4xl text-primary max-w-2xl">
                      Stay home & get your daily
                      needs from our shop
                      </h2>
                      <p className="pt-5 md:pt-5 pb-5 md:pb-12 text-xl lg:text-lg font-normal text-secondary">
                      Start You'r Daily Shopping with <span className='text-brand'> Nest Mart</span>
                      </p>
                      <div className="bg-white rounded-[50px] max-w-md flex items-center pl-2 gap-2 ">
                        <LuSend className="text-4xl text-[#838383]  " />
                        <input
                          type="email"
                          placeholder="Your email address "
                          className="w-full outline-0"
                        />
                        <button className="cursor-pointer py-2 md:py-6 px-3 md:px-10 bg-brand rounded-[50px] text-white text-base">
                          Subscribe
                        </button>
                      </div>
                    </div>
    </div>
</section>
  )
}

export default Subscribe