import React from "react";
import { LuSend } from "react-icons/lu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

return (
    <section className="mt-7">
    <div className="container px-0">
    <Slider {...settings}>
        <div
        className="px-6 py-14 lg:p-24 bg-no-repeat bg-cover rounded-4xl bg-center md:bg-right"
        style={{ backgroundImage: "url('/banner.png')" }}
        >
          {/* <div className='bg-[url(/banner.png)] py-24'> */}
        <h1 className=" text-2xl md:text-3xl font-bold lg:text-7xl text-primary max-w-2xl">
            Fresh Vegetables Big discount
        </h1>
        <p className="pt-5 md:pt-10 pb-5 md:pb-16 text-xl lg:text-3xl font-normal text-secondary">
            Save up to 50% off on your first order
        </p>
        <div className="bg-white rounded-[50px] max-w-md flex items-center pl-2 gap-2 ">
            <LuSend className="text-4xl text-[#838383]  " />
            <input
            type="email"
            placeholder="Your email address "
            className="w-full outline-0"
            />
            <button className="cursor-pointer py-2 md:py-6 px-3 md:px-10 bg-brand rounded-[50px] text-white text-base">
            Subscribe
            </button>
        </div>
        </div>

        <div
        className="px-6 py-14 lg:p-24 bg-no-repeat bg-cover rounded-4xl bg-center md:bg-right"
        style={{ backgroundImage: "url('/banner.png')" }}
        >
          {/* <div className='bg-[url(/banner.png)] py-24'> */}
        <h1 className=" text-2xl md:text-3xl font-bold lg:text-7xl text-primary max-w-2xl">
            Fresh Vegetables Big discount
        </h1>
        <p className="pt-5 md:pt-10 pb-5 md:pb-16 text-xl lg:text-3xl font-normal text-secondary">
            Save up to 50% off on your first order
        </p>
        <div className="bg-white rounded-[50px] max-w-md flex items-center pl-2 gap-2 ">
            <LuSend className="text-4xl text-[#838383]  " />
            <input
            type="email"
            placeholder="Your email address "
            className="w-full outline-0"
            />
            <button className="cursor-pointer py-2 md:py-6 px-3 md:px-10 bg-brand rounded-[50px] text-white text-base">
            Subscribe
            </button>
        </div>
        </div>
      </Slider>
        
    </div>
    </section>
);
};

export default Banner;
