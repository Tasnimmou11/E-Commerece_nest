import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import { Link } from 'react-router'

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
       <div className='py-12'>
        <img src="/contact.png" alt="contact" />
       </div>
       <div className='flex  '>
        <div className='pl-36'>
          <h1 className='text-2xl text-brand font-bold '>Office</h1>
          <ul className='py-5 text-sm text-secondary'>
            <li>
              <Link> 205 North Michigan Avenue, Suite 810</Link>
             </li>
             <li>
              <Link> Chicago, 60601, USA</Link>
             </li>
             <li>
              <Link> Phone: (123) 456-7890</Link>
             </li>
             <li>
              <Link> Email: contact@Evara.com</Link>
             </li>
             <button className='py-2 px-4 mt-4 bg-brand rounded-md text-white font-bold'>View Map</button>
        </ul>
        </div>

        <div className='pl-36'>
          <h1 className='text-2xl text-brand font-bold '>Office</h1>
          <ul className='py-5 text-sm text-secondary'>
            <li>
              <Link> 205 North Michigan Avenue, Suite 810</Link>
             </li>
             <li>
              <Link> Chicago, 60601, USA</Link>
             </li>
             <li>
              <Link> Phone: (123) 456-7890</Link>
             </li>
             <li>
              <Link> Email: contact@Evara.com</Link>
             </li>
             <button className='py-2 px-4 mt-4 bg-brand rounded-md text-white font-bold'>View Map</button>
        </ul>
        </div>

        <div className='pl-36'>
          <h1 className='text-2xl text-brand font-bold '>Office</h1>
          <ul className='py-5 text-sm text-secondary'>
            <li>
              <Link> 205 North Michigan Avenue, Suite 810</Link>
             </li>
             <li>
              <Link> Chicago, 60601, USA</Link>
             </li>
             <li>
              <Link> Phone: (123) 456-7890</Link>
             </li>
             <li>
              <Link> Email: contact@Evara.com</Link>
             </li>
             <button className='py-2 px-4 mt-4 bg-brand rounded-md text-white font-bold'>View Map</button>
        </ul>
        </div>
       </div>
       
       
       
       
       
       
       <div className='flex  gap-12'>
       
  
    <div className="max-w-[890px]  pl-36 py-15   ">
      <h2 className="text-2xl font-semibold text-brand mb-4">Contact Us</h2>
      <form className='grid grid-cols-2 gap-4'>
        <div className="mb-2">
          <label className="block text-gray-800 mb-1" for="name">Your Name</label>
          <input
          className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-800 mb-1" for="email">Your Email</label>
          <input
            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-800 mb-1" for="name">Phone no</label>
          <input
          className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-800 mb-1" for="email">Subject</label>
          <input
            className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200transition duration-300"
            placeholder="Enter your email"
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div>
          <div className="mb-2">
          <label className="block text-gray-800 mb-1" for="message"
            >Your Message</label
          >
          <textarea
            className="w-96 px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300"
            rows="4"
            placeholder="Enter your message"
            name="message"
            id="message"
          ></textarea>
        </div>
        <button
          className="w-fit bg-primary text-white py-2 px-4 rounded-lg "
          type="submit"
        >
          Send Message
        </button>
        </div>
      </form>
    </div>
    <div className=' pr-36 py-15  '>
      <img src="/contact-2.png" alt="contact-2" className='w-fit' />
    </div>


       </div>
    </div>
    </section>
  )
}

export default Contact