import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto px-6 overflow-visible">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-[44px] font-semibold text-[#0F172B] mb-8 leading-[52px]">
            How it Works?
          </h1>
          <p className="text-[20px] text-[#62748E] mb-16 max-w-lg mx-auto leading-[150%] font-normal">
            AI does the heavy lifting, smart recs fine-tune tone & timing, and
            analytics + tiered plans help you scale.
          </p>
        </div>

        {/* Cards Grid with decreased gap */}
        <div className="w-full overflow-visible">
          <div className="flex justify-center items-start gap-4 relative pb-15 pt-4"> {/* Changed from gap-6 to gap-4 */}
            {steps.map((step) => (
              <div key={step.id} className="relative group">
                <div
                  className="bg-white w-[282px] h-[282px] rounded-[28px] border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#0000000A,0px_4px_4px_0px_#00000008,0px_9px_6px_0px_#00000005,0px_17px_7px_0px_#00000003,0px_26px_7px_0px_#00000000] transition-all duration-500 ease-out cursor-pointer"
                  style={{
                    transform:
                      step.id === 1
                        ? "rotate(4.88deg) translateY(20px)"
                        : step.id === 2
                        ? "rotate(-3.67deg) translateY(20px)"
                        : step.id === 3
                        ? "rotate(4.88deg) translateY(20px)"
                        : "rotate(-4.61deg) translateY(20px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "rotate(0deg) scale(1.05) translateY(-60px)";
                    e.currentTarget.style.zIndex = "10";
                    e.currentTarget.style.boxShadow =
                      "0px 30px 40px -8px rgba(0, 0, 0, 0.2), 0px 20px 20px -8px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      step.id === 1
                        ? "rotate(4.88deg) translateY(20px)"
                        : step.id === 2
                        ? "rotate(-3.67deg) translateY(20px)"
                        : step.id === 3
                        ? "rotate(4.88deg) translateY(20px)"
                        : "rotate(-4.61deg) translateY(20px)";
                    e.currentTarget.style.zIndex = "1";
                    e.currentTarget.style.boxShadow =
                      "0px 1px 2px 0px #0000000A, 0px 4px 4px 0px #00000008, 0px 9px 6px 0px #00000005, 0px 17px 7px 0px #00000003, 0px 26px 7px 0px #00000000";
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;