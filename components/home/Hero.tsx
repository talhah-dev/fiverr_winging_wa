"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

const Hero = () => {
  return (
    <section className="dark relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#4A505B]">
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

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 pt-32 pb-10 sm:pb-12 lg:px-8 lg:pt-36 lg:pb-14 xl:px-16">
        <motion.div
          {...fadeIn}
          className="flex flex-col items-center text-center gap-2 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:leading-none leading-tight max-w-xl sm:text-4xl lg:text-7xl font-bold tracking-tight text-white  drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)]">
            Take Your Foiling to the next level
          </h1>
          <p className=" text-lg lg:text-xl font-bold tracking-wide text-[#E11D48] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            ParaWing. Wing. Prone. Pump. Downwind. Foil Assist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 pt-16"
        >
          <div className="flex items-center justify-center shrink-0 order-2 md:order-1">
            <Link
              href="#afs"
              className="group relative flex items-center justify-center p-2 rounded-2xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Image
                src="/afs.svg"
                alt="AFS Foils"
                width={190}
                height={88}
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain rounded-lg"
                priority
              />
            </Link>
          </div>

          <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto order-1 md:order-2">
            <div className="flex flex-col gap-1">
              <p className="text-base sm:text-lg font-semibold text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] leading-snug">
                WingingWA delivers high-performance foils, Wings, and foil assist systems. We are Australian Distributor for AFS and the WA dealer for Manta Foil Assist.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center shrink-0 order-3">
            <Link
              href="#manta"
              className="group relative flex items-center justify-center p-3 rounded-2xl bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <Image
                src="/manta.webp"
                alt="Manta Foils"
                width={200}
                height={75}
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
