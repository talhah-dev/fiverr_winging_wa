"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="dark bg-[#4A505B] text-foreground py-12 border-t border-white/15"
    >
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-6 sm:py-10 flex flex-col md:flex-row md:items-start justify-between gap-10 px-2 xl:px-0">
            <div className="max-w-md flex flex-col gap-6">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Winging WA"
                  width={320}
                  height={150}
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain"
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
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-[#ef0e0a] hover:text-white hover:border-[#ef0e0a] transition-colors"
                >
                  <FaFacebookF className="size-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/winging_wa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-[#ef0e0a] hover:text-white hover:border-[#ef0e0a] transition-colors"
                >
                  <FaInstagram className="size-4" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-base font-semibold text-foreground tracking-tight">
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
