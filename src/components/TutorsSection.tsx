"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const team = [
    {
      id: 1,
      name: "Carol Bobsin",
      role: "Diretora Financeira",
      image: "/func1.jpg",
    },
    {
      id: 2,
      name: "Grasi Kersting",
      role: "Diretora Comercial",
      image: "/func2.jpg",
    },
    {
      id: 3,
      name: "Walter Stach",
      role: "Diretor de Cena",
      image: "/func3.jpg",
    },
    {
      id: 4,
      name: "Lauria Bonzanini",
      role: "Coordenadora Geral",
      image: "/func4.jpg",
    },
    {
      id: 5,
      name: "Gabriel Bobsin",
      role: "Diretor Comercial",
      image: "/func5.jpg",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-black pb-14"
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
          <div className="w-full">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
              centeredSlides={false}
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
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
              className="designers-swiper"
            >
              {team.map((designer, index) => (
                <SwiperSlide key={designer.id}>
                  <motion.div 
                    className="text-center group"
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15,
                      type: "spring",
                      stiffness: 80,
                      damping: 15
                    }}
                    viewport={{ once: false }}
                  >
                    {/* Designer Image */}
                    <motion.div 
                      className="relative overflow-hidden mb-4 w-full aspect-[6/9] cursor-pointer"
                      whileHover={{ 
                        scale: 1.08,
                        rotateY: 8,
                        rotateX: 3,
                        boxShadow: "0 30px 60px rgba(255,255,255,0.1)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200,
                        damping: 20
                      }}
                    >
                      <Image
                        src={designer.image}
                        alt={designer.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
                        sizes="(max-width: 768px) 160px, 192px"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0.9 }}
                        whileHover={{ scale: 1 }}
                      />
                    </motion.div>

                    {/* Designer Name */}
                    <motion.h3 
                      className="text-white text-[2.5rem] leading-tight text-end pr-2"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.1 + 0.4 }}
                      viewport={{ once: false }}
                    >
                      {designer.name.split(" ").map((word, idx) => (
                        <motion.div
                          key={idx}
                          className={
                            idx === 0
                              ? "font-extrabold"
                              : "font-extralight -mt-2"
                          }
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.15 }}
                          viewport={{ once: false }}
                        >
                          {word}
                        </motion.div>
                      ))}
                    </motion.h3>

                    {/* Designer Role */}
                    <motion.p 
                      className="text-white text-xl font-extralight text-end pr-2 -mt-1"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                      viewport={{ once: false }}
                    >
                      {designer.role}
                    </motion.p>
                  </motion.div>
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
