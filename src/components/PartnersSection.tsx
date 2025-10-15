"use client";

import { motion } from "framer-motion";

const PartnersSection = () => {
  return (
    <section className="py-20 -mt-9">
      <div className="w-full px-8 lg:px-16">
        {/* Main Sponsor */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: false }}
        >
          <div className="flex justify-center">
            <motion.div
              className="w-80 h-32 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                borderColor: "#666",
                rotateY: 10,
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-black font-bold text-xl">SUA MARCA</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Supported By Text */}
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
          transition={{ duration: 1.0, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h3 className="text-lg text-[#312f2e] text-light tracking-wider">
            SUPPORTED BY
          </h3>
        </motion.div> */}

        {/* Partners Grid - First Row (3 logos) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 items-center justify-items-center max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                rotateZ: 2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                rotateZ: -2,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, x: 100, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.05,
                rotateZ: 3,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Partners Grid - Second Row (3 logos) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 items-center justify-items-center max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                rotateZ: 5,
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                rotateZ: -3,
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                rotateZ: 3,
                boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Technical Partners Text */}
        {/* <motion.div
          className="text-center mt-24 mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <h3 className="text-lg text-[#312f2e] font-extralight tracking-wider">
            TECHNICAL PARTNERS
          </h3>
        </motion.div> */}

        {/* Technical Partners (2 logos) */}
        <motion.div
          className="flex justify-between items-center max-w-6xl mx-auto px-4 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="flex justify-start"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.08,
                rotateY: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-72 h-28 bg-white border-2 border-gray-300 flex items-center justify-center"
              whileHover={{
                scale: 1.08,
                rotateY: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <span className="text-black font-bold text-lg">SUA MARCA</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
