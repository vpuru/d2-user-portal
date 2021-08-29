import React, { useState } from "react";
import d2maplogo from "../d2map-logo.png";
import banner from "../hollier-banner-transparent.png";
import "./tailwind.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex px-4 justify-between mx-auto max-w-6xl border-black">
        <div className="flex items-center h-full">
          {/* D2Map Logo */}
          <a href="/">
            <img
              src={d2maplogo}
              alt="D2Map Logo"
              className="my-4 w-28 lg:w-32 h-auto duration-200 hover:opacity-80 "
            />
          </a>
        </div>
        <div className="flex items-center">
          {/* Senator's picture */}
          {/* <p className="font-bold text-2xl">Senator Hollier's User Portal</p> */}
          <a href="https://senatedems.com/hollier/">
            <img
              src={banner}
              alt="banner"
              className="hidden sm:block h-20 lg:h-24 w-auto p-0 m-0"
            />
          </a>
        </div>
        {/* Two buttons */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* About Text */}
          <a href="/about">
            <p className="mr-4 duration-200 transform hover:-translate-y-1">
              About
            </p>
          </a>
          <a href="https://d2map.xyz/">
            {/* Try me button */}
            <div className="bg-blue-500 rounded-lg shadow-lg duration-200 transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-600">
              <p className="text-white px-12 py-3 font-sans">Try the App!</p>
            </div>
          </a>
        </div>

        {/* Menu Icon */}
        <div className="lg:hidden w-28 flex items-center justify-end ">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:hidden h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* Drop down menu */}
      <div className={open ? `lg:hidden w-full bg-gray-100` : "hidden"}>
        <div className="w-full h-20 flex justify-center items-center">
          About Page
        </div>
        <div className="w-full h-20 flex justify-center items-center">
          Try the App!
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
