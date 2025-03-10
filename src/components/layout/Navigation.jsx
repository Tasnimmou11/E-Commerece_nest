import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { IoGitCompareOutline } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { IoChevronDown } from "react-icons/io5";
import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <header>
      {/* header top part */}
      <div className="container">
        <div className="flex justify-between items-center py-8">
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>

          <div className="border-2 border-brand p-5 rounded w-full max-w-[700px] flex items-center">
            <select name="" id="" className="pr-3.5 border-r-2">
              <option value="">All Categories</option>
            </select>
            <input
              type="text"
              placeholder="Search for item"
              className="px-3.5 w-2/3"
            />
            <IoSearchOutline className="ml-auto" />
          </div>
          <div>
            <ul className="flex gap-5">
              <li>
                <Link to="/" className="flex gap-2 items-end relative">
                  <span className="w-6 h-6 bg-brand rounded-full text-white flex item-center justify-center absolute -top-2 right-15">
                    0
                  </span>
                  <IoGitCompareOutline className="text-3xl text-secondary" />
                  Compare
                </Link>
              </li>
              <li>
                <Link to="/" className="flex gap-2 items-end relative">
                  <span className="w-6 h-6 bg-brand rounded-full text-white flex item-center justify-center absolute -top-2 right-13">
                    0
                  </span>
                  <IoMdHeartEmpty className="text-3xl text-secondary" />
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/" className="flex gap-2 items-end relative">
                  <span className="w-6 h-6 bg-brand rounded-full text-white flex item-center justify-center absolute -top-2 right-6">
                    0
                  </span>
                  <GrCart className="text-3xl text-secondary" />
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/" className="flex gap-2 items-end relative">
                  <LuUser className="text-3xl text-secondary" />
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* header nav part */}
      <nav className="border-t border-[#ECECEC] border-b">
        <div className="container flex items-center gap-9 ">
          <div className="relative">
            <h3
              onClick={() => setShow(!show)}
              className="py-3 px-6 my-3 bg-brand rounded-md text-white font-bold flex items-center gap-2 cursor-pointer"
            >
              <IoGridOutline /> Browse All Categories <IoChevronDown />
            </h3>
            {show && (
              <div className="w-md absolute top-22 left-0 p-7 border rounded-md border-brand grid gap-4 grid-cols-2 ">
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
                    Fresh Fruits{" "}
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
