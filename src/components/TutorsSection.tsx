"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState, useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper.css";

const TutorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const team = [
    {
      id: 1,
      name: "Carol Bobsin",
      role: "Diretora Financeira",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Grasi Kersting",
      role: "Diretora Comercial",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Walter Stach",
      role: "Diretor de Cena",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Lauria Bonzanini",
      role: "Coordenadora Geral",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Gabriel Bobsin",
      role: "Diretor Comercial",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Mariana Silva",
      role: "Diretora de Marketing",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Roberto Costa",
      role: "Coordenador de Produção",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Ana Carolina",
      role: "Diretora Criativa",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 9,
      name: "Felipe Santos",
      role: "Coordenador de Eventos",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 10,
      name: "Juliana Moreira",
      role: "Gerente de Projetos",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 11,
      name: "Lucas Oliveira",
      role: "Designer Gráfico",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 12,
      name: "Sofia Martinez",
      role: "Coordenadora de Moda",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 13,
      name: "Diego Fernandez",
      role: "Diretor de Fotografia",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 14,
      name: "Camila Rodrigues",
      role: "Produtora Executiva",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=600&fit=crop&crop=face",
    },
    {
      id: 15,
      name: "Thiago Almeida",
      role: "Coordenador Técnico",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black"
      ref={sectionRef}
    >
      {/* Background Image with Text Overlay */}
      <div className="relative w-full h-screen overflow-hidden">
        <Image
          src="/djoo_bg.jpg"
          alt="DJOO Ferrari"
          fill
          className="object-cover object-top"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-10">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end pb-20 h-full">
              {/* Left side - Text */}
              <div className="text-white">
                <h2
                  className={`text-5xl md:text-6xl font-light mb-4 transition-all duration-1000 ${
                    isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  }`}
                >
                  <span
                    className={`inline-block transition-all duration-1000 ${
                      isVisible ? "animate-float" : "opacity-0"
                    }`}
                  >
                    ART
                  </span>{" "}
                  <span
                    className={`font-black inline-block transition-all duration-1000 ${
                      isVisible ? "animate-float" : "opacity-0"
                    }`}
                    style={{ animationDelay: isVisible ? "0.5s" : "0s" }}
                  >
                    DIRECTOR
                  </span>
                </h2>
              </div>

              {/* Right side - Name */}
              <div className="text-white text-right">
                <h3
                  className={`text-6xl md:text-8xl font-black leading-none transition-all duration-1000 ${
                    isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  }`}
                >
                  <span
                    className={`inline-block transition-all duration-1000 ${
                      isVisible ? "animate-float" : "opacity-0"
                    }`}
                    style={{ animationDelay: isVisible ? "0.8s" : "0s" }}
                  >
                    DJOO
                  </span>
                </h3>
                <h3
                  className={`text-6xl md:text-8xl font-light leading-none transition-all duration-1000 ${
                    isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                  }`}
                >
                  <span
                    className={`inline-block transition-all duration-1000 ${
                      isVisible ? "animate-float" : "opacity-0"
                    }`}
                    style={{ animationDelay: isVisible ? "1.2s" : "0s" }}
                  >
                    FERRARI
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <div className="lg:max-w-[90%] mx-auto ">
          <div className="mx-auto" style={{ scale: "1.04" }}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={8}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              className="designers-swiper"
            >
              {team.map((designer) => (
                <SwiperSlide key={designer.id}>
                  <div className="text-center group cursor-pointer">
                    {/* Designer Image */}
                    <div className="relative overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105 mx-auto w-80 h-96">
                      <Image
                        src={designer.image}
                        alt={designer.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 160px, 192px"
                      />
                    </div>

                    {/* Designer Name */}
                    <h3 className="text-white text-[2.5rem] leading-tight text-end pr-2">
                      {designer.name.split(" ").map((word, idx) => (
                        <div
                          key={idx}
                          className={
                            idx === 0 ? "font-extrabold" : "font-light"
                          }
                        >
                          {word}
                        </div>
                      ))}
                    </h3>

                    {/* Designer Role */}
                    <p className="text-white text-2xl font-light text-end pr-2 mt-2">
                      {designer.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorsSection;
