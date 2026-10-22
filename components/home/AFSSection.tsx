import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Layers, Phone, Wind } from "lucide-react";
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
      className="relative w-full bg-[#F4F5F7] py-20 lg:py-28 text-slate-900 overflow-hidden border-t border-slate-200"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-14 sm:gap-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-rose-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase text-rose-600 border border-rose-500/20">
                Official Australian Distributor
              </span>
              <span className="text-xs font-medium text-slate-500">
                Foil And Co • Brittany, France
              </span>
            </div>

            <h2 className="text-3xl max-w-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              AFS — The Foiling Spirit{" "}
              <span className="text-[#E11D48] font-semibold">Since 2009</span>
            </h2>

            <p className="text-base max-w-3xl sm:text-lg text-slate-600 leading-relaxed">
              Designed and manufactured in Brittany, France by Foil And Co, combining authentic French craftsmanship with aerospace-grade composite carbon innovation. Built for riders who demand confidence, glide, and durability across freeride, carving, downwind, and surf foiling.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-sm relative overflow-hidden group">
            <div className="flex flex-col gap-3 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E11D48]">
                Flagship Carbon Foils & Wings
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Engineered for Pure Glide & Control
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From high-aspect speed runs to tight surf carves and downwind swells, AFS delivers hydrofoil setups refined through more than 15 years of dedicated French R&D.
              </p>
            </div>

            <div className="relative w-full my-6 flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200/80 transition-all duration-500 group-hover:shadow-md">
                <div className="relative w-full h-64 sm:h-72 lg:h-80 flex items-center justify-center">
                  <Image
                    src="/stock/afs-carbon-foil-setup.jpg"
                    alt="AFS Carbon Hydrofoil Setup"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105 select-none"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 relative z-10 w-full">
              <div className="flex flex-wrap gap-3 pt-2 w-full">
                <Button
                  nativeButton={false}
                  render={<Link href="/wa-stock" />}
                  className="h-11 md:w-auto w-full rounded-full px-6 bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium cursor-pointer shadow-md shadow-rose-900/20 inline-flex items-center gap-2 group/btn"
                >
                  <span>Explore In-Stock AFS</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>

                <Button
                  nativeButton={false}
                  variant="outline"
                  render={<Link href="#contact" />}
                  className="h-11 md:w-auto w-full rounded-full px-6 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-medium cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Enquire Pricing</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {afsCategories.map((cat, index) => {
                const IconComponent = cat.icon;
                const isLast = index === afsCategories.length - 1;
                return (
                  <div
                    key={cat.title}
                    className={`flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 group ${
                      isLast ? "sm:col-span-2 md:col-span-2" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-[#E11D48] border border-rose-100 group-hover:bg-[#E11D48] group-hover:text-white transition-colors duration-300">
                        <IconComponent className="size-5" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-[#E11D48] transition-colors">
                          {cat.title}
                        </h4>
                        <span className="text-xs font-semibold text-slate-500">
                          {cat.subtitle}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4">
                      <span className="text-[11px] font-bold tracking-wider uppercase text-rose-600">
                        {cat.tag}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex flex-col gap-1.5 text-center sm:text-left">
                <h4 className="text-lg font-bold text-slate-900">
                  Available Foil Sets & Configurations
                </h4>
                <p className="text-sm text-slate-600">
                  Custom full sets available in Silk v2, Enduro, Evo, and Flyer with multiple mast height and fuselage options in AUD.
                </p>
              </div>

              <Button
                nativeButton={false}
                render={<Link href="tel:0487042694" />}
                className="shrink-0 h-11 rounded-full px-6 bg-slate-900 hover:bg-slate-800 text-white font-medium cursor-pointer shadow-sm inline-flex items-center gap-2"
              >
                <Phone className="size-4" />
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
