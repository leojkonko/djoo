"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DJsGrid = () => {
  const designers = [
    {
      id: 1,
      name: "Nicoli Ares",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Miguel Santos",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Carine Freitas",
      image:
        "https://images.unsplash.com/photo-1541823709867-1b206113eafd?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Manuela Lebens",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Vitor Lucas",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Sofia Martinez",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Rafael Costa",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Isabella Lima",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 9,
      name: "Lucas Pereira",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 10,
      name: "Amanda Silva",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 11,
      name: "Bruno Oliveira",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 12,
      name: "Gabriela Rocha",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="lg:max-w-[90%] mx-auto ">
        {/* Section Header */}

        {/* Designers Carousel */}
        <div className="mx-auto" style={{ scale: "1.04" }}>
          <div className="mb-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-0 ps-2">
              DESFILES
            </h2>
          </div>
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
            {designers.map((designer) => (
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
                  <h3 className="text-gray-900 text-4xl leading-tight text-end pr-2">
                    {designer.name.split(" ").map((word, idx) => (
                      <div
                        key={idx}
                        className={idx === 0 ? "font-extrabold" : "font-light"}
                      >
                        {word}
                      </div>
                    ))}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper {
          padding-top: 20px;
        }

        .designers-swiper .swiper-pagination {
          position: static !important;
          margin-top: 20px;
        }

        .designers-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          margin: 0 6px;
        }

        .designers-swiper .swiper-pagination-bullet-active {
          background: #111827;
        }

        .designers-swiper .swiper-slide {
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default DJsGrid;
