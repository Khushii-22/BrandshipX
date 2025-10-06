import React from 'react';
import pricing1 from "../../assets/pricing1.svg";
import pricing2 from "../../assets/pricing2.svg";
import pricing3 from "../../assets/pricing3.svg";
import pricing4 from "../../assets/pricing4.svg";
import corner1 from "../../assets/1.1.png";
import corner2 from "../../assets/1.2.png";
import corner3 from "../../assets/1.3.png";
import corner4 from "../../assets/1.4.png";
import bottomCorner from "../../assets/1.5.png";

export default function Pricing() {
  const pricingCards = [
    { 
      main: pricing1, 
      corner: corner1, 
      alt: "Trial Plan", 
      plan: "Trial Plan",
      price: "$70.99",
      showBadge: false
    },
    { 
      main: pricing2, 
      corner: corner2, 
      alt: "Growth Plan", 
      plan: "Growth Plan",
      price: "$90.99",
      showBadge: false
    },
    { 
      main: pricing3, 
      corner: corner3, 
      alt: "Pro Plan", 
      plan: "Pro Plan",
      price: "$120.99",
      showBadge: true
    },
    { 
      main: pricing4, 
      corner: corner4, 
      alt: "Enterprise Plan", 
      plan: "Enterprise Plan",
      price: "$150.99",
      showBadge: false
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
       <div className="text-center mb-16">
         <h1 className="text-[44px] font-semibold text-[#0F172B] mb-8 leading-[52px] font-vend">
            Pricing Plans
          </h1>
         <p className="text-[20px] text-[#62748E] mb-12 max-w-lg mx-auto leading-[150%] font-normal font-vend">
           AI does the heavy lifting, smart recs fine-tune tone & timing, and analytics + tiered plans help you scale.
          </p>
      </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pricingCards.map((card, index) => (
            <div key={index} className="relative">
              {/* Main pricing card image */}
              <img 
                src={card.main} 
                alt={card.alt}
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              
              {/* Top-left corner image */}
              <img
                src={card.corner}
                alt=""
                className="absolute top-2 left-8 w-14 h-14 object-contain"
              />
              
              {/* "Highest Selling" badge (only for Pro Plan) */}
              {card.showBadge && (
                <div className="absolute top-8 right-8 w-32 h-[37px] rounded-lg border border-white/40 px-2.5 py-2 flex items-center justify-center gap-2.5" style={{ background: 'linear-gradient(94.1deg, rgba(255, 255, 255, 0.4) -9.21%, rgba(255, 255, 255, 0.3) 103%)' }}>
                  <span className="text-base leading-snug text-[#45556C] whitespace-nowrap">Highest Selling</span>
                </div>
              )}
              
              {/* Plan name with background */}
              <div className="absolute top-24 left-8">
                <div className="w-[135px] h-9 rounded-lg border border-slate-100 bg-white px-2.5 py-2 flex items-center justify-start gap-2.5">
                  <span className="text-base leading-snug text-[#62748E]">{card.plan}</span>
                </div>
              </div>
              
              {/* Text Content Overlay */}
              <div className="absolute top-33 left-8 right-8 text-left">
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-5xl font-semibold leading-none text-[#1D293D]">{card.price}</span>
                  <span className="text-base leading-snug text-[#62748E]">per month</span>
                </div>
                <p className="text-base leading-relaxed text-[#62748E]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit,
                  sed do eiusmod tempor incididunt ut labore
                </p>
              </div>
              
              {/* Arrow button */}
              <div className="absolute bottom-8 right-8">
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Bottom-right corner image */}
              <img
                src={bottomCorner}
                alt=""
                className="absolute bottom-6 right-6 w-[58px] h-[58px] object-contain"
              />
            </div>
          ))}
        </div>

        {/* View More Details Link */}
        <div className="text-center">
          <button className="w-[181px] h-[52px] px-5 py-3.5 bg-white border border-[#E2E8F0] rounded-full text-[#1D293D] text-lg font-normal leading-[131%] hover:bg-gray-50 transition-colors duration-200 whitespace-nowrap">
            View more details
          </button>
        </div>
      </div>
    </div>
  );
}