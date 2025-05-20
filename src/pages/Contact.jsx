import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'

const Contact = () => {
  return (
    <section className=' border-t  border-[#cecece]'>
        <div className="container  py-8  ">
        <div className='-mt-1'>
            <BreadCrumb/>
        </div>
        <div className="-mx-[calc(50vw-50%)] w-screen border-b border-[#cecece] my-4" />
</div>
  <div className='container'>
           <h1 className="font-bold text-2xl text-brand pt-12 pb-5">How can help you?</h1>
       <div className='flex gap-6'>
         <div className='w-[400px]'>
            <h1 className='font-bold text-5xl text-primary'>Let us know how we can help you</h1>
            <p className=' font-normal text-base py-6 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
    <p className=' font-normal text-base pb-8 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
        </div>
        <div  className='w-[400px]'>
            <h1 className='font-bold text-xl text-primary pt-10'>01. Visit Feedback</h1>
            <p className=' font-normal text-base  text-secondary py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
    <h1 className='font-bold text-xl text-primary pb-5'>03. Billing Inquiries</h1>
            <p className=' font-normal text-base  text-secondary pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
        </div>
        <div  className='w-[400px]'> 
             <h1 className='font-bold text-xl text-primary pt-10'>02. Employer Services</h1>
            <p className=' font-normal text-base  text-secondary py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
    <h1 className='font-bold text-xl text-primary pb-5'>04.General Inquiries</h1>
            <p className=' font-normal text-base  text-secondary pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
leo.</p>
        </div>
       </div>
    </div>
    </section>
  )
}

export default Contact