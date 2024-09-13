import React from "react";
import SteamLogo from "../images/logo_Steam.svg";
import EpicStoreLogo from "../images/logo_EpicStore.svg";
import "../styles/custom-styles.css";

export default function CallToAction() {
  return (
    <div className="mx-auto md:pt-16">
      <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
        Download our game&nbsp;
        <span className="double-underline">FOR FREE:</span>
      </p>
      <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
        {/* Steam */}
        <a
          href="https://store.steampowered.com/app/3205980/Fossil_Skater/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={SteamLogo}
            alt="Steam Logo"
            className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
          />
        </a>
        {/* Epic Store */}
        <a
          href="https://store.epicgames.com/en-US/p/fossil-skater-4c66d0"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={EpicStoreLogo}
            alt="Epic Store Logo"
            className="h-16 pr-12 transform hover:scale-125 duration-300 ease-in-out"
          />
        </a>
      </div>
    </div>
  );
}
