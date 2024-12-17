import React from "react";
import { FaSearch, FaBell, FaHeart, FaCog } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="bg-white shadow-lg py-4 sticky top-0 z-50">
    <div className="container mx-auto flex items-center justify-between px-4">
      {/* Logo */}
      <div className="text-[#3563E9] text-2xl font-bold w-148 h-44px">
        MORENT
      </div>
    
 
  

        {/* Search Bar */}
        <div className="flex items-center border-2 border-gray-300 rounded-full px-3 py-2 w-1440 md:w-1/2 lg:w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full"
          />
          <FaCog className="text-gray-500 ml-2" />
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <FaHeart className="text-gray-600 hover:text-blue-500 text-xl cursor-pointer" />
          <div className="relative">
            <FaBell className="text-gray-600 hover:text-blue-500 text-xl cursor-pointer" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
          <Image
            src="/mypic.png"
            alt="/mypic.png"
            width={44}
            height={44}
          />
        
        </div>
      </div>
    </nav>
  );
};

export default Header;
