"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight, Zap } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-slate-950 text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source
          src="https://api.afs-foiling.com/wp-content/uploads/2026/09/SHOWREEL_WEBSITE_V1.2-4.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/75 via-black/40 to-black/85" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 pt-28 pb-8 lg:px-8 lg:pt-32 lg:pb-12 xl:px-16">
        <motion.div
          {...fadeIn}
          className="flex w-full flex-col gap-6 lg:gap-10 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Take your foiling to the next level
            </h1>
            <p className="text-sm sm:text-base font-medium tracking-wider uppercase text-rose-400">
              Prone • Wing • Downwind • Wake • eFoil
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6 max-w-xl lg:shrink-0 lg:pt-2">
            <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed">
              WingingWA delivers high-performance foils, wings and foil-assist
              systems. We’re the Australian distributor for AFS Foils and the
              Western Australian dealer for Manta Foil Assist.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                nativeButton={false}
                render={<Link href="#brands" />}
                className="group h-11 w-full rounded-full px-7 font-semibold text-white bg-[#E11D48] hover:bg-[#BE123C] shadow-lg shadow-rose-950/40 sm:w-fit cursor-pointer inline-flex items-center justify-center gap-2"
              >
                Explore Brands
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="#wa-stock" />}
                className="group h-11 w-full rounded-full px-7 font-medium text-white border border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md sm:w-fit cursor-pointer inline-flex items-center justify-center gap-2"
              >
                View WA Stock
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          id="brands"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full"
        >
          <Link
            href="#afs"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-black/45 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-black/60 hover:shadow-2xl hover:shadow-black/60"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black tracking-widest text-white uppercase font-sans">
                  AFS
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide text-white uppercase backdrop-blur-sm border border-white/10">
                  Australian Distributor
                </span>
              </div>
              <div className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#E11D48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">
                The Foiling Spirit • French Carbon Mastery
              </h3>
              <p className="text-sm text-slate-300 leading-normal">
                High-modulus carbon masts, fuselages, front wings (Silk v2, Enduro, Evo, Flyer) and high-performance wings crafted in Brittany, France.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400 group-hover:text-rose-300">
              <span>Explore AFS Range</span>
              <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          <Link
            href="#manta"
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-black/45 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:bg-black/60 hover:shadow-2xl hover:shadow-black/60"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black tracking-widest text-white uppercase font-sans">
                  MANTA
                </span>
                <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-medium tracking-wide text-rose-300 uppercase backdrop-blur-sm border border-rose-500/30">
                  Western Australian Dealer
                </span>
              </div>
              <div className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 group-hover:bg-[#E11D48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="size-4" />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <h3 className="text-lg font-semibold text-white group-hover:text-rose-400 transition-colors">
                Foil Assist Kits • Electrify Your Foil
              </h3>
              <p className="text-sm text-slate-300 leading-normal">
                Featuring the ultra-light TakeOff Evo and the patented Manta Backpack system. Catch more waves, ride in lighter winds, and go further with less effort.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-rose-400 group-hover:text-rose-300">
              <span>Explore Manta Foil Assist</span>
              <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
