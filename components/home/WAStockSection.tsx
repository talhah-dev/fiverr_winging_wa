"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import "swiper/css";
import "swiper/css/navigation";

interface StockProduct {
  id: string;
  name: string;
  brand: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeColor?: string;
  image: string;
}

const stockProducts: StockProduct[] = [
  {
    id: "afs-stream",
    name: "AFS Stream Performance Wing",
    brand: "AFS Foils",
    price: "$2,000.00",
    badge: "In Stock",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/AFSStream-front.png",
  },
  {
    id: "manta-takeoff-evo",
    name: "Manta TakeOff Evo Assist Kit",
    brand: "Manta Foils",
    price: "$4,850.00",
    badge: "New Model",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    image: "/manta-evo.png",
  },
  {
    id: "manta-backpack",
    name: "Manta Foil Assist Backpack",
    brand: "Manta Foils",
    price: "$1,290.00",
    badge: "Featured",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    image: "/manta-backpack.jpg",
  },
  {
    id: "fuselage-carbon-long",
    name: "AFS Fuselage Carbon Long",
    brand: "AFS Foils",
    price: "$280.00",
    badge: "In Stock",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/FUSELAGECARBONLong.avif",
  },
  {
    id: "afs-silk-v2",
    name: "AFS Silk v2 Carbon Front Wing",
    brand: "AFS Foils",
    price: "$2,450.00",
    badge: "French Carbon",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    image: "/stock/AFSStream-full.png",
  },
  {
    id: "mini-pump",
    name: "AFS High Pressure Mini Pump",
    brand: "AFS Foils",
    price: "$70.00",
    originalPrice: "$104.00",
    badge: "Sale",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    image: "/stock/MINIPump.avif",
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
      className="relative w-full bg-[#F4F5F7] py-20 lg:py-24 text-slate-900 overflow-hidden border-t border-slate-200"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10 sm:gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-bold tracking-wider uppercase text-rose-600">
              Immediate Local Dispatch
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              WA Stock Available
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Direct inventory available in Western Australia ready to ship across Australia
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="stock-prev-btn"
              aria-label="Previous Products"
              type="button"
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              id="stock-next-btn"
              aria-label="Next Products"
              type="button"
              className="flex size-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="w-full min-h-[340px]">
          {mounted ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
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
                    <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-white border border-slate-200/80 p-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:border-slate-300 shadow-xs">
                      {product.badge && (
                        <span
                          className={`absolute top-3.5 left-3.5 z-10 rounded-full px-2.5 py-0.5 text-xs font-semibold border ${product.badgeColor}`}
                        >
                          {product.badge}
                        </span>
                      )}

                      <div className="relative w-full h-full flex items-center justify-center">
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
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          {product.brand}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 truncate group-hover:text-rose-600 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-slate-900">
                            {product.price}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs font-normal text-slate-400 line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link
                        href="tel:0487042694"
                        aria-label={`Enquire about ${product.name}`}
                        className="shrink-0 flex size-9 items-center justify-center rounded-full bg-slate-100 hover:bg-[#E11D48] text-slate-700 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer shadow-xs border border-slate-200"
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
                  <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-white border border-slate-200 p-6 flex items-center justify-center overflow-hidden">
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
                      <h3 className="text-base font-bold text-slate-900 truncate">
                        {product.name}
                      </h3>
                      <span className="text-base font-bold text-slate-900">
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
            render={<Link href="tel:0487042694" />}
            className="group h-11 rounded-full px-8 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium cursor-pointer shadow-md shadow-rose-900/20 inline-flex items-center gap-2"
          >
            <span>Enquire Available Inventory</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WAStockSection;
