"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Zap, Clock, ShieldCheck, Gauge, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const chargers = [
  {
    title: "Lite Charger",
    image: "/manta/how-it-works/charger-standard.svg",
    tag: "Standard Pace",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    description: "Ideal for overnight charging and riders with relaxed turnaround times.",
    airTime: "1 hr",
    enduranceTime: "2 hr 40 min",
    features: [
      "Compact and portable travel charger",
      "Gentle cell current for maximum longevity",
      "Automatic shutoff and thermal regulation",
    ],
  },
  {
    title: "Standard Rapid Charger",
    image: "/manta/how-it-works/charger-standard.svg",
    tag: "High Speed",
    tagColor: "bg-[#FFE600]/20 text-[#FFE600] border-[#FFE600]/30",
    description: "Fast-turnaround high-speed charger engineered for active riders.",
    airTime: "30 min",
    enduranceTime: "1 hr 20 min",
    features: [
      "Ultra-fast replenishment to get right back on the water",
      "Active fan cooling with smart temperature monitoring",
      "Built-in cell auto-balancing system",
    ],
  },
];

const chargerFaqs = [
  {
    id: "chg-choice",
    q: "Which charger should I choose for the TakeOff Evo system?",
    a: "The choice depends on how quickly you need to get back on the water and your battery setup. The Standard Charger is a high-speed charger for active riders, charging a single Air battery in 30 minutes or an Endurance battery in 1 hour and 20 minutes. The Lite Charger is a relatively slower, compact option charging a single Air battery in 1 hour or an Endurance battery in 2 hours and 40 minutes.",
  },
  {
    id: "chg-safety",
    q: "Is the charger safe for long-term battery health?",
    a: "Yes. All chargers work in tandem with our improved Battery Management System (BMS) and are equipped with Auto-Balancing features. The battery packs self-balance while charging, which prevents cell voltage mismatches and ensures maximum battery pack lifespan.",
  },
  {
    id: "chg-full",
    q: "How do I know when my battery is fully charged?",
    a: "For the TakeOff Evo, simply plug your battery into the main unit and turn on your remote; the exact charge level will display on the remote screen. You can also connect via the mobile app or use the optional direct battery checker.",
  },
];

const HowItWorksChargers = () => {
  const [openFaq, setOpenFaq] = useState<string | null>("chg-choice");

  return (
    <section id="chargers" className="relative w-full py-16 lg:py-24 bg-[#3E434D] text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE600]/30 bg-[#FFE600]/10 px-4 py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FFE600]">
              Step 02
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Choose Your <span className="text-[#FFE600]">Charger</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Match your turnaround speed with the right charger for quick beach turnarounds or gentle overnight charging.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {chargers.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.09] hover:border-[#ef0e0a]/50 transition-all duration-300 p-8 backdrop-blur-md shadow-xl justify-between group"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border", item.tagColor)}>
                    {item.tag}
                  </span>
                  <Zap className="size-5 text-[#FFE600]" />
                </div>

                <div className="relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden rounded-2xl bg-black/20 p-6 border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-white/[0.04]">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Clock className="size-3.5 text-[#ef0e0a]" />
                      1x Air Battery (194 Wh)
                    </span>
                    <span className="font-extrabold text-white">{item.airTime}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs py-1.5 px-3 rounded-xl bg-white/[0.04]">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Clock className="size-3.5 text-[#FFE600]" />
                      1x Endurance (518 Wh)
                    </span>
                    <span className="font-extrabold text-white">{item.enduranceTime}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
                  {item.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="size-3.5 text-emerald-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button
                  nativeButton={false}
                  render={<Link href="/contact?item=TakeOff%20Charger%20Option" />}
                  className="w-full h-11 rounded-full bg-black/60 hover:bg-[#FFE600] hover:text-black text-white border border-white/20 hover:border-transparent font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Select Charger
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white border-b border-white/10 pb-4">
              Charger <span className="text-[#FFE600]">FAQs</span>
            </h3>

            <div className="flex flex-col gap-3">
              {chargerFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] transition-all overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {faq.q}
                      </span>
                      <div
                        className={cn(
                          "flex size-7 rounded-full bg-white/10 items-center justify-center shrink-0 transition-transform duration-300",
                          isOpen && "rotate-180 bg-[#FFE600]/20 text-[#FFE600]"
                        )}
                      >
                        <ChevronDown className="size-4" />
                      </div>
                    </button>
                    <div
                      className={cn(
                        "transition-all duration-300 ease-out overflow-hidden px-5",
                        isOpen ? "max-h-72 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                      )}
                    >
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal pt-2 border-t border-white/10">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksChargers;

