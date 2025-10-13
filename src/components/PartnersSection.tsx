"use client";

import Image from "next/image";

const PartnersSection = () => {
  return (
    <section className="py-20 bg-[#f3f3f3] -mt-9 ">
      <div className="w-full px-8 lg:px-16">
        {/* Main Sponsor */}
        <div className="text-center mb-20">
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
        </div>

        {/* Supported By Text */}
        <div className="text-center mb-16">
          <h3 className="text-lg text-[#312f2e] text-light">SUPPORTED BY</h3>
        </div>

        {/* Partners Grid - First Row (2 logos) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center justify-items-center">
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
        </div>

        {/* Partners Grid - Second Row (3 logos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 items-center justify-items-center">
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
        </div>

        {/* Technical Partners Text */}
        <div className="text-center mt-20 mb-16">
          <h3 className="text-lg text-[#312f2e] text-extralight">
            TECHNICAL PARTNERS
          </h3>
        </div>

        {/* Technical Partners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center">
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
