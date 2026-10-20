import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa6";

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
        title: "Shop Now",
        href: "#wa-stock",
      },
      {
        title: "Stock Availability",
        href: "#wa-stock",
      },
    ],
  },
  {
    title: "Brands",
    links: [
      {
        title: "AFS Foils",
        href: "#afs",
      },
      {
        title: "Manta Foil Assist",
        href: "#manta",
      },
      {
        title: "TakeOff Evo",
        href: "#manta",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="dark bg-black text-foreground py-10 border-t border-white/10">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="py-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-12 gap-x-8 gap-y-10 px-6 xl:px-0">
            <div className="col-span-full lg:col-span-4">
              <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/favicon.png"
                    alt="Winging WA"
                    width={160}
                    height={44}
                    className="h-14 w-auto object-contain"
                  />
                </Link>

                <p className="text-base font-normal text-muted-foreground">
                  Australian distributor for AFS Foils and Western Australian
                  dealer for Manta Foil Assist. WA owned and operated.
                </p>

                <div className="flex items-center gap-3">
                  <Link
                    href="https://www.instagram.com/wix"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
                  >
                    <FaInstagram className="size-4" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/wix"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
                  >
                    <FaFacebookF className="size-4" />
                  </Link>
                  <Link
                    href="https://www.pinterest.com/wixcom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest"
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
                  >
                    <FaPinterest className="size-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden"></div>

            {footerSections.map(({ title, links }, index) => (
              <div key={index} className="col-span-2">
                <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
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
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
                <p className="text-base font-medium text-foreground">
                  Contact Details
                </p>
                <ul className="flex flex-col gap-3">
                  <li>
                    <p className="text-base font-normal text-muted-foreground">
                      Western Australia
                    </p>
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
                    <Link
                      href="tel:0487042694"
                      className="text-base font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      0487 042 694
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator orientation="horizontal" className="bg-white/10" />
          <p className="text-sm font-normal text-muted-foreground text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            © 2026 Winging WA. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
