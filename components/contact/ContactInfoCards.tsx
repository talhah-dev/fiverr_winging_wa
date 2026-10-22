import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const contactDetails = [
  {
    icon: Phone,
    title: "Call Mark Mawby",
    subtitle: "Direct Distributor & WA Dealer",
    value: "0487 042 694",
    href: "tel:0487042694",
    badge: "Direct Line",
    description: "Available to discuss foil setups, mast choices, and arrange local gear viewings.",
  },
  {
    icon: Mail,
    title: "Email Enquiries",
    subtitle: "Custom Foil Quotes & Orders",
    value: "mark@mmarine.com.au",
    href: "mailto:mark@mmarine.com.au",
    badge: "Fast Response",
    description: "Send us your specs, weight, and disciplines for tailored advice.",
  },
  {
    icon: MapPin,
    title: "Western Australia",
    subtitle: "Perth & WA Local Stock",
    value: "By Appointment",
    badge: "WA Stock",
    description: "Demonstrations and viewings available by appointment across Western Australia.",
  },
];

const ContactInfoCards = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
          Direct Contact Information
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Speak Directly With Us
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          We deal directly with foilers across Australia to provide expert guidance and genuine factory stock.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-rose-50 text-[#E11D48] border border-rose-100 group-hover:bg-[#E11D48] group-hover:text-white transition-colors duration-300">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-500">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                  {item.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {item.href ? (
                <div className="pt-2 border-t border-slate-100 mt-1">
                  <Link
                    href={item.href}
                    className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#E11D48] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{item.value}</span>
                  </Link>
                </div>
              ) : (
                <div className="pt-2 border-t border-slate-100 mt-1">
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {item.value}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Connect On Socials
          </span>
          <p className="text-sm font-semibold text-slate-800">
            Catch updates, reviews & demo sessions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://www.facebook.com/WingingWA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Winging WA"
            className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-all shadow-xs"
          >
            <FaFacebookF className="size-5" />
          </Link>
          <Link
            href="https://www.instagram.com/winging_wa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Winging WA"
            className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-all shadow-xs"
          >
            <FaInstagram className="size-5" />
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5 flex items-start gap-3.5">
        <ShieldCheck className="size-6 text-[#E11D48] shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <h4 className="text-sm font-bold text-slate-900">
            Authorized Australian Warranty & Support
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            All AFS foils and Manta Foil Assist systems supplied by WingingWA are backed by authentic manufacturer guarantees and direct local backup in Western Australia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCards;
