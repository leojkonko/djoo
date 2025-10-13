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
    // {
    //   id: 6,
    //   name: "Sofia Martinez",
    //   image: "/estilista6.jpg",
    // },
    // {
    //   id: 7,
    //   name: "Rafael Costa",
    //   image: "/estilista7.jpg",
    // },
    // {
    //   id: 8,
    //   name: "Isabella Lima",
    //   image: "/estilista8.jpg",
    // },
    // {
    //   id: 9,
    //   name: "Lucas Pereira",
    //   image: "/estilista9.jpg",
    // },
    // {
    //   id: 10,
    //   name: "Amanda Silva",
    //   image: "/estilista10.jpg",
    // },
    // {
    //   id: 11,
    //   name: "Bruno Oliveira",
    //   image: "/estilista11.jpg",
    // },
    // {
    //   id: 12,
    //   name: "Gabriela Rocha",
    //   image: "/estilista12.jpg",
    // },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="lg:max-w-[90%] mx-auto ">
        {/* Section Header */}

        {/* Designers Carousel */}
        <div className="w-full">
          <motion.div 
            className="mb-4"
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
            <h2 className="text-3xl font-semibold text-gray-900 mb-0 ps-2">
              DESFILES
            </h2>
          </motion.div>
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
            {designers.map((designer, index) => (
              <SwiperSlide key={designer.id}>
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                  }}
                  viewport={{ once: false }}
                >
                  {/* Designer Image */}
                  <motion.div 
                    className="relative overflow-hidden mb-4 w-full aspect-[6/9] group cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    <Image
                      src={designer.image}
                      alt={designer.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 160px, 192px"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.div>

                  {/* Designer Name */}
                  <motion.h3 
                    className="text-gray-900 text-4xl leading-tight text-end pr-2"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: false }}
                  >
                    {designer.name.split(" ").map((word, idx) => (
                      <motion.div key={idx}>
                        <motion.div
                          className={
                            idx === 0 ? "font-extrabold" : "font-light"
                          }
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          viewport={{ once: false }}
                        >
                          {word}
                        </motion.div>
                        <motion.p 
                          className="font-extralight text-xl -mt-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          viewport={{ once: false }}
                        >
                          [A DEFINIR]
                        </motion.p>
                      </motion.div>
                    ))}
                  </motion.h3>
                </motion.div>
              </SwiperSlide>
            ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DJsGrid;
