"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EventsSection = () => {
  return (
    <section className="relative w-full mt-8">
      {/* Desktop - Original image */}
      <Link href="/programacao" className="hidden lg:block relative w-full h-screen group cursor-pointer">
        <Image
          src="/days.jpg"
          alt="Days"
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority
        />
        <motion.div 
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0, rotateZ: -180 }}
            whileHover={{ scale: 1, rotateZ: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white/90 backdrop-blur-sm px-12 py-6 rounded-lg shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-wider">
              Ver Programação
            </h2>
          </motion.div>
        </motion.div>
      </Link>

      {/* Mobile - Interactive links */}
      <div className="lg:hidden py-8 px-4">
        <motion.div 
          className="max-w-full mx-auto flex flex-col items-center gap-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, type: "spring", stiffness: 100 }}
          viewport={{ once: false }}
        >
          {/* Day One */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: false }}
            className="w-full max-w-md"
          >
            <Link href="/programacao/dia-1">
              <motion.div 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/dayone.jpg"
                  alt="Programação Dia 1"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white">
                    VER DIA 1
                  </h2>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Day Two */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.4,
              type: "spring",
              stiffness: 80,
              damping: 20
            }}
            viewport={{ once: false }}
            className="w-full max-w-md"
          >
            <Link href="/programacao/dia-2">
              <motion.div 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/daytwo.jpg"
                  alt="Programação Dia 2"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-white">
                    VER DIA 2
                  </h2>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
