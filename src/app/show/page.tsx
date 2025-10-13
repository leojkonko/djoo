"use client";

import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";

export default function ShowPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner />

      {/* Show Art Section */}
      <section className="w-full h-screen">
        <div>
          <Image
            src="/show_principal.jpg"
            alt="IZA Show - Sábado 12/04 - Abertura 22h00 - Av. Parque do Imigrante, Alto do Parque, Lajeado - RS"
            width={1920}
            height={1080}
            className="w-full h-200vh object-contain relative"
            priority
          />
        </div>
      </section>
    </main>
  );
}
