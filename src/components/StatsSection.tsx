"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    area: 0,
    desfiles: 0,
    show: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const animateCounter = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void
  ) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * easeOutCubic);

      callback(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          // Animate counters
          animateCounter(0, 5470, 2000, (value) => {
            setCounters((prev) => ({ ...prev, area: value }));
          });

          animateCounter(0, 20, 1500, (value) => {
            setCounters((prev) => ({ ...prev, desfiles: value }));
          });

          // For "SHOW", we'll just animate the visibility
          setTimeout(() => {
            setCounters((prev) => ({ ...prev, show: 1 }));
          }, 1000);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl lg:max-w-[90%] mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="mb-16">
          {/* 3 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left Column - RSMM Logo */}
            <div className="flex justify-center lg:justify-start h-full items-end">
              <div className="text-center">
                <Image
                  src="/RSMM.svg"
                  alt="RSMM - Rio Grande do Sul Mostra Moda"
                  width={200}
                  height={62}
                  className="w-auto h-16 md:h-20"
                />
              </div>
            </div>

            {/* Center Column - Text (2 columns wide) */}
            <div className="lg:col-span-2">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 leading-tight text-center">
                O RIO GRANDE DO SUL MOSTRA MODA
              </h2>
              <p className="text-gray-800 text-sm leading-tight text-justify">
                É um evento inédito que tem como objetivo transformar a cidade
                de Lajeado em um polo de <strong>referência em moda</strong>,
                estilo e inovação. Realizando pela <strong>Djoo Agency</strong>,
                o evento reunirá 20 marcas selecionadas para apresentar suas
                coleções em um desfile profissional conceitual, que une beleza,
                branding e performance. Com um formato enxuto, sofisticado e com
                curadoria de excelência, o evento terá duração de um único dia,
                oferecendo ao público uma imersão no{" "}
                <strong>universo fashion</strong>, com acesso a tendências,
                marcas autorais e nomes promissores do mercado.
              </p>
            </div>

            {/* Right Column - DJOO Logo */}
            <div className="flex justify-center lg:justify-end h-full items-end">
              <div className="text-center">
                <Image
                  src="/djoo.svg"
                  alt="DJOO Agency"
                  width={200}
                  height={70}
                  className="w-auto h-16 md:h-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-black rounded-lg overflow-hidden mb-16 aspect-[21/9] mx-auto relative">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
          </video>

          {/* Video overlay with logo */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/RSMM.svg"
                alt="RSMM"
                width={300}
                height={93}
                className="w-auto h-20 md:h-24 brightness-0 invert mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats Numbers */}
        <div
          ref={sectionRef}
          className="flex flex-col md:flex-row justify-center items-center gap-16 text-center"
        >
          <div>
            <div
              className={`text-6xl md:text-8xl font-black text-gray-900 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              {counters.area > 0
                ? `${counters.area.toLocaleString()}M²`
                : "0M²"}
            </div>
            <div className="text-xl font-normal text-gray-600 mt-4 tracking-widest text-right">
              DE EVENTO
            </div>
          </div>

          <div>
            <div
              className={`text-6xl md:text-8xl font-black text-gray-900 transition-all duration-500 delay-200 ${
                isVisible
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              {counters.desfiles}
            </div>
            <div className="text-xl font-normal text-gray-600 mt-4 tracking-widest">
              DESFILES
            </div>
          </div>

          <div>
            <div
              className={`text-6xl md:text-8xl font-black text-gray-900 transition-all duration-500 delay-500 ${
                counters.show > 0
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform translate-y-10"
              }`}
            >
              SHOW
            </div>
            <div className="text-xl text-right font-normal text-gray-600 mt-4 tracking-widest">
              NACIONAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
