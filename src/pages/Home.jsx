import React from "react";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import ProductBanner from "../components/Home/ProductBanner";
import PopularProduct from "../components/Home/PopularProduct";
import BestSells from "../components/Home/BestSells";

import TopProduct from "../components/Home/TopProduct";

import BannerBox from "../components/utilities/BannerBox";

import Subscribe from "../components/utilities/Subscribe";
import DealsOfDay from "../components/utilities/DealsOfDay";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Categories></Categories>
      <ProductBanner></ProductBanner>
      <PopularProduct></PopularProduct>
      <BestSells></BestSells>
      <DealsOfDay />
      <TopProduct></TopProduct>
      <Subscribe></Subscribe>
      <BannerBox></BannerBox>
    </>
  );
};

export default Home;
