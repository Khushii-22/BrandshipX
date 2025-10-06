import React from "react";
import { Link } from "react-router-dom";
import bgicon from "../assets/bgicon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-[609px] relative overflow-hidden rounded-t-[32px] bg-[#1C1C22]">
      {/* Purple gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(90, 53, 166, 0.8) -6.93%, rgba(90, 53, 166, 0) 19.49%), linear-gradient(0deg, #1C1C22, #1C1C22)",
        }}
      ></div>

      {/* Background icons at corners */}
      {/* Top Left */}
      <img
        src={bgicon}
        alt=""
        className="absolute top-0 left-[200px] w-40 h-40 opacity-100 rotate-0 z-[1]"
      />

      {/* Top Right */}
      <img
        src={bgicon}
        alt=""
        className="absolute top-[120px] right-0 w-40 h-40 opacity-100 rotate-90 z-[1]"
      />

      <div className="w-full h-full p-8 relative z-10 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
          {/* Brand section */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center mt-35">
              <span
                className="font-vend font-bold text-[232px] leading-[125%] tracking-[0.02em] -mb-20"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(244, 248, 255, 0.95) 18.33%, rgba(244, 248, 255, 0) 73.1%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                BrandshipX
              </span>
            </Link>
          </div>

         
        </div>

        {/* Bottom section */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center">
              <p className="text-gray-300 text-[25px] font-vend mr-5">
                BrandshipX.
              </p>
              <p className="text-gray-300 text-sm font-vend">
                BrandshipX. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm font-vend"
              >
                X
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm font-vend"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-sm font-vend"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Left */}
        <img
          src={bgicon}
          alt=""
          className="absolute bottom-[120px] left-0 w-40 h-40 opacity-100 rotate-[-90deg] z-[1]"
        />

        {/* Bottom Right */}
        <img
          src={bgicon}
          alt=""
          className="absolute bottom-0 right-[200px] w-40 h-40 opacity-100 rotate-180 z-[1]"
        />
      </div>
    </footer>
  );
}