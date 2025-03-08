import React from 'react'


const Navigation = () => {
  return (
   
   <header>
    {/* header top part */}
    <div className='container'>
    <div className='flex justify-between items-center py-8'>
      <img src="/logo.png" alt="logo" />
    
    <div className='border-2 border-brand p-5 rounded w-full max-w-[700px]'>
      <select name="" id="" className='pr-3.5 border-r-2'>
        <option  value="">All Categories</option>
      </select>
      <input type="text" placeholder='Search for item' className='px-3.5 w-2/3' />
    </div>
    <div>
      Acounts
    </div>
    </div>
    </div>
   </header>
  )
}

export default Navigation