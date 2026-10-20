import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Layers, ShieldCheck, Wind, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const afsCategories = [
  {
    title: "Front Wings & Sets",
    subtitle: "Silk v2 • Enduro • Evo • Flyer",
    desc: "Unmatched glide, carving precision, and high-aspect efficiency across prone, downwind, and wing foiling disciplines.",
    icon: Compass,
    tag: "High Modulus Carbon",
  },
  {
    title: "Masts & Fuselages",
    subtitle: "Stiffness & Direct Response",
    desc: "Precision-engineered French carbon masts and fuselages delivering zero flex and instant power transfer.",
    icon: Layers,
    tag: "French Engineering",
  },
  {
    title: "Wings & Parawings",
    subtitle: "Streamlined Aerodynamics",
    desc: "Lightweight, rigid airframes and intuitive canopy control built for maximum wind range and effortless handling.",
    icon: Wind,
    tag: "Next-Gen Aerodynamics",
  },
];

const AFSSection = () => {
  return (
    <section
      id="afs"
      className="relative w-full bg-black py-20 lg:py-28 text-white overflow-hidden border-t border-white/10"
    >

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-14 sm:gap-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col items-start gap-4 ">

            <h2 className="text-3xl max-w-xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              AFS — The Foiling Spirit{" "}
              <span className="text-rose-500 font-normal">Since 2009</span>
            </h2>

            <p className="text-base max-w-3xl sm:text-lg text-white/70 leading-relaxed">
              Designed and manufactured in Brittany, France by Foil And Co, combining authentic French craftsmanship with aerospace-grade composite carbon innovation. Built for riders who demand confidence, glide, and durability across freeride, carving, downwind, and surf foiling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 sm:p-10 relative overflow-hidden group">
          
            <div className="flex flex-col gap-4 relative z-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">
                Flagship Carbon Foils & Wings
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Engineered for Pure Glide & Control
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                From high-aspect speed runs to tight surf carves and downwind swells, AFS delivers hydrofoil setups refined through more than 15 years of dedicated R&D.
              </p>
            </div>

            <div className="relative w-full h-64 sm:h-72 my-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-[#ECECEC] p-6 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/stock/AFSStream.avif"
                  alt="AFS Stream Wing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105 select-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 relative z-10">

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  nativeButton={false}
                  render={<Link href="#wa-stock" />}
                  className="h-11 rounded-full px-6 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium cursor-pointer shadow-lg shadow-rose-950/40 inline-flex items-center gap-2 group/btn"
                >
                  <span>Explore In-Stock AFS</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>

                <Button
                  nativeButton={false}
                  variant="outline"
                  render={<Link href="#contact" />}
                  className="h-11 rounded-full px-6 border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Enquire Pricing</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {afsCategories.map((cat, index) => {
                const IconComponent = cat.icon;
                const isLast = index === afsCategories.length - 1;
                return (
                  <div
                    key={cat.title}
                    className={`flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group ${
                      isLast ? "sm:col-span-2 md:col-span-2" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/15 text-rose-400 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                        <IconComponent className="size-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base font-semibold text-white group-hover:text-rose-400 transition-colors">
                          {cat.title}
                        </h4>
                        <span className="text-xs font-medium text-white/50">
                          {cat.subtitle}
                        </span>
                      </div>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 mt-4">
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-rose-400/90">
                        {cat.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-sm">
              <div className="flex flex-col gap-1.5 text-center sm:text-left">
                <h4 className="text-lg font-semibold text-white">
                  Available Foil Sets & Configurations
                </h4>
                <p className="text-sm text-white/60">
                  Custom full sets available in Silk v2, Enduro, Evo, and Flyer with multiple mast height and fuselage options in AUD.
                </p>
              </div>

              <Button
                nativeButton={false}
                render={<Link href="tel:0487042694" />}
                className="shrink-0 h-11 rounded-full px-6 bg-white/10 hover:bg-white/20 text-white font-medium cursor-pointer border border-white/15 inline-flex items-center gap-2"
              >
                <span>Call Mark: 0487 042 694</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AFSSection;
