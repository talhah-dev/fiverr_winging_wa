"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Clock, Weight, BatteryCharging, Plane, MessageSquareQuote, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const batteries = [
  {
    title: "1x Air battery",
    image: "/manta/how-it-works/1-air-battery.webp",
    rideTime: "15 - 20 min",
    weight: "2.5 kg + motor",
    capacity: "194 Wh",
    tag: "Air Travel Approved",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    features: [
      "Airline carry-on compliant (<100Wh modular cells)",
      "Ultralight setup for wave riding and winging",
      "Fast swap in seconds",
    ],
  },
  {
    title: "2x Air batteries",
    image: "/manta/how-it-works/2-air-battery.webp",
    rideTime: "35 - 40 min",
    weight: "3.8 kg + motor",
    capacity: "388 Wh",
    tag: "Double Session",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    features: [
      "Extended air-travel compliant runtime",
      "Optimal balance of agility and endurance",
      "Dual modular pack configuration",
    ],
  },
  {
    title: "1x Endurance battery",
    image: "/manta/how-it-works/1-endurance-battery.webp",
    rideTime: "45 - 50 min",
    weight: "4.0 kg + motor",
    capacity: "518 Wh",
    tag: "Most Popular",
    tagColor: "bg-[#FFE600]/20 text-[#FFE600] border-[#FFE600]/30",
    features: [
      "High-capacity single pack convenience",
      "Perfect for long downwinders and flatwater cruising",
      "Maximum continuous run time per single block",
    ],
  },
  {
    title: "1x Air + 1x Endurance",
    image: "/manta/how-it-works/1-air-1-endurance-battery.webp",
    rideTime: "65 - 70 min",
    weight: "5.3 kg + motor",
    capacity: "712 Wh",
    tag: "Maximum Range",
    tagColor: "bg-[#ef0e0a]/20 text-orange-300 border-[#ef0e0a]/30",
    features: [
      "Ultimate flight endurance over an hour",
      "Combined flexibility for marathon sessions",
      "Highest total capacity available",
    ],
  },
];

const batteryFaqs = [
  {
    id: "bat-air-travel",
    q: "Can I travel by air with my TakeOff batteries?",
    a: "Yes. The Evo Air batteries are specifically engineered for air travel. Each individual pack is 97 Wh which falls under the standard airline limit of 100 Wh. So you can travel in most airlines with the batteries in your cabin luggage without any special approvals. Each travel pack includes an individual Battery Management System (BMS) to protect against short circuits and over-discharge, providing an additional layer of protection.",
  },
  {
    id: "bat-monitoring",
    q: "How can I monitor my battery percentage?",
    a: "The GPS-enabled remote provides real-time battery stats so you always know your remaining battery while riding. Additionally, the Manta Foils app offers live battery monitoring, remaining charge, cell health, and performance insights directly on your smartphone.",
  },
  {
    id: "bat-maintenance",
    q: "What maintenance do the batteries require?",
    a: "TakeOff batteries require minimal maintenance to stay safe and last longer. There are no serviceable parts inside. Always store batteries in a cool, dry place. Before charging, let the batteries cool down to room temperature, and always use the supplied charger.",
  },
  {
    id: "bat-ride-time",
    q: "What is the ride time for different TakeOff battery configurations?",
    a: "A single Air battery provides about 15 – 20 minutes, two Air batteries give 35 – 40 minutes, a single Endurance battery offers 45 – 50 minutes, and an Air + Endurance combo delivers 65 – 70 minutes of continuous ride time depending on rider weight and water conditions.",
  },
];

const HowItWorksBatteries = () => {
  const [openFaq, setOpenFaq] = useState<string | null>("bat-air-travel");

  return (
    <section id="batteries" className="relative w-full py-16 lg:py-24 bg-[#4A505B] text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ef0e0a]/30 bg-[#ef0e0a]/10 px-4 py-1">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
              Step 01
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Choose Your <span className="text-[#ef0e0a]">Battery</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal">
            Select the power configuration that suits your travel plans and session duration requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {batteries.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-3xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.08] hover:border-[#FFE600]/50 transition-all duration-300 p-6 backdrop-blur-md shadow-xl justify-between group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className={cn("text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border", item.tagColor)}>
                    {item.tag}
                  </span>
                  <div className="size-7 rounded-full bg-white/10 flex items-center justify-center text-slate-300 group-hover:text-[#FFE600] transition-colors">
                    <Plane className="size-3.5" />
                  </div>
                </div>

                <div className="relative w-full aspect-square max-h-48 flex items-center justify-center overflow-hidden rounded-2xl bg-black/20 p-4 border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={220}
                    height={220}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white text-center">
                  {item.title}
                </h3>

                <div className="grid grid-cols-1 gap-2 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs py-1">
                    <span className="text-slate-300 flex items-center gap-1.5 font-medium">
                      <Clock className="size-3.5 text-[#ef0e0a]" /> Ride time
                    </span>
                    <span className="font-bold text-white">{item.rideTime}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-t border-white/5">
                    <span className="text-slate-300 flex items-center gap-1.5 font-medium">
                      <Weight className="size-3.5 text-[#ef0e0a]" /> Weight
                    </span>
                    <span className="font-bold text-white">{item.weight}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1 border-t border-white/5">
                    <span className="text-slate-300 flex items-center gap-1.5 font-medium">
                      <BatteryCharging className="size-3.5 text-[#FFE600]" /> Capacity
                    </span>
                    <span className="font-bold text-white">{item.capacity}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                  {item.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-2 text-[11px] text-slate-300 leading-tight">
                      <Check className="size-3.5 text-[#FFE600] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <Button
                  nativeButton={false}
                  render={<Link href="/contact?item=TakeOff%20Evo%20Battery%20Config" />}
                  className="w-full h-10 rounded-full bg-black/60 hover:bg-[#ef0e0a] text-white border border-white/20 hover:border-transparent font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Configure This
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white border-b border-white/10 pb-4">
              Battery <span className="text-[#ef0e0a]">FAQs</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 flex flex-col gap-3">
                {batteryFaqs.map((faq) => {
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

              <div className="lg:col-span-4">
                <div className="rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 sm:p-8 flex flex-col items-center text-center gap-4 shadow-xl">
                  <div className="flex size-12 rounded-2xl bg-white/10 border border-white/15 items-center justify-center text-[#ef0e0a]">
                    <MessageSquareQuote className="size-6" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    Need Advice on Battery Choice?
                  </h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Still unsure about airline rules or setup runtime? Call Mark at Winging WA directly for local Western Australia support.
                  </p>
                  <Button
                    nativeButton={false}
                    render={<Link href="tel:0487042694" />}
                    className="w-full h-10 rounded-full bg-[#FFE600] hover:bg-[#E5CF00] text-black font-extrabold text-xs uppercase tracking-wider transition-all mt-1"
                  >
                    Call: 0487 042 694
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksBatteries;

