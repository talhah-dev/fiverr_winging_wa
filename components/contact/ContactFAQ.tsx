import { HelpCircle, Package, Truck, Wrench } from "lucide-react";

const faqs = [
  {
    icon: Truck,
    question: "Do you ship across Australia?",
    answer: "Yes, we ship all AFS foils, wings, and Manta Foil Assist systems securely across all Australian states and territories with insured courier delivery.",
  },
  {
    icon: HelpCircle,
    question: "Can I test or view gear in Western Australia?",
    answer: "Demonstrations and in-person viewings of AFS foil sets and Manta TakeOff Evo units can be arranged by appointment in Western Australia. Call Mark on 0487 042 694 to book.",
  },
  {
    icon: Wrench,
    question: "How do I choose the right mast and front wing?",
    answer: "Setup depends on your weight, foiling discipline (prone, wing, downwind, or electric assist), and local wind/water conditions. Contact us directly and we will tailor the ideal setup for your progression.",
  },
  {
    icon: Package,
    question: "Are spare parts and batteries available locally?",
    answer: "Yes, we keep genuine AFS fuselages, hardware, and Manta batteries/accessories in stock in Western Australia for fast replacement and zero downtime.",
  },
];

const ContactFAQ = () => {
  return (
    <section className="relative w-full py-16 lg:py-20 bg-[#EAECEF] border-t border-slate-300/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Common Inquiries & Support
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Quick answers regarding ordering, demonstrations, and local inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => {
            const Icon = faq.icon;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 text-[#E11D48]">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-rose-50 border border-rose-100">
                    <Icon className="size-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-12">
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
