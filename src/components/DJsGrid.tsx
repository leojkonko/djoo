"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/swiper.css";

const DJsGrid = () => {
  const designers = [
    {
      id: 1,
      name: "Estilista",
      image: "/estilista1.jpg",
    },
    {
      id: 2,
      name: "Estilista",
      image: "/estilista2.jpg",
    },
    {
      id: 3,
      name: "Estilista",
      image: "/estilista3.jpg",
    },
    {
      id: 4,
      name: "Estilista",
      image: "/estilista4.jpg",
    },
    {
      id: 5,
      name: "Estilista",
      image: "/estilista5.jpg",
    },
    {
      id: 6,
      name: "Estilista",
      image: "/estilista1.jpg",
    },
    {
      id: 7,
      name: "Estilista",
      image: "/estilista2.jpg",
    },
    {
      id: 8,
      name: "Estilista",
      image: "/estilista3.jpg",
    },
    {
      id: 9,
      name: "Estilista",
      image: "/estilista4.jpg",
    },
    {
      id: 10,
      name: "Estilista",
      image: "/estilista5.jpg",
    },
    {
      id: 11,
      name: "Estilista",
      image: "/estilista1.jpg",
    },
    {
      id: 12,
      name: "Estilista",
      image: "/estilista2.jpg",
    },
    {
      id: 13,
      name: "Estilista",
      image: "/estilista3.jpg",
    },
    {
      id: 14,
      name: "Estilista",
      image: "/estilista4.jpg",
    },
    {
      id: 15,
      name: "Estilista",
      image: "/estilista5.jpg",
    },
    {
      id: 16,
      name: "Estilista",
      image: "/estilista1.jpg",
    },
    {
      id: 17,
      name: "Estilista",
      image: "/estilista2.jpg",
    },
    {
      id: 18,
      name: "Estilista",
      image: "/estilista3.jpg",
    },
    {
      id: 19,
      name: "Estilista",
      image: "/estilista4.jpg",
    },
    {
      id: 20,
      name: "Estilista",
      image: "/estilista5.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -100, rotateY: -45 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ 
            duration: 1.2, 
            type: "spring", 
            stiffness: 100,
            damping: 20 
          }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-0">
            DESFILES
          </h2>
        </motion.div>

        {/* Designers Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.0, 
            delay: 0.3,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          viewport={{ once: false }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={5}
            navigation={false}
            pagination={{
              clickable: true,
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
            {designers.map((designer, index) => (
              <SwiperSlide key={designer.id}>
                <div className="w-full">
                  {/* Designer Image */}
                  <div className="relative w-full h-[500px] overflow-hidden mb-4 group cursor-pointer">
                    <Image
                      src={designer.image}
                      alt={designer.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>

                  {/* Designer Name */}
                  <div className="text-right pr-2">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                      {designer.name}
                    </h3>
                    <p className="text-lg font-extralight text-gray-600 -mt-1">
                      [A DEFINIR]
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default DJsGrid;
