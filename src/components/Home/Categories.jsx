import React from "react";
import { Link } from "react-router";
import CategoryItem from "./CategoryItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from "../utilities/SliderArrows";




const Categories = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        nextArrow: <NextArrow customStyle="absolute -top-16 right-0"/>,
        prevArrow: <PrevArrow customStyle="absolute -top-16 right-16"/>
    };
return (
    <section className="pt-14 pb-11">
    <div className="container">
        <div className="flex gap-7 items-end">
        <h2 className="section_heading">Featured Categories</h2>
        <ul className="flex text-base font-light text-primary gap-7">
            <li>
            <Link to="/" className="hover:text-brand">Cake & Milk</Link>
            </li>
            <li>
            <Link to="/" className="hover:text-brand">Coffes & Teas</Link>
            </li>
            <li>
            <Link to="/" className="hover:text-brand">Pet Foods</Link>
            </li>
            <li>
            <Link to="/" className="hover:text-brand">Vegetables</Link>
            </li>
        </ul>
        </div>
        <div className="mt-11 ">
        <Slider {...settings}>
        {/* slider div */}
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
        </Slider>
        </div>
    </div>
    </section>
);
};

export default Categories;
