import React from "react";
import Welcome from "../components/Welcome";
import Description from "../components/Description";

const MainPart = () => {
  return (
    <div className="max-w-6xl mx-auto bg-black">
      {/* <video autoPlay loop preload="metadata">
        <source src="/club-landing.mp4" type="video/mp4"></source>
      </video> */}
      <img src="/main.gif" alt="" className="object-cover w-full" />
      <div className=" h-60 w-[370px] mx-auto md:absolute bg-black md:bottom-[-60px] ">
        <Welcome />
      </div>
      <div>
        <Description />
        <img
          src="/bayc-footer.webp"
          alt=""
          className="h-[200ox] w-[200px] absolute left-[25%] bottom-[-203px] md:left-[40%] md:bottom-[-450px]"
        />
      </div>
    </div>
  );
};

export default MainPart;
