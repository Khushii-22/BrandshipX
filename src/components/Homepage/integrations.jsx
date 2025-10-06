import React from 'react';
import midicon from '../../assets/midlogo.png'; // Adjust the path as needed

const Integrations = () => {
  return (
    <div className="flex items-center justify-center p-8 mt-20">
      <div className="relative w-full max-w-4xl bg-white rounded-[28px] border border-[#E2E8F0] shadow-[0px_1px_2px_0px_#0000000A,0px_4px_4px_0px_#00000008,0px_9px_6px_0px_#00000005,0px_17px_7px_0px_#00000003,0px_26px_7px_0px_#00000000] p-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-[36px] font-semibold text-[#0F172B] mb-8 leading-[52px] font-vend">
            Integrations. Works Where You Work
          </h1>
        </div>

        {/* Central container with only the image */}
        <div className="relative w-full h-96 mx-auto">
          {/* Central image */}
          <div className="relative w-[235px] h-[223px] top-10 mx-auto flex items-center justify-center">
            <img 
              src={midicon} 
              alt="Central Hub" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;