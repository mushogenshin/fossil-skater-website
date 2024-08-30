import React from "react";
import SteamLogo from "../images/logo_Steam.svg";
import EpicStoreLogo from "../images/logo_EpicStore.svg";
import "../styles/custom-styles.css";

export default function CallToAction() {
  return (
    <div className="mx-auto md:pt-16">
      <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
        Download our game&nbsp;
        <span className="double-underline">for free:</span>
      </p>
      <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
        {/* Steam */}
        <img
          src={SteamLogo}
          alt="Steam Logo"
          className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
        />
        {/* Epic Store */}
        <img
          src={EpicStoreLogo}
          alt="Epic Store Logo"
          className="h-16 pr-12 transform hover:scale-125 duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
