"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

  useEffect(() => {
    if (isVisible) {
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
    } else {
      // Reset counters when not visible
      setCounters({ area: 0, desfiles: 0, show: 0 });
    }
  }, [isVisible]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl lg:max-w-[90%] mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* 3 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Left Column - RSMM Logo */}
            <motion.div
              className="flex justify-center lg:justify-start h-full items-end"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <div className="text-center">
                <Image
                  src="/RSMM.svg"
                  alt="RSMM - Rio Grande do Sul Mostra Moda"
                  width={200}
                  height={62}
                  className="w-auto h-16 md:h-20"
                />
              </div>
            </motion.div>

            {/* Center Column - Text (2 columns wide) */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: false }}
            >
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
            </motion.div>

            {/* Right Column - DJOO Logo */}
            <motion.div
              className="flex justify-center lg:justify-end h-full items-end"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false }}
            >
              <div className="text-center">
                <Image
                  src="/djoo.svg"
                  alt="DJOO Agency"
                  width={200}
                  height={70}
                  className="w-auto h-16 md:h-20"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="bg-black rounded-lg overflow-hidden mb-16 aspect-[21/9] mx-auto relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dgbgqhrpa/video/upload/v1760372669/VIDEO_MANIFESTO_RSMM_-_30MB_v1lgr4.mp4"
              type="video/mp4"
            />
          </video>

          {/* Video overlay with logo */}
          {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <Image
                src="/RSMM.svg"
                alt="RSMM"
                width={300}
                height={93}
                className="w-auto h-20 md:h-24 brightness-0 invert mx-auto"
              />
            </div>
          </div> */}
        </motion.div>

        {/* Stats Numbers */}
        <div
          ref={sectionRef}
          className="flex flex-col md:flex-row justify-center items-center gap-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    transition: {
                      duration: 1.2,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  }
                : {
                    opacity: 0,
                    scale: 0.5,
                    rotateX: -90,
                  }
            }
          >
            <div className="text-6xl md:text-8xl font-black text-gray-900">
              {counters.area > 0
                ? `${counters.area.toLocaleString()}M²`
                : "0M²"}
            </div>
            <motion.div
              className="text-xl font-normal text-gray-600 mt-4 tracking-widest text-right"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.5 },
                    }
                  : { opacity: 0, y: 20 }
              }
            >
              DE EVENTO
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    transition: {
                      duration: 1.2,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  }
                : {
                    opacity: 0,
                    scale: 0.5,
                    rotateX: -90,
                  }
            }
          >
            <div className="text-6xl md:text-8xl font-black text-gray-900">
              {counters.desfiles}
            </div>
            <motion.div
              className="text-xl font-normal text-gray-600 mt-4 tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.7 },
                    }
                  : { opacity: 0, y: 20 }
              }
            >
              DESFILES
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    scale: 1,
                    rotateX: 0,
                    transition: {
                      duration: 1.2,
                      delay: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    },
                  }
                : {
                    opacity: 0,
                    scale: 0.5,
                    rotateX: -90,
                  }
            }
          >
            <div className="text-6xl md:text-8xl font-black text-gray-900">
              SHOW
            </div>
            <motion.div
              className="text-xl text-right font-normal text-gray-600 mt-4 tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isVisible
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, delay: 0.9 },
                    }
                  : { opacity: 0, y: 20 }
              }
            >
              NACIONAL
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
