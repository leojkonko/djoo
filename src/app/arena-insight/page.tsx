"use client";

import VideoBanner from "@/components/VideoBanner";
import ImageFeatureSection from "@/components/ImageFeatureSection";

export default function ArenaInsightPage() {
  const features = [
    {
      number: 1,
      title: "Talks e Palestras Inspiradoras:",
      description:
        "Com nomes relevantes do mercado de moda, empreendedorismo, branding, inovação e cultura.",
    },
    {
      number: 2,
      title: "Painéis Temáticos:",
      description:
        "Debates sobre comportamento, consumo, imagem, posicionamento de marca, vendas e muito mais.",
    },
    {
      number: 3,
      title: "Participações Especiais:",
      description:
        "Convidados com trajetórias únicas que compartilham experiências reais de sucesso.",
    },
    {
      number: 4,
      title: "Ambiente Sofisticado e Convidativo:",
      description:
        "Cenografia acolhedora, som e iluminação de qualidade para oferecer conforto e foco ao conteúdo.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <VideoBanner />
      
      <ImageFeatureSection
        imageSrc="/arena.jpg"
        imageAlt="Arena Insight"
        introText="Um espaço exclusivo para conhecimento, tendências e transformação."
        features={features}
        closingText="Esta praça terá programação contínua paralela aos desfiles e ao lounge, permitindo que o público circule entre conhecimento, moda e negócios."
      />
    </main>
  );
}
