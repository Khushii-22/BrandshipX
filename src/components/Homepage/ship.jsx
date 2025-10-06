import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import btnImage from "../../assets/btn.png";

const Ship = () => {
  const [activeTab, setActiveTab] = useState("calendar");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Main interface animations - 10 scroll steps
  // Step 1 (0-0.1): Scroll down 80% of interface visible
  // Step 2-3 (0.1-0.3): Move towards right
  // Step 4 (0.3-0.4): Text comes from left
  // Step 5 (0.4-0.5): Interface comes to center, text invisible
  // Step 6-7 (0.5-0.7): Interface goes towards left
  // Step 8 (0.7-0.8): Text comes from right
  // Step 9 (0.8-0.9): Interface comes to center
  // Step 10 (0.9-1.0): Scroll down from 20% to 100% visible

  const interfaceX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.4, 0.5, 0.7, 0.8, 0.9, 1],
    [0, 0, 400, 400, 0, -400, -400, 0, 0]
  );

  const interfaceY = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0, 0, 0, 0]
  );

  const interfaceOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 0.95, 1],
    [1, 1, 1, 1, 1]
  );

  // Clip path to show only 80% in first scroll
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]
  );

  // First text animation (appears from left when interface is on right)
  const firstTextX = useTransform(scrollYProgress, [0.3, 0.4], [-400, 0]);

  const firstTextOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.35, 0.4, 0.5],
    [0, 1, 1, 0]
  );

  // Second text animation (appears from right when interface is on left)
  const secondTextX = useTransform(scrollYProgress, [0.7, 0.8], [400, 0]);

  const secondTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.75, 0.8, 0.9],
    [0, 1, 1, 0]
  );

  // Filler animations - smooth automatic filling
  const [leftFiller1, setLeftFiller1] = useState(0);
  const [leftFiller2, setLeftFiller2] = useState(0);
  const [rightFiller1, setRightFiller1] = useState(0);
  const [rightFiller2, setRightFiller2] = useState(0);
  const [leftTextVisible, setLeftTextVisible] = useState(false);
  const [rightTextVisible, setRightTextVisible] = useState(false);

  // Track when text is visible based on scroll
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Left text visible between 0.35 and 0.5
      if (latest >= 0.35 && latest <= 0.5) {
        setLeftTextVisible(true);
      } else {
        setLeftTextVisible(false);
        setLeftFiller1(0);
        setLeftFiller2(0);
      }

      // Right text visible between 0.75 and 0.9
      if (latest >= 0.75 && latest <= 0.9) {
        setRightTextVisible(true);
      } else {
        setRightTextVisible(false);
        setRightFiller1(0);
        setRightFiller2(0);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  // Auto-fill left text bars
  React.useEffect(() => {
    if (!leftTextVisible) return;

    const interval = setInterval(() => {
      if (leftFiller1 < 100) {
        setLeftFiller1((prev) => Math.min(prev + 1, 100));
      } else if (leftFiller2 < 100) {
        setLeftFiller2((prev) => Math.min(prev + 1, 100));
      }
    }, 20); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [leftTextVisible, leftFiller1, leftFiller2]);

  // Auto-fill right text bars
  React.useEffect(() => {
    if (!rightTextVisible) return;

    const interval = setInterval(() => {
      if (rightFiller1 < 100) {
        setRightFiller1((prev) => Math.min(prev + 1, 100));
      } else if (rightFiller2 < 100) {
        setRightFiller2((prev) => Math.min(prev + 1, 100));
      }
    }, 20); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [rightTextVisible, rightFiller1, rightFiller2]);

  return (
    <div className="py-2">
      <div ref={containerRef} style={{ minHeight: "400vh" }}>
        <div className="sticky top-20 h-screen flex items-center justify-center overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 w-full relative">
            {/* Header */}
            <div className="text-center mb-2">
              <h1 className="text-[44px] font-semibold text-[#0F172B] mb-8 leading-[52px]">
                Everything You Need to Ship, Daily
              </h1>
              <p className="text-[20px] text-[#62748E] mb-12 max-w-lg mx-auto leading-[150%] font-normal">
                Auto-generate content calendars, captions, hashtags, and
                creatives, then tweak with drag-and-drop.
              </p>
            </div>

            {/* Main Interface with scroll animation */}
            <motion.div
              style={{
                x: interfaceX,
                y: interfaceY,
                opacity: interfaceOpacity,
                clipPath: clipPath,
              }}
              className="relative z-0"
            >
              <div className="bg-gray-100 rounded-2xl shadow-xl overflow-hidden mb-6 max-w-5xl mx-auto">
                {/* Browser-like header */}
                <div className="bg-gray-100 px-6 py-4 flex items-center"></div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="h-[460px] w-full bg-gray-100 rounded-lg flex items-center justify-center"></div>
                </div>
              </div>
            </motion.div>

            {/* First Text - Appears from LEFT when interface moves right */}
            <motion.div
              style={{
                x: firstTextX,
                opacity: firstTextOpacity,
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-80 z-10"
            >
              <div className="text-left">
                <div className="relative mb-3">
                  <div className="absolute left-0 top-0 w-1 bg-gray-200 h-full rounded-full overflow-hidden">
                    <div
                      style={{ 
                        height: `${leftFiller1}%`,
                        transition: 'height 0.7s linear'
                      }}
                      className="w-full bg-gradient-to-b from-[#6366F1] to-[#8B5CF6] origin-top"
                    />
                  </div>
                  <div 
                    className="pl-6 transition-opacity duration-300"
                    style={{ 
                      opacity: leftFiller1 > 0 && leftFiller1 < 100 ? 1 : 0.4 
                    }}
                  >
                    <h3 className="font-semibold text-[24px] leading-[120%] tracking-[0%] text-[#0F172B] mb-3">
                      AI Captions & Hashtags
                    </h3>
                    <p className="font-light text-[16px] leading-[150%] tracking-[0.02em] text-[#45556C] mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="relative mb-4">
                  <div className="absolute left-0 top-0 w-1 bg-gray-200 h-full rounded-full overflow-hidden">
                    <div
                      style={{ 
                        height: `${leftFiller2}%`,
                        transition: 'height 0.7s linear'
                      }}
                      className="w-full bg-gradient-to-b from-[#6366F1] to-[#8B5CF6] origin-top"
                    />
                  </div>
                  <div 
                    className="pl-6 transition-opacity duration-300"
                    style={{ 
                      opacity: leftFiller2 > 0 && leftFiller2 < 100 ? 1 : 0.4 
                    }}
                  >
                    <h3 className="font-semibold text-[24px] leading-[120%] tracking-[0%] text-[#0F172B] mb-2">
                      AI Calendar
                    </h3>
                    <p className="font-light text-[16px] leading-[150%] tracking-[0.02em] text-[#45556C] mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      ut enim ad
                    </p>
                  </div>
                </div>
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
            </motion.div>

            {/* Second Text - Appears from right when interface is on left */}
            <motion.div
              style={{
                x: secondTextX,
                opacity: secondTextOpacity,
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-80 z-10"
            >
              <div className="text-left">
                <div className="relative mb-3">
                  <div className="absolute left-0 top-0 w-1 bg-gray-200 h-full rounded-full overflow-hidden">
                    <div
                      style={{ 
                        height: `${rightFiller1}%`,
                        transition: 'height 0.1s linear'
                      }}
                      className="w-full bg-gradient-to-b from-[#6366F1] to-[#8B5CF6] origin-top"
                    />
                  </div>
                  <div 
                    className="pl-6 transition-opacity duration-300"
                    style={{ 
                      opacity: rightFiller1 > 0 && rightFiller1 < 100 ? 1 : 0.4 
                    }}
                  >
                    <h3 className="font-semibold text-[24px] leading-[120%] tracking-[0%] text-[#0F172B] mb-3">
                      AI Captions & Hashtags
                    </h3>
                    <p className="font-light text-[16px] leading-[150%] tracking-[0.02em] text-[#45556C] mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore
                    </p>
                  </div>
                </div>
                <div className="relative mb-4">
                  <div className="absolute left-0 top-0 w-1 bg-gray-200 h-full rounded-full overflow-hidden">
                    <div
                      style={{ 
                        height: `${rightFiller2}%`,
                        transition: 'height 0.1s linear'
                      }}
                      className="w-full bg-gradient-to-b from-[#6366F1] to-[#8B5CF6] origin-top"
                    />
                  </div>
                  <div 
                    className="pl-6 transition-opacity duration-300"
                    style={{ 
                      opacity: rightFiller2 > 0 && rightFiller2 < 100 ? 1 : 0.4 
                    }}
                  >
                    <h3 className="font-semibold text-[24px] leading-[120%] tracking-[0%] text-[#0F172B] mb-3">
                      AI Calendar
                    </h3>
                    <p className="font-light text-[16px] leading-[150%] tracking-[0.02em] text-[#45556C] mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      ut enim ad
                    </p>
                  </div>
                </div>
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
            </motion.div>
          </div>
        </div>
      </div>

      {/* Feature Cards - STATIC - stays in original position */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="w-full h-px border-t border-[#E2E8F0] opacity-100 mb-8"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded bg-[#E2E8F0]"></div>
              <h3 className="text-[20px] font-medium text-[#314158] leading-[120%]">
                Built for Startups
              </h3>
            </div>
            <p className="text-[16px] font-normal text-[#62748E] leading-[150%] text-left">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded bg-[#E2E8F0]"></div>
              <h3 className="text-[20px] font-medium text-[#314158] leading-[120%]">
                Built for Startups
              </h3>
            </div>
            <p className="text-[16px] font-normal text-[#62748E] leading-[150%] text-left">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-6 rounded bg-[#E2E8F0]"></div>
              <h3 className="text-[20px] font-medium text-[#314158] leading-[120%]">
                Built for Startups
              </h3>
            </div>
            <p className="text-[16px] font-normal text-[#62748E] leading-[150%] text-left">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ship;