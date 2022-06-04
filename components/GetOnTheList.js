import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const GetOnTheList = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-5 py-5 pt-28 md:pt-0 ">
      <p>GET ON THE LIST</p>
      <div className="flex  items-center">
        <input
          type="text"
          className="bg-gray-700 placeholder:text-white p-3 placeholder:italic placeholder:text-sm focus:outline-none"
          placeholder="Email Address"
        />
        <button className="bg-gray-800  p-4">
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default GetOnTheList;
