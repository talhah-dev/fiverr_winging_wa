import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, BatteryCharging, Waves } from "lucide-react";

const MantaAnnouncement = () => {
  return (
    <section
      id="manta"
      className="relative w-full bg-black py-20 lg:py-28 text-white overflow-hidden border-t border-white/10"
    >
    
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="flex flex-col items-start justify-center text-left gap-6 w-full">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white">
                We are excited to announce!
              </h2>
              <p className="text-lg sm:text-xl font-normal text-rose-400">
                WingingWA is now the official dealer for Western Australia.
              </p>
            </div>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
              We have demo units arriving shortly and look forward to showing you
              the exciting new Take Off. Manta builds premium Foil Assist
              systems for riders who want to catch more waves, ride in lighter
              conditions, and travel further with less effort.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-rose-400 font-medium">
                  <Waves className="size-4" />
                  <span>Take Off Flow</span>
                </div>
                <p className="text-sm text-white/70 leading-normal">
                  Aimed at the rider who wants long continuous ride times and
                  endurance on open water.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-rose-400 font-medium">
                  <BatteryCharging className="size-4" />
                  <span>Take Off Air</span>
                </div>
                <p className="text-sm text-white/70 leading-normal">
                  Lighter version with airline-compliant removable batteries and
                  expandable modular runtime.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Button
                nativeButton={false}
                render={<Link href="#wa-stock" />}
                className="h-11 rounded-full px-7 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium cursor-pointer shadow-lg shadow-rose-950/40 w-full sm:w-fit"
              >
                Shop Now
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>

          <div className="w-full flex">
            <div className="relative w-full h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group flex flex-col justify-end">
              <Image
                src="/MantaAnnouncement.avif"
                alt="Manta TakeOff Foil Assist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="relative z-10 w-full p-6 sm:p-8 flex justify-center items-center bg-gradient-to-t from-black/85 via-black/35 to-transparent">
                <Image
                  src="/TakeOff-Evo-Logo-white.webp"
                  alt="TakeOff Evo"
                  width={832}
                  height={76}
                  className="h-9 sm:h-11 w-auto max-w-[85%] object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MantaAnnouncement;
