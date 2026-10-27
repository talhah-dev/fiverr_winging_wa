"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrandsSection = () => {
  return (
    <section
      id="brands"
      className="relative w-full bg-[#4A505B] py-12 lg:py-16 text-white overflow-hidden border-t border-white/15"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col items-center text-center gap-1.5 max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-wider uppercase text-rose-400">
            Authorized Australian Distributor & Dealer
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            World-Class Foiling & Assist Systems
          </h2>
          <p className="text-sm sm:text-base text-white/70">
            Premium French carbon hydrofoils alongside state-of-the-art electric foil assist technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div
            id="afs"
            className="rounded-3xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.06] hover:border-white/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-9 w-28 sm:h-10 sm:w-32">
                  <Image
                    src="/afs.svg"
                    alt="AFS Foils"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="rounded-full bg-rose-500/15 border border-rose-500/30 px-3 py-0.5 text-xs font-semibold text-rose-300">
                  Since 2009
                </span>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">
                  AFS Foils — French Carbon Innovation
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Designed and manufactured in Brittany, France by Foil And Co. High-performance composite carbon foils, wings, and boards built for glide and control across prone, wing, and downwind foiling.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Silk v2", "Enduro", "Evo", "French Carbon"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-56 my-5 rounded-2xl bg-[#ECECEC] p-4 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-[1.01]">
              <Image
                src="/stock/AFSStream-front.png"
                alt="AFS Stream Carbon Wing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 select-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                nativeButton={false}
                render={<Link href="/afs-foils" />}
                className="h-10 rounded-full px-5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-semibold cursor-pointer shadow-md shadow-rose-950/30 inline-flex items-center gap-1.5 flex-1 sm:flex-initial"
              >
                <span>Explore AFS</span>
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<Link href="/contact" />}
                className="h-10 rounded-full px-5 border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold cursor-pointer inline-flex items-center gap-1.5 flex-1 sm:flex-initial"
              >
                <span>Enquire Pricing</span>
              </Button>
            </div>
          </div>

          <div
            id="manta"
            className="rounded-3xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.06] hover:border-white/30 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 backdrop-blur-sm group"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-4">
                <div className="relative h-9 w-32 sm:h-10 sm:w-36">
                  <Image
                    src="/manta.webp"
                    alt="Manta Foils"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="rounded-full bg-rose-500/15 border border-rose-500/30 px-3 py-0.5 text-xs font-semibold text-rose-300">
                  WA Dealer
                </span>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-rose-400 transition-colors">
                  Manta Foil Assist — Electrify Your Foil
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Premium electric foil assist kits to catch more waves, ride in light wind, and foil further with less effort. Featuring the ultra-light Manta Evo and rider-mounted Manta Backpack.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["TakeOff Evo", "Manta Backpack", "Wireless Remote", "Plug & Play"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-56 my-5 rounded-2xl bg-[#ECECEC] p-4 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-[1.01]">
              <Image
                src="/manta-evo.png"
                alt="Manta TakeOff Evo Kit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-2 transition-transform duration-500 group-hover:scale-105 select-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                nativeButton={false}
                render={<Link href="/feature-equipment" />}
                className="h-10 rounded-full px-5 bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-semibold cursor-pointer shadow-md shadow-rose-950/30 inline-flex items-center gap-1.5 flex-1 sm:flex-initial"
              >
                <span>Shop Manta</span>
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<Link href="/contact" />}
                className="h-10 rounded-full px-5 border-white/20 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold cursor-pointer inline-flex items-center gap-1.5 flex-1 sm:flex-initial"
              >
                <span>Enquire Systems</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
