"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";

interface StockProduct {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeColor?: string;
  image: string;
}

const stockProducts: StockProduct[] = [
  {
    id: "afs-stream",
    name: "AFS Stream Wing",
    price: "$2,000.00",
    badge: "In Stock",
    badgeColor: "bg-emerald-500/15 text-emerald-600",
    image: "/stock/AFSStream.avif",
  },
  {
    id: "fuselage-carbon-long",
    name: "FUSELAGE CARBON Long",
    price: "$280.00",
    badge: "Hot",
    badgeColor: "bg-orange-500/15 text-orange-600",
    image: "/stock/FUSELAGECARBONLong.avif",
  },
  {
    id: "phantom-surf-foil",
    name: "PHANTOM 840 & 940 Surf Foil",
    price: "$385.00",
    originalPrice: "$1,350.00",
    badge: "-70%",
    badgeColor: "bg-rose-500/15 text-rose-600",
    image: "/stock/PHANTOM840&940surffoil.avif",
  },
  {
    id: "mini-pump",
    name: "MINI Pump",
    price: "$70.00",
    originalPrice: "$104.00",
    badge: "Sale",
    badgeColor: "bg-rose-500/15 text-rose-600",
    image: "/stock/MINIPump.avif",
  },
  {
    id: "rocket-wing-asc",
    name: "ROCKET WING ASC 5'10 110L",
    price: "$725.00",
    originalPrice: "$1,750.00",
    badge: "Special",
    badgeColor: "bg-blue-500/15 text-blue-600",
    image: "/stock/ROCKET-WING-ASC-5'10-110L.avif",
  },
  {
    id: "trax-hrd-lite",
    name: "TRAX HRD Lite 136",
    price: "$650.00",
    badge: "New",
    badgeColor: "bg-blue-500/15 text-blue-600",
    image: "/stock/TRAX-HRD-Lite-136.avif",
  },
];

const WAStockSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="wa-stock"
      className="relative w-full bg-black py-20 lg:py-24 text-white overflow-hidden border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
              WA Stock Available
            </h2>
            <p className="text-sm sm:text-base text-white/60 font-normal">
              Direct inventory available in Western Australia ready to ship
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="stock-prev-btn"
              aria-label="Previous Products"
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/15 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              id="stock-next-btn"
              aria-label="Next Products"
              type="button"
              className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:bg-white/15 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="w-full min-h-[340px]">
          {mounted ? (
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                prevEl: "#stock-prev-btn",
                nextEl: "#stock-next-btn",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="w-full"
            >
              {stockProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="flex flex-col gap-3 group">
                    <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#ECECEC] p-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-white/5">
                      {product.badge && (
                        <span
                          className={`absolute top-3.5 left-3.5 z-10 rounded-full px-2.5 py-0.5 text-xs font-semibold ${product.badgeColor}`}
                        >
                          {product.badge}
                        </span>
                      )}

                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105 select-none"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 px-1 pt-1">
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <h3 className="text-base font-medium text-white truncate group-hover:text-rose-400 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-semibold text-white">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs font-normal text-white/40 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link
                        href="#contact"
                        aria-label={`Enquire about ${product.name}`}
                        className="shrink-0 flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#E11D48] text-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm"
                      >
                        <Plus className="size-4" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {stockProducts.slice(0, 4).map((product) => (
                <div key={product.id} className="flex flex-col gap-3">
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#ECECEC] p-6 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 px-1 pt-1">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h3 className="text-base font-medium text-white truncate">
                        {product.name}
                      </h3>
                      <span className="text-base font-semibold text-white">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center pt-4">
          <Button
            nativeButton={false}
            render={<Link href="#wa-stock" />}
            className="group h-11 rounded-full px-8 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium cursor-pointer shadow-lg shadow-rose-950/40 inline-flex items-center gap-2"
          >
            <span>More products</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WAStockSection;
