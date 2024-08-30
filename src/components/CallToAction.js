import React from "react";
import AppleAppStoreSvg from "../images/AppleAppStore.png";
import GooglePlayStoreSvg from "../images/GooglePlayStore.png";

export default function CallToAction() {
  return (
    <div className="mx-auto md:pt-16">
      <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
        Download our game:
      </p>
      <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
        {/* TODO: Steam */}
        <img
          //   src={logo}
          src={AppleAppStoreSvg}
          alt="Apple App Store"
          className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
        />
        {/* TODO: Epic Store */}
        <img
          src={GooglePlayStoreSvg}
          alt="Google Play Store"
          className="h-12 transform hover:scale-125 duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
