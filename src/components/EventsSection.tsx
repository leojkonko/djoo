"use client";

import Image from "next/image";
import Link from "next/link";

const EventsSection = () => {
  return (
    <section className="relative w-full mt-8">
      {/* Desktop - Original image */}
      <div className="hidden lg:block relative w-full h-screen">
        <Image
          src="/days.jpg"
          alt="Days"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Mobile - Interactive links */}
      <div className="lg:hidden py-8 px-4">
        <div className="max-w-full mx-auto flex flex-col items-center gap-8">
          {/* Day One */}
          <Link href="/programacao/dia-1" className="w-full max-w-md">
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="/dayone.jpg"
                alt="Programação Dia 1"
                width={600}
                height={400}
                className="object-cover w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-2xl font-bold text-white">
                  VER DIA 1
                </h2>
              </div>
            </div>
          </Link>

          {/* Day Two */}
          <Link href="/programacao/dia-2" className="w-full max-w-md">
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="/daytwo.jpg"
                alt="Programação Dia 2"
                width={600}
                height={400}
                className="object-cover w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-2xl font-bold text-white">
                  VER DIA 2
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
