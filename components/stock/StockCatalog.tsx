"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Filter, Phone, Plus, Search, Tag, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface StockItem {
  id: string;
  name: string;
  brand: "AFS Foils" | "Manta Foils";
  category: "Foil Sets" | "Masts & Fuselages" | "Wings & Parawings" | "Foil Assist" | "Accessories";
  price: string;
  originalPrice?: string;
  stockStatus: "In Stock (WA)" | "Low Stock" | "Demo Unit Available";
  badgeColor: string;
  image: string;
  disciplines: string[];
  specs: string;
  description: string;
}

export const staticInventory: StockItem[] = [
  {
    id: "afs-silk-v2-850",
    name: "AFS Silk v2 850 High Modulus Foil Set",
    brand: "AFS Foils",
    category: "Foil Sets",
    price: "$2,490.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Surf Foil", "Wing", "Prone", "Downwind"],
    specs: "850cm² Front Wing • 82cm HM Carbon Mast • French Carbon Fuselage",
    description: "Designed with Laurent Borgna for ultra-fluid surf carving, instant rail-to-rail transitions, and effortless pump recovery.",
  },
  {
    id: "afs-silk-v2-950",
    name: "AFS Silk v2 950 High Modulus Foil Set",
    brand: "AFS Foils",
    category: "Foil Sets",
    price: "$2,550.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Surf Foil", "Wing", "Downwind", "Foil Assist"],
    specs: "950cm² Front Wing • 85cm HM Carbon Mast • High Aspect Ratio 8.0",
    description: "Incredible low-end lift and glide with surf shortboard agility. Ideal for lighter wind wing foiling and downwind swell connects.",
  },
  {
    id: "afs-enduro-900",
    name: "AFS Enduro 900 Performance Foil Set",
    brand: "AFS Foils",
    category: "Foil Sets",
    price: "$2,390.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Wing", "Freeride", "Speed", "Downwind"],
    specs: "900cm² Front Wing • Aspect Ratio 11 • Carbon Mast & Fuselage",
    description: "Bridges glide and maneuverability for long-distance runs and high-speed carving without rider fatigue.",
  },
  {
    id: "afs-enduro-1100",
    name: "AFS Enduro 1100 Downwind & Glide Set",
    brand: "AFS Foils",
    category: "Foil Sets",
    price: "$2,450.00",
    stockStatus: "Low Stock",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Downwind", "Lightwind Wing", "Pump"],
    specs: "1100cm² High-Aspect Wing • French UHM Carbon Mast Setup",
    description: "Endless glide in sub-10 knot wind and tiny ocean bumps. Effortless pumping with maximum energy retention.",
  },
  {
    id: "afs-evo-1000",
    name: "AFS Evo Full Set (Single Price Option)",
    brand: "AFS Foils",
    category: "Foil Sets",
    price: "$2,290.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Freeride", "Progression", "Wing"],
    specs: "Complete Carbon Setup • Balanced Aspect Ratio • Direct Response",
    description: "The complete single-price carbon foil set tailored for straightforward progression across freeride disciplines.",
  },
  {
    id: "afs-flyer-full-set",
    name: "AFS Flyer Lightwind Full Set",
    brand: "AFS Foils",
    category: "Foil Sets",
    price: "$2,190.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Lightwind", "Cruising", "Wing"],
    specs: "Large Surface Front Wing • Ultra-Early Takeoff • French Carbon",
    description: "Early lift and rock-solid pitch stability for getting up on foil in the lightest breezes on the WA coast.",
  },
  {
    id: "manta-takeoff-evo-kit",
    name: "Manta TakeOff Evo Complete Assist Kit",
    brand: "Manta Foils",
    category: "Foil Assist",
    price: "$4,850.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    image: "/manta-evo.png",
    disciplines: ["Foil Assist", "Surf Foil", "Downwind", "Wing"],
    specs: "Slim Ultra-Light Drive Unit • Wireless Remote • Smart Charger",
    description: "The next-generation ultra-light foil assist system. Delivers instantaneous electric power with near-zero drag.",
  },
  {
    id: "manta-backpack-system",
    name: "Manta Foil Assist Backpack System",
    brand: "Manta Foils",
    category: "Foil Assist",
    price: "$1,290.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    image: "/manta-backpack.jpg",
    disciplines: ["Foil Assist", "Prone", "Carving", "Downwind"],
    specs: "Patented Rider Harness • Quick-Release Connector • Padded Support",
    description: "Shifts the battery weight off the board and onto your back, unlocking unbelievable board agility and free pumping.",
  },
  {
    id: "manta-endurance-battery",
    name: "Manta TakeOff Evo Endurance Battery",
    brand: "Manta Foils",
    category: "Foil Assist",
    price: "$1,450.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/manta-evo.png",
    disciplines: ["Foil Assist", "Extended Sessions"],
    specs: "Extended Capacity Lithium Cells • Water-Sealed CNC Casing",
    description: "Designed for marathon sessions, continuous foil assist runs, and long open-water exploration in Western Australia.",
  },
  {
    id: "manta-travel-battery",
    name: "Manta Airline-Compliant Travel Battery Set",
    brand: "Manta Foils",
    category: "Foil Assist",
    price: "$1,250.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/manta-evo.png",
    disciplines: ["Travel", "Surf Trips", "Foil Assist"],
    specs: "Under 100Wh Modular Units • TSA & Commercial Airline Approved",
    description: "Fly anywhere with your foil assist system. Modular battery units that click together on the water.",
  },
  {
    id: "afs-stream-4",
    name: "AFS Stream Performance Wing 4.0m",
    brand: "AFS Foils",
    category: "Wings & Parawings",
    price: "$1,850.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/AFSStream-front.png",
    disciplines: ["High Wind Wing", "Wave Riding", "Freefly"],
    specs: "Aramid UPE Leading Edge • Rigid Center Strut • Tri-Radial Canopy",
    description: "The ultimate wave-riding and high-wind wing. Neutral drift when flagged out on surf swells with zero flutter.",
  },
  {
    id: "afs-stream-5",
    name: "AFS Stream Performance Wing 5.0m",
    brand: "AFS Foils",
    category: "Wings & Parawings",
    price: "$2,000.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/AFSStream-front.png",
    disciplines: ["All-Round Wing", "Wave", "Freeride"],
    specs: "Versatile 5m Airframe • Lightweight PE Ripstop • Fast Pumping",
    description: "The everyday quiver-killer size for typical Western Australian sea breezes. High forward drive and instant pop.",
  },
  {
    id: "afs-stream-6",
    name: "AFS Stream Performance Wing 6.0m",
    brand: "AFS Foils",
    category: "Wings & Parawings",
    price: "$2,150.00",
    stockStatus: "Low Stock",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    image: "/stock/AFSStream-front.png",
    disciplines: ["Lightwind Wing", "Freeride"],
    specs: "Stiff UPE Frame • Maximum Low-End Power • Compact Wing Span",
    description: "Gets you flying in 10-14 knots. Compact wingtips prevent catching water during low-wind tacks and gybes.",
  },
  {
    id: "afs-stream-boom",
    name: "AFS Stream Carbon Clip-On Boom 98cm",
    brand: "AFS Foils",
    category: "Wings & Parawings",
    price: "$290.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/AFSStream-full.png",
    disciplines: ["Wingfoil Control", "Boom Grip"],
    specs: "100% Pre-Preg Carbon • Oval Ergonomic Profile • Quick Latch",
    description: "Compatible across all Stream and D-Lite sizes. Provides direct, rigid hand positioning and micro-adjustments in flight.",
  },
  {
    id: "afs-carbon-mast-82",
    name: "AFS High Modulus Carbon Mast 82cm",
    brand: "AFS Foils",
    category: "Masts & Fuselages",
    price: "$1,150.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Prone", "Surf Foil", "Wing"],
    specs: "82cm Height • French HM Carbon • Monobloc Mast Top Plate",
    description: "The benchmark for stiffness and direct control. Zero torsion when laying into aggressive turns on open-ocean faces.",
  },
  {
    id: "afs-carbon-mast-88",
    name: "AFS High Modulus Carbon Mast 88cm",
    brand: "AFS Foils",
    category: "Masts & Fuselages",
    price: "$1,250.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/afs-carbon-foil-setup.jpg",
    disciplines: ["Wingfoil Chop", "Downwind Swells", "Race"],
    specs: "88cm Height • Aerospace Carbon Layup • Hydrodynamic Profile",
    description: "Extra clearance for negotiating steep chop and heavy swells along the Western Australia coastline without breaching.",
  },
  {
    id: "afs-fuselage-long",
    name: "AFS Fuselage Carbon Long 710mm",
    brand: "AFS Foils",
    category: "Masts & Fuselages",
    price: "$280.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/FUSELAGECARBONLong.avif",
    disciplines: ["Glide", "Pitch Stability", "Downwind"],
    specs: "710mm Length • Solid French Carbon Composite • Titanium Thread Inserts",
    description: "Offers superior longitudinal pitch stability and effortless glide for high-speed cruising and downwind linking.",
  },
  {
    id: "afs-fuselage-short",
    name: "AFS Fuselage Carbon Short 660mm",
    brand: "AFS Foils",
    category: "Masts & Fuselages",
    price: "$270.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/stock/FUSELAGECARBONLong.avif",
    disciplines: ["Surf Carving", "Maneuvers", "Freestyle"],
    specs: "660mm Length • Ultra-Short Turning Radius • French Carbon",
    description: "Loosens up your foil setup for snappy pocket carves, tight cutbacks, and rapid direction changes in the surf.",
  },
  {
    id: "afs-mini-pump",
    name: "AFS High Pressure Mini Pump with Gauge",
    brand: "AFS Foils",
    category: "Accessories",
    price: "$70.00",
    originalPrice: "$104.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    image: "/stock/MINIPump.avif",
    disciplines: ["Travel", "Wing Inflation"],
    specs: "Dual Action • Integrated Barometer Gauge • Multiple Nozzle Adapters",
    description: "Compact high-volume pump designed for fast inflation of high-pressure UPE and Dacron leading edges up to 10+ PSI.",
  },
  {
    id: "manta-wireless-throttle",
    name: "Manta Wireless Remote & Magnetic Killswitch",
    brand: "Manta Foils",
    category: "Accessories",
    price: "$320.00",
    stockStatus: "In Stock (WA)",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    image: "/manta-evo.png",
    disciplines: ["Electric Assist Safety", "Spares"],
    specs: "Bluetooth Low Latency • IP68 Fully Waterproof • Magnetic Lanyard",
    description: "Original replacement wireless handheld throttle and safety leash kit for TakeOff Evo and Manta Backpack systems.",
  },
];

