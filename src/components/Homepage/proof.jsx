import React from "react";
import clImage from "../../assets/cl.png";
import googleImage from "../../assets/google.png";
import avatarImage from "../../assets/avatar.png";

export default function SocialProof() {
  const testimonialData = {
    name: "Aman Kumar Jha",
    title: "Product Manager at Cache Labs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    avatar: "",
  };

  const StatCard = ({
    bgColor,
    textColor = "text-[#62748E]",
    customStyle = "",
  }) => (
    <div
      className={`rounded-xl p-6 flex flex-col justify-between border ${customStyle}`}
    >
      <div>
        <div className="text-[48px] font-semibold font-bricolage text-[#1D293D] leading-[100%]">
          78%
        </div>
        <div
          className={`text-[16px] font-normal font-vend ${textColor} mt-1 leading-[100%]`}
        >
          conversion rate
        </div>
      </div>
      <div className="">
        <img src={googleImage} alt="Google" className="w-[111px] h-[36.53px]" />
      </div>
    </div>
  );

  const TestimonialCard = ({ position = "right" }) => (
    <div className="w-full h-[264px] opacity-100 border border-[#0F172B0F] rounded-[20px] bg-[#F8FAFC] p-6 text-left flex flex-col justify-end">
      <p className="text-[#45556C] text-[20px] font-normal font-vend leading-[165%] mb-4">
        {testimonialData.text}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3">
          <img
            src={avatarImage}
            alt={testimonialData.name}
            className="w-[44px] h-[44px] rounded-lg object-cover"
          />
          <div>
            <div className="font-medium font-vend text-[20px] text-[#1D293D] leading-[120%]">
              {testimonialData.name}
            </div>
            <div className="font-light font-vend text-[14px] text-[#62748E] leading-[120%]">
              {testimonialData.title}
            </div>
          </div>
        </div>
        <div className="text-gray-400">
          <img src={clImage} alt="CL Logo" className="w-[105px] h-[38px]" />
        </div>
      </div>
    </div>
  );

  // Custom style for purple gradient
  const customCardStyle1 =
    "w-full h-[264px] opacity-100 border border-[#0F172B0F] rounded-[20px] bg-gradient-to-br from-[rgba(237,232,250,0.6)] to-[rgba(177,172,250,0.6)]";

  // Custom style for pink gradient
  const customCardStyle2 =
    "w-full h-[264px] opacity-100 border border-[#0F172B0F] rounded-[20px] bg-gradient-to-br from-[rgba(250,235,248,0.6)] to-[rgba(248,179,237,0.6)]";

  // Custom style for orange gradient
  const customCardStyle3 =
    "w-full h-[264px] opacity-100 border border-[#0F172B0F] rounded-[20px] bg-gradient-to-br from-[rgba(255,240,233,0.6)] to-[rgba(250,177,145,0.6)]";

  return (
    <div className="max-w-[1400px] mx-auto px-6 mt-26">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-[44px] font-semibold text-[#0F172B] mb-8 leading-[52px] font-vend">
          Social Proof Lorem ipsum
        </h1>
        <p className="text-[20px] text-[#62748E] mb-12 max-w-lg mx-auto leading-[150%] font-normal font-vend">
          Trusted By Growing Brands Lorem ipsum dolor sit amet
        </p>
      </div>

      {/* Grid Layout with proper spacing */}
      <div className="grid grid-cols-12 gap-8">
        {/* Row 1 */}
        <div className="col-span-3">
          <StatCard customStyle={customCardStyle1} />
        </div>
        <div className="col-span-3">
          <StatCard customStyle={customCardStyle2} />
        </div>
        <div className="col-span-6">
          <TestimonialCard />
        </div>

        {/* Row 2 - Fixed spacing */}
        <div className="col-span-6">
          <TestimonialCard />
        </div>
        <div className="col-span-3">
          <StatCard customStyle={customCardStyle1} />
        </div>
        <div className="col-span-3">
          <StatCard customStyle={customCardStyle3} />
        </div>

        {/* Row 3 */}
        <div className="col-span-3">
          <StatCard customStyle={customCardStyle2} />
        </div>
        <div className="col-span-3">
          <StatCard customStyle={customCardStyle3} />
        </div>
        <div className="col-span-6">
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
}