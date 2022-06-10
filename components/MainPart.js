import React from "react";
import Welcome from "../components/Welcome";
import Description from "../components/Description";
import { ToastContainer, toast } from 'react-toastify';

const MainPart = () => {
  return (
    <div className="max-w-6xl mx-auto bg-black ">
      <div className="relative">
      <img src="/main.gif" alt="" className="object-cover w-full" />
      <div
        className=" h-60  w-full mx-auto md:absolute md:bottom-0 md:left-0 sm:w-[370px]  backdrop-blur-lg"
        data-aos="fade-left"
      >
        
 <Welcome />
   
       
      </div>
      </div>
      
      <div>
        <Description />
        <img
          src="/bayc-footer.webp"
          alt=""
          className="h-[160ox] w-[160px] md:hidden mx-auto "
          data-aos="zoom-in"
        />
        {/* left-[25%] bottom-[-203px] */}
      </div>
    </div>
  );
};

export default MainPart;
