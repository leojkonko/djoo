"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  const words = ["ARE", "YOU", "READY", "FOR", "THE", "RSMM", "?"];
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 150,
      rotateX: -90,
      scale: 0.5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dgbgqhrpa/video/upload/v1760372665/SESS%C3%83O_BACKGROUND_ARE_YOU_READY_FOR_THE_RSMM_eq2sbn.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div 
          className="text-white text-6xl md:text-8xl lg:text-6xl leading-none font-extralight"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={`block ${word === "RSMM" ? "font-black" : ""}`}
              variants={wordVariants}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                rotateX: 5,
                textShadow: "0 0 20px rgba(255,255,255,0.8)",
                transition: { duration: 0.3 }
              }}
              animate={{
                textShadow: word === "RSMM" ? [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 0px rgba(255,255,255,0)"
                ] : undefined,
                transition: word === "RSMM" ? {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 2
                } : undefined
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
