import React from "react";
import GetOnTheList from "../components/GetOnTheList";
import SocialsAndDetails from "../components/SocialsAndDetails";

const Footer = () => {
  return (
    <div className="flex justify-between max-w-6xl mx-auto flex-col sm:flex-row px-4  sm:px-0">
      <GetOnTheList />
      <SocialsAndDetails />
    </div>
  );
};

export default Footer;
