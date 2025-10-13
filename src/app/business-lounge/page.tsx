"use client";

import VideoBanner from "@/components/VideoBanner";
import ImageFeatureSection from "@/components/ImageFeatureSection";

export default function BusinessLoungePage() {
  const features = [
    {
      number: 1,
      title: "STANDS E EXPOSITORES:",
      description:
        "Marcas de diversos segmentos (moda, beleza, turismo, gastronomia, design, tecnologia, saúde, bem-estar e serviços) poderão expor seus produtos, realizar vendas e ativações.",
    },
    {
      number: 2,
      title: "ESPAÇO INSTAGRAMÁVEL & ATIVAÇÕES:",
      description:
        "Cenografias planejadas para gerar alto engajamento digital.",
    },
    {
      number: 3,
      title: "NETWORKING:",
      description:
        "Com lounges e catering preparados para criar momentos de conversa e fechamento de parcerias.",
    },
    {
      number: 4,
      title: "RODADAS DE NEGÓCIOS:",
      description:
        "Com agendamento prévio entre expositores e compradores, fomentando oportunidades reais de crescimento.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner />

      <ImageFeatureSection
        imageSrc="/bussiness_bg.jpg"
        imageAlt="Business Lounge"
        introText="Um espaço estratégico de negócios, experiências e conexões reais."
        features={features}
        closingText="A proposta é transformar o evento também em um centro de negócios para a economia regional."
      />
    </main>
  );
}
