"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "battery-config",
    question: "Which TakeOff Evo battery configuration should I choose?",
    answer:
      "For maximum continuous flight time without flight travel limitations, choose the TakeOff Flow battery pack. If you frequently travel by air, the TakeOff Air configuration uses modular sub-100Wh battery packs compliant with FAA and IATA airline regulations, with the option to swap fresh packs in seconds.",
  },
  {
    id: "full-efoil",
    question: "Can the TakeOff Evo work as a full eFoil?",
    answer:
      "Yes! With its high-torque direct-drive electric motor and responsive handheld wireless throttle, the TakeOff Evo can power you onto foil in completely flat water like a dedicated eFoil, while still giving you the freedom to catch and release into ocean swells and prone waves.",
  },
  {
    id: "fit-existing-board",
    question: "Will the TakeOff Evo fit my existing board and foil?",
    answer:
      "The TakeOff Evo is engineered with universal dual US track compatibility. It fits seamlessly onto standard 90mm foil tracks across all major hydrofoil boards and masts without permanent modifications.",
  },
  {
    id: "rider-weight",
    question: "Is the TakeOff Evo powerful enough for my weight?",
    answer:
      "The direct-drive powertrain delivers instant torque engineered for riders of all weights up to 110kg+ across varying water states, surf sizes, and wind strengths.",
  },
  {
    id: "cost-and-included",
    question: "How much does the TakeOff Evo cost and what is included?",
    answer:
      "The complete package includes the direct-drive propulsion unit, battery system, waterproof ergonomic wireless remote, fast charger, and mounting hardware. Contact Mark at WingingWA for direct Australian quotes, GST-inclusive local pricing, and express delivery.",
  },
];

const MantaFAQ = () => {
  const [openId, setOpenId] = useState<string | null>("battery-config");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#4A505B] text-white overflow-hidden border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-md">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-300">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            TakeOff Evo: <span className="text-rose-400">Frequently Asked Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-3.5">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.07] transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {faq.question}
                    </span>
                    <div
                      className={cn(
                        "flex size-7 rounded-full bg-white/10 items-center justify-center shrink-0 transition-transform duration-300",
                        isOpen && "rotate-180 bg-rose-500/20 text-rose-300",
                      )}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </button>

                  <div
                    className={cn(
                      "transition-all duration-300 ease-out overflow-hidden px-5 sm:px-6",
                      isOpen
                        ? "max-h-72 pb-6 opacity-100"
                        : "max-h-0 pb-0 opacity-0",
                    )}
                  >
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal pt-1 border-t border-white/10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <div className="rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-8 sm:p-10 flex flex-col items-center text-center gap-5 shadow-2xl sticky top-28">
              <div className="flex size-14 rounded-2xl bg-white/10 border border-white/15 items-center justify-center text-white">
                <MessageSquareQuote className="size-7 text-rose-400" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
                  Still Have Questions? Let's Get You on the Water.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  Whether you're choosing your first Foil Assist system or looking to upgrade, our team and reseller network are here to help you find the right setup.
                </p>
              </div>

              <Button
                nativeButton={false}
                render={<Link href="/contact?item=Manta%20Foil%20Assist" />}
                className="w-full h-11 rounded-full bg-black hover:bg-[#E11D48] text-white border border-white/20 hover:border-transparent font-bold text-xs uppercase tracking-wider cursor-pointer transition-all shadow-md mt-2"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MantaFAQ;

