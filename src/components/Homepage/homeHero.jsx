import React, { useState } from "react";
import {
  Star,
  Users,
  TrendingUp,
  Calendar,
  MessageCircle,
  Hash,
  Sparkles,
} from "lucide-react";
import Navbar from "../../common/navbar";
import Homebg from "../../assets/Homebg.svg";
import Homeimg from "../../assets/Homeimg.svg";
import btnImage from "../../assets/btn.png";
import sym from "../../assets/sym.png";

const HomeHero = () => {
  const [email, setEmail] = useState("");

  const handleBookDemo = () => {
    // Demo booking logic would go here
    console.log("Booking demo for:", email);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${Homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Navbar */}
      <div className="pt-4">
        <Navbar />
      </div>

      {/* Book a Demo Button - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <button className="inline-flex items-center justify-center gap-2 w-[186px] h-[56px] bg-gradient-to-r from-[#FF6F5E] to-[#FFD4AA] p-[2px] rounded-[260px] group">
          <div className="w-full h-full bg-[#212121] rounded-[260px] flex items-center justify-center gap-2 group-hover:bg-gray-800 transition-all duration-200">
            <img
              src={btnImage}
              alt=""
              className="w-[16.3px] h-[16.3px] border-[1.45px]"
            />
            <span className="font-vend font-normal text-[20px] leading-[131%] text-white">
              Book a Demo
            </span>
          </div>
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Top stats */}
        <div className="flex items-center justify-start mb-8">
          <div className="flex items-center gap-[10px] bg-white/35 backdrop-blur-sm rounded-[8px] px-[10px] py-[8px] shadow-[0px_6px_20px_0px_#3141580F] border border-[#F1F5F9] w-[191.8px] h-[37px] mt-10">
            <img src={sym} alt="Symbol" className="w-5 h-5" />
            <span className="text-[14px] font-normal text-[#62748E] leading-[130%] font-sans">
              2M+ users worldwide
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-[60px] font-medium leading-[77px] tracking-[-0.02em] text-left text-slate-900 font-vend">
                Your AI Co-pilot for
                <br />
                Social Media Growth
                <br />
                (with){" "}
                <span className="font-bold leading-[112%] text-slate-900 font-bricolage">
                  BrandshipX
                </span>
              </h1>
            </div>

            <p className="text-[20px] text-[#62748E] mb-12 max-w-lg mx-auto leading-[150%] font-normal font-vend text-left">
              Auto-generate content calendars, captions, hashtags, and
              creatives, then tweak with drag-and-drop. Built for startups,
              creators, and SMEs.
            </p>

            {/* Email input with button inside */}
            <div className="relative w-[562px] h-[66px] text-left">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[562.55px] h-full pl-5 pr-[190px] rounded-[36px] border-[1.16px] border-[#E2E8F0] bg-white text-[#45556C7A] placeholder-[#45556C7A] text-[20px] leading-[130%] font-normal font-vend"
              />

              <button className="absolute top-1/2 right-[4px] -translate-y-1/2 inline-flex items-center justify-center gap-2 w-[186px] h-[56px] bg-gradient-to-r from-[#FF6F5E] to-[#FFD4AA] p-[2px] rounded-[260px] group">
                <div className="w-full h-full bg-[#212121] rounded-[260px] flex items-center justify-center gap-2 group-hover:bg-gray-800 transition-all duration-200">
                  <img
                    src={btnImage}
                    alt=""
                    className="w-[16.3px] h-[16.3px] border-[1.45px]"
                  />
                  <span className="font-vend font-normal text-[20px] leading-[131%] text-white">
                    Book a Demo
                  </span>
                </div>
              </button>
            </div>

            {/* Star Rating */}
            <div className="flex gap-2 mb-8 text-left">
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
                Auto-generate content calendars
              </span>
            </div>
          </div>

          {/* Right side - Dashboard mockup */}
         <div className="w-[650px] h-[540px] mb-10 ml-22">
  <img src={Homeimg} alt="Dashboard Analytics" className="" />
</div>

        </div>
      </div>
    </div>
  );
};

export default HomeHero;
