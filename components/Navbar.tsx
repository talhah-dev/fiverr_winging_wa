"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  isActive?: boolean;
  subLinks?: { title: string; href: string }[];
}

const navLinks: NavItem[] = [
  { title: "Home", href: "/", isActive: true },
  {
    title: "Brands",
    href: "#",
    subLinks: [
      { title: "AFS", href: "#afs" },
      { title: "MANTA", href: "#manta" },
    ],
  },
  { title: "WA Stock", href: "#wa-stock" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        isSticky
          ? "bg-black/85 shadow-lg shadow-black/20 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 lg:px-8 xl:px-16",
          isSticky ? "py-5" : "py-4",
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
                isSticky ? "md:h-11 h-8" : "md:h-14 h-10",
              )}
              priority
            />
          </Link>
          <Separator
            orientation="vertical"
            className="hidden h-6 my-auto lg:block bg-foreground/20"
          />
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.subLinks ? (
                <div key={link.title} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded-full px-3 py-1.5 text-base font-medium whitespace-nowrap text-foreground/70 hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.title}
                    <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="min-w-44 rounded-xl border border-border bg-background/95 p-1.5 shadow-xl backdrop-blur-md">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-colors"
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
                    "rounded-full px-3 py-1.5 text-base font-medium whitespace-nowrap transition-colors",
                    link.isActive
                      ? "bg-foreground/20 text-foreground"
                      : "text-foreground/70 hover:text-foreground",
                  )}
                >
                  {link.title}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <Link
            href="tel:0487042694"
            className="flex items-center gap-2 whitespace-nowrap text-foreground transition-colors hover:text-foreground/80"
          >
            <Phone className="size-5" />
            <span className="text-sm">0487 042 694</span>
          </Link>
          <Button
            nativeButton={false}
            render={<Link href="#contact" />}
            className="group h-10 rounded-full px-5 font-medium bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-md shadow-rose-950/30 cursor-pointer"
          >
            Enquire Now
            <ChevronRight className="size-4 transition-all group-hover:translate-x-0.5 duration-300" />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                size="icon"
                className="h-10 w-10 rounded-full lg:hidden hover:bg-primary/80 cursor-pointer"
              >
                <Equal className="size-4" />
                <span className="sr-only">Menu</span>
              </Button>
            }
          />

          <SheetContent
            side="right"
            showCloseButton={false}
            className="dark flex flex-col gap-6 overflow-auto border-l border-border bg-background p-4 sm:p-6 no-scrollbar"
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
                      className="h-10 w-auto object-contain"
                      priority
                    />
                  </Link>
                }
              />
              <SheetClose className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer">
                <X size={16} className="shrink-0" />
              </SheetClose>
            </SheetHeader>

            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.title} className="flex flex-col gap-1">
                    <span className="px-3 pt-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                      {link.title}
                    </span>
                    {link.subLinks.map((sub) => (
                      <SheetClose
                        key={sub.title}
                        nativeButton={false}
                        render={
                          <Link
                            href={sub.href}
                            className="rounded-lg px-3 py-2 pl-6 text-sm font-normal text-muted-foreground hover:bg-primary/10 hover:text-foreground"
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
                          "rounded-lg px-3 py-2 text-base font-normal hover:bg-primary/10 hover:text-foreground",
                          link.isActive
                            ? "bg-primary/20 text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {link.title}
                      </Link>
                    }
                  />
                ),
              )}
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <SheetClose
                nativeButton={false}
                render={
                  <Link
                    href="tel:0487042694"
                    className="flex items-center gap-2 text-foreground transition-colors hover:text-foreground/80"
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
                    render={<Link href="#contact" />}
                    className="group h-10 w-full rounded-full px-5 font-medium bg-[#E11D48] hover:bg-[#BE123C] text-white shadow-md shadow-rose-950/30 cursor-pointer"
                  >
                    Enquire Now
                    <ChevronRight className="size-4 transition-all group-hover:translate-x-0.5 duration-300" />
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
