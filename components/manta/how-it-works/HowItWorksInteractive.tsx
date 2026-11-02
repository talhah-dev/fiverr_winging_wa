"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Battery, Zap, Wind, ChevronDown, MessageSquareQuote } from "lucide-react";
import { cn } from "@/lib/utils";

interface BatteryCard {
  title: string;
  image: string;
  rideTime: string;
  weight: string;
  capacity: string;
}

const batteryCards: BatteryCard[] = [
  {
    title: "1x Air battery",
    image: "/manta/how-it-works/1-air-battery.webp",
    rideTime: "15 – 20 min",
    weight: "2.5 kg + motor",
    capacity: "194 Wh",
  },
  {
    title: "2x Air batteries",
    image: "/manta/how-it-works/2-air-battery.webp",
    rideTime: "35 – 40 min",
    weight: "3.8 kg + motor",
    capacity: "388 Wh",
  },
  {
    title: "1x Endurance battery",
    image: "/manta/how-it-works/1-endurance-battery.webp",
    rideTime: "45 – 50 min",
    weight: "4.0 kg + motor",
    capacity: "518 Wh",
  },
  {
    title: "1x Air + 1x Endurance battery",
    image: "/manta/how-it-works/1-air-1-endurance-battery.webp",
    rideTime: "65 – 70 min",
    weight: "5.3 kg + motor",
    capacity: "712 Wh",
  },
];

interface ChargerCard {
  title: string;
  image: string;
  airTime: string;
  enduranceTime: string;
}

const chargerCards: ChargerCard[] = [
  {
    title: "Lite charger",
    image: "/manta/how-it-works/charger-standard.svg",
    airTime: "1 hr",
    enduranceTime: "2 hr 40 min",
  },
  {
    title: "Standard Charger",
    image: "/manta/how-it-works/charger-standard.svg",
    airTime: "30 min",
    enduranceTime: "1 hr 20 min",
  },
];

interface PropellerCard {
  title: string;
  image: string;
  description: string;
}

const propellerCards: PropellerCard[] = [
  {
    title: "2 - Blade Folding Prop",
    image: "/manta/how-it-works/2-blade-propeller.svg",
    description:
      "It opens when you accelerate, and folds when you release the trigger. This allows for a very minimal drag when surfing unpowered.",
  },
  {
    title: "3 - Blade Folding Prop",
    image: "/manta/how-it-works/3-blade-propeller.svg",
    description:
      "More thrust for faster acceleration, top speed, and heavier riders. Improved efficiency with reduced cavitation at full power.",
  },
];

interface FAQItem {
  id: string;
  q: string;
  a: string;
}

const batteryFaqs: FAQItem[] = [
  {
    id: "b1",
    q: "Can I travel by air with my TakeOff batteries?",
    a: "Yes. The Evo Air batteries are specifically engineered for air travel. Each individual pack is 97 Wh which falls under the standard airline limit of 100 Wh. So you can travel in most airlines with the batteries in your cabin luggage without any special approvals. Each travel pack includes an individual Battery Management System (BMS) to protect against short circuits and over-discharge, providing an additional layer of protection.",
  },
  {
    id: "b2",
    q: "How can I monitor my battery percentage?",
    a: "The GPS-enabled remote provides a real-time battery stats so you always know your remaining battery. The Manta Foils app also offers live battery monitoring and performance insights directly on your smartphone.",
  },
  {
    id: "b3",
    q: "What maintenance do the batteries require?",
    a: "TakeOff batteries require minimal maintenance to stay safe and last longer. There are no serviceable parts inside. Always store batteries in a cool, dry place. Before charging, let the batteries cool down to room temperature, and always use the supplied charger.",
  },
  {
    id: "b4",
    q: "What is the ride time for different TakeOff battery configurations?",
    a: "TakeOff Evo: a single Air battery provides about 15 – 20 minutes, two Air batteries give 35 – 40 minutes, a single Endurance battery offers 45 – 50 minutes, and an Air + Endurance combo delivers 65 – 70 minutes of ride time.",
  },
];

const chargerFaqs: FAQItem[] = [
  {
    id: "c1",
    q: "Which charger should I choose for the TakeOff Evo system?",
    a: "The choice depends on how quickly you need to get back on the water and your battery setup: Standard Charger: A high speed charger for active riders, charging a single Air battery in 30 minutes or an Endurance battery in 1 hour and 20 minutes. So you can get back on the water right away. Lite Charger: A relatively slower option, charging a single Air battery in 1 hour or an Endurance battery in 2 hours and 40 minutes.",
  },
  {
    id: "c2",
    q: "Is the charger safe for long-term battery health?",
    a: "All chargers work in tandem with our improved Battery Management System (BMS) and are equipped with Auto-Balancing features i.e. The battery packs self-balance while charging, which prevents voltage mismatches and ensures the longevity of your cells.",
  },
  {
    id: "c3",
    q: "How do I know when my battery is fully charged?",
    a: "TakeOff Evo: Simply plug your battery into the main unit and turn on your remote. You'll then see the charge level on the remote display. You can also buy a battery checker that directly shows you that charging level while & after charging.",
  },
];

