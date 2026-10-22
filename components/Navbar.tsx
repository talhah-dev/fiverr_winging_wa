"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
    href: "/#brands",
    subLinks: [
      { title: "AFS Foils", href: "/#afs" },
      { title: "Manta Foil Assist", href: "/#manta" },
    ],
  },
  { title: "WA Stock", href: "/wa-stock" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showGlassBackground = isSticky || !isHomePage;

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        showGlassBackground
          ? "bg-white/95 text-slate-900 shadow-md shadow-slate-900/5 backdrop-blur-lg border-b border-slate-200"
          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 lg:px-8 xl:px-16",
          showGlassBackground ? "py-3.5" : "py-5",
        )}
      >
        <div className="flex items-center gap-4 lg:gap-6">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/favicon.png"
              alt="Winging WA"
              width={160}
              height={44}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                showGlassBackground ? "h-9 md:h-10" : "h-10 md:h-12",
              )}
              priority
            />
          </Link>
          <Separator
            orientation="vertical"
            className={cn(
              "hidden h-6 my-auto lg:block",
              showGlassBackground ? "bg-slate-300" : "bg-white/30",
            )}
          />
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isCurrent =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return link.subLinks ? (
                <div key={link.title} className="relative group">
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer",
                      showGlassBackground
                        ? "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                        : "text-white/85 hover:text-white hover:bg-white/10",
                    )}
                  >
                    {link.title}
                    <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl backdrop-blur-md text-slate-900">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
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
                    "rounded-full px-3.5 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors",
                    showGlassBackground
                      ? isCurrent
                        ? "bg-slate-100 text-slate-950 font-bold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                      : isCurrent
                      ? "bg-white/20 text-white font-bold backdrop-blur-sm"
                      : "text-white/85 hover:text-white hover:bg-white/10",
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="tel:0487042694"
            className={cn(
              "flex items-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors",
              showGlassBackground
                ? "text-slate-800 hover:text-[#E11D48]"
                : "text-white hover:text-white/80",
            )}
          >
            <Phone className="size-4.5" />
            <span>0487 042 694</span>
          </Link>
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="group h-10 rounded-full px-5 font-semibold bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-md shadow-rose-950/20 cursor-pointer inline-flex items-center gap-1.5"
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
                className={cn(
                  "h-10 w-10 rounded-full lg:hidden cursor-pointer",
                  showGlassBackground
                    ? "bg-slate-100 text-slate-800 hover:bg-slate-200"
                    : "bg-white/20 text-white hover:bg-white/30 backdrop-blur-md",
                )}
              >
                <Equal className="size-5" />
                <span className="sr-only">Menu</span>
              </Button>
            }
          />

          <SheetContent
            side="right"
            showCloseButton={false}
            className="flex flex-col gap-6 overflow-auto border-l border-slate-200 bg-white p-5 sm:p-6 text-slate-900"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <SheetHeader className="flex-row items-center justify-between p-0">
              <SheetClose
                nativeButton={false}
                render={
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/favicon.png"
                      alt="Winging WA"
                      width={140}
                      height={38}
                      className="h-9 w-auto object-contain"
                      priority
                    />
                  </Link>
                }
              />
              <SheetClose className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer">
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
                    <span className="px-3 pt-2 text-xs font-bold tracking-wider text-slate-400 uppercase">
                      {link.title}
                    </span>
                    {link.subLinks.map((sub) => (
                      <SheetClose
                        key={sub.title}
                        nativeButton={false}
                        render={
                          <Link
                            href={sub.href}
                            className="rounded-lg px-3 py-2 pl-6 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-950"
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
                          "rounded-lg px-3 py-2 text-base font-semibold",
                          isCurrent
                            ? "bg-slate-100 text-slate-950"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                        )}
                      >
                        {link.title}
                      </Link>
                    }
                  />
                );
              })}
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-slate-200">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="tel:0487042694"
                    className="flex items-center gap-2 text-slate-800 font-semibold"
                  >
                    <Phone className="size-4" />
                    <span className="text-sm">0487 042 694</span>
                  </Link>
                }
              />
              <SheetClose
                render={
                  <Button
                    nativeButton={false}
                    render={<Link href="/contact" />}
                    className="group h-11 w-full rounded-full px-5 font-semibold bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-md shadow-rose-950/20 cursor-pointer"
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
    </nav>
  );
};

export default Navbar;
