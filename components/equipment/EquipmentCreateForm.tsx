"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Plus,
  Trash2,
  Star,
  Sparkles,
  Layers,
  Upload,
} from "lucide-react";
import {
  equipmentBrands,
  equipmentCategories,
  stockStatusOptions,
} from "@/data/dashboardEquipment";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const sampleStockImages = [
  { label: "MINI Pump", path: "/stock/MINIPump.avif" },
  { label: "AFS Stream Wing Full", path: "/stock/AFSStream-full.png" },
  { label: "AFS Stream Front", path: "/stock/AFSStream-front.png" },
  { label: "Carbon Fuselage Long", path: "/stock/FUSELAGECARBONLong.avif" },
  { label: "AFS Carbon Foil Setup", path: "/stock/afs-carbon-foil-setup.jpg" },
  { label: "Phantom Surf Foil", path: "/stock/PHANTOM840&940surffoil.avif" },
  { label: "Rocket Wing ASC Board", path: "/stock/ROCKET-WING-ASC-5'10-110L.avif" },
  { label: "Trax HRD Lite", path: "/stock/TRAX-HRD-Lite-136.avif" },
];

export function EquipmentCreateForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    id: "",
    brand: equipmentBrands[0],
    category: equipmentCategories[1],
    price: "$",
    originalPrice: "",
    stockStatus: stockStatusOptions[0],
    badge: "New Release",
    image: sampleStockImages[0].path,
    disciplines: "Surf Foil, Winging",
    specs: "High Modulus French Carbon • Advanced Profile",
    description: "",
    featuredOnHome: true,
  });

  const [detailedSpecs, setDetailedSpecs] = useState<{ label: string; value: string }[]>([
    { label: "Front Wing Area", value: "850 cm²" },
    { label: "Aspect Ratio", value: "8.2" },
  ]);

  const [inTheBox, setInTheBox] = useState<string[]>([
    "1x High Modulus Front Wing",
    "1x Protective Padded Cover",
    "1x Stainless Torx Screw Set & Tool",
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  const handleNameChange = (name: string) => {
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    setFormData((prev) => ({
      ...prev,
      name,
      id: prev.id ? prev.id : slug,
    }));
  };

  const addDetailedSpec = () => {
    setDetailedSpecs((prev) => [...prev, { label: "", value: "" }]);
  };

  const removeDetailedSpec = (index: number) => {
    setDetailedSpecs((prev) => prev.filter((_, i) => i !== index));
  };

  const updateDetailedSpec = (index: number, field: "label" | "value", text: string) => {
    setDetailedSpecs((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: text } : item))
    );
  };

  const addBoxItem = () => {
    setInTheBox((prev) => [...prev, ""]);
  };

  const removeBoxItem = (index: number) => {
    setInTheBox((prev) => prev.filter((_, i) => i !== index));
  };

  const updateBoxItem = (index: number, text: string) => {
    setInTheBox((prev) => prev.map((item, i) => (i === index ? text : item)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/equipment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: formData.id,
          name: formData.name,
          brand: formData.brand,
          category: formData.category,
          price: formData.price,
          stockStatus: formData.stockStatus,
          image: formData.image,
          description: formData.description,
          featuredOnHome: formData.featuredOnHome,
        }),
      });
      setIsCreated(true);
    } catch (err) {
      console.error(err);
      setIsCreated(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCreated) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center max-w-xl mx-auto gap-6 bg-[#383D47] rounded-3xl border border-white/10 p-8 shadow-2xl">
        <div className="size-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
          <CheckCircle2 className="size-9" />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Equipment Listed Successfully!
          </h2>
          <p className="text-sm text-slate-300">
            <strong>"{formData.name}"</strong> has been added to the inventory catalog.
            {formData.featuredOnHome && (
              <span className="block text-amber-300 font-semibold mt-1">
                ★ This item is now configured to appear on the Home Page featured slider.
              </span>
            )}
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Link
            href="/dashboard/equipment"
            className="px-5 py-2.5 rounded-xl bg-[#ef0e0a] hover:bg-[#c40c08] text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
          >
            Back to Equipment List
          </Link>
          <button
            type="button"
            onClick={() => {
              setIsCreated(false);
              setFormData({
                name: "",
                id: "",
                brand: equipmentBrands[0],
                category: equipmentCategories[1],
                price: "$",
                originalPrice: "",
                stockStatus: stockStatusOptions[0],
                badge: "New Release",
                image: sampleStockImages[0].path,
                disciplines: "Surf Foil, Winging",
                specs: "High Modulus French Carbon • Advanced Profile",
                description: "",
                featuredOnHome: true,
              });
            }}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition-colors cursor-pointer"
          >
            Create Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/equipment"
            className="size-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">Create New Equipment Listing</h1>
            <p className="text-xs text-slate-300">
              Add genuine AFS Foils or Manta Foil Assist equipment to the WA inventory.
            </p>
          </div>
        </div>

        <Link
          href="/dashboard/equipment"
          className="text-xs text-slate-400 hover:text-white font-medium"
        >
          Cancel
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardContent className="p-6 flex flex-col gap-5">
            <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Layers className="size-4 text-[#ef0e0a]" />
              Basic Equipment Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Equipment Name <span className="text-[#ef0e0a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AFS Silk v2 Carbon Front Wing"
                  value={formData.name}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  URL Slug / Product ID <span className="text-[#ef0e0a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. afs-silk-v2-carbon-front-wing"
                  value={formData.id}
                  onChange={(e) =>
                    setFormData({ ...formData, id: e.target.value })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder:text-slate-500 font-mono focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Brand <span className="text-[#ef0e0a]">*</span>
                </label>
                <select
                  value={formData.brand}
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value as any })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a] cursor-pointer"
                >
                  {equipmentBrands.map((b) => (
                    <option key={b} value={b} className="bg-[#343943]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Category <span className="text-[#ef0e0a]">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value as any })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a] cursor-pointer"
                >
                  {equipmentCategories
                    .filter((c) => c !== "All")
                    .map((c) => (
                      <option key={c} value={c} className="bg-[#343943]">
                        {c}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Stock Status <span className="text-[#ef0e0a]">*</span>
                </label>
                <select
                  value={formData.stockStatus}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      stockStatus: e.target.value as any,
                    })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a] cursor-pointer"
                >
                  {stockStatusOptions.map((s) => (
                    <option key={s} value={s} className="bg-[#343943]">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Retail Price (AUD) <span className="text-[#ef0e0a]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="$2,450.00"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Original Price (Strikethrough)
                </label>
                <input
                  type="text"
                  placeholder="Optional: $2,800.00"
                  value={formData.originalPrice}
                  onChange={(e) =>
                    setFormData({ ...formData, originalPrice: e.target.value })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Badge Label
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sale / Hot / French Carbon"
                  value={formData.badge}
                  onChange={(e) =>
                    setFormData({ ...formData, badge: e.target.value })
                  }
                  className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#ef0e0a]"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-amber-500/30 text-white ring-1 ring-amber-500/20">
          <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="size-11 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                <Star className="size-5 fill-amber-400" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-base font-bold text-white flex items-center gap-2">
                  Feature on Home Page Slider
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Front Store Highlight
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When enabled, this equipment appears directly in the front page interactive equipment carousel on <strong className="text-white">wingingwa.com.au</strong> so visitors can immediately see and enquire about it.
                </p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={formData.featuredOnHome}
                onChange={(e) =>
                  setFormData({ ...formData, featuredOnHome: e.target.checked })
                }
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#ef0e0a]"></div>
            </label>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardContent className="p-6 flex flex-col gap-5">
            <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Upload className="size-4 text-[#ef0e0a]" />
              Equipment Product Image
            </h2>

            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <div className="relative size-32 rounded-2xl bg-black/40 border border-white/15 overflow-hidden shrink-0 flex items-center justify-center p-2">
                <Image
                  src={formData.image}
                  alt="Preview"
                  width={128}
                  height={128}
                  className="size-full object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Select From Warehouse Stock Images
                  </label>
                  <select
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a] cursor-pointer"
                  >
                    {sampleStockImages.map((img) => (
                      <option key={img.path} value={img.path} className="bg-[#343943]">
                        {img.label} ({img.path})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Or Enter Custom Image Path
                  </label>
                  <input
                    type="text"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white font-mono focus:outline-hidden focus:border-[#ef0e0a]"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#383D47] border-white/10 text-white">
          <CardContent className="p-6 flex flex-col gap-5">
            <h2 className="text-base font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Sparkles className="size-4 text-[#ef0e0a]" />
              Specifications & Descriptions
            </h2>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Disciplines (Comma separated)
              </label>
              <input
                type="text"
                placeholder="e.g. Surf Foil, Winging, Downwind"
                value={formData.disciplines}
                onChange={(e) =>
                  setFormData({ ...formData, disciplines: e.target.value })
                }
                className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Specs Summary <span className="text-[#ef0e0a]">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Dual Action • Integrated Barometer Gauge • Laurent Borgna Shape"
                value={formData.specs}
                onChange={(e) =>
                  setFormData({ ...formData, specs: e.target.value })
                }
                className="h-10 px-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white focus:outline-hidden focus:border-[#ef0e0a]"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Product Overview & Description <span className="text-[#ef0e0a]">*</span>
              </label>
              <textarea
                rows={4}
                required
                placeholder="Detailed explanation of the equipment's performance, build quality, and setup advice..."
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="p-3.5 rounded-xl bg-black/30 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:border-[#ef0e0a] leading-relaxed"
              />
            </div>

            <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Detailed Specifications
                </label>
                <button
                  type="button"
                  onClick={addDetailedSpec}
                  className="inline-flex items-center gap-1 text-xs text-[#ef0e0a] hover:text-orange-400 font-semibold cursor-pointer"
                >
                  <Plus className="size-3.5" />
                  Add Specification
                </button>
              </div>

              {detailedSpecs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Specification Name (e.g. Area)"
                    value={spec.label}
                    onChange={(e) => updateDetailedSpec(i, "label", e.target.value)}
                    className="h-9 px-3 rounded-lg bg-black/30 border border-white/15 text-xs text-white flex-1 focus:outline-hidden focus:border-[#ef0e0a]"
                  />
                  <input
                    type="text"
                    placeholder="Value (e.g. 850 cm²)"
                    value={spec.value}
                    onChange={(e) => updateDetailedSpec(i, "value", e.target.value)}
                    className="h-9 px-3 rounded-lg bg-black/30 border border-white/15 text-xs text-white flex-1 focus:outline-hidden focus:border-[#ef0e0a]"
                  />
                  <button
                    type="button"
                    onClick={() => removeDetailedSpec(i)}
                    className="size-9 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  In The Box Items
                </label>
                <button
                  type="button"
                  onClick={addBoxItem}
                  className="inline-flex items-center gap-1 text-xs text-[#ef0e0a] hover:text-orange-400 font-semibold cursor-pointer"
                >
                  <Plus className="size-3.5" />
                  Add Box Item
                </button>
              </div>

              {inTheBox.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="e.g. 1x High-Modulus Front Wing"
                    value={item}
                    onChange={(e) => updateBoxItem(i, e.target.value)}
                    className="h-9 px-3 rounded-lg bg-black/30 border border-white/15 text-xs text-white flex-1 focus:outline-hidden focus:border-[#ef0e0a]"
                  />
                  <button
                    type="button"
                    onClick={() => removeBoxItem(i)}
                    className="size-9 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 flex items-center justify-center cursor-pointer"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center justify-end gap-3 pb-8">
          <Link
            href="/dashboard/equipment"
            className="px-5 py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors"
          >
            Cancel
          </Link>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 rounded-xl bg-[#ef0e0a] hover:bg-[#c40c08] text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
          >
            {isSubmitting ? "Saving Equipment..." : "Create Equipment Listing"}
          </Button>
        </div>
      </form>
    </div>
  );
}

