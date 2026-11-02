"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  HelpCircle,
  Package,
  Phone,
  Plus,
} from "lucide-react";
import type { StockItem } from "@/data/stockInventory";

interface ProductDetailViewProps {
  product: StockItem;
  relatedProducts: StockItem[];
}

export const ProductDetailView = ({
  product,
  relatedProducts,
}: ProductDetailViewProps) => {
  const contactUrl = `/contact?item=${encodeURIComponent(product.name)}`;

  return (
    <div className="w-full bg-[#4A505B] text-white">
      <div className="border-b border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 py-4 flex items-center justify-between text-xs sm:text-sm">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-white/70 overflow-x-auto whitespace-nowrap scrollbar-none"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="size-3.5 shrink-0 opacity-40" />
            <Link
              href="/feature-equipment"
              className="hover:text-white transition-colors"
            >
              Feature Equipment
            </Link>
            <ChevronRight className="size-3.5 shrink-0 opacity-40" />
            <span className="text-white font-medium truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </span>
          </nav>

          <Link
            href="/feature-equipment"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors ml-4"
          >
            <ArrowLeft className="size-3.5" />
            <span>All Equipment</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 py-10 lg:py-16 flex flex-col gap-14 lg:gap-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-6 flex flex-col gap-6 lg:sticky lg:top-36">
            <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] rounded-3xl bg-[#ECECEC] p-8 sm:p-14 lg:p-16 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute top-5 left-5 z-10 flex flex-wrap gap-2">
                {product.badge && (
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase shadow-xs ${
                      product.badgeColor || "bg-emerald-500/20 text-emerald-700"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                <span className="rounded-full bg-black/70 text-white/90 px-3 py-1 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
                  {product.brand}
                </span>
              </div>

              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-md select-none transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="absolute bottom-5 right-5 z-10 rounded-full bg-white/80 px-3.5 py-1 text-xs font-semibold text-slate-700 backdrop-blur-md shadow-xs">
                Perth Stock
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  {product.category}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs font-semibold text-white/70">
                  {product.brand}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-0.5 text-xs font-semibold text-emerald-300">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {product.stockStatus}
                </span>

                {product.disciplines.map((disc) => (
                  <span
                    key={disc}
                    className="rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-200"
                  >
                    {disc}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-baseline gap-3 rounded-2xl bg-white/[0.04] border border-white/10 p-4">
              <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base font-normal text-white/40 line-through">
                  {product.originalPrice}
                </span>
              )}
              <span className="text-xs text-white/60 font-medium ml-auto">
                AUD (Inc. GST)
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {product.description}
              </p>
              {product.longDescription && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-l-2 border-rose-500/60 pl-3">
                  {product.longDescription}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href={contactUrl}
                className="flex-1 h-12 min-h-[48px] rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold text-sm shadow-lg shadow-rose-950/40 inline-flex items-center justify-center gap-2 px-6 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                <span>Buy Now / Purchase Enquiry</span>
                <ArrowUpRight className="size-4 shrink-0" />
              </Link>

              <Link
                href="tel:0487042694"
                className="flex-1 sm:flex-initial h-12 min-h-[48px] rounded-full px-6 border border-white/20 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                <Phone className="size-4 text-emerald-400 shrink-0" />
                <span>Call Mark: 0487 042 694</span>
              </Link>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 flex items-start gap-3 text-xs text-slate-300">
              <HelpCircle className="size-4 text-rose-400 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white">
                  Direct Australian Distribution
                </span>
                <span>
                  Winging WA holds authentic inventory in Western Australia. We test every model in local Perth sea breezes and Indian Ocean swells so you get the exact right match for your foil style and weight.
                </span>
              </div>
            </div>

            {product.features && product.features.length > 0 && (
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Key Performance Highlights
                </h3>
                <ul className="grid grid-cols-1 gap-2.5">
                  {product.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200"
                    >
                      <Check className="size-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-white/15">
          {product.detailedSpecs && product.detailedSpecs.length > 0 && (
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Technical Specifications
              </h2>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden divide-y divide-white/10">
                {product.detailedSpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-1 sm:grid-cols-3 px-4 py-3 text-xs sm:text-sm"
                  >
                    <span className="font-semibold text-white/60">
                      {spec.label}
                    </span>
                    <span className="sm:col-span-2 font-medium text-white pt-1 sm:pt-0">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.inTheBox && product.inTheBox.length > 0 && (
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Package className="size-5 text-rose-400" />
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  What&apos;s Included
                </h2>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-3">
                {product.inTheBox.map((boxItem, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <div className="size-2 rounded-full bg-rose-400 shrink-0" />
                    <span>{boxItem}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {relatedProducts && relatedProducts.length > 0 && (
          <div className="flex flex-col gap-6 pt-10 border-t border-white/15">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  WA Inventory
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Related Equipment
                </h2>
              </div>
              <Link
                href="/feature-equipment"
                className="text-xs sm:text-sm font-semibold text-rose-400 hover:text-rose-300 transition-colors inline-flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ChevronRight className="size-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  href={`/feature-equipment/${item.id}`}
                  className="flex flex-col gap-3 group cursor-pointer"
                >
                  <div className="relative w-full h-56 rounded-2xl bg-[#ECECEC] p-6 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-white/5">
                    {item.badge && (
                      <span
                        className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-0.5 text-xs font-semibold ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    )}

                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105 select-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 px-1 pt-1">
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h3 className="text-sm font-medium text-white truncate group-hover:text-rose-400 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">
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
                      className="shrink-0 flex size-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[#E11D48] text-white transition-all duration-300 group-hover:scale-105 shadow-sm"
                    >
                      <Plus className="size-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};