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
        <div className="flex items-center space-x-8">
          {/* About Text */}
          <a href="/about">
            <p className="hidden lg:block mr-4 duration-200 transform hover:-translate-y-1">
              About
            </p>
          </a>
          <a href="https://d2mapbeta.xyz/">
            {/* Try me button */}
            <div className="bg-blue-500 rounded-lg shadow-lg duration-200 transform hover:-translate-y-1 hover:shadow-lg hover:bg-blue-600">
              <p className="text-white px-12 py-3 font-sans">Try the App!</p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
