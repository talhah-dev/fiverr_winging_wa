"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const AfsHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[#4A505B] text-white overflow-hidden">
      <Image
        src="/afsbg.webp"
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

          <h1 className="relative flex items-center justify-center py-2">
            <Image
              src="/afs-logo.svg"
              alt="AFS Foils"
              width={360}
              height={108}
              priority
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] select-none"
            />
          </h1>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            Engineered and crafted in Brittany, France by Foil And Co. Explore our complete catalogue of high-modulus carbon front wings, ultra-stiff masts, titanium fuselages, downwind boards, and wings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="h-11 rounded-full px-8 bg-[#ef0e0a] hover:bg-[#c40c08] text-white font-semibold cursor-pointer shadow-lg shadow-orange-950/30 inline-flex items-center gap-2 transition-all hover:scale-105"
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