const propellerFaqs: FAQItem[] = [
  {
    id: "p1",
    q: "Which propeller should I choose for my setup?",
    a: "2 Blade: Perfect for lightweight riders and beginners. If you want more push, ride heavier or with a smaller board/foil, get the 3-Blade. 3 Blade: Provides more thrust and higher efficiency, making it ideal for those seeking maximum power.",
  },
  {
    id: "p2",
    q: "Why a folding propeller?",
    a: "The folding design is specifically engineered to minimize resistance when the motor is not in use, such as when gliding or surfing a wave. The blades fold back to create a streamlined profile during unpowered flight and open automatically when the motor is engaged.",
  },
  {
    id: "p3",
    q: "Can I upgrade or change my propeller?",
    a: "Your standard kit comes with the 2-Blade Folding propeller. The 3-Blade Folding propeller is available as an optional accessory and is compatible with the entire TakeOff range. Riders can choose the propeller that best matches their specific use case and the propeller can always be changed with basic tools.",
  },
  {
    id: "p4",
    q: "How much maintenance is required?",
    a: "Thanks to the fully enclosed design of the Performance Motor, you enjoy a maintenance-free experience. The propeller and motor require just a quick rinse with fresh water after use. The system is designed to operate without the need for bearing maintenance or lanolin sprays.",
  },
  {
    id: "p5",
    q: "How does the propeller choice affect my ride?",
    a: "The 2-blade folding propeller is light and makes it easy to move and turn. The 3-blade folding propeller gives more power and speed, ideal for heavier riders or those wanting a high-performance foil assist setup.",
  },
  {
    id: "p6",
    q: "Does the propeller type affect battery life?",
    a: "Yes. The 2-blade folding propeller uses less energy, giving longer rides, while the 3-blade folding propeller provides more thrust and speed but can drain the battery faster. Choosing the right propeller helps balance power, speed, and ride time for your TakeOff foil assist system.",
  },
];

const addons = [
  {
    title: "TakeOff – Mast Titanium Split Bolts",
    image: "/manta/how-it-works/split-bolts.png",
    description: "The Mast Titanium Split Bolts are designed to make mounting your main unit fast and simple.",
  },
  {
    title: "TakeOff - 3-Blade Alu Folding Propeller V2",
    image: "/manta/how-it-works/3-blade-propeller-addon.png",
    description: "The new 3-Blade Aluminum Folding Propeller delivers more grip and thrust for faster takeoff, improved efficiency, and a noticeable performance upgrade.",
  },
  {
    title: "TakeOff Evo - External Antenna",
    image: "/manta/how-it-works/evo-antenna.webp",
    description: "It is a wired antenna designed to bypass interference on boards with heavy carbon construction. Stick it on the top/side of your board for an amazing connectivity with your remote.",
  },
];

type StepTab = "battery" | "charger" | "propeller";

