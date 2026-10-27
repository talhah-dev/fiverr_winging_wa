"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Filter,
  Phone,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  AfsProduct,
  afsCategories,
  afsProducts,
} from "@/data/afsProducts";
import { cn } from "@/lib/utils";

interface AfsCatalogProps {
  selectedDiscipline: string | null;
  onClearDiscipline: () => void;
}

const AfsCatalog = ({
  selectedDiscipline,
  onClearDiscipline,
}: AfsCatalogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">(
    "featured",
  );

  const filteredProducts = useMemo(() => {
    let list = afsProducts.filter((product) => {
      const matchCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchSubCategory =
        !selectedSubCategory ||
        product.subCategory.toLowerCase() ===
          selectedSubCategory.toLowerCase();

      const matchDiscipline =
        !selectedDiscipline ||
        product.disciplines?.some(
          (d) => d.toLowerCase() === selectedDiscipline.toLowerCase(),
        );

      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        (product.badge && product.badge.toLowerCase().includes(query)) ||
        (product.sizes &&
          product.sizes.some((s) => s.toLowerCase().includes(query)));

      return (
        matchCategory && matchSubCategory && matchDiscipline && matchSearch
      );
    });

    if (sortBy === "price-asc" || sortBy === "price-desc") {
      const parsePrice = (p: string) => {
        const num = parseFloat(
          p.replace(/[^0-9,.]/g, "").replace(",", "."),
        );
        return isNaN(num) ? 0 : num;
      };

      list = [...list].sort((a, b) => {
        const priceA = parsePrice(a.price);
        const priceB = parsePrice(b.price);
        return sortBy === "price-asc" ? priceA - priceB : priceB - priceA;
      });
    }

    return list;
  }, [
    selectedCategory,
    selectedSubCategory,
    selectedDiscipline,
    searchQuery,
    sortBy,
  ]);

  const activeCategoryTitle = useMemo(() => {
    if (selectedSubCategory) return selectedSubCategory;
    if (selectedCategory === "all") return "All products";
    const found = afsCategories.find((c) => c.id === selectedCategory);
    return found ? found.name : "Products";
  }, [selectedCategory, selectedSubCategory]);

  return (
    <section className="relative w-full py-12 lg:py-16 bg-[#4A505B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/15">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              {activeCategoryTitle}
            </h2>
            <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-bold text-slate-200 border border-white/15">
              {filteredProducts.length} items
            </span>

            {selectedDiscipline && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#E11D48] px-3 py-0.5 text-xs font-bold text-white shadow-xs">
                <span>Discipline: {selectedDiscipline}</span>
                <button
                  type="button"
                  onClick={onClearDiscipline}
                  className="hover:opacity-80 cursor-pointer ml-0.5"
                >
                  <X className="size-3.5" />
                </button>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowMobileSidebar(!showMobileSidebar)}
              className="lg:hidden inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 cursor-pointer"
            >
              <Filter className="size-4" />
              <span>Categories</span>
            </button>

            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models or sizes..."
                className="h-10 w-full rounded-full border border-white/15 bg-white/10 pl-9 pr-8 text-xs text-white placeholder:text-white/40 focus:border-[#E11D48] focus:bg-white/15 focus:outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white cursor-pointer"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "featured" | "price-asc" | "price-desc",
                )
              }
              className="h-10 rounded-full border border-white/15 bg-[#4A505B] px-3.5 text-xs text-white focus:border-[#E11D48] focus:outline-hidden cursor-pointer"
            >
              <option value="featured" className="bg-[#4A505B] text-white">
                Sort: Featured
              </option>
              <option value="price-asc" className="bg-[#4A505B] text-white">
                Price: Low to High
              </option>
              <option value="price-desc" className="bg-[#4A505B] text-white">
                Price: High to Low
              </option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <aside
            className={cn(
              "lg:col-span-3 rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 shadow-xl flex flex-col gap-6 text-white sticky top-28",
              showMobileSidebar ? "block" : "hidden lg:flex",
            )}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-rose-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Categories
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSelectedSubCategory(null);
                  onClearDiscipline();
                  setSearchQuery("");
                }}
                className="text-[11px] font-semibold text-rose-300 hover:text-white transition-colors cursor-pointer"
              >
                Reset All
              </button>
            </div>

            <nav className="flex flex-col gap-1.5">
              {afsCategories.map((cat) => {
                const isCatActive =
                  selectedCategory === cat.id && !selectedSubCategory;

                return (
                  <div key={cat.id} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setSelectedSubCategory(null);
                        if (showMobileSidebar) setShowMobileSidebar(false);
                      }}
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all cursor-pointer text-left",
                        isCatActive
                          ? "bg-[#E11D48] text-white shadow-xs font-bold"
                          : "text-white/80 hover:bg-white/10 hover:text-white",
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {cat.name}
                      </span>
                      <span
                        className={cn(
                          "text-xs px-2 py-0.5 rounded-full",
                          isCatActive
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-white/60 group-hover:text-white",
                        )}
                      >
                        {cat.count}
                      </span>
                    </button>

                    {cat.subCategories &&
                      selectedCategory === "foils" && (
                        <div className="ml-4 mt-1 pl-2 border-l border-white/15 flex flex-col gap-1">
                          {cat.subCategories.map((sub) => {
                            const isSubActive =
                              selectedSubCategory?.toLowerCase() ===
                              sub.name.toLowerCase();

                            return (
                              <button
                                key={sub.id}
                                type="button"
                                onClick={() => {
                                  setSelectedCategory("foils");
                                  setSelectedSubCategory(sub.name);
                                  if (showMobileSidebar)
                                    setShowMobileSidebar(false);
                                }}
                                className={cn(
                                  "flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all cursor-pointer text-left",
                                  isSubActive
                                    ? "bg-white/20 text-white font-bold"
                                    : "text-white/70 hover:bg-white/10 hover:text-white",
                                )}
                              >
                                <span>{sub.name}</span>
                                <span className="text-[11px] text-white/50">
                                  {sub.count}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                  </div>
                );
              })}
            </nav>
          </aside>

          <main className="lg:col-span-9 flex flex-col gap-6">
            {filteredProducts.length === 0 ? (
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-12 text-center flex flex-col items-center justify-center gap-3 text-white">
                <p className="text-lg font-bold text-white">
                  No products found.
                </p>
                <p className="text-sm text-slate-300 max-w-md">
                  No AFS items match your selected category or search filters.
                  Contact Mark directly for custom quotes and factory orders.
                </p>
                <Button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSelectedSubCategory(null);
                    onClearDiscipline();
                    setSearchQuery("");
                  }}
                  variant="outline"
                  className="rounded-full mt-2 border-white/20 text-white hover:bg-white/10 cursor-pointer"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const productHref = `/contact?item=${encodeURIComponent(product.name)}`;

                  return (
                    <div
                      key={product.id}
                      className="group flex flex-col justify-between rounded-3xl border border-white/15 bg-white/[0.06] p-5 shadow-md hover:bg-white/[0.09] hover:border-white/30 transition-all duration-300 text-white"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-2 min-h-6">
                          {product.badge ? (
                            <span
                              className={cn(
                                "rounded-md px-2 py-0.5 text-[10px] font-extrabold tracking-wider uppercase border",
                                product.badgeType === "deal"
                                  ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                                  : product.badgeType === "performance"
                                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                  : "bg-white/10 text-slate-200 border-white/20",
                              )}
                            >
                              {product.badge}
                            </span>
                          ) : (
                            <span className="text-[10px] font-bold text-white/40 uppercase">
                              {product.subCategory}
                            </span>
                          )}
                        </div>

                        <Link
                          href={productHref}
                          className="relative w-full h-52 rounded-2xl flex items-center justify-center overflow-hidden bg-white/5 border border-white/10 cursor-pointer group-hover:border-white/25 transition-all"
                        >
                          <div className="relative w-full h-full flex items-center justify-center p-3">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain p-2 transition-transform duration-500 group-hover:scale-108 select-none"
                            />
                          </div>
                        </Link>

                        <div className="flex flex-col gap-1.5 pt-1">
                          <Link
                            href={productHref}
                            className="text-base font-extrabold uppercase tracking-tight text-white leading-snug line-clamp-2 cursor-pointer group-hover:text-rose-400 transition-colors"
                          >
                            {product.name}
                          </Link>

                          {product.sizes && product.sizes.length > 0 && (
                            <div className="flex flex-wrap gap-1 pt-0.5">
                              {product.sizes.slice(0, 5).map((size) => (
                                <span
                                  key={size}
                                  className="rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-slate-200"
                                >
                                  {size}
                                </span>
                              ))}
                              {product.sizes.length > 5 && (
                                <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-semibold text-slate-300">
                                  +{product.sizes.length - 5}
                                </span>
                              )}
                            </div>
                          )}

                          <div className="flex items-baseline gap-2 pt-1.5">
                            <span className="text-base sm:text-lg font-black text-white tracking-tight">
                              {product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-xs font-normal text-rose-300 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 mt-4 flex items-center gap-2">
                        <Button
                          nativeButton={false}
                          render={<Link href={productHref} />}
                          className={cn(
                            "flex-1 h-10 rounded-full text-xs font-extrabold tracking-wider uppercase cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5 transition-all",
                            product.actionText === "GRAB THE DEAL"
                              ? "bg-[#E11D48] hover:bg-[#BE123C] text-white"
                              : "bg-white text-slate-900 hover:bg-slate-200",
                          )}
                        >
                          <span>{product.actionText}</span>
                          <ArrowUpRight className="size-3.5" />
                        </Button>

                        <Link
                          href="tel:0487042694"
                          aria-label={`Call about ${product.name}`}
                          className="flex size-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
                        >
                          <Phone className="size-4" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default AfsCatalog;
