import React from 'react'
import Banner from '../components/Home/Banner'
import Categories from '../components/Home/Categories'
import ProductBanner from '../components/Home/ProductBanner'
import PopularProduct from '../components/Home/PopularProduct'
import BestSells from '../components/Home/BestSells'
import DealsOfDay from '../components/Home/DealsOfDay'
import TopProduct from '../components/Home/TopProduct'
import BannerEnd from '../components/Home/BannerEnd'

const Home = () => {
  return (
    <>
    <Banner></Banner>
    <Categories></Categories>
    <ProductBanner></ProductBanner>
    <PopularProduct></PopularProduct>
    <BestSells></BestSells>
    <DealsOfDay></DealsOfDay>
    <TopProduct></TopProduct>
    <BannerEnd></BannerEnd>
    </>
  )
}

export default Home