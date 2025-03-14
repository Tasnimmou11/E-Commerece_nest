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
import { Link } from "react-router";


const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="">
      {/* header top part */}
     <div className="shadow-md md:shadow-none ">
        
     <div className="container ">
        <div className="  flex justify-between items-center py-8 gap-4">
          <button className="md:hidden text-2xl text-primary">
          <FaBars />
          </button>
          <Link to="/" className="w-32 lg:w-auto">
            <img src="/logo.png" alt="logo" className="w-full" />
          </Link>

          <div className="border-2 border-brand p-2 lg:p-5 rounded w-full max-w-64 lg:max-w-[700px] hidden  md:flex items-center ">
            <select name="" id="" className="pr-3.5 border-r-2 text-primary hidden lg:block">
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
                  <span className="hidden md:block">  Compare</span>
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
                <Link to="/" className="flex gap-2 items-end relative">
                  <span className="w-4 h-4 lg:w-6 lg:h-6 text-xs md:text-sm bg-brand rounded-full text-white flex items-center justify-center absolute -top-2 -right-2 md:-top-2 md:right-6">
                    0
                  </span>
                  <GrCart className="text-xl lg:text-3xl text-secondary" />
                  <span className="hidden md:block">Cart</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex gap-2 items-end relative">
                  <LuUser className="text-xl lg:text-3xl text-secondary" />
                  <span className="hidden md:block">Account</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* main menu mobile device */}
        </div>
      </div>
     
     </div>
      {/* header nav part */}
      <nav className="hidden md:block md:border-t md:border-[#ECECEC] md:border-b">
        <div className="container flex items-center gap-9 ">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="py-3 px-6 my-3 bg-brand rounded-md text-white font-bold flex items-center gap-2 cursor-pointer"
            >
              <IoGridOutline /> Browse All Categories <IoChevronDown />
            </h3>
            {show && (
              <div className="w-md absolute top-22 left-0 p-7 border rounded-md bg-white border-brand grid gap-4 grid-cols-2 ">
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
                  <img src="/dairies.svg" alt="dairies" className="w-6" />
                  <p className="font-bold text-sm hover:text-brand  text-primary">
                    Milk and Dairies
                  </p>
                </div>
                <div className="flex items-center gap-2  cursor-pointer rounded-sm py-2 px-4 hover:shadow-md hover:border-brand border border-[#ECECEC]">
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
          <ul className="flex gap-8 font-bold text-primary text-lg ">
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
              <Link to="/" className="hover:text-brand transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Vendors
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:text-brand transition">
                Mega Menu
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                {" "}
                Blog
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-brand transition">
                Contact
              </Link>
            </li>
          </ul>
          <Link to="tel:1900 - 888" className="ml-auto flex items-center gap-3">
            <TfiHeadphoneAlt className="text-2xl " />
            <div>
              <p className="font-bold text-brand text-2xl"> 1900 - 888</p>
              <p className="font-medium text-secondary text-sm ">
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
