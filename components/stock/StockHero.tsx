"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";

const StockHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-slate-950 text-white overflow-hidden">
      <Image
        src="/stock-hero.jpg"
        alt="Western Australia Foiling Coastline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center select-none"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 max-w-2xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            WA Stock Available
          </h1>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal drop-shadow-xs">
            Direct inventory available in Western Australia. Browse our current
            stock of genuine AFS Foils, Wings, and Manta Foil Assist systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              nativeButton={false}
              render={<Link href="tel:0487042694" />}
              className="h-11 rounded-full px-7 bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold cursor-pointer shadow-lg shadow-rose-950/40 inline-flex items-center gap-2"
            >
              <Phone className="size-4" />
              <span>Call Mark: 0487 042 694</span>
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href="/contact" />}
              className="h-11 rounded-full px-6 border-white/30 bg-black/40 hover:bg-black/60 text-white font-medium cursor-pointer backdrop-blur-md inline-flex items-center gap-2"
            >
              <span>Enquire Pricing</span>
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StockHero;
