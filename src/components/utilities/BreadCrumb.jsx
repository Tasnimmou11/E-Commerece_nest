import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link, useLocation } from 'react-router'

const BreadCrumb = () => {
    const location = useLocation().pathname.split("/")[1];
  return (
    <ul className='flex items-center text-secondary font-semibold gap-3'>
    <li>
        <Link to="/" className='flex items-center gap-1.5 text-brand'>
        <CiHome />
        <span>Home</span> 
        </Link>
    </li>
    <li>
    <MdKeyboardArrowRight className='text-xs' />
    </li>
    <li>
        <p>{location}</p>
    </li>
    </ul>
  )
}

export default BreadCrumb