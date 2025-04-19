import React from 'react'
import Banner from '../components/Shop/Banner'
import Products from '../components/Shop/Products'
import DealsOfDay from '../components/utilities/DealsOfDay'
import Subscribe from '../components/utilities/Subscribe'
import BannerBox from '../components/utilities/BannerBox'

const Shop = () => {
  return (
    <>
    <Banner></Banner>
    <Products></Products>
    <DealsOfDay/>
    <Subscribe/>
    <BannerBox/>
    </>
  )
}

export default Shop