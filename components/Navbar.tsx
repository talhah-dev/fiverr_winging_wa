"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  Equal,
  Phone,
  X,
} from "lucide-react";

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
      { title: "AFS Foils", href: "/afs-foils" },
      { title: "Manta Foil Assist", href: "/#manta" },
    ],
  },
  { title: "Feature Equipment", href: "/feature-equipment" },
  { title: "Contact", href: "/contact" },
];

const afsCategoryLinks = [
  { id: "foils", name: "Foils", count: 33 },
  { id: "boards", name: "Boards", count: 15 },
  { id: "wings", name: "Wings", count: 4 },
  { id: "package", name: "Package", count: 2 },
  { id: "accessories", name: "Accessories", count: 22 },
  { id: "wear", name: "Wear", count: 8 },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isAfsSheetOpen, setIsAfsSheetOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = pathname === "/";
  const isAfsPage = pathname.startsWith("/afs-foils");

  const handleCategoryClick = (categoryId: string) => {
    setIsAfsSheetOpen(false);
    if (pathname === "/afs-foils") {
      window.dispatchEvent(
        new CustomEvent("afs-select-category", { detail: categoryId }),
      );
      window.history.pushState(
        null,
        "",
        `/afs-foils?category=${categoryId}#catalog`,
      );
    } else {
      router.push(`/afs-foils?category=${categoryId}#catalog`);
    }
  };

  return (
    <nav
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 w-full transition-all duration-300",
        isSticky
          ? "bg-[#4A505B]/90 shadow-lg shadow-black/20 backdrop-blur-lg border-b border-white/15"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 lg:px-8 xl:px-16",
          isSticky ? "py-4 md:py-5" : "py-4 md:py-6",
        )}
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-1 justify-start">
          {isAfsPage && (
            <Sheet open={isAfsSheetOpen} onOpenChange={setIsAfsSheetOpen}>
              <SheetTrigger
                render={
                  <button
                    type="button"
                    aria-label="Open AFS Products menu"
                    className="flex size-10 sm:size-11 items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/15 backdrop-blur-md cursor-pointer transition-all duration-200 group hover:border-white/30 shrink-0 shadow-xs"
                  >
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="currentColor"
                      className="text-white transition-colors group-hover:text-rose-400"
                    >
                      <rect width="20" height="2.2" rx="1.1" />
                      <rect y="6.9" width="20" height="2.2" rx="1.1" />
                      <rect y="13.8" width="20" height="2.2" rx="1.1" />
                    </svg>
                  </button>
                }
              />

              <SheetContent
                side="left"
                showCloseButton={false}
                className="dark flex flex-col border-r border-white/15 bg-[#4A505B] p-0 text-white w-[88vw] sm:max-w-md h-full overflow-hidden shadow-2xl"
              >
                <SheetTitle className="sr-only">AFS Products Catalog</SheetTitle>

                <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setIsAfsSheetOpen(false)}
                    className="flex items-center gap-2 text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-300 hover:text-white transition-colors cursor-pointer group"
                  >
                    <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 duration-200" />
                    <span>PRODUCTS</span>
                  </button>

                  <SheetClose className="flex size-9 items-center justify-center rounded-xl border border-white/10 text-white/80 hover:text-white hover:bg-white/10 cursor-pointer transition-colors">
                    <X size={18} className="shrink-0" />
                    <span className="sr-only">Close</span>
                  </SheetClose>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between no-scrollbar">
                  <div className="flex flex-col">
                    {afsCategoryLinks.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleCategoryClick(cat.id)}
                        className="group flex items-center justify-between py-3.5 sm:py-4 px-3 -mx-3 rounded-xl hover:bg-white/[0.07] transition-all cursor-pointer text-left"
                      >
                        <span className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-rose-400 group-hover:translate-x-1 transition-all">
                          {cat.name}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-slate-300/80 group-hover:text-rose-300 transition-colors">
                          {cat.count}
                        </span>
                      </button>
                    ))}

                    <div className="my-3 border-t border-white/15" />

                    <button
                      type="button"
                      onClick={() => handleCategoryClick("all")}
                      className="group flex items-center justify-between py-3.5 sm:py-4 px-3 -mx-3 rounded-xl hover:bg-white/[0.07] transition-all cursor-pointer text-left"
                    >
                      <span className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-rose-400 group-hover:translate-x-1 transition-all">
                        All products
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-slate-300/80 group-hover:text-rose-300 transition-colors">
                        99
                      </span>
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/15 flex flex-col gap-3">
                    <Link
                      href="tel:0487042694"
                      className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors"
                    >
                      <Phone className="size-4 text-rose-400" />
                      <span>Direct WA Expert: 0487 042 694 (Mark)</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}

          <div className="hidden lg:flex items-center gap-1">
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
                  <div className="min-w-48 rounded-xl border border-white/15 bg-[#4A505B]/95 p-1.5 shadow-2xl backdrop-blur-md">
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
        </div>

        <div className="flex lg:flex-1 items-center justify-start lg:justify-center">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Winging WA"
              width={220}
              height={60}
              className={cn(
                "w-auto object-contain transition-all duration-300",
                isSticky ? "h-12 md:h-14" : "h-14 md:h-16 lg:h-[68px]",
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
            className="dark flex flex-col gap-6 overflow-auto border-l border-white/15 bg-[#4A505B] p-5 sm:p-6 text-white no-scrollbar"
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
                      width={180}
                      height={50}
                      className="h-11 w-auto object-contain"
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
