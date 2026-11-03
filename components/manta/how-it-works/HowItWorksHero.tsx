"use client";

import Link from "next/link";
import { ArrowDown, Battery, Zap, Wind } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Choose your battery",
    href: "#batteries",
    icon: Battery,
  },
  {
    step: "Step 2",
    title: "Choose your charger",
    href: "#chargers",
    icon: Zap,
  },
  {
    step: "Step 3",
    title: "Choose your propeller",
    href: "#propellers",
    icon: Wind,
  },
];

const HowItWorksHero = () => {
  return (
    <section className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-[#3A3F48] to-[#4A505B] text-white border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,72,0.15),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,230,0,0.08),transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <span className="size-2 rounded-full bg-[#FFE600] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFE600]">
            TakeOff Evo Setup Guide
          </span>
        </div>

        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.1]">
            How It <span className="text-[#ef0e0a]">Works</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
            With over 20 years of foil design innovation, Manta Foils delivers ride experiences that are smooth, powerful, and unforgettable. Whether you’re chasing waves or cruising flatwater, our products give you the freedom to fly.
          </p>
          <p className="text-sm sm:text-base text-slate-300 font-semibold">
            Follow our simple 3-step process to configure the right setup for your TakeOff Evo foil assist:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl pt-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] hover:border-[#FFE600]/60 transition-all duration-300 backdrop-blur-md shadow-lg"
              >
                <div className="flex size-11 rounded-xl bg-white/10 border border-white/15 items-center justify-center text-orange-300 group-hover:bg-[#FFE600] group-hover:text-black group-hover:border-transparent transition-all">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-300 group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-[#FFE600] transition-colors">
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center text-xs text-slate-300 group-hover:text-white gap-1 pt-1">
                  <span>View options</span>
                  <ArrowDown className="size-3 transition-transform group-hover:translate-y-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;

