import React from 'react';

const Results = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-[44px] font-semibold text-[#0F172B] mb-8 leading-[52px] font-vend">
          Results and Analytics
        </h1>
        <p className="text-[20px] text-[#62748E] mb-12 max-w-lg mx-auto leading-[150%] font-normal font-vend">
          AI does the heavy lifting, smart recs fine-tune tone & timing, and analytics + tiered plans help you scale.
        </p>
      </div>

      {/* Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real Impact */}
        <div className="bg-[#F8FAFC] rounded-[20px] p-3">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-[20px] font-medium text-[#1D293D] mb-4 leading-[120%] font-vend text-left">Real Impact</h2>
            <div className="w-[280px] h-0 border-t border-[#CAD5E2] mx-auto mb-2"></div>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-4 text-[14px] font-light text-[#62748E] mb-4 leading-[120%] font-vend">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                <span>Before BrandshipX</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                <span>After BrandshipX</span>
              </div>
            </div>
            
            {/* Bar Chart */}
            <div className="mb-4">
              <div className="flex items-end justify-around h-48 mb-3 px-4">
                {/* Engagement Bar */}
                 <div className="flex items-end gap-2">
              <div className="w-[28px] bg-[#CAD5E2] rounded-[4px]" style={{height: '70px'}}></div>
              <div className="w-[28px] bg-[#A68EED] rounded-[4px]" style={{height: '148px'}}></div>
            </div>
                
                {/* Time Saved Bar */}
                <div className="flex items-end gap-2">
              <div className="w-[28px] bg-[#CAD5E2] rounded-[4px]" style={{height: '15px'}}></div>
              <div className="w-[28px] bg-[#A68EED] rounded-[4px]" style={{height: '111px'}}></div>
            </div>
                
                {/* Consistency Bar */}
                 <div className="flex items-end gap-2">
              <div className="w-[28px] bg-[#CAD5E2] rounded-[4px]" style={{height: '77px'}}></div>
              <div className="w-[28px] bg-[#A68EED] rounded-[4px]" style={{height: '166px'}}></div>
            </div>
              </div>
              
             <div className="flex gap-4 text-[14px] font-light text-[#45556C] leading-[150%] font-vend text-center">
  <span>Engagement</span>
  <span>Time Saved</span>
  <span>Consistency</span>
</div>
            </div>
          </div>
          
          <p className="text-[14px] font-light text-[#45556C] leading-[150%] font-vend text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>

        {/* User Base */}
        <div className="bg-[#F8FAFC] rounded-[20px] p-3">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-[20px] font-medium text-[#1D293D] mb-4 leading-[120%] font-vend text-left">User Base</h2>
             <div className="w-[280px] h-0 border-t border-[#CAD5E2] mx-auto mb-2"></div>
            
            {/* Legend */}
            <div className="flex items-center justify-center gap-4 text-[14px] font-light text-[#62748E] mb-4 leading-[120%] font-vend">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-pink-500 rounded-sm"></div>
    <span>Creators</span>
  </div>
  <div className="flex items-center gap-1">
    <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
    <span>Startups</span>
  </div>
  <div className="flex items-center gap-1">
    <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
    <span>SMEs</span>
  </div>
  <div className="flex items-center gap-1">
    <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
    <span>Others</span>
  </div>
            </div>
            
    {/* Donut Chart */}
            <div className="flex justify-center mb-4">
              <div className="relative w-[220px] h-[220px]">
                <svg viewBox="0 0 220 220" className="w-[220px] h-[220px]">
                  {/* Creators segment (pink) - 40% with gap */}
                  <path
                    d="M 110.2 20 A 90 90 0 0 1 199.8 109.8"
                    fill="none"
                    stroke="#F999EA"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  {/* Startups segment (purple) - 35% with gap */}
                  <path
                    d="M 200 110.2 A 90 90 0 0 1 109.8 199.8"
                    fill="none"
                    stroke="#A68EED"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  {/* SMEs segment (orange) - 15% with gap */}
                  <path
                    d="M 110.2 200 A 90 90 0 0 1 35.2 145.2"
                    fill="none"
                    stroke="#FBAF8D"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                  {/* Others segment (gray) - 10% with gap */}
                  <path
                    d="M 35 144.8 A 90 90 0 0 1 109.8 20.2"
                    fill="none"
                    stroke="#CAD5E2"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[14px] font-light text-[#45556C] leading-[150%] font-vend">Total</span>
                  <span className="text-[20px] font-medium text-[#1D293D] mb-4 leading-[120%] font-vend ">1.73 M</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[14px] font-light text-[#45556C] leading-[150%] font-vend text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>

        {/* Follower Base */}
        <div className="bg-[#F8FAFC] rounded-[20px] p-3">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-[20px] font-medium text-[#1D293D] mb-4 leading-[120%] font-vend text-left">Follower Base</h2>
             <div className="w-[280px] h-0 border-t border-[#CAD5E2] mx-auto mb-2"></div>
            
            {/* Legend */}
             <div className="flex items-center justify-center gap-4 text-[14px] font-light text-[#62748E] mb-4 leading-[120%] font-vend">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-gray-300 rounded-sm"></div>
                <span>Without BrandshipX</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
                <span>With BrandshipX</span>
              </div>
            </div>
            
            {/* Line Chart */}
            <div className="mb-4">
              <div className="relative h-48 mb-3 bg-white rounded p-2">
                <svg viewBox="0 0 300 140" className="w-full h-full">
                  {/* Grid lines */}
                  <defs>
                    <pattern id="grid" width="30" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 28" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="300" height="140" fill="url(#grid)" />
                  
                  {/* Without BrandshipX line (gray) - flatter growth */}
                  <path
                    d="M 20 110 L 80 105 L 140 100 L 200 95 L 280 90"
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="2.5"
                  />
                  
                  {/* With BrandshipX line (purple) - steep growth */}
                  <path
                    d="M 20 120 L 80 100 L 140 70 L 200 40 L 280 20"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
              
              <div className="flex justify-between text-[12px] text-[#45556C] font-medium px-2 font-vend">
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
              </div>
            </div>
          </div>
          
          <p className="text-[14px] font-light text-[#45556C] leading-[150%] font-vend text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;