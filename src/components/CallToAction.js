import React from "react";
import SteamLogo from "../images/logo_steam.svg";

export default function CallToAction() {
  return (
    <div className="mx-auto md:pt-16">
      <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
        Download our game:
      </p>
      <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
        {/* Steam */}
        <img
          src={SteamLogo}
          alt="Steam Logo"
          className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
        />
        {/* TODO: Epic Store */}
      </div>
    </div>
  );
}
