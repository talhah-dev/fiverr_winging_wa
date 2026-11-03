"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { staticInventory, StockItem } from "@/data/stockInventory";

export type { StockItem };
export { staticInventory };

const StockCatalog = () => {
  return (
    <section className="relative w-full py-12 lg:py-20 bg-[#4A505B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {staticInventory.map((item) => (
            <Link
              key={item.id}
              href={`/feature-equipment/${item.id}`}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-[#ECECEC] p-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-white/5">
                {item.badge && (
                  <span
                    className={`absolute top-3.5 left-3.5 z-10 rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}

                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105 select-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 px-1 pt-1">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <h3 className="text-base font-medium text-white truncate group-hover:text-[#ef0e0a] transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-semibold text-white">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs font-normal text-white/40 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <div
                  aria-label={`View details for ${item.name}`}
                  className="shrink-0 flex size-9 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#ef0e0a] text-white transition-all duration-300 group-hover:scale-105 shadow-sm"
                >
                  <Plus className="size-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockCatalog;