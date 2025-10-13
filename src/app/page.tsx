// Lady-J Homepage - Clone do site oficial
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BannerSection from "@/components/BannerSection";
import StatsSection from "@/components/StatsSection";
import ParallaxSection from "@/components/ParallaxSection";
import DJsGrid from "@/components/DJsGrid";
import ScrollingText from "@/components/ScrollingText";
import FullScreenImage from "@/components/FullScreenImage";
import TutorsSection from "@/components/TutorsSection";
import TimelineSection from "@/components/TimelineSection";
import EventsSection from "@/components/EventsSection";
import PartnersSection from "@/components/PartnersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-ladyj-dark overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Banner Section - Vídeo de fundo com texto */}
      <BannerSection />

      {/* Hero Section - Primeira dobra com texto animado */}
      <HeroSection />

      {/* Stats Section - Números da primeira edição */}
      <StatsSection />

      {/* Parallax Section - Imagem full screen com efeito parallax */}
      <ParallaxSection />

      {/* DJs Grid - Grid das DJs participantes */}
      <DJsGrid />

      {/* Scrolling Text - Texto animado horizontal */}
      <ScrollingText />

      {/* Full Screen Image - Imagem modelo ocupando toda a tela */}
      <FullScreenImage />

      {/* Tutors Section - Art Director e Tutors */}
      <TutorsSection />

      {/* Timeline Section - Como funciona (5 fases) */}
      <TimelineSection />

      {/* Events Section - Beach clubs e eventos */}
      <EventsSection />

      {/* Partners Section - Parceiros e sponsors */}
      <PartnersSection />
    </main>
  );
}
