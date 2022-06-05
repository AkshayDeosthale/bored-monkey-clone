import React from "react";
import Welcome from "../components/Welcome";
import Description from "../components/Description";

const MainPart = () => {
  return (
    <div className="max-w-6xl mx-auto bg-black">
      <img src="/main.gif" alt="" className="object-cover w-full" />
      <div
        className=" h-60  w-full mx-auto md:absolute bg-black md:bottom-[-60px] sm:w-[370px] "
        data-aos="fade-left"
      >
        <Welcome />
      </div>
      <div>
        <Description />
        <img
          src="/bayc-footer.webp"
          alt=""
          className="h-[200ox] w-[200px] mx-auto -mt-24 md:absolute  md:left-[40%] md:bottom-[-450px]"
          data-aos="zoom-in"
        />
        {/* left-[25%] bottom-[-203px] */}
      </div>
    </div>
  );
};

export default MainPart;
