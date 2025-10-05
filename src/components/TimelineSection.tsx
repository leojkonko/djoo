"use client";

import Image from "next/image";

const TimelineSection = () => {
  return (
    <section className="relative w-full h-screen bg-white">
      <Image
        src="/show.jpg"
        alt="Show"
        fill
        className="object-cover object-top my-4"
        priority
      />

      {/* Spotify Logo - Bottom Center */}
      <div className="absolute bottom-8 left-[15%] transform  z-10">
        <button className="border-black border px-4 py-3 text-black hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-300 tracking-wider">
          GARANTA SEU INGRESSO
        </button>
      </div>
      <div className="absolute -bottom-48 left-[48%] transform -translate-x-1/2 z-10">
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
