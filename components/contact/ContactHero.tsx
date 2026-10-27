"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 text-white overflow-hidden bg-[#4A505B]">
      <Image
        src="/contact-hero.jpg"
        alt="Western Australia Foiling Coastline"
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
            Get In Touch With <span className="text-[#E11D48] md:block">Winging WA</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-xl font-normal drop-shadow-sm">
            Australian distributor for AFS Foils and Manta Foil Assist, supplying brand-new and inspected second-hand gear. Contact us to discuss equipment or arrange a viewing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