const categories = [
  "All Products",
  "Foil Sets",
  "Foil Assist",
  "Wings & Parawings",
  "Masts & Fuselages",
  "Accessories",
] as const;

const brands = ["All Brands", "AFS Foils", "Manta Foils"] as const;

const StockCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brands");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeItem, setActiveItem] = useState<StockItem | null>(null);

  const filteredItems = useMemo(() => {
    return staticInventory.filter((item) => {
      const matchCategory =
        selectedCategory === "All Products" || item.category === selectedCategory;
      const matchBrand =
        selectedBrand === "All Brands" || item.brand === selectedBrand;
      const matchSearch =
        searchQuery.trim() === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.disciplines.some((d) =>
          d.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      return matchCategory && matchBrand && matchSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  return (
    <section className="relative w-full py-12 lg:py-20 bg-[#F4F5F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16 flex flex-col gap-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4.5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models, sizes, disciplines..."
                className="h-11 w-full rounded-full border border-slate-200 bg-slate-50/70 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#E11D48] focus:bg-white focus:outline-hidden transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">
                Brand:
              </span>
              <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100 border border-slate-200">
                {brands.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setSelectedBrand(b)}
                    className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                      selectedBrand === b
                        ? "bg-[#E11D48] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-t border-slate-100 pt-4">
            <Filter className="size-4 text-slate-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100">
            <span>
              Showing {filteredItems.length} of {staticInventory.length} items in Western Australia
            </span>
            <span>All pricing in AUD (Inc. GST)</span>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center flex flex-col items-center justify-center gap-3">
            <p className="text-lg font-bold text-slate-800">
              No inventory matching your search.
            </p>
            <p className="text-sm text-slate-500 max-w-md">
              We frequently receive direct shipments of AFS and Manta hardware. Call Mark directly to check upcoming container stock.
            </p>
            <Button
              type="button"
              onClick={() => {
                setSelectedCategory("All Products");
                setSelectedBrand("All Brands");
                setSearchQuery("");
              }}
              variant="outline"
              className="rounded-full mt-2"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div className="flex flex-col gap-3.5">
                  <div className="relative w-full h-56 rounded-2xl flex items-center justify-center overflow-hidden">
                    <span
                      className={`absolute top-3 left-3 z-10 rounded-full px-2.5 py-0.5 text-[11px] font-bold border backdrop-blur-md ${item.badgeColor}`}
                    >
                      {item.stockStatus}
                    </span>

                    <span className="absolute top-3 right-3 z-10 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-extrabold uppercase text-slate-600 shadow-xs border border-slate-200 backdrop-blur-md">
                      {item.brand}
                    </span>

                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className={`${
                          item.image.endsWith(".jpg")
                            ? "object-cover"
                            : "object-contain"
                        } transition-transform duration-500 group-hover:scale-105 select-none`}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap gap-1">
                      {item.disciplines.slice(0, 3).map((disc) => (
                        <span
                          key={disc}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600"
                        >
                          {disc}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#E11D48] transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-500 font-medium line-clamp-1">
                      {item.specs}
                    </p>

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-lg font-black text-slate-900 tracking-tight">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs font-normal text-slate-400 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-slate-100 mt-4">
                  <Button
                    type="button"
                    onClick={() => setActiveItem(item)}
                    className="flex-1 h-10 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-bold cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire / Hold</span>
                    <ArrowUpRight className="size-3.5" />
                  </Button>

                  <Link
                    href="tel:0487042694"
                    aria-label={`Call about ${item.name}`}
                    className="flex size-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer border border-slate-200"
                  >
                    <Phone className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 flex flex-col gap-5">
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer transition-colors"
            >
              <X className="size-5" />
            </button>

            <div className="flex flex-col gap-1.5 pr-8">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                Reserve / Enquire In-Stock Item
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {activeItem.name}
              </h3>
              <p className="text-base font-extrabold text-[#E11D48]">
                {activeItem.price} AUD
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 border border-slate-200">
              <div className="relative size-20 rounded-xl bg-white p-2 border border-slate-200 shrink-0">
                <Image
                  src={activeItem.image}
                  alt={activeItem.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col gap-1 text-xs text-slate-600">
                <span className="font-bold text-slate-900">
                  Specs: {activeItem.specs}
                </span>
                <span className="text-emerald-700 font-semibold">
                  Status: {activeItem.stockStatus}
                </span>
                <span>{activeItem.description}</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs text-slate-500">
                Direct distribution through Mark Mawby. Call directly to arrange immediate collection in WA or fast courier across Australia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <Button
                  nativeButton={false}
                  render={<Link href="tel:0487042694" />}
                  className="h-11 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-bold cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Phone className="size-4" />
                  <span>Call: 0487 042 694</span>
                </Button>

                <Button
                  nativeButton={false}
                  variant="outline"
                  render={
                    <Link
                      href={`/contact?item=${encodeURIComponent(activeItem.name)}`}
                    />
                  }
                  className="h-11 rounded-full border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-bold cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default StockCatalog;
