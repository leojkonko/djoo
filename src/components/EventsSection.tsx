"use client";

import Image from "next/image";

const EventsSection = () => {
  return (
    <section className="relative w-full h-screen mt-8">
      <Image
        src="/days.jpg"
        alt="Days"
        fill
        className="object-contain"
        priority
      />
    </section>
  );
};

export default EventsSection;
