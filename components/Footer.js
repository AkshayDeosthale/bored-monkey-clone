import React from "react";
import GetOnTheList from "../components/GetOnTheList";
import SocialsAndDetails from "../components/SocialsAndDetails";

const Footer = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto flex-col sm:flex-row px-4 items-center sm:px-0">
      <GetOnTheList />
      <img
          src="/bayc-footer.webp"
          alt=""
          className=" hidden md:inline-block h-[200ox] w-[200px]"
          data-aos="zoom-in"
        />
      <SocialsAndDetails />
    </div>
  );
};

export default Footer;
