"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { afsDisciplines, AfsDiscipline } from "@/data/afsDisciplines";
import { cn } from "@/lib/utils";

interface AfsDisciplineSliderProps {
  selectedDiscipline: string | null;
  onSelectDiscipline: (discipline: string | null) => void;
}

const AfsDisciplineSlider = ({
  selectedDiscipline,
  onSelectDiscipline,
}: AfsDisciplineSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="relative w-full py-8 sm:py-10 bg-[#4A505B] border-b border-white/15 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
              Browse by Discipline
            </span>
            {selectedDiscipline && (
              <button
                type="button"
                onClick={() => onSelectDiscipline(null)}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold cursor-pointer hover:bg-rose-500/30 transition-colors"
              >
                <span>Filtered: {selectedDiscipline}</span>
                <X className="size-3" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous disciplines"
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
              className={cn(
                "flex size-9 sm:size-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all cursor-pointer hover:bg-slate-100 active:scale-95",
                isBeginning && "opacity-40 cursor-not-allowed hover:bg-white active:scale-100",
              )}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next disciplines"
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
              className={cn(
                "flex size-9 sm:size-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all cursor-pointer hover:bg-slate-100 active:scale-95",
                isEnd && "opacity-40 cursor-not-allowed hover:bg-white active:scale-100",
              )}
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <Swiper
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={14}
            slidesPerView={1.2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 14 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              900: { slidesPerView: 4, spaceBetween: 16 },
              1150: { slidesPerView: 5, spaceBetween: 16 },
            }}
            className="w-full overflow-hidden rounded-2xl"
          >
            {afsDisciplines.map((item) => {
              const isSelected = selectedDiscipline === item.name;

              return (
                <SwiperSlide key={item.id} className="h-auto">
                  <div
                    onClick={() => {
                      if (isSelected) {
                        onSelectDiscipline(null);
                      } else {
                        onSelectDiscipline(item.name);
                      }
                    }}
                    className={cn(
                      "group relative h-44 sm:h-48 w-full cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 select-none",
                      isSelected
                        ? "border-[#E11D48] ring-2 ring-[#E11D48] shadow-lg shadow-rose-950/40"
                        : "border-white/15 hover:border-white/40 hover:scale-[1.02]",
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-108"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

                    <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 flex items-end justify-between gap-2 z-10 text-white">
                      <span className="text-base sm:text-lg font-bold tracking-tight text-white drop-shadow-sm leading-tight">
                        {item.name}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-white/75 drop-shadow-xs">
                        {item.count}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 z-10 rounded-full bg-[#E11D48] px-2 py-0.5 text-[10px] font-extrabold uppercase text-white shadow-xs">
                        Active
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AfsDisciplineSlider;
