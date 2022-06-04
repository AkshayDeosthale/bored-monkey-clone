import React from "react";
import { AiOutlineYoutube, AiFillInstagram } from "react-icons/ai";
import { FaDiscord, FaTwitter } from "react-icons/fa";

const SocialsAndDetails = () => {
  return (
    <div>
      <div className=" flex space-x-5 justify-center items-center sm:pt-12  ">
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
      <div className="flex w-full py-7">
        <p className="w-1/2 text-xs ">© 2021 Yuga Labs LLC</p>
        <div className="w-1/2 text-xs flex flex-col space-y-5 text-yellow-500 pb-8">
          <a href="">BAYC terms and confitions</a>
          <a href="">MAYC terms and conditions</a>
        </div>
      </div>
    </div>
  );
};

export default SocialsAndDetails;
