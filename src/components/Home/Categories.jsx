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
    nextArrow: <NextArrow customStyle="absolute -top-10 md:-top-16 right-0" />,
    prevArrow: <PrevArrow customStyle="absolute -top-10 md:-top-16 right-16" />,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
            slidesToShow: 7,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 896,
            settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2,
        },
    },
    {
        breakpoint: 512,
        settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        },
    },
    ],
};
return (
    <section className="pt-14 pb-11">
    <div className="container">
        <div className="flex md:flex-row flex-col gap-7 items-center md:items-end">
        <h2 className="section_heading">Featured Categories</h2>
        <ul className="flex flex-wrap text-base font-light text-primary gap-1.5 md:gap-7">
            <li>
            <Link to="/" className="hover:text-brand">
                Cake & Milk
            </Link>
            </li>
            <li>
            <Link to="/" className="hover:text-brand">
                Coffes & Teas
            </Link>
            </li>
            <li>
            <Link to="/" className="hover:text-brand">
                Pet Foods
            </Link>
            </li>
            <li>
            <Link to="/" className="hover:text-brand">
                Vegetables
            </Link>
            </li>
        </ul>
        </div>
        <div className="mt-11 ">
        <Slider {...settings}>
            {/* slider div */}
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
            <CategoryItem />
        </Slider>
        </div>
    </div>
    </section>
);
};

export default Categories;
