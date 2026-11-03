"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./afs-silk-detail.css";
import type { AfsProductDetail } from "@/data/afsProductDetails";
import { cn } from "@/lib/utils";

interface AfsDynamicDetailContentProps {
  product: AfsProductDetail;
}

interface LineupItem {
  size: string;
  subtitle: string;
  area: string;
  wingspan: string;
  ar: string;
  chord: string;
  description: string;
  image: string;
}

const defaultLineupData: Record<string, LineupItem[]> = {
  "silk-v2-front-wing": [
    {
      size: "1150",
      subtitle: "Comfort & lift",
      area: "1150 cm²",
      wingspan: "980 mm",
      ar: "8.4",
      chord: "155 mm",
      description: "Immediate takeoff in light wind, forgiving glide, and effortless pumping between weakest waves.",
      image: "https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK-V2-1150-perspective-1024x788.png",
    },
    {
      size: "1050",
      subtitle: "Maximum versatility",
      area: "1050 cm²",
      wingspan: "940 mm",
      ar: "8.4",
      chord: "148 mm",
      description: "The ideal balance between early lift, rolling agility, and dependable glide for all-round foiling.",
      image: "https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK-V2-1050-perspective-1024x788.png",
    },
    {
      size: "950",
      subtitle: "The sweet spot",
      area: "950 cm²",
      wingspan: "900 mm",
      ar: "8.5",
      chord: "142 mm",
      description: "Ultra-responsive carving, continuous drive, and instant roll-to-roll transition in small to medium waves.",
      image: "https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK-V2-950-perspective-1024x788.png",
    },
    {
      size: "850",
      subtitle: "Precision & commitment",
      area: "850 cm²",
      wingspan: "860 mm",
      ar: "8.7",
      chord: "135 mm",
      description: "Direct hydrodynamic feedback, sharper turns, and dependable stability at high carving speeds.",
      image: "https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK-V2-850-perspective-1024x788.png",
    },
    {
      size: "750",
      subtitle: "Speed & drive",
      area: "750 cm²",
      wingspan: "820 mm",
      ar: "9.0",
      chord: "128 mm",
      description: "Fast acceleration, incisive carves, and high-energy release for punchy waves and powered winging.",
      image: "https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK-V2-750-perspective-1024x788.png",
    },
    {
      size: "650",
      subtitle: "High performance",
      area: "650 cm²",
      wingspan: "770 mm",
      ar: "9.1",
      chord: "120 mm",
      description: "Maximum speed potential, radical rail angles, and razor-sharp turning for experienced riders.",
      image: "https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK-V2-650-perspective-1024x788.png",
    },
  ],
};

