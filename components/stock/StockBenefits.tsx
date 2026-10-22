import Link from "next/image";
import { ArrowUpRight, Award, Clock, Compass, ShieldCheck, Truck } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Immediate Australian Dispatch",
    desc: "Stock is housed directly in Western Australia. No 4–6 week overseas shipping waits or unexpected import clearance hold-ups.",
  },
  {
    icon: ShieldCheck,
    title: "Official Factory Backing",
    desc: "As the authorized Australian distributor for AFS and WA dealer for Manta, every product includes complete manufacturer warranty protection.",
  },
  {
    icon: Compass,
    title: "Try Before You Buy in WA",
    desc: "On-water demos and personalized setup consultations are available across Perth and Western Australia by appointment.",
  },
  {
    icon: Award,
    title: "Expert Rider Guidance",
    desc: "Speak directly with Mark Mawby for tailored recommendations on front wing areas, mast heights, and electric assist battery setups.",
  },
];

const StockBenefits = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Why Buy Local
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            The Winging WA Direct Advantage
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Premium gear supported by dedicated local presence and genuine passion for water sports.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 flex flex-col gap-3.5 hover:shadow-md hover:bg-white hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-[#E11D48] border border-rose-100">
                  <Icon className="size-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StockBenefits;
