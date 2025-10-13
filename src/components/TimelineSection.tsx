"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TimelineSection = () => {
  return (
    <section className="relative w-full lg:h-screen bg-white">
      {/* Desktop Image */}
      <Image
        src="/show.jpg"
        alt="Show"
        fill
        className="object-cover object-top my-4 hidden lg:block"
        priority
      />

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center py-8 px-4">
        {/* Mobile Image */}
        <div className="w-full max-w-sm aspect-square mb-6">
          <Image
            src="/show.jpg"
            alt="Show"
            width={400}
            height={400}
            className="w-full h-full object-contain rounded-lg"
            priority
          />
        </div>

        {/* Show Nacional Title */}
        <motion.h2 
          className="text-2xl font-bold text-black mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          SHOW NACIONAL
          <br />
          <span className="text-lg font-normal text-gray-600">[A DEFINIR]</span>
        </motion.h2>

        {/* Mobile Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="/show"
            className="inline-block border-black border px-6 py-3 text-black hover:bg-black hover:text-white transition-all duration-300 tracking-wider text-base mb-8"
          >
            GARANTA SEU INGRESSO
          </Link>
        </motion.div>

        {/* Mobile Spotify Logo */}
        <Image
          src="/spotify.png"
          alt="Spotify"
          width={120}
          height={36}
          className="object-contain w-64"
        />
      </div>

      {/* Desktop Button - unchanged */}
      <div className="hidden lg:block absolute bottom-8 left-[15%] transform z-10">
        <Link
          href="/show"
          className="inline-block border-black border px-4 py-3 text-black hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-300 tracking-wider"
        >
          GARANTA SEU INGRESSO
        </Link>
      </div>

      {/* Desktop Spotify Logo - unchanged */}
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
