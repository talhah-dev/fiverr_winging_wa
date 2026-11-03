"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Filter,
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
  const [maxPrice, setMaxPrice] = useState<number>(3746);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">(
    "featured",
  );
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (selectedDiscipline) {
      const lower = selectedDiscipline.toLowerCase();
      if (lower === "foils" || lower === "wings") {
        setSelectedCategory(lower);
      }
    }
  }, [selectedDiscipline]);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      const lower = cat.toLowerCase();
      if (lower === "all" || lower === "foils" || lower === "wings") {
        setSelectedCategory(lower);
      }
    }
  }, [searchParams]);

  const handleResetAll = () => {
    setSelectedCategory("all");
    onClearDiscipline();
    setMaxPrice(3746);
    setSearchQuery("");
  };

  const isAllActive =
    selectedCategory === "all" &&
    maxPrice === 3746 &&
    searchQuery === "";

  const availableProducts = useMemo(() => {
    return afsProducts.filter(
      (p) => p.category === "Foils" || p.category === "Wings",
    );
  }, []);

  const totalCount = availableProducts.length;
  const foilsCount = availableProducts.filter((p) => p.category === "Foils").length;
  const wingsCount = availableProducts.filter((p) => p.category === "Wings").length;

  const filteredProducts = useMemo(() => {
    const parsePrice = (p: string) => {
      const num = parseFloat(p.replace(/[^0-9,.]/g, "").replace(",", "."));
      return isNaN(num) ? 0 : num;
    };

    let list = availableProducts.filter((product) => {
      const matchCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchCategory) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSubCategory = product.subCategory.toLowerCase().includes(query);
        if (!matchesName && !matchesSubCategory) {
          return false;
        }
      }

      const price = parsePrice(product.price);
      if (price > maxPrice) return false;

      return true;
    });

    if (sortBy === "price-asc" || sortBy === "price-desc") {
      list = [...list].sort((a, b) => {
        const priceA = parsePrice(a.price);
        const priceB = parsePrice(b.price);
        return sortBy === "price-asc" ? priceA - priceB : priceB - priceA;
      });
    }

    return list;
  }, [availableProducts, selectedCategory, maxPrice, searchQuery, sortBy]);

  const groupedProducts = useMemo(() => {
    if (selectedCategory === "foils") {
      return [
        {
          title: "Foils",
          count: filteredProducts.length,
          products: filteredProducts,
        },
      ];
    }

    if (selectedCategory === "wings") {
      return [
        {
          title: "Wings",
          count: filteredProducts.length,
          products: filteredProducts,
        },
      ];
    }

    const groups: { title: string; count: number; products: AfsProduct[] }[] = [];
    const foils = filteredProducts.filter((p) => p.category === "Foils");
    if (foils.length > 0) {
      groups.push({
        title: "Foils",
        count: foils.length,
        products: foils,
      });
    }

    const wings = filteredProducts.filter((p) => p.category === "Wings");
    if (wings.length > 0) {
      groups.push({
        title: "Wings",
        count: wings.length,
        products: wings,
      });
    }

    return groups;
  }, [filteredProducts, selectedCategory]);

  return (
    <section id="catalog" className="relative w-full py-12 lg:py-16 bg-[#4A505B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/15">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              {selectedCategory === "all" ? "All Products (Foils & Wings)" : selectedCategory === "foils" ? "Foils" : "Wings"}
            </h2>
            <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-bold text-slate-200 border border-white/15">
              {filteredProducts.length} items
            </span>

            {selectedCategory !== "all" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#ef0e0a] px-3 py-0.5 text-xs font-bold text-white shadow-xs">
                <span>Category: {selectedCategory.toUpperCase()}</span>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    onClearDiscipline();
                  }}
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
              <span>Filters</span>
            </button>

            <div className="relative flex-1 sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search foils or wings..."
                className="h-10 w-full rounded-full border border-white/15 bg-white/10 pl-9 pr-8 text-xs text-white placeholder:text-white/40 focus:border-[#ef0e0a] focus:bg-white/15 focus:outline-hidden transition-all"
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
              className="h-10 rounded-full border border-white/15 bg-[#4A505B] px-3.5 text-xs text-white focus:border-[#ef0e0a] focus:outline-hidden cursor-pointer"
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
              "lg:col-span-3 rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 shadow-xl flex flex-col gap-5 text-white sticky top-28",
              showMobileSidebar ? "block" : "hidden lg:flex",
            )}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-[#ef0e0a]" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Categories
                </span>
              </div>
              <button
                type="button"
                onClick={handleResetAll}
                className="text-[11px] font-semibold text-orange-300 hover:text-white transition-colors cursor-pointer"
              >
                Reset All
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  onClearDiscipline();
                }}
                className={cn(
                  "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all cursor-pointer text-left w-full",
                  isAllActive
                    ? "bg-[#ef0e0a] text-white shadow-md shadow-orange-950/30"
                    : "bg-white/10 hover:bg-white/15 text-white/80 hover:text-white",
                )}
              >
                <span>All Products</span>
                <span
                  className={cn(
                    "text-xs px-2.5 py-0.5 rounded-full font-bold",
                    isAllActive
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-white/60 group-hover:text-white",
                  )}
                >
                  {totalCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("foils");
                  onClearDiscipline();
                }}
                className={cn(
                  "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all cursor-pointer text-left w-full",
                  selectedCategory === "foils"
                    ? "bg-[#ef0e0a] text-white shadow-md shadow-orange-950/30"
                    : "bg-white/10 hover:bg-white/15 text-white/80 hover:text-white",
                )}
              >
                <span>Foils</span>
                <span
                  className={cn(
                    "text-xs px-2.5 py-0.5 rounded-full font-bold",
                    selectedCategory === "foils"
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-white/60 group-hover:text-white",
                  )}
                >
                  {foilsCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("wings");
                  onClearDiscipline();
                }}
                className={cn(
                  "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all cursor-pointer text-left w-full",
                  selectedCategory === "wings"
                    ? "bg-[#ef0e0a] text-white shadow-md shadow-orange-950/30"
                    : "bg-white/10 hover:bg-white/15 text-white/80 hover:text-white",
                )}
              >
                <span>Wings</span>
                <span
                  className={cn(
                    "text-xs px-2.5 py-0.5 rounded-full font-bold",
                    selectedCategory === "wings"
                      ? "bg-white/20 text-white"
                      : "bg-white/10 text-white/60 group-hover:text-white",
                  )}
                >
                  {wingsCount}
                </span>
              </button>
            </div>

            <div className="w-full border-b border-dashed border-white/20" />

            <div className="flex flex-col gap-3 pt-1">
              <button
                type="button"
                onClick={() => setIsPriceOpen(!isPriceOpen)}
                className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-200 hover:text-white cursor-pointer py-1"
              >
                <span>PRICE</span>
                {isPriceOpen ? (
                  <ChevronUp className="size-4 text-white/60" />
                ) : (
                  <ChevronDown className="size-4 text-white/60" />
                )}
              </button>

              {isPriceOpen && (
                <div className="flex flex-col gap-3 pt-2">
                  <input
                    type="range"
                    min="1"
                    max="3746"
                    step="25"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#ef0e0a] bg-white/20 h-1.5 rounded-lg cursor-pointer"
                  />
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>1,00€</span>
                    <span className="text-white font-bold">
                      {maxPrice.toLocaleString("de-DE")},00€
                    </span>
                  </div>
                </div>
              )}
            </div>
          </aside>

          <main className="lg:col-span-9 flex flex-col">
            {groupedProducts.length === 0 ? (
              <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-12 text-center flex flex-col items-center justify-center gap-3 text-white">
                <p className="text-lg font-bold text-white">
                  No products found.
                </p>
                <p className="text-sm text-slate-300 max-w-md">
                  No AFS items match your selected filters. Reset filters to
                  explore the full equipment lineup.
                </p>
                <Button
                  type="button"
                  onClick={handleResetAll}
                  variant="outline"
                  className="rounded-full mt-2 border-white/20 text-white hover:bg-white/10 cursor-pointer"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-10">
                {groupedProducts.map((group) => (
                  <div key={group.title} className="flex flex-col gap-4">
                    <div className="flex items-baseline gap-2.5">
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                        {group.title}
                      </h3>
                      <span className="text-sm font-semibold text-slate-300">
                        {group.count}
                      </span>
                    </div>

                    <div className="w-full border-b border-dashed border-white/20" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 pt-2">
                      {group.products.map((product) => {
                        const productHref = `/afs-foils/${product.id}`;
                        const contactHref = `/contact?item=${encodeURIComponent(product.name)}`;

                        return (
                          <div
                            key={product.id}
                            className="group flex flex-col justify-between rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-white relative overflow-hidden"
                          >
                            <div className="flex flex-col">
                              <Link
                                href={productHref}
                                className="relative w-full h-52 sm:h-60 bg-white flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300"
                              >
                                {(product.badge || product.subCategory) && (
                                  <span
                                    className={cn(
                                      "absolute top-3 right-3 z-10 rounded px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase border",
                                      product.badgeType === "deal"
                                        ? "bg-[#ef0e0a] text-white border-[#ef0e0a]/30"
                                        : product.badgeType === "performance"
                                          ? "bg-amber-600 text-white border-amber-400/30"
                                          : "bg-slate-900/80 text-white border-white/10",
                                    )}
                                  >
                                    {product.badge || product.subCategory}
                                  </span>
                                )}

                                <div className="relative w-full h-full p-4 flex items-center justify-center">
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-contain p-2 select-none group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              </Link>

                              <div className="flex flex-col items-center text-center p-4 pb-2">
                                <Link
                                  href={productHref}
                                  className="text-base sm:text-lg font-bold uppercase tracking-tight text-white leading-snug line-clamp-2 cursor-pointer group-hover:text-[#ef0e0a] transition-colors"
                                >
                                  {product.name}
                                </Link>

                                {product.sizes && product.sizes.length > 0 && (
                                  <div className="flex flex-wrap justify-center gap-1 pt-2">
                                    {product.sizes.slice(0, 4).map((size) => (
                                      <span
                                        key={size}
                                        className="rounded border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] font-semibold text-slate-200"
                                      >
                                        {size}
                                      </span>
                                    ))}
                                    {product.sizes.length > 4 && (
                                      <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] font-semibold text-slate-300">
                                        +{product.sizes.length - 4}
                                      </span>
                                    )}
                                  </div>
                                )}

                                <div className="flex items-baseline justify-center gap-2 pt-2">
                                  <span className="text-sm sm:text-base font-bold text-slate-200">
                                    {product.price}
                                  </span>
                                  {product.originalPrice && (
                                    <span className="text-xs font-normal text-orange-300 line-through">
                                      {product.originalPrice}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="p-4 pt-1 mt-auto">
                              <Link
                                href={productHref}
                                className={cn(
                                  "w-full h-11 rounded-xl text-xs sm:text-sm font-semibold tracking-wide uppercase flex items-center justify-center transition-all cursor-pointer",
                                  product.actionText === "GRAB THE DEAL"
                                    ? "bg-[#ef0e0a] hover:bg-[#c40c08] text-white"
                                    : "bg-black/50 hover:bg-[#ef0e0a] text-white border border-white/15 hover:border-transparent",
                                )}
                              >
                                {product.actionText}
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default AfsCatalog;
