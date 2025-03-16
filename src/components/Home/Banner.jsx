import React from "react";
import { LuSend } from "react-icons/lu";

const Banner = () => {
return (
    <section className="mt-7">
    <div className="container">
        <div
        className="p-24 bg-no-repeat bg-cover rounded-4xl"
        style={{ backgroundImage: "url('/banner.png')" }}
        >
          {/* <div className='bg-[url(/banner.png)] py-24'> */}
        <h1 className="font-bold text-7xl text-primary max-w-2xl">
            Fresh Vegetables Big discount
        </h1>
        <p className="pt-10 pb-16 text-3xl font-normal text-secondary">
            Save up to 50% off on your first order
        </p>
        <div className="bg-white rounded-[50px] max-w-md flex items-center pl-2 gap-2 ">
            <LuSend className="text-4xl text-[#838383]  " />
            <input
            type="email"
            placeholder="Your email address "
            className="w-full outline-0"
            />
            <button className="cursor-pointer py-6 px-10 bg-brand rounded-[50px] text-white text-base">
            Subscribe
            </button>
        </div>
        </div>
    </div>
    </section>
);
};

export default Banner;
