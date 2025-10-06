import React from "react";
import { Star, Calendar } from "lucide-react";
import blackLogo from "../../assets/black.png";
import btnImage from "../../assets/btn.png";
import bgicon from "../../assets/bgicon2.png";

export default function Control() {
  return (
    <div className="bg-white flex items-center justify-center p-8 relative">
      {/* Background icons at corners */}
      {/* Top Left */}
      <img
        src={bgicon}
        alt="decoration"
        className="absolute top-10 left-10 w-50 h-50 opacity-100 rotate-0 z-0"
      />

      {/* Top Right */}
      <img
        src={bgicon}
        alt="decoration"
        className="absolute top-10 right-10 w-50 h-50 opacity-100 rotate-90 z-0"
      />

      {/* Bottom Left */}
      <img
        src={bgicon}
        alt="decoration"
        className="absolute bottom-10 left-10 w-50 h-50 opacity-100 rotate-[-90deg] z-0"
      />

      {/* Bottom Right */}
      <img
        src={bgicon}
        alt="decoration"
        className="absolute bottom-10 right-2 w-50 h-50 opacity-100 rotate-180 z-0"
      />

      <div className="max-w-2xl mx-auto text-center relative z-10 py-20">
        {/* Logo/Icon */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            {/* Outer glow effect */}
            <div className="absolute inset-0 bg-purple-400 rounded-full blur-xl opacity-30 scale-150"></div>
            {/* Image */}
            <img
              src={blackLogo}
              alt="Logo"
              className="relative w-[150px] h-[150px] rotate-0 opacity-100"
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-[44px] font-semibold text-[#0F172B] mb-8 leading-[52px] font-vend">
          Take Control of Your social media
        </h1>

        {/* Star Rating */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex gap-1">
            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 fill-[#121212] text-[#121212]"
              />
            ))}
            <Star className="w-5 h-5 fill-gray-300 text-gray-300" />
          </div>
          <div className="border-l border-[#90A1B9] h-[20px] mx-2"></div>
          <span className="text-[#62748E] text-base leading-6 font-normal font-vend">
            Average User Rating
          </span>
        </div>

        {/* Description */}
        <p className="text-[20px] text-[#62748E] mb-12 max-w-lg mx-auto leading-[150%] font-normal font-vend">
          AI does the heavy lifting, smart recs fine-tune tone & timing, and
          analytics + tiered plans help you scale.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center justify-center gap-2 w-[186px] h-[56px] bg-gradient-to-r from-[#FF6F5E] to-[#FFD4AA] p-[2px] rounded-[259.81px] relative group">
          <div className="w-full h-full bg-[#212121] rounded-[259.81px] inline-flex items-center justify-center gap-2 group-hover:bg-gray-800 transition-all duration-200">
            <img
              src={btnImage}
              alt=""
              className="w-[16.315px] h-[16.315px] opacity-100 border-[1.45px]"
            />
            <span className="font-['Vend_Sans'] font-normal text-[20px] leading-[131%] text-white">
              Book a Demo
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}