"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  BatteryCharging,
  CheckCircle2,
  Phone,
  Plane,
  Play,
  ShieldCheck,
  Zap,
} from "lucide-react";

const MantaHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#4A505B] text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source
            src="https://www.mantafoils.com/wp-content/uploads/2025/11/Evo-page-main-video-resized2.mp4#t=1"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6 max-w-4xl"
        >
         
          <div className="relative w-full max-w-xl flex items-center justify-center py-2">
            <Image
              src="/TakeOff-Evo-Logo-white.webp"
              alt="Manta TakeOff Evo"
              width={480}
              height={140}
              priority
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] select-none"
            />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-lg">
            Power. Air Travel.{" "}
            <span className="text-rose-400">Maintenance free motor.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-100/90 leading-relaxed max-w-xl font-medium drop-shadow-md">
            Next generation electric foil assist with airline compliant batteries and direct drive motor reliability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Button
              nativeButton={false}
              render={<Link href="/contact?item=Manta%20TakeOff%20Evo" />}
              className="h-12 sm:h-13 rounded-full px-8 sm:px-9 bg-[#E11D48] hover:bg-[#BE123C] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-rose-950/50 cursor-pointer inline-flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>Buy now</span>
              <ArrowUpRight className="size-4.5" />
            </Button>

            <Button
              nativeButton={false}
              variant="outline"
              render={<Link href="tel:0487042694" />}
              className="h-12 sm:h-13 rounded-full px-7 border-white/25 bg-black/40 hover:bg-black/60 text-white font-medium text-sm cursor-pointer backdrop-blur-md inline-flex items-center gap-2"
            >
              <Phone className="size-4 text-rose-400" />
              <span>Call Mark: 0487 042 694</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MantaHero;

