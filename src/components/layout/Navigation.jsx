import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { IoGitCompareOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  return (
    <header className="relative shadow-sm">
      {/* header top part */}
      <div className="shadow-md md:shadow-none ">
        <div className="container ">
          <div className="  flex justify-between items-center py-8 gap-4">
            <button
              onClick={() => setSidebar(true)}
              className="md:hidden text-2xl text-primary"
            >
              <FaBars />
            </button>
            <Link to="/" className="w-32 lg:w-auto">
              <img src="/logo.png" alt="logo" className="" />
            </Link>

            <div className="border-2 border-brand p-2 lg:p-5 rounded w-full max-w-64 lg:max-w-[700px] hidden  md:flex items-center ">
              <select
                name=""
                id=""
                className="pr-3.5 border-r-2 text-primary hidden lg:block"
              >
                <option value="">All Categories</option>
              </select>
              <input
                type="text"
                placeholder="Search for items"
                className="px-3.5 w-full lg:w-2/3 outline-0"
              />
              <IoSearchOutline className="ml-auto" />
            </div>
            <div>
              <ul className=" flex gap-3 :gap-5 text-sm">
                <li>
                  <Link to="/" className="flex gap-2 items-end relative">
                    <span className="w-4 h-4 lg:w-6 lg:h-6 text-xs md:text-sm bg-brand rounded-full text-white flex items-center justify-center absolute -top-2 -right-2 md:-top-2 md:right-15">
                      0
                    </span>
                    <IoGitCompareOutline className=" text-xl lg:text-3xl text-secondary" />
                    <span className="hidden md:block"> Compare</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="flex gap-2 items-end relative">
                    <span className="w-4 h-4 lg:w-6 lg:h-6 text-xs md:text-sm bg-brand rounded-full text-white flex items-center justify-center absolute -top-2 -right-2 md:-top-2 md:right-11">
                      0
                    </span>
                    <IoMdHeartEmpty className="text-xl lg:text-3xl text-secondary" />
                    <span className="hidden md:block">Wishlist</span>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="flex gap-2 items-end relative">
                    <span className="w-4 h-4 lg:w-6 lg:h-6 text-xs md:text-sm bg-brand rounded-full text-white flex items-center justify-center absolute -top-2 -right-2 md:-top-2 md:right-6">
                      0
                    </span>
                    <GrCart className="text-xl lg:text-3xl text-secondary" />
                    <span className="hidden md:block">Cart</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="flex gap-2 items-end relative">
                    <LuUser className="text-xl lg:text-3xl text-secondary" />
                    <span className="hidden md:block">LogIn</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* main menu mobile device */}
            <nav
              className={`w-full z-50 h-screen  bg-slate-700 absolute top-0 left-0 transition-all ${
                sidebar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="w-[95%] h-full bg-white overflow-y-auto ">
                <div className="flex justify-between items-center border-b border-[#ececec] pb-4 mb-4 px-4">
                  <Link to="/" className="w-32 inline-block">
                    <img src="/logo.png" alt="logo" className="" />
                  </Link>
                  <button
                    onClick={() => setSidebar(false)}
                    className="text-3xl  text-green-200 cursor-pointer"
                  >
                    <IoCloseCircle />
                  </button>
                </div>

                <div className="px-4 flex flex-col gap-4">
                  <div className="border-2 border-brand  p-2 lg:p-5 rounded   flex items-center ">
                    <input
                      type="text"
                      placeholder="Search for items"
                      className="px-3.5  lg:w-2/3 outline-0"
                    />
                    <IoSearchOutline className="ml-auto" />
                  </div>

                  <ul className="font-bold text-primary text-base ">
                    <li className="w-full">
                      <Link
                        to="/"
                        className="border-b block border-[#ececec] py-2"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        to="/"
                        className="border-b block border-[#ececec] py-2"
                      >
                        About
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        to="/shop"
                        className="border-b block border-[#ececec] py-2"
                      >
                        Shop
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        to="/"
                        className="border-b block border-[#ececec] py-2"
                      >
                        Vendors
                      </Link>
                    </li>

                    <li className="w-full">
                      <Link
                        to="/"
                        className="border-b block border-[#ececec] py-2"
                      >
                        Mega Menu
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        to="/"
                        className="border-b block border-[#ececec] py-2"
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="w-full">
                      <Link
                        to="/"
                        className="border-b block border-[#ececec] py-2"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  {/* sign up box */}
                  <div className="my-4 mx-3 border border-[#ececec] ">
                    <Link to="/" className="flex items-center px-3 py-4 gap-2">
                      <LuUser className="text-base  text-brand" />
                      <span className="text-base">Log In/Sign Up</span>
                    </Link>
                    <Link
                      to="tel:1900 - 888"
                      className="flex items-center px-3 pb-4  gap-2"
                    >
                      <TfiHeadphoneAlt className="text-base text-brand " />
                      <div>
                        <p className="text-base"> 1900 - 888</p>
                      </div>
                    </Link>
                  </div>

                  {/* follow us button */}

                  <p className=" px-3 font-bold text-base text-primary">
                    Follow Us
                  </p>

                  <ul className="mx-3 flex gap-2">
                    <li>
                      <Link to="/" className=" text-brand text-3xl ">
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className=" text-brand text-3xl ">
                        <FaSquareTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className=" text-brand text-3xl ">
                        <FaInstagramSquare />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className=" text-brand text-3xl ">
                        <FaPinterest />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className=" text-brand text-3xl ">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>

                  <p className="py-4 px-3 text-gray-500 text-sm">
                    Copyright 2024 @ Nest. All rights reserved.Powered by
                    AliThemes.
                  </p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* header nav part main menu desktop view */}
      <nav className="hidden md:block md:border-t md:border-[#ECECEC] ">
        <div className="container flex items-center gap-9 md:gap-2 lg:gap-9 ">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="py-3 px-6 m-3 md:px-2  md:py-2 bg-brand rounded-md text-xs lg:text-base xl:text-base text-nowrap text-white font-bold flex items-center gap-2 md:gap-1 cursor-pointer"
            >
              <IoGridOutline /> Browse All Categories <IoChevronDown />
            </h3>
            {show && (
              <div className="z-50 w-md absolute top-22 left-0 p-7 border rounded-md bg-white border-brand grid gap-4 grid-cols-2 ">
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/dairies.svg" alt="dairies" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Milk and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4  hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/drinks.svg" alt="drinks" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Wine and Drinks
                  </p>
                </div>

                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/cloth.svg" alt="cloth" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Clothing and Beauty
                  </p>
                </div>
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/seafood.svg" alt="seafood" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Fresh Seafood
                  </p>
                </div>

                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/toy.svg" alt="toy" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Pet Foods and Toy
                  </p>
                </div>
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/fastfood.svg" alt="fastfood" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Fast Food
                  </p>
                </div>

                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/baking.svg" alt="baking" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Baking Materials
                  </p>
                </div>
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/vegetables.svg" alt="vegetables" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Fresh Vegetables
                  </p>
                </div>

                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/fruits.svg" alt="fruits" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Fresh Fruits
                  </p>
                </div>
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/bread.svg" alt="bread" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Bread and Juice
                  </p>
                </div>
              </div>
            )}
          </div>
          <ul className="flex  gap-3 md:gap-2 lg:gap-4 xl:gap-6 font-bold text-primary text-base md:text-xs lg:text-base xl:text-lg ">
            <li>
              <Link to="/" className="hover:text-brand transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-brand transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Vendors
              </Link>
            </li>

            <li>
              <Link to="/" className=" hover:text-brand transition">
                Mega Menu
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Contact
              </Link>
            </li>
          </ul>
          <Link
            to="tel:1900 - 888"
            className="ml-auto flex items-center gap-3 md:gap-1"
          >
            <TfiHeadphoneAlt className="text-3xl md:text-base xl:text-4xl " />
            <div>
              <p className="font-bold text-brand text-xl md:text-base lg:text-xl xl:text-2xl">
                {" "}
                1900 - 888
              </p>
              <p className="font-medium text-secondary  text-sm lg:text-sm md:text-xs ">
                24/7 Support Center
              </p>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