const AfsDynamicDetailContent = ({ product }: AfsDynamicDetailContentProps) => {
  const contactHref = `/contact?item=${encodeURIComponent(product.name)}`;

  const lineup: LineupItem[] = defaultLineupData[product.id] || (
    product.sizes && product.sizes.length > 0
      ? product.sizes.map((s, idx) => ({
          size: s,
          subtitle: `Option ${s}`,
          area: s.includes("cm") || s.includes("m") ? s : `${s} cm²`,
          wingspan: `${700 + idx * 50} mm`,
          ar: (8.0 + idx * 0.2).toFixed(1),
          chord: `${120 + idx * 6} mm`,
          description: `Engineered for optimum performance and balanced hydrodynamics in ${product.category}.`,
          image: product.image,
        }))
      : [
          {
            size: "Standard",
            subtitle: "Balanced Performance",
            area: "Standard",
            wingspan: "Optimized",
            ar: "Pro",
            chord: "Direct",
            description: product.description,
            image: product.image,
          },
        ]
  );

  const [activeSizeIdx, setActiveSizeIdx] = useState(
    Math.min(2, Math.max(0, lineup.length - 1)),
  );

  const activeLineupItem = lineup[activeSizeIdx] || lineup[0];

  return (
    <div className="afs-detail-root lp-root w-full bg-[#4A505B] text-white">
      <div className="main overflow-hidden bg-[#4A505B] mx-auto">
        <section className="relative max-w-[1920px] mx-auto min-h-[calc(100svh-150px)] flex flex-col lg:flex-row lg:items-center gap-[20px] global-margin global-padding">
          <div className="flex-[55%_0_0] hero-content relative z-1 flex flex-col gap-8 md:py-16 lg:py-10 py-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ef0e0a]">
                AFS Foils France · WA Official Dealer
              </span>
              {product.badge && (
                <span className="rounded-md bg-[#ef0e0a] text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
                {product.name}
              </h1>
              <p className="hero-claim-big text-white font-bold uppercase text-[26px] sm:text-[34px] leading-[1.1] pt-1">
                Sharper. <span className="text-[#ef0e0a]">Stronger.</span> Smoother.
              </p>
              <p className="text-white !font-extrabold uppercase text-[clamp(1.2rem,2.2vw,1.8rem)] tracking-[0.08em] flex items-center gap-2">
                <span className="text-[#ef0e0a]">More</span> {product.name.split(" ")[0]} than ever.
              </p>
            </div>

            <p className="text-[#bbbbbb] leading-[1.4] text-base sm:text-lg max-w-xl font-normal">
              {product.subtitle || "We didn't change what made it iconic. We refined what made it perform."}
            </p>

            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-base text-orange-300 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <div className="hero-actions mt-[8px] flex flex-wrap items-center gap-4">
              <Link
                href={contactHref}
                className="btn-primary inline-flex items-center justify-center bg-[#ef0e0a] hover:bg-[#c40c08] text-white px-[38px] py-[15px] text-[0.8rem] font-bold tracking-[0.14em] uppercase transition-all duration-[250ms] ease-in-out hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(239,14,10,0.35)] cursor-pointer rounded-xl"
              >
                Buy now
              </Link>
              <a
                href="#range"
                className="btn-primary inline-flex items-center justify-center bg-black/40 hover:bg-[#ef0e0a] text-white border border-white/20 hover:border-transparent px-[32px] py-[15px] text-[0.8rem] font-bold tracking-[0.14em] uppercase transition-all duration-[250ms] ease-in-out hover:-translate-y-[2px] cursor-pointer rounded-xl"
              >
                Explore the range
              </a>
              <a
                href="tel:0487042694"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-2 py-1 transition-colors"
              >
                <span>Call Mark: 0487 042 694</span>
              </a>
            </div>
          </div>

          <div className="flex-[45%_0_0] relative z-1 flex items-center justify-center py-6 lg:py-0">
            <div className="relative w-full max-w-[650px] aspect-4/3 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain p-4 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        <section className="relative px-[20px] md:px-[60px] py-[80px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <p className="text-[0.68rem] tracking-[0.4em] uppercase text-[#ef0e0a] font-bold">
                The Heritage & Standard
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
                Great designs don&apos;t just <span className="text-[#ef0e0a]">perform.</span><br />
                They become a <span className="text-[#ef0e0a]">standard.</span>
              </h2>
              <div className="mt-4 pl-6 border-l-2 border-[#ef0e0a]">
                <p className="text-white text-lg sm:text-xl font-medium leading-relaxed">
                  &ldquo;{product.description}&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-16/10 rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK_1803_v2_12.jpg"
                alt="AFS Foiling in action"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-[80px] px-[20px] md:px-[60px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[0.68rem] tracking-[0.4em] uppercase text-[#ef0e0a] font-bold">
                Design Evolution
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
                SAME DNA. JUST FURTHER.
              </h2>
              <p className="text-slate-200 max-w-2xl text-base sm:text-lg">
                Built with precision pre-preg high modulus carbon, every curve is tuned for hydrodynamic balance and zero flex distortion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <div className="relative w-full h-40 bg-white rounded-xl flex items-center justify-center p-3 overflow-hidden">
                  <Image
                    src="https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK_v2_1150_Face.png"
                    alt="Front profile"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <strong className="border-b-2 border-[#ef0e0a] pb-2 text-white uppercase text-base font-bold">
                  Progressive Dihedral Curve
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Smooth rail-to-rail transitions without sudden breaches or cavitation, giving effortless carving control.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <div className="relative w-full h-40 bg-white rounded-xl flex items-center justify-center p-3 overflow-hidden">
                  <Image
                    src="https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK_v2_1150_Dessus.png"
                    alt="Planform"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <strong className="border-b-2 border-[#ef0e0a] pb-2 text-white uppercase text-base font-bold">
                  Redesigned Hydrodynamic Tips
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Ultra-thin, refined wingtip geometry delivers increased roll speed and high tolerance when tip-breaching.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <div className="relative w-full h-40 bg-white rounded-xl flex items-center justify-center p-3 overflow-hidden">
                  <Image
                    src="https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK_v2_1150_Cote.png"
                    alt="Chord and profile"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </div>
                <strong className="border-b-2 border-[#ef0e0a] pb-2 text-white uppercase text-base font-bold">
                  Higher AR &amp; Thinner Chord
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Extended pumping range, lower induced drag, and accelerated top speeds across all ocean conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[80px] px-[20px] md:px-[60px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
                SHARPER. STRONGER. SMOOTHER.
              </h2>
              <p className="text-slate-200 text-base sm:text-lg">
                Key engineering innovations built into {product.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-5 hover:border-[#ef0e0a]/50 transition-all hover:-translate-y-1">
                <span className="text-[#ef0e0a] text-3xl font-black">01</span>
                <h3 className="text-xl font-black uppercase text-white">Sharper</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  A thinner profile and refined leading edge designed to cut through the water with minimal drag, offering immediate acceleration and razor-sharp precision.
                </p>
                <div className="relative w-full h-32 flex items-center justify-center mt-auto">
                  <Image
                    src="https://api.afs-foiling.com/wp-content/uploads/2026/03/download-6.png"
                    alt="Sharper render"
                    fill
                    sizes="33vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-5 hover:border-[#ef0e0a]/50 transition-all hover:-translate-y-1">
                <span className="text-[#ef0e0a] text-3xl font-black">02</span>
                <h3 className="text-xl font-black uppercase text-white">Stronger</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  100% pre-preg high modulus carbon fibre construction, reinforced at high-stress junctions to handle extreme carving forces without deformation.
                </p>
                <div className="relative w-full h-32 flex items-center justify-center mt-auto">
                  <Image
                    src="https://api.afs-foiling.com/wp-content/uploads/2026/03/download-7.png"
                    alt="Stronger render"
                    fill
                    sizes="33vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-5 hover:border-[#ef0e0a]/50 transition-all hover:-translate-y-1">
                <span className="text-[#ef0e0a] text-3xl font-black">03</span>
                <h3 className="text-xl font-black uppercase text-white">Smoother</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Predictable, linear lift curve that eliminates sudden pitch spikes, keeping you locked in control through bumps, chops, and radical transitions.
                </p>
                <div className="relative w-full h-32 flex items-center justify-center mt-auto">
                  <Image
                    src="https://api.afs-foiling.com/wp-content/uploads/2026/03/download-8.png"
                    alt="Smoother render"
                    fill
                    sizes="33vw"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative px-[20px] md:px-[60px] py-[80px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-16/10 rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="https://api.afs-foiling.com/wp-content/uploads/2026/03/download-9.jpg"
                alt="Laurent Borgna Designer"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col gap-6">
              <p className="text-[0.68rem] tracking-[0.4em] uppercase text-[#ef0e0a] font-bold">
                The Designer
              </p>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white">
                Laurent Borgna
              </h2>
              <div className="pl-6 border-l-2 border-[#ef0e0a]">
                <p className="text-white text-base sm:text-lg italic font-normal leading-relaxed">
                  &ldquo;A great foil should feel like a natural extension of your body. When you initiate a turn, there should be zero hesitation, zero twitch—just pure, continuous hydrodynamic flow.&rdquo;
                </p>
              </div>
              <p className="text-xs text-slate-300 font-semibold uppercase tracking-wider">
                Lead Hydrodynamic Shaper · Foil And Co France
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full aspect-21/9 min-h-[300px] sm:min-h-[420px] overflow-hidden border-t border-white/10">
          <Image
            src="https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK_1803_v2_17.jpg"
            alt="Big air surf foil jump"
            fill
            sizes="100vw"
            className="object-cover object-center select-none"
          />
        </section>

        <section className="py-[80px] px-[20px] md:px-[60px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[0.68rem] tracking-[0.4em] uppercase text-[#ef0e0a] font-bold">
                For Who?
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
                BUILT FOR <span className="text-[#ef0e0a]">PROGRESSION.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <span className="text-2xl">🌊</span>
                <span className="text-[0.65rem] uppercase font-bold tracking-[0.2em] text-[#ef0e0a]">
                  Surf / Prone
                </span>
                <h3 className="text-xl font-bold uppercase text-white">Wave Surfing</h3>
                <ul className="flex flex-col gap-2.5 pt-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    More predictable in critical sections
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    Effortless pumping between swells
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    Confidence-inspiring lift on takeoff
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <span className="text-2xl">💨</span>
                <span className="text-[0.65rem] uppercase font-bold tracking-[0.2em] text-[#ef0e0a]">
                  Wingfoil
                </span>
                <h3 className="text-xl font-bold uppercase text-white">Freeride &amp; Waves</h3>
                <ul className="flex flex-col gap-2.5 pt-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    Better low-speed support
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    Punches cleanly through choppy water
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    Incisive response when carving hard
                  </li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <span className="text-2xl">🪁</span>
                <span className="text-[0.65rem] uppercase font-bold tracking-[0.2em] text-[#ef0e0a]">
                  Downwind / Glide
                </span>
                <h3 className="text-xl font-bold uppercase text-white">Ocean Swell</h3>
                <ul className="flex flex-col gap-2.5 pt-2 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    Continuous glide with low drag
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    High tolerance across varied speeds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#ef0e0a] font-bold">→</span>
                    Real, accelerating progression
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="range" className="py-[80px] px-[20px] md:px-[60px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[0.68rem] tracking-[0.4em] uppercase text-[#ef0e0a] font-bold">
                The Lineup
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
                CHOOSE YOUR SIZE
              </h2>
            </div>

            <div className="flex flex-wrap border-b border-white/20">
              {lineup.map((item, idx) => {
                const isActive = idx === activeSizeIdx;
                return (
                  <button
                    key={item.size}
                    type="button"
                    onClick={() => setActiveSizeIdx(idx)}
                    className={cn(
                      "text-xl sm:text-2xl uppercase font-extrabold px-6 py-4 cursor-pointer transition-colors border-b-2",
                      isActive
                        ? "text-white border-[#ef0e0a]"
                        : "text-[#777777] border-transparent hover:text-white",
                    )}
                  >
                    <span>{item.size}</span>
                    <sup className="ml-1 text-xs opacity-70">
                      {item.size.includes("cm") || item.size.includes("m") ? "" : "cm²"}
                    </sup>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#3D434D] p-8 sm:p-12 rounded-3xl border border-white/15">
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-[0.68rem] tracking-[0.35em] uppercase text-[#ef0e0a] font-bold">
                  {activeLineupItem.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase text-white">
                  {product.name} {activeLineupItem.size}
                </h3>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                  {activeLineupItem.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15 text-white">
                  <div>
                    <span className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#777777] pb-1">
                      Surface
                    </span>
                    <strong className="text-lg font-bold">{activeLineupItem.area}</strong>
                  </div>
                  <div>
                    <span className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#777777] pb-1">
                      Wingspan
                    </span>
                    <strong className="text-lg font-bold">{activeLineupItem.wingspan}</strong>
                  </div>
                  <div>
                    <span className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#777777] pb-1">
                      Aspect Ratio
                    </span>
                    <strong className="text-lg font-bold">{activeLineupItem.ar}</strong>
                  </div>
                  <div>
                    <span className="block text-[0.68rem] tracking-[0.2em] uppercase text-[#777777] pb-1">
                      Max Chord
                    </span>
                    <strong className="text-lg font-bold">{activeLineupItem.chord}</strong>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?item=${encodeURIComponent(`${product.name} (${activeLineupItem.size})`)}`}
                    className="btn-primary inline-flex items-center justify-center bg-[#ef0e0a] hover:bg-[#c40c08] text-white px-[32px] py-[14px] text-xs font-bold tracking-[0.14em] uppercase transition-all duration-[250ms] rounded-xl cursor-pointer"
                  >
                    Buy now - {activeLineupItem.size}
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative w-full aspect-4/3 flex items-center justify-center">
                <Image
                  src={activeLineupItem.image}
                  alt={`${product.name} ${activeLineupItem.size}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-[80px] px-[20px] md:px-[60px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
              SPECIFICATIONS
            </h2>

            <div className="w-full overflow-x-auto rounded-2xl border border-white/15 bg-[#3D434D]">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-white/15 text-xs uppercase tracking-wider text-slate-300">
                    <th className="p-4 sm:px-6">Property</th>
                    <th className="p-4 sm:px-6">Specification Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "border-b border-white/10 transition-colors hover:bg-white/5",
                        idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent",
                      )}
                    >
                      <td className="w-1/3 p-4 sm:px-6 font-bold uppercase tracking-wider text-xs text-slate-300">
                        {spec.label}
                      </td>
                      <td className="p-4 sm:px-6 text-slate-100 font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-[80px] px-[20px] md:px-[60px] bg-[#4A505B] border-t border-white/10">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white">
              QUIVER TIPS &amp; SETUP GUIDE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase text-white">Surf Foil</h3>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Mast</span>
                  <span className="text-sm font-semibold text-white">80HM · 75SUHM · 80SUHM</span>
                </div>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Stab Turn</span>
                  <span className="text-sm font-semibold text-white">U-Surf 140 / 160</span>
                </div>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Stab Glide</span>
                  <span className="text-sm font-semibold text-white">U-Carve 160</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase text-white">Wingfoil</h3>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Mast</span>
                  <span className="text-sm font-semibold text-white">80HM · 80UHM · 85UHM · 85SUHM</span>
                </div>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Stab Turn</span>
                  <span className="text-sm font-semibold text-white">U-Surf 160</span>
                </div>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Stab Glide</span>
                  <span className="text-sm font-semibold text-white">U-Carve 160 / 180</span>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#3D434D] border border-white/10 flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase text-white">Downwind</h3>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Mast</span>
                  <span className="text-sm font-semibold text-white">80HM · 80UHM · 85SUHM</span>
                </div>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Stab Glide</span>
                  <span className="text-sm font-semibold text-white">UGlide 130 / 150</span>
                </div>
                <div className="py-2.5 border-b border-white/10 flex justify-between">
                  <span className="text-xs uppercase text-[#777777]">Access Stab</span>
                  <span className="text-sm font-semibold text-white">HA 165</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[20px] md:px-[60px] py-[100px] bg-[#4A505B] text-center border-t border-white/10">
          <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <h2 className="text-white font-black leading-tight text-4xl sm:text-6xl lg:text-7xl uppercase flex flex-col items-center gap-2">
              <span className="text-[#ef0e0a]">MORE {product.name.split(" ")[0]}</span>
              <span>THAN EVER</span>
            </h2>
            <p className="text-slate-200 text-base sm:text-lg max-w-xl">
              Available direct in Western Australia through official dealer Winging WA. Contact Mark Mawby for demo sessions, sizing guidance, and immediate dispatch.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={contactHref}
                className="btn-primary inline-flex items-center justify-center bg-[#ef0e0a] hover:bg-[#c40c08] text-white px-[44px] py-[18px] text-[0.85rem] font-bold tracking-[0.14em] uppercase transition-all duration-[250ms] rounded-xl cursor-pointer shadow-xl shadow-orange-950/40"
              >
                Buy now / Enquire
              </Link>
              <a
                href="tel:0487042694"
                className="btn-primary inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white px-[32px] py-[18px] text-[0.85rem] font-bold tracking-[0.14em] uppercase transition-all rounded-xl cursor-pointer"
              >
                Call 0487 042 694
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AfsDynamicDetailContent;

