"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Wind, Sparkles, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const propellers = [
  {
    title: "2-Blade Folding Propeller",
    image: "/manta/how-it-works/2-blade-propeller.svg",
    tag: "Standard Equipment",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description:
      "Engineered for pure glide and effortless surf carves. Opens automatically under throttle and folds flush when unpowered.",
    highlights: [
      "Zero unpowered drag for genuine wave-riding feel",
      "Lightweight dynamic response for nimble turning",
      "Lower energy draw for maximum battery efficiency",
      "Ideal for lightweight riders, prone, and downwinders",
    ],
  },
  {
    title: "3-Blade Folding Propeller",
    image: "/manta/how-it-works/3-blade-propeller.svg",
    tag: "High Thrust Upgrade",
    tagColor: "bg-[#ef0e0a]/20 text-orange-300 border-[#ef0e0a]/30",
    description:
      "High-output performance propeller delivering instant acceleration, grip in choppy water, and higher top-end speed.",
    highlights: [
      "Maximum instantaneous low-end punch to foil",
      "Superior torque for riders over 85kg or smaller boards",
      "Reduced cavitation under aggressive acceleration",
      "CNC precision-machined aluminum blades",
    ],
  },
];

const propellerFaqs = [
  {
    id: "prop-choice",
    q: "Which propeller should I choose for my setup?",
    a: "The 2-Blade is perfect for lightweight riders, wave surfers, and beginners who prioritize drag-free gliding once up on foil. If you want stronger initial thrust, ride heavier (>85kg), or use a smaller low-volume board, choose the 3-Blade Folding Propeller.",
  },
  {
    id: "prop-why-folding",
    q: "Why a folding propeller?",
    a: "The folding mechanism is specifically engineered to minimize hydrodynamic drag when the motor is not engaged. The blades trail smoothly in the slipstream during gliding or surfing a swell and expand automatically the moment throttle is applied.",
  },
  {
    id: "prop-upgrade",
    q: "Can I upgrade or change my propeller?",
    a: "Yes. The standard TakeOff kit comes with the 2-Blade Folding propeller. The 3-Blade Aluminum version is compatible across the entire TakeOff range and can be easily swapped in minutes using standard tools.",
  },
  {
    id: "prop-maintenance",
    q: "How much maintenance is required?",
    a: "The Performance Motor is completely direct-drive and sealed, eliminating internal gearboxes, belts, and bearings. Simply rinse the propeller and motor assembly with fresh water after each session. No lanolin sprays or messy grease required.",
  },
  {
    id: "prop-ride-effect",
    q: "How does the propeller choice affect my ride?",
    a: "The 2-blade folding propeller provides lighter swing weight, making pumping and rail-to-rail transitions effortless. The 3-blade provides immediate acceleration and raw push, helping you get up onto smaller foils and catch fast-moving swells.",
  },
  {
    id: "prop-battery-life",
    q: "Does the propeller type affect battery life?",
    a: "Yes. The 2-blade folding prop draws less sustained current, yielding longer overall session time. The 3-blade prop provides more thrust and higher top speed, which consumes slightly more battery capacity at full power.",
  },
];

const HowItWorksPropellers = () => {
  const [openFaq, setOpenFaq] = useState<string | null>("prop-choice");

  return (
    <section id="propellers" className="relative w-full py-16 lg:py-24 bg-[#4A505B] text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ef0e0a]/30 bg-[#ef0e0a]/10 px-4 py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
              Step 03
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Choose Your <span className="text-[#ef0e0a]">Propeller</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Match your foil size, rider weight, and flight goals with the ideal folding blade setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
          {propellers.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.09] hover:border-[#FFE600]/50 transition-all duration-300 p-8 backdrop-blur-md shadow-xl justify-between group"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className={cn("text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border", item.tagColor)}>
                    {item.tag}
                  </span>
                  <Wind className="size-5 text-orange-300" />
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

                <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
                  {item.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <Check className="size-4 text-[#FFE600] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button
                  nativeButton={false}
                  render={<Link href="/contact?item=TakeOff%20Propeller%20Option" />}
                  className="w-full h-11 rounded-full bg-black/60 hover:bg-[#ef0e0a] text-white border border-white/20 hover:border-transparent font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Choose Propeller
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-6">
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white border-b border-white/10 pb-4">
              Propeller <span className="text-[#ef0e0a]">FAQs</span>
            </h3>

            <div className="flex flex-col gap-3">
              {propellerFaqs.map((faq) => {
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
                          isOpen && "rotate-180 bg-[#ef0e0a]/20 text-orange-300"
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

export default HowItWorksPropellers;

