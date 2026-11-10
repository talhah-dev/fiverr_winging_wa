import { staticInventory, StockItem } from "./stockInventory";

export interface DashboardEquipmentItem extends StockItem {
  featuredOnHome: boolean;
  createdAt?: string;
  sku?: string;
}

const homeFeaturedIds = new Set([
  "mini-pump",
  "afs-silk-v2-carbon",
  "afs-stream",
  "fuselage-carbon-long",
  "manta-takeoff-evo-kit",
  "manta-backpack",
]);

export const initialDashboardEquipment: DashboardEquipmentItem[] =
  staticInventory.map((item, index) => ({
    ...item,
    featuredOnHome: homeFeaturedIds.has(item.id),
    sku: `WA-${item.brand.startsWith("AFS") ? "AFS" : "MNT"}-${(100 + index).toString()}`,
    createdAt: "2026-10-24",
  }));

export const equipmentCategories = [
  "All",
  "Foil Sets",
  "Wings & Parawings",
  "Masts & Fuselages",
  "Foil Assist",
  "Accessories",
] as const;

export const equipmentBrands = ["AFS Foils", "Manta Foils"] as const;

export const stockStatusOptions = [
  "In Stock (WA)",
  "Low Stock",
  "Demo Unit Available",
] as const;

