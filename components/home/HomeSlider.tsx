"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderImages = [
  "/slider/1.avif",
  "/slider/2.avif",
  "/slider/3.avif",
  "/slider/4.avif",
  "/slider/5.avif",
  "/slider/6.avif",
];

const HomeSlider = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden py-4 sm:py-6">
      <div className="relative w-full group">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: "#slider-prev-btn",
            nextEl: "#slider-next-btn",
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "!bg-white !w-8 !rounded-full transition-all",
            bulletClass: "inline-block size-2.5 rounded-full bg-white/40 mx-1 cursor-pointer transition-all",
          }}
          className="w-full"
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={src}>
              <div className="relative w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[660px]">
                <Image
                  src={src}
                  alt={`Winging WA Foiling ${index + 1}`}
                  fill
                  sizes="100vw"
                  className="object-cover select-none"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          id="slider-prev-btn"
          aria-label="Previous Slide"
          type="button"
          className="absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 flex size-11 sm:size-14 items-center justify-center rounded-full bg-black/35 hover:bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20 shadow-lg"
        >
          <ChevronLeft className="size-6 sm:size-8" />
        </button>

        <button
          id="slider-next-btn"
          aria-label="Next Slide"
          type="button"
          className="absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex size-11 sm:size-14 items-center justify-center rounded-full bg-black/35 hover:bg-black/70 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer border border-white/20 shadow-lg"
        >
          <ChevronRight className="size-6 sm:size-8" />
        </button>
      </div>
    </section>
  );
};

export default HomeSlider;
