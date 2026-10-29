"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface DisciplineItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

const disciplines: DisciplineItem[] = [
  {
    id: "surf-foil",
    title: "Surf Foil",
    description:
      "Forget about paddling to catch a wave or using a jetski for towing yourself.",
    image: "/manta/Surf-Foil.webp",
  },
  {
    id: "downwind",
    title: "Downwind",
    description:
      "Catch ocean bumps and swells effortlessly without burning your legs on flat water starts.",
    image: "/manta/Downwind2.webp",
  },
  {
    id: "wing-foil",
    title: "Wing Foil",
    description:
      "Get up on foil in ultra light wind conditions and stay flying through dead wind holes.",
    image: "/manta/wing-foil2.webp",
  },
  {
    id: "efoil",
    title: "eFoil",
    description:
      "Enjoy pure electric flight on calm water without needing wind or breaking ocean swells.",
    image: "/manta/Efoil.webp",
  },
];

const MantaDisciplines = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#4A505B] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-300">
              Maximum Versatility
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            One System. <span className="text-rose-400">Multiple Disciplines.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed">
            Transform any existing foil setup with the Manta TakeOff Evo. Discover unmatched freedom across four core ocean disciplines.
          </p>
        </div>

        <div
          onMouseLeave={() => setHoveredIndex(null)}
          className="flex flex-col md:flex-row gap-4 lg:gap-5 w-full h-[520px] sm:h-[580px] lg:h-[620px]"
        >
          {disciplines.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() =>
                  setHoveredIndex(hoveredIndex === index ? null : index)
                }
                className={cn(
                  "group relative rounded-[28px] overflow-hidden border border-white/15 bg-white/5 cursor-pointer shadow-2xl transition-all duration-500 ease-out select-none",
                  isHovered
                    ? "md:flex-[1.65] lg:flex-[1.75] border-white/30"
                    : "flex-1 hover:border-white/25",
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  priority={index < 2}
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />

                <div className="relative z-10 w-full h-full p-6 sm:p-7 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-3">
                    <div className="flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                        {item.title}
                      </h3>

                      <div
                        className={cn(
                          "transition-all duration-500 ease-out overflow-hidden",
                          isHovered
                            ? "opacity-100 max-h-36 mt-2 translate-y-0"
                            : "opacity-0 max-h-0 translate-y-2 pointer-events-none",
                        )}
                      >
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal max-w-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "flex size-9 sm:size-10 rounded-full border border-white/60 text-white items-center justify-center shrink-0 backdrop-blur-xs transition-all duration-300",
                        isHovered
                          ? "rotate-45 border-white bg-white/20 text-white"
                          : "group-hover:border-white group-hover:bg-white/10",
                      )}
                    >
                      <Plus className="size-4 sm:size-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MantaDisciplines;

