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

const componentsList = [
  { id: "front-wings", name: "Front wings", count: 9 },
  { id: "masts", name: "Masts", count: 6 },
  { id: "stabilizers", name: "Stabilizers", count: 4 },
  { id: "fuselages", name: "Fuselages", count: 5 },
  { id: "full-sets", name: "Full sets", count: 9 },
  { id: "boards", name: "Boards", count: 15 },
  { id: "wings", name: "Wings", count: 4 },
  { id: "package", name: "Package", count: 2 },
  { id: "accessories", name: "Accessories", count: 22 },
  { id: "wear", name: "Wear", count: 8 },
];

const disciplinesList = [
  { id: "wing-foil", name: "Wing foil", count: 41 },
  { id: "parawing", name: "Parawing", count: 24 },
  { id: "prone", name: "Prone", count: 26 },
  { id: "dockstart", name: "Dockstart", count: 24 },
  { id: "foil-assist", name: "Foil Assist", count: 12 },
  { id: "wakefoil", name: "Wakefoil", count: 17 },
  { id: "downwind", name: "Downwind", count: 25 },
  { id: "kitefoil", name: "Kitefoil", count: 29 },
  { id: "sup-foil", name: "Sup Foil", count: 32 },
];

const AfsCatalog = ({
  selectedDiscipline,
  onClearDiscipline,
}: AfsCatalogProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [activeDiscipline, setActiveDiscipline] = useState<string | null>(
    selectedDiscipline,
  );
  const [maxPrice, setMaxPrice] = useState<number>(3746);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">(
    "featured",
  );

  const [isComponentOpen, setIsComponentOpen] = useState<boolean>(true);
  const [isDisciplineOpen, setIsDisciplineOpen] = useState<boolean>(true);
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (selectedDiscipline) {
      setActiveDiscipline(selectedDiscipline);
      setSelectedComponent(null);
    }
  }, [selectedDiscipline]);

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      const lower = cat.toLowerCase();
      if (lower === "all") {
        setSelectedCategory("all");
        setSelectedComponent(null);
        setActiveDiscipline(null);
      } else {
        const found = componentsList.find(
          (c) =>
            c.id.toLowerCase() === lower || c.name.toLowerCase() === lower,
        );
        if (found) {
          setSelectedComponent(found.name);
          setActiveDiscipline(null);
        } else {
          setSelectedCategory(lower);
          setSelectedComponent(null);
        }
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const handleCategoryEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        const val = customEvent.detail.toLowerCase();
        if (val === "all") {
          setSelectedCategory("all");
          setSelectedComponent(null);
          setActiveDiscipline(null);
        } else {
          const found = componentsList.find(
            (c) => c.id.toLowerCase() === val || c.name.toLowerCase() === val,
          );
          if (found) {
            setSelectedComponent(found.name);
            setActiveDiscipline(null);
          } else {
            setSelectedCategory(val);
            setSelectedComponent(null);
          }
        }
        const el = document.getElementById("catalog");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("afs-select-category", handleCategoryEvent);
    return () => {
      window.removeEventListener("afs-select-category", handleCategoryEvent);
    };
  }, []);

  const handleResetAll = () => {
    setSelectedCategory("all");
    setSelectedComponent(null);
    setActiveDiscipline(null);
    onClearDiscipline();
    setMaxPrice(3746);
    setSearchQuery("");
  };

  const handleComponentClick = (compName: string) => {
    if (selectedComponent === compName) {
      setSelectedComponent(null);
    } else {
      setSelectedComponent(compName);
      setActiveDiscipline(null);
      onClearDiscipline();
    }
  };

  const handleDisciplineClick = (discName: string) => {
    if (activeDiscipline === discName) {
      setActiveDiscipline(null);
      onClearDiscipline();
    } else {
      setActiveDiscipline(discName);
      setSelectedComponent(null);
    }
  };

  const isAllActive =
    selectedCategory === "all" &&
    selectedComponent === null &&
    activeDiscipline === null &&
    maxPrice === 3746 &&
    searchQuery === "";

  const showComponentSection = !activeDiscipline;

  const filteredProducts = useMemo(() => {
    const parsePrice = (p: string) => {
      const num = parseFloat(p.replace(/[^0-9,.]/g, "").replace(",", "."));
      return isNaN(num) ? 0 : num;
    };

    let list = afsProducts.filter((product) => {
      const matchComponent =
        !selectedComponent ||
        product.subCategory.toLowerCase() === selectedComponent.toLowerCase() ||
        product.category.toLowerCase() === selectedComponent.toLowerCase();

      const matchCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchDiscipline =
        !activeDiscipline ||
        product.disciplines?.some(
          (d) =>
            d.toLowerCase().includes(activeDiscipline.toLowerCase()) ||
            activeDiscipline.toLowerCase().includes(d.toLowerCase()),
        );

      const price = parsePrice(product.price);
      const matchPrice = price <= maxPrice;

      const query = searchQuery.trim().toLowerCase();
      const matchSearch =
        query === "" ||
        product.name.toLowerCase().includes(query) ||
        (product.badge && product.badge.toLowerCase().includes(query)) ||
        (product.sizes &&
          product.sizes.some((s) => s.toLowerCase().includes(query)));

      return (
        matchComponent &&
        matchCategory &&
        matchDiscipline &&
        matchPrice &&
        matchSearch
      );
    });

    if (sortBy === "price-asc" || sortBy === "price-desc") {
      list = [...list].sort((a, b) => {
        const priceA = parsePrice(a.price);
        const priceB = parsePrice(b.price);
        return sortBy === "price-asc" ? priceA - priceB : priceB - priceA;
      });
    }

    return list;
  }, [
    selectedCategory,
    selectedComponent,
    activeDiscipline,
    maxPrice,
    searchQuery,
    sortBy,
  ]);

  const groupedProducts = useMemo(() => {
    if (selectedComponent) {
      return [
        {
          title: selectedComponent,
          count: filteredProducts.length,
          products: filteredProducts,
        },
      ];
    }

    if (activeDiscipline) {
      return [
        {
          title: activeDiscipline,
          count: filteredProducts.length,
          products: filteredProducts,
        },
      ];
    }

    if (selectedCategory !== "all") {
      const found = afsCategories.find((c) => c.id === selectedCategory);
      return [
        {
          title: found ? found.name : selectedCategory.toUpperCase(),
          count: filteredProducts.length,
          products: filteredProducts,
        },
      ];
    }

    const groups: { title: string; count: number; products: AfsProduct[] }[] = [];
    componentsList.forEach((comp) => {
      const prods = filteredProducts.filter(
        (p) =>
          p.subCategory.toLowerCase() === comp.name.toLowerCase() ||
          p.category.toLowerCase() === comp.name.toLowerCase(),
      );
      if (prods.length > 0) {
        groups.push({
          title: comp.name,
          count: prods.length,
          products: prods,
        });
      }
    });

    return groups;
  }, [filteredProducts, selectedComponent, activeDiscipline, selectedCategory]);

  return (
    <section id="catalog" className="relative w-full py-12 lg:py-16 bg-[#4A505B] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/15">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              {selectedComponent ||
                activeDiscipline ||
                (selectedCategory === "all" ? "All products" : selectedCategory)}
            </h2>
            <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-bold text-slate-200 border border-white/15">
              {filteredProducts.length} items
            </span>

            {activeDiscipline && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#E11D48] px-3 py-0.5 text-xs font-bold text-white shadow-xs">
                <span>Discipline: {activeDiscipline}</span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveDiscipline(null);
                    onClearDiscipline();
                  }}
                  className="hover:opacity-80 cursor-pointer ml-0.5"
                >
                  <X className="size-3.5" />
                </button>
              </span>
            )}

            {selectedComponent && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-0.5 text-xs font-bold text-white shadow-xs border border-white/20">
                <span>Component: {selectedComponent}</span>
                <button
                  type="button"
                  onClick={() => setSelectedComponent(null)}
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
              "lg:col-span-3 rounded-3xl border border-white/15 bg-white/[0.06] backdrop-blur-md p-6 shadow-xl flex flex-col gap-5 text-white sticky top-28",
              showMobileSidebar ? "block" : "hidden lg:flex",
            )}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-rose-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Filters
                </span>
              </div>
              <button
                type="button"
                onClick={handleResetAll}
                className="text-[11px] font-semibold text-rose-300 hover:text-white transition-colors cursor-pointer"
              >
                Reset All
              </button>
            </div>

            <button
              type="button"
              onClick={handleResetAll}
              className={cn(
                "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all cursor-pointer text-left w-full",
                isAllActive
                  ? "bg-[#E11D48] text-white shadow-md shadow-rose-950/40"
                  : "bg-white/10 hover:bg-white/15 text-white/80 hover:text-white",
              )}
            >
              <span>All products</span>
              <span
                className={cn(
                  "text-xs px-2.5 py-0.5 rounded-full font-bold",
                  isAllActive
                    ? "bg-white/20 text-white"
                    : "bg-white/10 text-white/60 group-hover:text-white",
                )}
              >
                99
              </span>
            </button>

            {showComponentSection && (
              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsComponentOpen(!isComponentOpen)}
                  className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-200 hover:text-white cursor-pointer py-1"
                >
                  <span>COMPONENT</span>
                  {isComponentOpen ? (
                    <ChevronUp className="size-4 text-white/60" />
                  ) : (
                    <ChevronDown className="size-4 text-white/60" />
                  )}
                </button>

                {isComponentOpen && (
                  <div className="flex flex-col gap-1.5 pt-1">
                    {componentsList.map((comp) => {
                      const isSelected = selectedComponent === comp.name;

                      return (
                        <button
                          key={comp.id}
                          type="button"
                          onClick={() => handleComponentClick(comp.name)}
                          className="group flex items-center justify-between text-xs sm:text-sm py-1 px-1 -mx-1 rounded-md hover:bg-white/5 cursor-pointer text-left transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={cn(
                                "size-4 rounded-[3px] border flex items-center justify-center transition-colors shrink-0",
                                isSelected
                                  ? "bg-[#E11D48] border-[#E11D48] text-white"
                                  : "border-white/30 bg-white/5 group-hover:border-white/50",
                              )}
                            >
                              {isSelected && (
                                <Check className="size-2.5 stroke-[3]" />
                              )}
                            </span>
                            <span
                              className={cn(
                                "transition-colors",
                                isSelected
                                  ? "text-white font-bold"
                                  : "text-slate-300 group-hover:text-white",
                              )}
                            >
                              {comp.name}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200">
                            {comp.count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {showComponentSection && (
              <div className="w-full border-b border-dashed border-white/20" />
            )}

            <div className="flex flex-col gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsDisciplineOpen(!isDisciplineOpen)}
                className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-200 hover:text-white cursor-pointer py-1"
              >
                <span>DISCIPLINE</span>
                {isDisciplineOpen ? (
                  <ChevronUp className="size-4 text-white/60" />
                ) : (
                  <ChevronDown className="size-4 text-white/60" />
                )}
              </button>

              {isDisciplineOpen && (
                <div className="flex flex-col gap-1.5 pt-1">
                  {disciplinesList.map((disc) => {
                    const isSelected = activeDiscipline === disc.name;

                    return (
                      <button
                        key={disc.id}
                        type="button"
                        onClick={() => handleDisciplineClick(disc.name)}
                        className="group flex items-center justify-between text-xs sm:text-sm py-1 px-1 -mx-1 rounded-md hover:bg-white/5 cursor-pointer text-left transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              "size-4 rounded-[3px] border flex items-center justify-center transition-colors shrink-0",
                              isSelected
                                ? "bg-[#E11D48] border-[#E11D48] text-white"
                                : "border-white/30 bg-white/5 group-hover:border-white/50",
                            )}
                          >
                            {isSelected && (
                              <Check className="size-2.5 stroke-[3]" />
                            )}
                          </span>
                          <span
                            className={cn(
                              "transition-colors",
                              isSelected
                                ? "text-white font-bold"
                                : "text-slate-300 group-hover:text-white",
                            )}
                          >
                            {disc.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-200">
                          {disc.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
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
                    className="w-full accent-[#E11D48] bg-white/20 h-1.5 rounded-lg cursor-pointer"
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

                        return (
                          <div
                            key={product.id}
                            className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-white/15 bg-white/[0.06] p-5 sm:p-6 shadow-md hover:bg-white/[0.10] hover:border-white/30 transition-all duration-300 text-white relative"
                          >
                            <div className="flex flex-col">
                              <div className="flex items-center justify-between min-h-6">
                                {product.badge ? (
                                  <span
                                    className={cn(
                                      "rounded-[3px] px-2.5 py-1 text-[11px] font-black tracking-wider uppercase border",
                                      product.badgeType === "deal"
                                        ? "bg-rose-500/20 text-rose-300 border-rose-500/40"
                                        : product.badgeType === "performance"
                                          ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                                          : "bg-white/15 text-white border-white/20",
                                    )}
                                  >
                                    {product.badge}
                                  </span>
                                ) : (
                                  <span className="rounded-[3px] px-2.5 py-1 text-[11px] font-black tracking-wider uppercase border bg-white/10 text-white/80 border-white/15">
                                    {product.subCategory}
                                  </span>
                                )}
                              </div>

                              <Link
                                href={productHref}
                                className="relative w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden my-3 cursor-pointer group-hover:scale-105 transition-transform duration-500"
                              >
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                  className="object-contain p-2 select-none"
                                />
                              </Link>

                              <div className="flex flex-col items-center text-center pt-2">
                                <Link
                                  href={productHref}
                                  className="text-base sm:text-lg font-black uppercase tracking-tight text-white leading-snug line-clamp-2 cursor-pointer group-hover:text-rose-400 transition-colors"
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
                                    <span className="text-xs font-normal text-rose-300 line-through">
                                      {product.originalPrice}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="pt-5 mt-auto">
                              <Link
                                href={productHref}
                                className={cn(
                                  "w-full h-11 rounded-lg text-xs sm:text-sm font-black tracking-widest uppercase flex items-center justify-center transition-all cursor-pointer shadow-md",
                                  product.actionText === "GRAB THE DEAL"
                                    ? "bg-[#E11D48] hover:bg-[#BE123C] text-white"
                                    : "bg-black/60 hover:bg-[#E11D48] text-white border border-white/20 hover:border-transparent",
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
