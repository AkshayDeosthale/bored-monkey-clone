import React from "react";
import { AiOutlineYoutube, AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="max-w-6xl mx-auto flex  h-16 relative">
      <div className=" w-full justify-center items-center md:w-2/3 flex md:justify-end md:items-end">
        <img
          src="/bayc-logo.webp"
          alt="bayc logo"
          className=" absolute z-20 w-72 h-20 top-6 mx-auto md:left-[37%]"
          data-aos="fade-down"
        />
      </div>
      <div className=" hidden w-1/2 md:p-2 md:inline-flex justify-end items-end space-x-5">
        <span>
          <AiOutlineYoutube className="p-0 hover:text-yellow-500 hover:transition-all duration-300" />
        </span>
        <span>
          <FaDiscord className="p-0 hover:text-yellow-500 hover:transition-all duration-300" />
        </span>
        <span>
          <AiFillInstagram className="p-0 hover:text-yellow-500 hover:transition-all duration-300" />
        </span>
        <span>
          <FaTwitter className="p-0 hover:text-yellow-500 hover:transition-all duration-300" />
        </span>
      </div>
    </div>
  );
};

export default Header;
