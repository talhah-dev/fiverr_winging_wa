"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { cn } from "@/lib/utils";

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
        title: "All Available Stock",
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
        title: "AFS Foils",
        href: "/afs-foils",
      },
      {
        title: "Manta Foil Assist",
        href: "/manta-foils",
      },
      {
        title: "TakeOff Evo",
        href: "/manta-foils",
      },
      {
        title: "Manta Backpack",
        href: "/manta-foils",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="dark bg-[#4A505B] text-foreground py-12 border-t border-white/15"
    >
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-6 sm:py-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-2 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Winging WA"
                    width={200}
                    height={55}
                    className="h-14 sm:h-16 w-auto object-contain"
                  />
                </Link>

                <p className="text-base font-normal text-muted-foreground leading-relaxed">
                  Australian distributor for AFS Foils and Western Australian dealer
                  for Manta Foil Assist.
                </p>

                <div className="flex items-center gap-3">
                  <Link
                    href="https://www.facebook.com/WingingWA"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-colors"
                  >
                    <FaFacebookF className="size-4" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/winging_wa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-[#E11D48] hover:text-white hover:border-[#E11D48] transition-colors"
                  >
                    <FaInstagram className="size-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden" />

            {footerSections.map(({ title, links }, index) => (
              <div key={index} className="col-span-2">
                <div className="flex flex-col gap-4">
                  <p className="text-base font-medium text-foreground">
                    {title}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {links.map(({ title, href }) => (
                      <li key={title}>
                        <Link
                          href={href}
                          className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="col-span-3">
              <div className="flex flex-col gap-4">
                <p className="text-base font-medium text-foreground">
                  Contact Details
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <p className="text-base font-medium text-foreground">
                      Mark Mawby
                    </p>
                  </li>
                  <li>
                    <Link
                      href="tel:0487042694"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      0487 042 694
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:mark@mmarine.com.au"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      mark@mmarine.com.au
                    </Link>
                  </li>
                  <li>
                    <p className="text-base font-normal text-muted-foreground">
                      Western Australia
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-white/10" />
          <p className="text-sm font-normal text-muted-foreground text-center">
            © 2026 Winging WA. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
