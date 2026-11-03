"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const addons = [
  {
    title: "Mast Titanium Split Bolts",
    image: "/manta/how-it-works/split-bolts.png",
    subtitle: "Quick-mount hardware",
    description:
      "Crafted from aerospace-grade titanium to make mounting and dismounting your main drive unit fast, rigid, and completely corrosion-proof.",
  },
  {
    title: "3-Blade Alu Folding Propeller V2",
    image: "/manta/how-it-works/3-blade-propeller-addon.png",
    subtitle: "High thrust upgrade",
    description:
      "CNC-machined aluminum folding propeller delivering extra bite, improved efficiency, and instant launch power for heavier riders.",
  },
  {
    title: "TakeOff Evo External Antenna",
    image: "/manta/how-it-works/evo-antenna.webp",
    subtitle: "Carbon deck signal booster",
    description:
      "A slim wired patch antenna designed to bypass 2.4GHz interference on boards with solid carbon layups, guaranteeing reliable remote reception.",
  },
];

const HowItWorksAddons = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#3E434D] text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1">
            <Sparkles className="size-3.5 text-[#FFE600]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFE600]">
              Performance Upgrades
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Recommended <span className="text-[#ef0e0a]">Add-Ons</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Enhance your TakeOff Evo system with factory-approved hardware and signal optimization accessories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {addons.map((addon, index) => (
            <div
              key={index}
              className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.09] hover:border-[#FFE600]/40 transition-all duration-300 p-6 sm:p-7 backdrop-blur-md shadow-xl justify-between group"
            >
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-square max-h-56 flex items-center justify-center overflow-hidden rounded-2xl bg-black/20 p-6 border border-white/10">
                  <Image
                    src={addon.image}
                    alt={addon.title}
                    width={220}
                    height={220}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-orange-300">
                    {addon.subtitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {addon.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {addon.description}
                </p>
              </div>

              <div className="pt-6">
                <Button
                  nativeButton={false}
                  render={<Link href={`/contact?item=${encodeURIComponent(addon.title)}`} />}
                  className="w-full h-11 rounded-full bg-black/60 hover:bg-[#FFE600] hover:text-black text-white border border-white/20 hover:border-transparent font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksAddons;

