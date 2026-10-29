"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Phone } from "lucide-react";

const AfsHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#4A505B] text-white overflow-hidden">
      <Image
        src="/stock-hero.jpg"
        alt="AFS Foils Ocean Backdrop"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center select-none"
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4 max-w-3xl"
        >

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
            AFS Foils <span className="text-[#E11D48] md:block">Full Collection</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            Engineered and crafted in Brittany, France by Foil And Co. Explore our complete catalogue of high-modulus carbon front wings, ultra-stiff masts, titanium fuselages, downwind boards, and wings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
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
              <span>Enquire & Order</span>
              <ArrowUpRight className="size-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AfsHero;
