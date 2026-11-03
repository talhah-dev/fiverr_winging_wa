"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Waves, Feather, LifeBuoy, Radio } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Universal Compatibility",
    desc: "Works with most foil assist systems made for 90mm track.",
  },
  {
    icon: Feather,
    title: "Weightless Feel",
    desc: "With reduced drag on your board, unlocking pumping and agility.",
  },
  {
    icon: LifeBuoy,
    title: "Buoyant & comfortable",
    desc: "Ride with peace of mind",
  },
  {
    icon: Radio,
    title: "Unmatched Connectivity",
    desc: "Highest signal strength even with full carbon boards.",
  },
];

const specs = [
  {
    feature: "Compatibility",
    detail: "Universal · Fits any foil assist made for 90mm track (with dedicated cable leash)",
  },
  {
    feature: "Signal Strength",
    detail: "Max (Even on full carbon boards)",
  },
  {
    feature: "Fit",
    detail: "Adjustable (S to XL)",
  },
  {
    feature: "Buoyant",
    detail: "Yes (up to apprx. 5 kg)",
  },
];

const MantaBackpackContent = () => {
  return (
    <div className="w-full bg-[#4A505B] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 pt-6 pb-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5 opacity-40 shrink-0" />
          <Link href="/manta-foils" className="hover:text-white transition-colors">
            Manta Foil Assist
          </Link>
          <ChevronRight className="size-3.5 opacity-40 shrink-0" />
          <span className="text-white font-medium">MANTA PACKPACK</span>
        </nav>
      </div>

      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/manta/backpack/hero.jpg"
          alt="MANTA PACKPACK"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center gap-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            MANTA PACKPACK
          </h1>
          <p className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-slate-100 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Less weight, more agility.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-4/3 w-full bg-[#3D434D] rounded-3xl p-6 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            <Image
              src="/manta/backpack/feature-1.png"
              alt="Universal backpack for foil assist kits"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6F900]">
              Innovative Universal Design
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Universal backpack for foil assist kits
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              With our patented design* relocate your foil assist off the board and onto your back, making your board ultra-light, more agile than ever, to unlock sharper carving and easier pumping.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-5 order-2 md:order-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D6F900]">
              Universal 90mm Track Compatibility
            </span>
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
              Compatible with most <strong className="text-white font-bold">foil assist systems made for a 90mm track</strong> (not just Manta Foils), the Manta Backpack gives you the ultimate flexibility and performance, all in one sleek, buoyant backpack.
            </p>
          </div>

          <div className="relative aspect-4/3 w-full bg-[#3D434D] rounded-3xl p-6 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl order-1 md:order-2">
            <Image
              src="/manta/backpack/feature-2.png"
              alt="Manta Backpack Compatibility"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-3 shadow-lg hover:border-white/20 transition-all"
                >
                  <div className="size-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D6F900]">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-white/15 bg-[#3D434D] shadow-2xl">
            <div className="px-6 py-4 bg-white/5 border-b border-white/10">
              <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                Features List
              </h3>
            </div>
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {specs.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/10 transition-colors hover:bg-white/5 ${
                      idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                    }`}
                  >
                    <th className="w-1/3 sm:w-1/4 p-4 sm:px-6 font-bold uppercase tracking-wider text-xs text-slate-300">
                      {row.feature}
                    </th>
                    <td className="p-4 sm:px-6 text-slate-100 font-medium">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MantaBackpackContent;

