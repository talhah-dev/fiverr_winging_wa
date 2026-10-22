import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Battery, Sparkles, Waves } from "lucide-react";

const MantaAnnouncement = () => {
  return (
    <section
      id="manta"
      className="relative w-full bg-[#EAECEF] py-20 lg:py-28 text-slate-900 overflow-hidden border-t border-slate-300/80"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col items-start justify-center text-left gap-6 w-full">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-rose-600 border border-rose-500/20">
                  Western Australian Dealer
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Innovating in Foiling Since 2002
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Foil Assist Kits – Electrify your foil.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We build premium Foil Assist kits for riders who want to catch more
              waves, ride in lighter conditions, and go further with less effort.
              From surf foil to wingfoil, downwind and beyond, our systems bring
              electric power into foiling with performance, simplicity and freedom.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full h-36 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center p-2">
                  <Image
                    src="/manta-evo.png"
                    alt="Manta TakeOff Evo"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex items-center gap-2 text-[#E11D48] font-bold text-base">
                  <Waves className="size-4.5" />
                  <span>Manta Evo</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                  Slim, ultra-light foil assist system engineered for maximum power-to-weight, minimal drag, and modular airline-compliant battery packs.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full h-36 rounded-xl bg-slate-100 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/manta-backpack.jpg"
                    alt="Manta Backpack"
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 text-[#E11D48] font-bold text-base">
                  <Battery className="size-4.5" />
                  <span>Manta Backpack</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                  Patented wearable harness system relocating the battery onto the rider for zero swing weight, effortless pumping, and pure carving freedom.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                nativeButton={false}
                render={<Link href="#wa-stock" />}
                className="h-11 rounded-full px-7 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium cursor-pointer shadow-md shadow-rose-900/20 w-full sm:w-fit inline-flex items-center gap-2"
              >
                <span>View In-Stock Manta Gear</span>
                <ArrowUpRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                render={<Link href="tel:0487042694" />}
                className="h-11 rounded-full px-6 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium cursor-pointer w-full sm:w-fit inline-flex items-center gap-2"
              >
                <span>Book a Demo</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex">
            <div className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group flex flex-col justify-end bg-slate-900">
              <Image
                src="/MantaAnnouncement.avif"
                alt="Manta TakeOff Evo Foil Assist on Water"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="relative z-10 w-full p-6 sm:p-8 flex flex-col items-center justify-center bg-gradient-to-t from-black/90 via-black/40 to-transparent gap-3">
                <Image
                  src="/TakeOff-Evo-Logo-white.webp"
                  alt="TakeOff Evo"
                  width={832}
                  height={76}
                  className="h-8 sm:h-10 w-auto max-w-[85%] object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                />
                <span className="text-xs tracking-wider uppercase text-slate-300 font-medium">
                  Official WA Dealer Demonstrator Units Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MantaAnnouncement;
