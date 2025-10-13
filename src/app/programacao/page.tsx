"use client";

import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";
import Link from "next/link";

export default function ProgramacaoPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* <VideoBanner /> */}

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Programação
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Confira a programação completa de cada dia do evento.
          </p>
        </div>

        <div className="max-w-full mx-auto flex flex-col items-center gap-10 lg:gap-16">
          {/* Day One */}
          <Link href="/programacao/dia-1" className="w-full max-w-5xl">
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="/dayone.jpg"
                alt="Programação Dia 1"
                width={1200}
                height={675}
                className="object-cover w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  VER DIA 1
                </h2>
              </div>
            </div>
          </Link>

          {/* Day Two */}
          <Link href="/programacao/dia-2" className="w-full max-w-5xl">
            <div className="group relative overflow-hidden rounded-lg cursor-pointer">
              <Image
                src="/daytwo.jpg"
                alt="Programação Dia 2"
                width={1200}
                height={675}
                className="object-cover w-full h-auto transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  VER DIA 2
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
