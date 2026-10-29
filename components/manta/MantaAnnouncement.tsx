"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MantaAnnouncement = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#4A505B] text-white overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex flex-col items-start text-left gap-5">
           
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              We are excited <span className="text-rose-400">to announce!</span>
            </h2>

            <div className="flex flex-col gap-3.5 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              <p>
                WingingWA is now the dealer for Western Australia. We have demo units arriving shortly and look forward to showing you the exciting new Take Off.
              </p>
              <p>
                Manta has models on offer: the <strong className="text-white font-semibold">Take Off Flow</strong> which is aimed at the rider who wants long ride times, and the <strong className="text-white font-semibold">Take Off Air</strong>, a lighter version with removable batteries for air travel and the option to increase run time by adding additional battery modules.
              </p>
              <p>
                Please reach out to book a viewing or for additional information.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                nativeButton={false}
                render={<Link href="tel:0487042694" />}
                className="h-12 rounded-full px-7 bg-[#E11D48] hover:bg-[#BE123C] text-white font-black text-sm uppercase tracking-wide cursor-pointer shadow-lg shadow-rose-950/40 inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                <Phone className="size-4" />
                <span>PH: 0487 042 694</span>
              </Button>

              <Button
                nativeButton={false}
                variant="outline"
                render={<Link href="/contact?item=Manta%20TakeOff%20Demo" />}
                className="h-12 rounded-full px-7 border-white/25 bg-white/10 hover:bg-white/20 text-white font-bold text-sm cursor-pointer backdrop-blur-md inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                <Calendar className="size-4 text-rose-300" />
                <span>Book a Viewing</span>
                <ArrowUpRight className="size-4" />
              </Button>
            </div>
          </div>

          <div className="relative w-full h-full rounded-3xl overflow-hidden group">
            <Image
              src="/MantaAnnouncement.avif"
              alt="Manta TakeOff Foil Assist Announcement"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
            /></div>
        </div>
      </div>
    </section>
  );
};

export default MantaAnnouncement;

