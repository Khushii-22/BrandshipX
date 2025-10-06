import React from "react";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.svg";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import bgicon from "../../assets/bgicon.png";

const ValuePillars = () => {
  const pillars = [
    {
      title: "Automate",
      description: "Automate. Lorem ipsum dolor",
      cardImage: card1,
      icon: icon1,
    },
    {
      title: "Optimize",
      description: "Optimize. Lorem ipsum dolor",
      cardImage: card2,
      icon: icon2,
    },
    {
      title: "Scale",
      description: "Scale. Lorem ipsum dolor",
      cardImage: card3,
      icon: icon3,
    },
  ];

  return (
    <div className="min-h-[660px] flex items-center justify-center p-8 relative overflow-hidden rounded-t-[32px] bg-[#1C1C22] mt-18">
      {/* Base color layer */}
      <div className="absolute inset-0 bg-[#1C1C22]"></div>
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(90,53,166,0.8)] from-[-6.93%] to-[rgba(90,53,166,0)] to-[19.49%] z-1"></div>

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

      {/* Bottom Left */}
      <img
        src={bgicon}
        alt=""
        className="absolute bottom-0 left-0 w-40 h-40 opacity-100 -rotate-90 z-[1]"
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-[44px] font-semibold text-white mb-8 leading-[52px]">
            Value Pillars
          </h1>
          <p className="text-[20px] text-white/90 mb-12 max-w-2xl mx-auto leading-[150%] font-normal">
            AI does the heavy lifting, smart recs fine-tune tone & <br />{" "}
            timing, and analytics + tiered plans help you scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => {
            return (
              <div key={index} className="group">
                <div className="relative h-64 rounded-3xl bg-white/95 backdrop-blur-sm transition-all duration-500 flex flex-col items-center justify-center p-8 overflow-hidden">
                  {/* Card background image */}
                  <img
                    src={pillar.cardImage}
                    alt={`${pillar.title} card background`}
                    className="absolute inset-0 w-[294px] h-[308px] object-cover rounded-3xl"
                  />

                  {/* Icon overlay - PERFECTLY CENTERED */}
                  <div className={`absolute top-1/2 left-1/2 -translate-y-1/2 z-10 flex items-center justify-center ${index === 1 || index === 2 ? '-translate-x-[35%]' : '-translate-x-1/2'}`}>
                    <img
                      src={pillar.icon}
                      alt={`${pillar.title} icon`}
                      className="w-[117px] h-[129px] transition-all duration-500 group-hover:scale-130"
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[18px] text-white/90 mt-6 max-w-xs mx-auto leading-[150%] font-normal font-vend group-hover:text-white transition-colors duration-300">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ValuePillars;