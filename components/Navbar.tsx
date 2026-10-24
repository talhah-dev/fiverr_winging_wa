"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight, Equal, Phone, X } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  subLinks?: { title: string; href: string }[];
}

const navLinks: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Brands",
    href: "/#afs",
    subLinks: [
      { title: "AFS Foils", href: "/#afs" },
      { title: "Manta Foil Assist", href: "/#manta" },
    ],
  },
  { title: "Feature Equipment", href: "/feature-equipment" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";

  return (
    <nav
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        isSticky
          ? isHomePage
            ? "bg-[#4A505B]/90 shadow-lg shadow-black/20 backdrop-blur-lg border-b border-white/15"
            : "bg-black/85 shadow-lg shadow-black/30 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 lg:px-8 xl:px-16",
          isSticky ? "py-4 md:py-5" : "py-4 md:py-6",
        )}
      >
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-start">
          {navLinks.map((link) => {
            const isCurrent =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

            return link.subLinks ? (
              <div key={link.title} className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-medium whitespace-nowrap text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {link.title}
                  <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div
                    className={cn(
                      "min-w-48 rounded-xl border p-1.5 shadow-2xl backdrop-blur-md",
                      isHomePage
                        ? "border-white/15 bg-[#4A505B]/95"
                        : "border-white/10 bg-black/95",
                    )}
                  >
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                  isCurrent
                    ? "bg-white/20 text-white font-semibold backdrop-blur-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10",
                )}
              >
                {link.title}
              </Link>
            );
          })}
        </div>

        <div className="flex lg:flex-1 items-center justify-start lg:justify-center">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Winging WA"
              width={160}
              height={44}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isSticky ? "h-10 md:h-12" : "h-12 md:h-15",
              )}
              priority
            />
          </Link>
        </div>

        <div className="flex lg:flex-1 items-center justify-end gap-6">
          <div className="hidden items-center gap-6 lg:flex">
            <Link
              href="tel:0487042694"
              className="flex items-center gap-2 whitespace-nowrap text-white text-sm font-medium transition-colors hover:text-white/80"
            >
              <Phone className="size-4.5" />
              <span>0487 042 694</span>
            </Link>
            <Button
              nativeButton={false}
              render={<Link href="/contact" />}
              className="group h-10 rounded-full px-5 font-medium bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-md shadow-rose-950/30 cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Enquire Now</span>
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5 duration-300" />
            </Button>
          </div>

          <Sheet>
          <SheetTrigger
            render={
              <Button
                size="icon"
                className="h-10 w-10 rounded-full lg:hidden bg-white/10 text-white hover:bg-white/20 backdrop-blur-md cursor-pointer"
              >
                <Equal className="size-5" />
                <span className="sr-only">Menu</span>
              </Button>
            }
          />

          <SheetContent
            side="right"
            showCloseButton={false}
            className={cn(
              "dark flex flex-col gap-6 overflow-auto border-l p-5 sm:p-6 text-white no-scrollbar",
              isHomePage ? "border-white/15 bg-[#4A505B]" : "border-white/10 bg-black",
            )}
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <SheetHeader className="flex-row items-center justify-between p-0">
              <SheetClose
                nativeButton={false}
                render={
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Winging WA"
                      width={140}
                      height={38}
                      className="h-9 w-auto object-contain"
                      priority
                    />
                  </Link>
                }
              />
              <SheetClose className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white hover:bg-white/10 cursor-pointer">
                <X size={18} className="shrink-0" />
              </SheetClose>
            </SheetHeader>

            <div className="flex flex-col gap-1.5 pt-4">
              {navLinks.map((link) => {
                const isCurrent =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return link.subLinks ? (
                  <div key={link.title} className="flex flex-col gap-1">
                    <span className="px-3 pt-2 text-xs font-semibold tracking-wider text-white/40 uppercase">
                      {link.title}
                    </span>
                    {link.subLinks.map((sub) => (
                      <SheetClose
                        key={sub.title}
                        nativeButton={false}
                        render={
                          <Link
                            href={sub.href}
                            className="rounded-lg px-3 py-2 pl-6 text-sm font-normal text-white/70 hover:bg-white/10 hover:text-white"
                          >
                            {sub.title}
                          </Link>
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <SheetClose
                    key={link.title}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded-lg px-3 py-2 text-base font-normal hover:bg-white/10 hover:text-white",
                          isCurrent
                            ? "bg-white/15 text-white font-medium"
                            : "text-white/70",
                        )}
                      >
                        {link.title}
                      </Link>
                    }
                  />
                );
              })}
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="tel:0487042694"
                    className="flex items-center gap-2 text-white hover:text-white/80"
                  >
                    <Phone className="size-4" />
                    <span className="text-sm">0487 042 694</span>
                  </Link>
                }
              />
              <SheetClose
                nativeButton={false}
                render={
                  <Button
                    nativeButton={false}
                    render={<Link href="/contact" />}
                    className="group h-11 w-full rounded-full px-5 font-medium bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-md shadow-rose-950/30 cursor-pointer"
                  >
                    Enquire Now
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5 duration-300" />
                  </Button>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
