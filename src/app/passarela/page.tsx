"use client";

import VideoBanner from "@/components/VideoBanner";
import ImageFeatureSection from "@/components/ImageFeatureSection";

export default function PassarelaPage() {
  const features = [
    {
      number: 1,
      title: "Desfiles Conceituais:",
      description:
        "Curadoria de Djoo Ferrari, explorando temas relevantes da moda contemporânea.",
    },
    {
      number: 2,
      title: "Desfiles Comerciais:",
      description:
        "Apresentação das coleções das marcas participantes, conectando diretamente com o consumidor final.",
    },
    {
      number: 3,
      title: "Desfiles de Estreia e Talentos:",
      description:
        "Espaço para novos criadores e modelos promissores da região.",
    },
    {
      number: 4,
      title: "Ambiente Cenográfico Imersivo:",
      description:
        "Criado para valorizar tanto o desfile quanto a experiência do público.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner
        videoUrl="https://res.cloudinary.com/dgbgqhrpa/video/upload/v1760372669/PASSARELA_ra0lyo.mp4
"
      />

      <ImageFeatureSection
        imageSrc="/passarela_bg.png"
        imageAlt="Passarela"
        introText="A passarela será o coração visual e emocional do evento."
        secondIntroText="Durante toda a programação, o palco de desfiles apresentará:"
        features={features}
        closingText="Este setor acontecerá com horários programados ao longo do dia e contará com cobertura fotográfica e audiovisual para gerar conteúdo para os expositores e para o evento."
      />
    </main>
  );
}
