import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../slices/cartSlice';


const CartItem = ({data}) => {
  const dispatch = useDispatch();

const handleRemove = () => {
  dispatch(removeFromCart(data.productData.id));
};
  // console.log(data);
  return (
    <tr className="text-base font-normal text-primary">
       <td className="px-6 py-2">
    <div className="flex items-center gap-4">
      <img
        src={data?.productData?.images[0]}
        alt="cart1"
        className="w-28 h-28  rounded"
      />
      <div>
      <p className=" pt-3 text-base font-normal text-primary ">{data?.productData?.title}</p>
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
        <td className="px-6 py-3 ">${data?.productData?.price}</td>
        <td className="px-8 py-3  ">
          {data?.quantity}
          {/* <input
    type="number"
    value={data?.quantity}
    min={1}
    className="w-10 border border-black rounded px-2 py-2 text-center focus:outline-none "
  /> */}
   
          </td>
        <td className="px-6 py-3 text-brand">${data?.quantity* data?.productData?.price}</td>
        <td className="px-6 py-3 text-center">
          <button 
          onClick={handleRemove}
          className="text-secondary hover:text-red-700 font-medium">
          <RiDeleteBinLine />
          </button>
        </td>
      </tr>

      // responsive cart item
      
      
  )
}

export default CartItem