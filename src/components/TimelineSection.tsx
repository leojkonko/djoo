"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TimelineSection = () => {
  return (
    <section className="relative w-full lg:h-screen bg-white">
      {/* Desktop Image */}
      <motion.div
        className="absolute inset-0 hidden lg:block"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        <Image
          src="/show.jpg"
          alt="Show"
          fill
          className="object-cover object-top my-4"
          priority
        />
      </motion.div>

      {/* Overlay animado para desktop */}
      <motion.div
        className="absolute inset-0 via-transparent to-transparent hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: false }}
      />

      {/* Mobile Layout */}
      <motion.div
        className="lg:hidden flex flex-col items-center justify-center py-8 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.0,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        {/* Mobile Image */}
        <motion.div
          className="w-full max-w-sm aspect-square mb-6"
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
            damping: 15,
          }}
          viewport={{ once: false }}
          whileHover={{
            scale: 1.05,
            rotateY: 5,
            rotateX: 5,
            boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src="/show.jpg"
            alt="Show"
            width={400}
            height={400}
            className="w-full h-full object-contain rounded-lg transition-transform duration-500"
            priority
          />
        </motion.div>

        {/* Show Nacional Title */}
        <motion.h2
          className="text-2xl font-bold text-black mb-6 text-center"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          viewport={{ once: false }}
        >
          <motion.span
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
          >
            SHOW NACIONAL
          </motion.span>
          <br />
          <motion.span
            className="text-lg font-normal text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            [A DEFINIR]
          </motion.span>
        </motion.h2>

        {/* Mobile Button */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 120,
            damping: 15,
          }}
          viewport={{ once: false }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/show"
              className="inline-block border-black border px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-300 tracking-wider text-base mb-8"
            >
              GARANTA SEU INGRESSO
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Spotify Logo */}
        <div>
          <Image
            src="/spotify.png"
            alt="Spotify"
            width={120}
            height={36}
            className="object-contain w-64"
          />
        </div>
      </motion.div>

      {/* Desktop Button */}
      <motion.div
        className="hidden lg:block absolute bottom-8 left-[15%] transform z-10"
        initial={{ opacity: 0, x: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{
          duration: 1.0,
          delay: 1.0,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        viewport={{ once: false }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            rotateY: 10,
            rotateX: 5,
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/show"
            className="inline-block border-black border px-4 py-3 text-black hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-300 tracking-wider"
          >
            GARANTA SEU INGRESSO
          </Link>
        </motion.div>
      </motion.div>

      {/* Desktop Spotify Logo */}
      <div className="hidden lg:block absolute -bottom-48 left-[48%] transform -translate-x-1/2 z-10">
        <Image
          src="/spotify.png"
          alt="Spotify"
          width={120}
          height={36}
          className="object-contain w-80"
        />
      </div>
    </section>
  );
};

export default TimelineSection;
