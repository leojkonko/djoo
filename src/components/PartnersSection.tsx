"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="py-20 bg-[#f3f3f3] -mt-9 ">
      <div className="w-full px-8 lg:px-16">
        {/* Main Sponsor */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <motion.div 
              className="w-64 h-24 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{ scale: 1.05, borderColor: "#666" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Supported By Text */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-[#312f2e] text-light">SUPPORTED BY</h3>
        </motion.div>

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
