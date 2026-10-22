import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";

type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "WA Stock",
    links: [
      {
        title: "All Available Inventory",
        href: "/wa-stock",
      },
      {
        title: "Foil Sets & Wings",
        href: "/wa-stock",
      },
      {
        title: "Enquire Stock",
        href: "/contact",
      },
    ],
  },
  {
    title: "Brands",
    links: [
      {
        title: "AFS Foils (Distributor)",
        href: "/#afs",
      },
      {
        title: "Manta Foil Assist (WA Dealer)",
        href: "/#manta",
      },
      {
        title: "TakeOff Evo",
        href: "/#manta",
      },
      {
        title: "Manta Backpack",
        href: "/#manta",
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "Send a Message",
        href: "/contact",
      },
      {
        title: "Arrange a Demo",
        href: "/contact",
      },
      {
        title: "Call 0487 042 694",
        href: "tel:0487042694",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#0F172A] text-slate-200 py-12 border-t border-slate-800">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-8 sm:gap-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-5">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/favicon.png"
                    alt="Winging WA"
                    width={160}
                    height={44}
                    className="h-12 w-auto object-contain"
                  />
                </Link>

                <p className="text-sm sm:text-base font-normal text-slate-400 max-w-sm leading-relaxed">
                  Australian distributor for AFS Foils and Western Australian
                  dealer for Manta Foil Assist. Supplying riders with the
                  finest hydrofoils, wings, and electric assist systems.
                </p>

                <div className="flex items-center gap-3 pt-1">
                  <Link
                    href="https://www.facebook.com/WingingWA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Winging WA"
                    className="flex size-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-all"
                  >
                    <FaFacebookF className="size-4" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/winging_wa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Winging WA"
                    className="flex size-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-all"
                  >
                    <FaInstagram className="size-4" />
                  </Link>
                </div>
              </div>
            </div>

            {footerSections.map(({ title, links }, index) => (
              <div key={index} className="col-span-1 sm:col-span-2">
                <div className="flex flex-col gap-4">
                  <p className="text-base font-bold text-white tracking-wide">
                    {title}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className="text-sm font-normal text-slate-400 hover:text-white transition-colors"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-full sm:col-span-4 lg:col-span-2">
              <div className="flex flex-col gap-4">
                <p className="text-base font-bold text-white tracking-wide">
                  Contact Details
                </p>
                <ul className="flex flex-col gap-3 text-sm text-slate-300">
                  <li className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase">
                      Contact Person
                    </span>
                    <span className="font-medium text-white">Mark Mawby</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="size-4 text-[#E11D48]" />
                    <Link
                      href="tel:0487042694"
                      className="hover:text-white transition-colors font-medium"
                    >
                      0487 042 694
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="size-4 text-[#E11D48]" />
                    <Link
                      href="mailto:mark@mmarine.com.au"
                      className="hover:text-white transition-colors font-medium truncate"
                    >
                      mark@mmarine.com.au
                    </Link>
                  </li>
                  <li>
                    <span className="text-slate-400">Western Australia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Separator orientation="horizontal" className="bg-slate-800" />

          <p className="text-xs sm:text-sm font-normal text-slate-400 text-center">
            © 2026 Winging WA. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