const HowItWorksInteractive = () => {
  const [activeTab, setActiveTab] = useState<StepTab>("battery");
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const getFaqs = () => {
    switch (activeTab) {
      case "battery":
        return { title: "Battery FAQs", list: batteryFaqs };
      case "charger":
        return { title: "Charger FAQs", list: chargerFaqs };
      case "propeller":
        return { title: "Propeller FAQs", list: propellerFaqs };
    }
  };

  const currentFaqs = getFaqs();

  return (
    <div className="w-full bg-[#4A505B] text-white">
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
          How it works
        </h1>

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
          With over 20 years of foil design innovation, Manta Foils delivers ride experiences that are smooth, powerful, and unforgettable. Whether you’re chasing waves or cruising flatwater, our products give you the freedom to fly.
        </p>

        <p className="mt-4 text-sm sm:text-base text-white font-semibold">
          Follow our simple 3 step process to choose the right setup for your TakeOff Evo foil assist.
        </p>

        <div className="w-full mt-12 sm:mt-16">
          <div className="relative border-b border-white/20 pb-4">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-10">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("battery");
                  setOpenFaqId(null);
                }}
                className={cn(
                  "flex items-center gap-3 px-4 sm:px-6 py-2.5 rounded-xl transition-all cursor-pointer text-left",
                  activeTab === "battery"
                    ? "border border-[#FFE600] bg-black/30 text-[#FFE600]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                <Battery className={cn("size-5", activeTab === "battery" ? "text-[#FFE600]" : "text-slate-300")} />
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium tracking-wide text-slate-300">Step 1</span>
                  <span className={cn("text-xs sm:text-sm font-bold", activeTab === "battery" ? "text-[#FFE600]" : "text-white")}>
                    Choose your battery
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("charger");
                  setOpenFaqId(null);
                }}
                className={cn(
                  "flex items-center gap-3 px-4 sm:px-6 py-2.5 rounded-xl transition-all cursor-pointer text-left",
                  activeTab === "charger"
                    ? "border border-[#FFE600] bg-black/30 text-[#FFE600]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                <Zap className={cn("size-5", activeTab === "charger" ? "text-[#FFE600]" : "text-slate-300")} />
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium tracking-wide text-slate-300">Step 2</span>
                  <span className={cn("text-xs sm:text-sm font-bold", activeTab === "charger" ? "text-[#FFE600]" : "text-white")}>
                    Choose your charger
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab("propeller");
                  setOpenFaqId(null);
                }}
                className={cn(
                  "flex items-center gap-3 px-4 sm:px-6 py-2.5 rounded-xl transition-all cursor-pointer text-left",
                  activeTab === "propeller"
                    ? "border border-[#FFE600] bg-black/30 text-[#FFE600]"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                )}
              >
                <Wind className={cn("size-5", activeTab === "propeller" ? "text-[#FFE600]" : "text-slate-300")} />
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium tracking-wide text-slate-300">Step 3</span>
                  <span className={cn("text-xs sm:text-sm font-bold", activeTab === "propeller" ? "text-[#FFE600]" : "text-white")}>
                    Choose your propeller
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full mt-10 sm:mt-12">
          {activeTab === "battery" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {batteryCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-white/15 bg-black/25 backdrop-blur-md p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:border-white/35"
                >
                  <div className="relative w-full aspect-square max-h-48 flex items-center justify-center p-2 mb-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {card.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-200 border-t border-white/10 pt-4 w-full">
                    <p>
                      Ride time : <strong className="text-white font-bold">{card.rideTime}</strong>
                    </p>
                    <p>
                      Weight : <strong className="text-white font-bold">{card.weight}</strong>
                    </p>
                    <p>
                      Capacity : <strong className="text-white font-bold">{card.capacity}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "charger" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {chargerCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-white/15 bg-black/25 backdrop-blur-md p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:border-white/35"
                >
                  <div className="flex items-center justify-center gap-1 text-slate-300 mb-2">
                    <Zap className="size-4 text-slate-300 fill-slate-300" />
                    <Zap className="size-4 text-slate-300 fill-slate-300 -ml-1" />
                  </div>

                  <div className="relative w-full aspect-[16/9] max-h-44 flex items-center justify-center p-2 mb-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={220}
                      height={140}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {card.title}
                  </h3>

                  <div className="flex flex-col gap-2 text-xs sm:text-sm text-slate-200">
                    <p>
                      1x Air Battery (194 Wh): <span className="text-white font-semibold">{card.airTime}</span>
                    </p>
                    <p>
                      1x Endurance Battery (518 Wh): <span className="text-white font-semibold">{card.enduranceTime}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "propeller" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {propellerCards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-white/15 bg-black/25 backdrop-blur-md p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:border-white/35"
                >
                  <div className="relative w-full aspect-[16/9] max-h-44 flex items-center justify-center p-2 mb-4">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={220}
                      height={140}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-md">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full mt-20 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white text-center mb-10 tracking-tight">
            {currentFaqs.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
            <div className="lg:col-span-8 flex flex-col gap-3">
              {currentFaqs.list.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-white/15 bg-black/20 hover:bg-black/30 backdrop-blur-md transition-all overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-medium text-white">
                        {faq.q}
                      </span>
                      <div className="text-slate-300 shrink-0">
                        <ChevronDown
                          className={cn("size-4 transition-transform duration-300", isOpen && "rotate-180 text-white")}
                        />
                      </div>
                    </button>
                    <div
                      className={cn(
                        "transition-all duration-300 ease-out overflow-hidden px-5",
                        isOpen ? "max-h-72 pb-5 opacity-100" : "max-h-0 pb-0 opacity-0"
                      )}
                    >
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-white/10 pt-3">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur-md p-6 sm:p-7 flex flex-col items-center text-center gap-4 shadow-2xl">
                <div className="text-white">
                  <MessageSquareQuote className="size-8 stroke-[1.5]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Do you have more questions?
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Still unsure about a detail or setup option? Reach out to us and we’ll guide you through everything step by step.
                </p>
                <Link
                  href="/contact"
                  className="mt-2 rounded-full border border-white/30 hover:border-white px-7 py-2 text-xs font-semibold text-white tracking-wide transition-all"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-24 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white text-center mb-10 tracking-tight">
            Recommended Add-Ons
          </h2>

          <div className="flex flex-col gap-4 max-w-5xl mx-auto">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="rounded-[20px] border border-white/15 bg-black/25 backdrop-blur-md p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-2xl"
              >
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 text-center sm:text-left w-full sm:w-auto">
                  <div className="bg-white rounded-2xl w-32 sm:w-40 h-28 sm:h-32 p-3 flex items-center justify-center shrink-0 shadow-md">
                    <Image
                      src={addon.image}
                      alt={addon.title}
                      width={120}
                      height={100}
                      className="object-contain max-h-full"
                    />
                  </div>

                  <div className="flex flex-col gap-1 max-w-xl">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {addon.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {addon.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto flex justify-center sm:justify-end">
                  <Link
                    href={`/contact?item=${encodeURIComponent(addon.title)}`}
                    className="rounded-full px-7 py-2.5 bg-[#FFE600] hover:bg-[#E5CF00] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-md inline-block text-center min-w-[110px]"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksInteractive;
