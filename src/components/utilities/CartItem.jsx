import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'

const CartItem = () => {
  return (
    <tr className="text-base font-normal text-primary">
       <td className="px-6 py-2">
    <div className="flex items-center gap-4">
      <img
        src="/popularproduct1.png"
        alt="cart1"
        className="w-28 h-28  rounded"
      />
      <div>
      <p className=" pt-3 text-base font-normal text-primary ">Field Roast Chao Cheese Creamy Original</p>
      <div className=" flex gap-2 py-2">
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
    </div>
    </div>
  </td>
        <td className="px-6 py-3 ">$29.99</td>
        <td className="px-6 py-3 ">2</td>
        <td className="px-6 py-3 text-brand">$59.98</td>
        <td className="px-6 py-3 text-center">
          <button className="text-secondary hover:text-red-700 font-medium">
          <RiDeleteBinLine />
          </button>
        </td>
      </tr>
  )
}

export default CartItem