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
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-gray-900 mb-0 ps-2">
              DESFILES
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
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
            {designers.map((designer) => (
              <SwiperSlide key={designer.id}>
                <div className="text-center ">
                  {/* Designer Image */}
                  <div className="relative overflow-hidden mb-4 transition-transform duration-300 group cursor-pointer hover:scale-105 group-hover:scale-105 w-full aspect-[6/9]">
                    <Image
                      src={designer.image}
                      alt={designer.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, 192px"
                    />
                  </div>

                  {/* Designer Name */}
                  <h3 className="text-gray-900 text-4xl leading-tight text-end pr-2">
                    {designer.name.split(" ").map((word, idx) => (
                      <>
                        <div
                          key={idx}
                          className={
                            idx === 0 ? "font-extrabold" : "font-light"
                          }
                        >
                          {word}
                        </div>
                        <p className="font-extralight text-xl -mt-2">
                          [A DEFINIR]
                        </p>
                      </>
                    ))}
                  </h3>
                </div>
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
