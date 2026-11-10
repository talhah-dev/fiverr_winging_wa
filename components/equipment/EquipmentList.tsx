"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Plus,
  Trash2,
  Edit,
  Eye,
  Star,
  Check,
  X,
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Grid,
  List,
  Package,
  Sparkles,
} from "lucide-react";
import {
  DashboardEquipmentItem,
  initialDashboardEquipment,
  equipmentCategories,
} from "@/data/dashboardEquipment";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function EquipmentList() {
  const [equipment, setEquipment] = useState<DashboardEquipmentItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterFeatured, setFilterFeatured] = useState<"all" | "featured" | "in-stock">("all");
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const [itemToDelete, setItemToDelete] = useState<DashboardEquipmentItem | null>(null);
  const [itemToEdit, setItemToEdit] = useState<DashboardEquipmentItem | null>(null);
  const [itemToView, setItemToView] = useState<DashboardEquipmentItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fetchEquipment = () => {
    setIsLoading(true);
    fetch("/api/equipment")
      .then((res) => res.json())
      .then((res) => {
        if (res.success && res.data) {
          setEquipment(res.data);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSimulateLoading = () => {
    fetchEquipment();
  };

  const filteredEquipment = useMemo(() => {
    return equipment.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.sku && item.sku.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.specs.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const matchesFeatured =
        filterFeatured === "all" ||
        (filterFeatured === "featured" && item.featuredOnHome) ||
        (filterFeatured === "in-stock" && item.stockStatus === "In Stock (WA)");

      return matchesSearch && matchesCategory && matchesFeatured;
    });
  }, [equipment, searchTerm, selectedCategory, filterFeatured]);

  const metrics = useMemo(() => {
    const total = equipment.length;
    const inStock = equipment.filter((e) => e.stockStatus === "In Stock (WA)").length;
    const featuredCount = equipment.filter((e) => e.featuredOnHome).length;
    const totalValue = equipment.reduce((acc, curr) => {
      const num = parseFloat(curr.price.replace(/[^0-9.]/g, "")) || 0;
      return acc + num;
    }, 0);

    return { total, inStock, featuredCount, totalValue };
  }, [equipment]);

  const toggleFeatured = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    let nextValue = false;
    setEquipment((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          nextValue = !item.featuredOnHome;
          showToast(
            nextValue
              ? `"${item.name}" added to Home Page carousel`
              : `"${item.name}" removed from Home Page carousel`
          );
          return { ...item, featuredOnHome: nextValue };
        }
        return item;
      })
    );
    try {
      await fetch("/api/equipment", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, featuredOnHome: nextValue }),
      });
    } catch (err) {
      console.error(err);
    }
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    const deletedId = itemToDelete.id;
    const deletedName = itemToDelete.name;
    setEquipment((prev) => prev.filter((item) => item.id !== deletedId));
    setItemToDelete(null);
    showToast(`"${deletedName}" successfully removed from equipment inventory.`);
    try {
      await fetch(`/api/equipment?id=${deletedId}`, { method: "DELETE" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemToEdit) return;

    const payload = itemToEdit;
    setEquipment((prev) =>
      prev.map((item) => (item.id === payload.id ? payload : item))
    );
    const updatedName = payload.name;
    setItemToEdit(null);
    showToast(`"${updatedName}" updated successfully.`);
    try {
      await fetch("/api/equipment", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900 border border-white/20 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Check className="size-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ef0e0a]">
              Equipment Catalog
            </span>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#ef0e0a]/15 text-orange-300 border border-[#ef0e0a]/30">
              <Sparkles className="size-3 text-[#ef0e0a]" />
              WA Warehouse Stock
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Featured Equipment Management
          </h1>
          <p className="text-sm text-slate-300">
            Create, edit, delete, and control equipment displayed across the store and the home page featured slider.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Button
            onClick={handleSimulateLoading}
            variant="outline"
            size="sm"
            className="border-white/15 bg-white/5 text-white hover:bg-white/10 cursor-pointer text-xs"
          >
            <RefreshCw className={cn("size-3.5 mr-1.5", isLoading && "animate-spin")} />
            Simulate Loading
          </Button>
          <Link
            href="/dashboard/equipment/new"
            className="inline-flex items-center justify-center h-9 px-4 rounded-lg bg-[#ef0e0a] hover:bg-[#c40c08] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-sm"
          >
            <Plus className="size-4 mr-1.5" />
            Add New Equipment
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Total Equipment
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {metrics.total}
            </div>
            <span className="text-xs text-slate-400">16 Stock Units</span>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              In Stock (WA)
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              {metrics.inStock}
            </div>
            <span className="text-xs text-emerald-400/80">Available now</span>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Featured on Home Page
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 flex items-center gap-2">
              <Star className="size-5 fill-amber-400 text-amber-400" />
              {metrics.featuredCount}
            </div>
            <span className="text-xs text-slate-400">On Home Carousel</span>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Total Inventory Value
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 flex items-baseline justify-between">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              ${Math.round(metrics.totalValue).toLocaleString()}
            </div>
            <span className="text-xs text-slate-400">AUD Direct Stock</span>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-3 bg-[#383D47] p-3.5 rounded-2xl border border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by equipment name, brand, SKU or specs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-9 pr-4 rounded-xl bg-black/25 border border-white/10 text-sm text-white placeholder:text-slate-400 focus:outline-hidden focus:border-[#ef0e0a]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={filterFeatured}
              onChange={(e) => setFilterFeatured(e.target.value as any)}
              className="h-10 px-3 bg-black/25 text-white border border-white/10 rounded-xl text-xs font-medium cursor-pointer focus:outline-hidden focus:border-[#ef0e0a]"
            >
              <option value="all" className="bg-[#383D47] text-white">
                All Inventory
              </option>
              <option value="featured" className="bg-[#383D47] text-white">
                Featured on Home Only
              </option>
              <option value="in-stock" className="bg-[#383D47] text-white">
                In Stock (WA) Only
              </option>
            </select>

            <div className="flex items-center bg-black/25 rounded-xl p-1 border border-white/10">
              <button
                type="button"
                onClick={() => setViewMode("table")}
                className={cn(
                  "p-1.5 rounded-lg text-xs transition-colors cursor-pointer",
                  viewMode === "table" ? "bg-[#ef0e0a] text-white" : "text-slate-400 hover:text-white"
                )}
                aria-label="Table View"
              >
                <List className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={cn(
                  "p-1.5 rounded-lg text-xs transition-colors cursor-pointer",
                  viewMode === "grid" ? "bg-[#ef0e0a] text-white" : "text-slate-400 hover:text-white"
                )}
                aria-label="Grid View"
              >
                <Grid className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 border-t border-white/5">
          {equipmentCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer",
                selectedCategory === cat
                  ? "bg-[#ef0e0a] text-white shadow-xs"
                  : "bg-black/20 text-slate-300 hover:text-white hover:bg-black/40 border border-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="w-full rounded-2xl bg-[#383D47] border border-white/10 p-5 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <Skeleton className="h-4 w-32 bg-white/10" />
            <Skeleton className="h-4 w-20 bg-white/10" />
          </div>
          {[1, 2, 3, 4, 5].map((idx) => (
            <div key={idx} className="flex items-center justify-between gap-4 py-2 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Skeleton className="size-12 rounded-xl bg-white/10" />
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-4 w-48 bg-white/10" />
                  <Skeleton className="h-3 w-28 bg-white/10" />
                </div>
              </div>
              <Skeleton className="h-4 w-24 bg-white/10" />
              <Skeleton className="h-4 w-20 bg-white/10" />
              <Skeleton className="h-6 w-24 rounded-full bg-white/10" />
              <div className="flex items-center gap-2">
                <Skeleton className="size-8 rounded-lg bg-white/10" />
                <Skeleton className="size-8 rounded-lg bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      ) : viewMode === "table" ? (
        <div className="w-full rounded-2xl bg-[#383D47] border border-white/10 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-black/20 text-xs uppercase tracking-wider text-slate-400 border-b border-white/10 select-none">
                <tr>
                  <th className="py-3 px-4 font-semibold">Equipment Product</th>
                  <th className="py-3 px-4 font-semibold">Category</th>
                  <th className="py-3 px-4 font-semibold">Price</th>
                  <th className="py-3 px-4 font-semibold">Stock Status</th>
                  <th className="py-3 px-4 font-semibold text-center">Home Page Slider</th>
                  <th className="py-3 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredEquipment.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 font-medium">
                      No equipment matches your current filters.
                    </td>
                  </tr>
                ) : (
                  filteredEquipment.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-white/[0.04] transition-colors group"
                    >
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="relative size-12 rounded-xl bg-black/40 border border-white/10 overflow-hidden shrink-0 flex items-center justify-center p-1">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={48}
                              height={48}
                              className="size-full object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-white group-hover:text-orange-300 transition-colors flex items-center gap-2">
                              {item.name}
                              {item.badge && (
                                <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-bold uppercase", item.badgeColor || "bg-white/10 text-white")}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                              <span className="font-mono text-slate-400">{item.sku}</span>
                              <span>•</span>
                              <span className="text-[#ef0e0a] font-medium">{item.brand}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-white/10 text-white border border-white/15">
                          {item.category}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-bold text-white text-sm">
                          {item.price}
                        </div>
                        {item.originalPrice && (
                          <div className="text-xs text-slate-400 line-through">
                            {item.originalPrice}
                          </div>
                        )}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold",
                            item.stockStatus === "In Stock (WA)"
                              ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                              : item.stockStatus === "Low Stock"
                              ? "bg-amber-500/15 text-amber-300 border border-amber-500/30"
                              : "bg-sky-500/15 text-sky-300 border border-sky-500/30"
                          )}
                        >
                          <span
                            className={cn(
                              "size-1.5 rounded-full",
                              item.stockStatus === "In Stock (WA)"
                                ? "bg-emerald-400"
                                : item.stockStatus === "Low Stock"
                                ? "bg-amber-400"
                                : "bg-sky-400"
                            )}
                          />
                          {item.stockStatus}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <button
                          type="button"
                          onClick={(e) => toggleFeatured(item.id, e)}
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer select-none",
                            item.featuredOnHome
                              ? "bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30 shadow-xs"
                              : "bg-white/5 text-slate-400 border-white/10 hover:bg-white/10 hover:text-slate-200"
                          )}
                        >
                          <Star
                            className={cn(
                              "size-3.5",
                              item.featuredOnHome && "fill-amber-400 text-amber-400"
                            )}
                          />
                          <span>{item.featuredOnHome ? "Featured" : "Hidden"}</span>
                        </button>
                      </td>

                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => setItemToView(item)}
                            className="size-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="View Details"
                          >
                            <Eye className="size-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setItemToEdit(item)}
                            className="size-8 rounded-lg bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                            title="Edit Equipment"
                          >
                            <Edit className="size-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setItemToDelete(item)}
                            className="size-8 rounded-lg bg-red-500/10 hover:bg-red-500/25 flex items-center justify-center text-red-400 hover:text-red-300 transition-colors cursor-pointer border border-red-500/20"
                            title="Delete Equipment"
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEquipment.map((item) => (
            <Card
              key={item.id}
              className="bg-[#383D47] border-white/10 text-white overflow-hidden flex flex-col justify-between group hover:border-white/25 transition-all"
            >
              <div className="p-4 flex flex-col gap-3">
                <div className="relative w-full h-44 rounded-xl bg-black/30 border border-white/10 overflow-hidden flex items-center justify-center p-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={180}
                    height={180}
                    className="size-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                    {item.badge && (
                      <span className={cn("text-[10px] px-2 py-0.5 rounded-full font-bold uppercase", item.badgeColor || "bg-white/10 text-white")}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>{item.sku}</span>
                    <span className="text-[#ef0e0a] font-semibold">{item.brand}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-white/10 mt-2 flex items-center justify-between gap-2">
                <div>
                  <div className="text-base font-bold text-white">{item.price}</div>
                  <div className="text-[11px] text-emerald-400">{item.stockStatus}</div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => toggleFeatured(item.id, e)}
                    className={cn(
                      "p-1.5 rounded-lg border transition-all cursor-pointer",
                      item.featuredOnHome
                        ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                        : "bg-white/5 text-slate-400 border-white/10 hover:text-white"
                    )}
                    title={item.featuredOnHome ? "Featured on Home" : "Hide from Home"}
                  >
                    <Star className={cn("size-4", item.featuredOnHome && "fill-amber-400 text-amber-400")} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setItemToEdit(item)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white cursor-pointer"
                    title="Edit"
                  >
                    <Edit className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setItemToDelete(item)}
                    className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/25 text-red-400 hover:text-red-300 border border-red-500/20 cursor-pointer"
                    title="Delete"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {itemToDelete && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={() => setItemToDelete(null)}
        >
          <div
            className="w-full max-w-md bg-[#343943] border border-red-500/30 rounded-3xl p-6 sm:p-7 text-white shadow-2xl flex flex-col gap-5 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3.5">
              <div className="size-12 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                <AlertTriangle className="size-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Delete Equipment Listing?
                </h3>
                <span className="text-xs text-red-300/80">
                  Permanent action
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Are you sure you want to delete <strong className="text-white">"{itemToDelete.name}"</strong>? This will remove this item from the Western Australia warehouse stock inventory and from the Home Page featured carousel.
            </p>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <Button
                variant="outline"
                onClick={() => setItemToDelete(null)}
                className="border-white/15 text-white hover:bg-white/10 cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold cursor-pointer shadow-sm"
              >
                Yes, Delete Equipment
              </Button>
            </div>
          </div>
        </div>
      )}

      {itemToView && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={() => setItemToView(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#343943] border border-white/15 rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="size-14 rounded-2xl bg-black/40 border border-white/10 p-1 flex items-center justify-center shrink-0">
                  <Image
                    src={itemToView.image}
                    alt={itemToView.name}
                    width={56}
                    height={56}
                    className="size-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {itemToView.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                    <span className="text-[#ef0e0a] font-semibold">{itemToView.brand}</span>
                    <span>•</span>
                    <span>{itemToView.category}</span>
                    <span>•</span>
                    <span className="font-bold text-white">{itemToView.price}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setItemToView(null)}
                className="size-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5",
                itemToView.featuredOnHome
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                  : "bg-white/5 text-slate-400 border-white/10"
              )}>
                <Star className={cn("size-3.5", itemToView.featuredOnHome && "fill-amber-400 text-amber-400")} />
                {itemToView.featuredOnHome ? "Displayed on Home Page Slider" : "Hidden from Home Slider"}
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {itemToView.stockStatus}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Specs Overview
              </span>
              <div className="p-3.5 rounded-xl bg-black/25 border border-white/10 text-sm font-medium text-white">
                {itemToView.specs}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Description
              </span>
              <div className="p-4 rounded-xl bg-black/25 border border-white/10 text-sm text-slate-200 leading-relaxed">
                {itemToView.longDescription || itemToView.description}
              </div>
            </div>

            {itemToView.detailedSpecs && itemToView.detailedSpecs.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technical Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {itemToView.detailedSpecs.map((spec, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-black/20 border border-white/10 flex items-center justify-between text-xs">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="font-semibold text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <Button
                variant="outline"
                onClick={() => setItemToView(null)}
                className="border-white/15 text-white hover:bg-white/10 cursor-pointer"
              >
                Close
              </Button>
              <Link
                href={`/feature-equipment/${itemToView.id}`}
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#ef0e0a] hover:bg-[#c40c08] text-white text-sm font-semibold transition-colors cursor-pointer shadow-sm"
              >
                <ExternalLink className="size-4 mr-2" />
                Open Live Public Page
              </Link>
            </div>
          </div>
        </div>
      )}

      {itemToEdit && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={() => setItemToEdit(null)}
        >
          <div
            className="w-full max-w-xl bg-[#343943] border border-white/15 rounded-3xl p-6 sm:p-7 text-white shadow-2xl flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Edit className="size-5 text-[#ef0e0a]" />
                <h3 className="text-xl font-bold text-white">Edit Equipment</h3>
              </div>
              <button
                type="button"
                onClick={() => setItemToEdit(null)}
                className="size-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Equipment Name
                </label>
                <input
                  type="text"
                  required
                  value={itemToEdit.name}
                  onChange={(e) =>
                    setItemToEdit({ ...itemToEdit, name: e.target.value })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Price (AUD)
                  </label>
                  <input
                    type="text"
                    required
                    value={itemToEdit.price}
                    onChange={(e) =>
                      setItemToEdit({ ...itemToEdit, price: e.target.value })
                    }
                    className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Stock Status
                  </label>
                  <select
                    value={itemToEdit.stockStatus}
                    onChange={(e) =>
                      setItemToEdit({
                        ...itemToEdit,
                        stockStatus: e.target.value as any,
                      })
                    }
                    className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a] cursor-pointer"
                  >
                    <option value="In Stock (WA)" className="bg-[#343943]">
                      In Stock (WA)
                    </option>
                    <option value="Low Stock" className="bg-[#343943]">
                      Low Stock
                    </option>
                    <option value="Demo Unit Available" className="bg-[#343943]">
                      Demo Unit Available
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Specs Summary
                </label>
                <input
                  type="text"
                  value={itemToEdit.specs}
                  onChange={(e) =>
                    setItemToEdit({ ...itemToEdit, specs: e.target.value })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={itemToEdit.description}
                  onChange={(e) =>
                    setItemToEdit({ ...itemToEdit, description: e.target.value })
                  }
                  className="p-3 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>

              <div className="p-4 rounded-2xl bg-black/30 border border-white/15 flex items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <Star className="size-4 text-amber-400 fill-amber-400" />
                    Feature on Home Page Slider
                  </div>
                  <div className="text-xs text-slate-400">
                    Enable to display this item directly in the front page featured equipment slider.
                  </div>
                </div>

                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={itemToEdit.featuredOnHome}
                    onChange={(e) =>
                      setItemToEdit({
                        ...itemToEdit,
                        featuredOnHome: e.target.checked,
                      })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0e0a]"></div>
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setItemToEdit(null)}
                  className="border-white/15 text-white hover:bg-white/10 cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-[#ef0e0a] hover:bg-[#c40c08] text-white font-semibold cursor-pointer shadow-sm"
                >
                  Save Changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

