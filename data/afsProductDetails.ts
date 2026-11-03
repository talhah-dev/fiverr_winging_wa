export interface AfsProductDetail {
  id: string;
  name: string;
  category: "Foils" | "Wings";
  subCategory: string;
  badge?: string;
  badgeType?: "performance" | "accessibility" | "deal" | "feature";
  sizes?: string[];
  price: string;
  originalPrice?: string;
  image: string;
  url: string;
  actionText: "DISCOVER" | "GRAB THE DEAL";
  disciplines?: string[];
  headline: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
}

export const afsProductDetails: AfsProductDetail[] = [
  {
    "id": "silk-v2-front-wing",
    "name": "Silk V2 Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "MANEUVERABILITY",
    "badgeType": "performance",
    "sizes": [
      "650",
      "750",
      "850",
      "950",
      "1050",
      "1150"
    ],
    "price": "From 799,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/03/SILK_v2_650_0001.png",
    "url": "https://afs-foiling.com/product/silk-v2-front-wing",
    "actionText": "DISCOVER",
    "disciplines": [
      "Prone",
      "Wing foil",
      "Downwind"
    ],
    "headline": "Sharper. Stronger. Smoother. More Silk than ever.",
    "subtitle": "High-performance carbon hydrofoil front wing engineered for radical turns, pumping, and continuous glide.",
    "description": "The Silk V2 represents the ultimate evolution of carving and prone/wing performance. Designed by Laurent Borgna, it features a progressive dihedral curve, refined tips, and higher aspect ratio for extraordinary control at speed and seamless wave connection.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "650 / 750 / 850 / 950 / 1050 / 1150"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Wing foil · Downwind"
      }
    ]
  },
  {
    "id": "ultra-front-wing",
    "name": "Ultra Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "DOWNWIND",
    "badgeType": "performance",
    "price": "From 859,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/01/ULTRA600_3D_04.png",
    "url": "https://afs-foiling.com/product/ultra-front-wing",
    "actionText": "DISCOVER",
    "disciplines": [
      "Downwind",
      "Sup Foil",
      "Wing foil"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Ultra Front Wing represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Downwind · Sup Foil · Wing foil"
      }
    ]
  },
  {
    "id": "enduro-glt-front-wing",
    "name": "Enduro GLT Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "PORTANCE",
    "badgeType": "feature",
    "sizes": [
      "1600"
    ],
    "price": "From 949,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/05/glt_0002-1-scaled.png",
    "url": "https://afs-foiling.com/product/enduro-glt-front-wing",
    "actionText": "DISCOVER",
    "disciplines": [
      "Dockstart",
      "Pump",
      "Wing foil"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Enduro GLT Front Wing represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "1600"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Dockstart · Pump · Wing foil"
      }
    ]
  },
  {
    "id": "evo-ha-front-wing",
    "name": "Evo HA Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "ACCESSIBLE PERFORMANCE",
    "badgeType": "accessibility",
    "price": "From 739,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/05/HA1000_0001.png",
    "url": "https://afs-foiling.com/product/evo-ha-front-wing",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Prone",
      "Foil Assist"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Evo HA Front Wing represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Prone · Foil Assist"
      }
    ]
  },
  {
    "id": "enduro-front-wing",
    "name": "Enduro Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "ALL TERRAIN",
    "badgeType": "performance",
    "price": "From 759,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/07/Enduro1300_0001-4.png",
    "url": "https://afs-foiling.com/product/enduro-front-wing",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Downwind",
      "Freeride"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Enduro Front Wing represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Downwind · Freeride"
      }
    ]
  },
  {
    "id": "ultra-fuselink-foil",
    "name": "Ultra Fuselink Foil",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "HIGH PERFORMANCE",
    "badgeType": "performance",
    "price": "From 1419,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/06/Ultra750UHM75_0006.png",
    "url": "https://afs-foiling.com/product/ultra-fuselink-foil",
    "actionText": "DISCOVER",
    "disciplines": [
      "Downwind",
      "Prone",
      "Wing foil"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Ultra Fuselink Foil represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Downwind · Prone · Wing foil"
      }
    ]
  },
  {
    "id": "flyer-front-wing",
    "name": "Flyer Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "ACCESSIBILITY",
    "badgeType": "accessibility",
    "price": "From 429,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/Flyer-front-wing.png",
    "url": "https://afs-foiling.com/product/flyer-front-wing",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Sup Foil"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Flyer Front Wing represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Sup Foil"
      }
    ]
  },
  {
    "id": "evo-front-wing",
    "name": "Evo Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "ACCESSIBLE PERFORMANCE",
    "badgeType": "accessibility",
    "price": "From 499,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/02/EVO_Top_1650.png",
    "url": "https://afs-foiling.com/product/evo-front-wing",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Foil Assist"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Evo Front Wing represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Foil Assist"
      }
    ]
  },
  {
    "id": "pure-fuselink-foil",
    "name": "Pure Fuselink Foil",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "FREESTYLE",
    "badgeType": "performance",
    "price": "From 1259,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/04/Pure900_UHM80_0004.png",
    "url": "https://afs-foiling.com/product/pure-fuselink-foil",
    "actionText": "DISCOVER",
    "disciplines": [
      "Kitefoil",
      "Wakefoil",
      "Wing foil"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Pure Fuselink Foil represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Kitefoil · Wakefoil · Wing foil"
      }
    ]
  },
  {
    "id": "infinity-mast-manta-foils",
    "name": "Infinity Mast × Manta Foils",
    "category": "Foils",
    "subCategory": "Masts",
    "badge": "ELECTRIC ASSIST",
    "badgeType": "feature",
    "sizes": [
      "80 UHM"
    ],
    "price": "From 2149,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/07/UHM80_MantaFoil_0002.png",
    "url": "https://afs-foiling.com/product/infinity-foil-assist-mast-x-manta-foils",
    "actionText": "DISCOVER",
    "disciplines": [
      "Foil Assist",
      "Downwind",
      "Prone"
    ],
    "headline": "Ultra-Stiff Carbon Mast. Direct Transmission.",
    "subtitle": "Zero-torsion high modulus carbon mast for direct foot-to-foil connection.",
    "description": "The Infinity Mast × Manta Foils eliminates mast twist and flex, providing instantaneous feedback and maximum carving precision even in extreme surf or high-speed runs.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Masts"
      },
      {
        "label": "Available Sizes",
        "value": "80 UHM"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Foil Assist · Downwind · Prone"
      }
    ]
  },
  {
    "id": "infinity-mast-foil-drive",
    "name": "Infinity Mast × Foil Drive",
    "category": "Foils",
    "subCategory": "Masts",
    "badge": "ELECTRIC ASSIST",
    "badgeType": "feature",
    "sizes": [
      "80 UHM"
    ],
    "price": "From 2149,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/07/UHM80_FoilDrive_0001-.png",
    "url": "https://afs-foiling.com/product/infinity-foil-assist-x-foil-drive-mast",
    "actionText": "DISCOVER",
    "disciplines": [
      "Foil Assist",
      "Prone",
      "Downwind"
    ],
    "headline": "Ultra-Stiff Carbon Mast. Direct Transmission.",
    "subtitle": "Zero-torsion high modulus carbon mast for direct foot-to-foil connection.",
    "description": "The Infinity Mast × Foil Drive eliminates mast twist and flex, providing instantaneous feedback and maximum carving precision even in extreme surf or high-speed runs.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Masts"
      },
      {
        "label": "Available Sizes",
        "value": "80 UHM"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Foil Assist · Prone · Downwind"
      }
    ]
  },
  {
    "id": "uhm-skinny-carbon-mast",
    "name": "UHM Skinny Carbon Mast",
    "category": "Foils",
    "subCategory": "Masts",
    "badge": "ELITE",
    "badgeType": "performance",
    "price": "From 1699,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/02/Mast_75s_0002.png",
    "url": "https://afs-foiling.com/product/uhm-skinny-carbon-mast",
    "actionText": "DISCOVER",
    "disciplines": [
      "Prone",
      "Downwind",
      "Wing foil"
    ],
    "headline": "Ultra-Stiff Carbon Mast. Direct Transmission.",
    "subtitle": "Zero-torsion high modulus carbon mast for direct foot-to-foil connection.",
    "description": "The UHM Skinny Carbon Mast eliminates mast twist and flex, providing instantaneous feedback and maximum carving precision even in extreme surf or high-speed runs.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Masts"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Downwind · Wing foil"
      }
    ]
  },
  {
    "id": "hm-carbon-mast",
    "name": "HM Carbon Mast",
    "category": "Foils",
    "subCategory": "Masts",
    "badge": "PERFORMANCE",
    "badgeType": "performance",
    "sizes": [
      "80 HM",
      "85 HM"
    ],
    "price": "From 1099,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/mat-carbone-HM-foil-afs.png",
    "url": "https://afs-foiling.com/product/hm-carbon-mast",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Downwind",
      "Freeride"
    ],
    "headline": "Ultra-Stiff Carbon Mast. Direct Transmission.",
    "subtitle": "Zero-torsion high modulus carbon mast for direct foot-to-foil connection.",
    "description": "The HM Carbon Mast eliminates mast twist and flex, providing instantaneous feedback and maximum carving precision even in extreme surf or high-speed runs.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Masts"
      },
      {
        "label": "Available Sizes",
        "value": "80 HM / 85 HM"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Downwind · Freeride"
      }
    ]
  },
  {
    "id": "hr-carbon-mast",
    "name": "HR carbon mast",
    "category": "Foils",
    "subCategory": "Masts",
    "badge": "ACCESSIBILITY",
    "badgeType": "accessibility",
    "price": "From 449,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/mat-carbone-HR-foil-afs.png",
    "url": "https://afs-foiling.com/product/hr-carbon-mast",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Dockstart"
    ],
    "headline": "Ultra-Stiff Carbon Mast. Direct Transmission.",
    "subtitle": "Zero-torsion high modulus carbon mast for direct foot-to-foil connection.",
    "description": "The HR carbon mast eliminates mast twist and flex, providing instantaneous feedback and maximum carving precision even in extreme surf or high-speed runs.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Masts"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Dockstart"
      }
    ]
  },
  {
    "id": "uhm-carbon-mast",
    "name": "UHM Carbon Mast",
    "category": "Foils",
    "subCategory": "Masts",
    "badge": "ULTRA PERFORMANCE",
    "badgeType": "performance",
    "price": "From 1499,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/UHM75-1-1.png",
    "url": "https://afs-foiling.com/product/uhm-carbon-mast",
    "actionText": "DISCOVER",
    "disciplines": [
      "Downwind",
      "Wing foil",
      "Prone"
    ],
    "headline": "Ultra-Stiff Carbon Mast. Direct Transmission.",
    "subtitle": "Zero-torsion high modulus carbon mast for direct foot-to-foil connection.",
    "description": "The UHM Carbon Mast eliminates mast twist and flex, providing instantaneous feedback and maximum carving precision even in extreme surf or high-speed runs.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Masts"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Downwind · Wing foil · Prone"
      }
    ]
  },
  {
    "id": "u-surf-stabilizer",
    "name": "U Surf Stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "CARVE / GLIDE",
    "badgeType": "performance",
    "price": "From 249,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/03/USURF_150_0001.png",
    "url": "https://afs-foiling.com/product/u-surf-stabilizer",
    "actionText": "DISCOVER",
    "disciplines": [
      "Prone",
      "Wing foil"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The U Surf Stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Wing foil"
      }
    ]
  },
  {
    "id": "u-carve-stabilizer",
    "name": "U Carve Stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "CARVE / GLIDE",
    "badgeType": "performance",
    "price": "From 229,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/01/ucrave160_0001-2.png",
    "url": "https://afs-foiling.com/product/u-carve-stabilizer",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Prone"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The U Carve Stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Prone"
      }
    ]
  },
  {
    "id": "u-glide-stabilizer",
    "name": "U Glide Stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "U-GLIDE",
    "badgeType": "performance",
    "price": "From 269,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/04/UGlide_0002-1.png",
    "url": "https://afs-foiling.com/product/ultra-glide-stabilizer",
    "actionText": "DISCOVER",
    "disciplines": [
      "Downwind",
      "Dockstart"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The U Glide Stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Downwind · Dockstart"
      }
    ]
  },
  {
    "id": "u-cruise-stabilizer",
    "name": "U-Cruise Stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "ACCESSIBILITY",
    "badgeType": "accessibility",
    "price": "From 199,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/04/UCRUISE_245_0001.png",
    "url": "https://afs-foiling.com/product/cruiser-stabilizer",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Sup Foil"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The U-Cruise Stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Sup Foil"
      }
    ]
  },
  {
    "id": "aluminium-fuselage",
    "name": "Aluminium Fuselage",
    "category": "Foils",
    "subCategory": "Fuselages",
    "price": "199,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/05/Aluminium-fuselage_0001.png",
    "url": "https://afs-foiling.com/boutique/",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil"
    ],
    "headline": "Titanium & Precision Machined Fuselage.",
    "subtitle": "Ultra-rigid connection between mast, front wing, and stabilizer.",
    "description": "The Aluminium Fuselage offers rock-solid lockup and hydrodynamic minimalism, ensuring frictionless glide and zero wobble under extreme hydrodynamic loads.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Fuselages"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil"
      }
    ]
  },
  {
    "id": "fuselage-titane",
    "name": "Fuselage Titane",
    "category": "Foils",
    "subCategory": "Fuselages",
    "badge": "PERFORMANCE",
    "badgeType": "performance",
    "price": "879,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/05/Fuselage-Titanium_0001.png",
    "url": "https://afs-foiling.com/product/fuselage-titane",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Prone",
      "Downwind"
    ],
    "headline": "Titanium & Precision Machined Fuselage.",
    "subtitle": "Ultra-rigid connection between mast, front wing, and stabilizer.",
    "description": "The Fuselage Titane offers rock-solid lockup and hydrodynamic minimalism, ensuring frictionless glide and zero wobble under extreme hydrodynamic loads.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Fuselages"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Prone · Downwind"
      }
    ]
  },
  {
    "id": "fuselink-advanced-fuselage",
    "name": "Fuselink Advanced fuselage",
    "category": "Foils",
    "subCategory": "Fuselages",
    "price": "479,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/04/Fuselage_Advanced_0001_transparent.png",
    "url": "https://afs-foiling.com/boutique/",
    "actionText": "DISCOVER",
    "disciplines": [
      "Downwind",
      "Wing foil"
    ],
    "headline": "Titanium & Precision Machined Fuselage.",
    "subtitle": "Ultra-rigid connection between mast, front wing, and stabilizer.",
    "description": "The Fuselink Advanced fuselage offers rock-solid lockup and hydrodynamic minimalism, ensuring frictionless glide and zero wobble under extreme hydrodynamic loads.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Fuselages"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Downwind · Wing foil"
      }
    ]
  },
  {
    "id": "fuselage-switch",
    "name": "Fuselage Switch",
    "category": "Foils",
    "subCategory": "Fuselages",
    "price": "389,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/02/Evo-fuselage.png",
    "url": "https://afs-foiling.com/boutique/",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil"
    ],
    "headline": "Titanium & Precision Machined Fuselage.",
    "subtitle": "Ultra-rigid connection between mast, front wing, and stabilizer.",
    "description": "The Fuselage Switch offers rock-solid lockup and hydrodynamic minimalism, ensuring frictionless glide and zero wobble under extreme hydrodynamic loads.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Fuselages"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil"
      }
    ]
  },
  {
    "id": "fuselink-fuselage",
    "name": "Fuselink Fuselage",
    "category": "Foils",
    "subCategory": "Fuselages",
    "sizes": [
      "Short",
      "Standard"
    ],
    "price": "From 419,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/Evo-fuselage-1024x1024.png",
    "url": "https://afs-foiling.com/boutique/",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Prone"
    ],
    "headline": "Titanium & Precision Machined Fuselage.",
    "subtitle": "Ultra-rigid connection between mast, front wing, and stabilizer.",
    "description": "The Fuselink Fuselage offers rock-solid lockup and hydrodynamic minimalism, ensuring frictionless glide and zero wobble under extreme hydrodynamic loads.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Fuselages"
      },
      {
        "label": "Available Sizes",
        "value": "Short / Standard"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Prone"
      }
    ]
  },
  {
    "id": "silk-v2-foil-full-set",
    "name": "Silk V2 Foil Full Set",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "CARVING",
    "badgeType": "performance",
    "price": "From 3026,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/04/SIlk750V2UCarve130UHM85s_0001.png",
    "url": "https://afs-foiling.com/product/silk-v2-foil-full-set",
    "actionText": "DISCOVER",
    "disciplines": [
      "Prone",
      "Wing foil",
      "Downwind"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Silk V2 Foil Full Set provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Wing foil · Downwind"
      }
    ]
  },
  {
    "id": "foil-full-set-evo-ha",
    "name": "Foil Full set Evo HA",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "ACCESSIBLE PERFORMANCE",
    "badgeType": "accessibility",
    "price": "From 2545,99€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/09/UHM85EvoHA1000PureHA165fuselage-standard.png",
    "url": "https://afs-foiling.com/product/evo-ha-front-wing-copie",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Prone"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Foil Full set Evo HA provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Prone"
      }
    ]
  },
  {
    "id": "enduro-glt-foil-full-set",
    "name": "Enduro GLT Foil Full Set",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "PORTANCE",
    "badgeType": "feature",
    "price": "From 3136,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/10/Enduro1300_CF_UHM85_0006-1.png",
    "url": "https://afs-foiling.com/product/enduro-glt-foil-full-set",
    "actionText": "DISCOVER",
    "disciplines": [
      "Dockstart",
      "Pump",
      "Wing foil"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Enduro GLT Foil Full Set provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Dockstart · Pump · Wing foil"
      }
    ]
  },
  {
    "id": "enduro-foil-full-set",
    "name": "Enduro foil full set",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "ALL TERRAIN",
    "badgeType": "performance",
    "price": "From 2566,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/05/ENDURO___COMPLETE_FOIL_ENDURO.jpg",
    "url": "https://afs-foiling.com/product/enduro-foil-full-set",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Downwind"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Enduro foil full set provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Downwind"
      }
    ]
  },
  {
    "id": "ultra-fuselink-foil-full-set",
    "name": "Ultra Fuselink Foil Full Set",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "HIGH PERFORMANCE",
    "badgeType": "performance",
    "price": "From 3746,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/06/Ultra750UHM75_0006.png",
    "url": "https://afs-foiling.com/product/ultra-fuselink-foil-full-set",
    "actionText": "DISCOVER",
    "disciplines": [
      "Downwind",
      "Prone"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Ultra Fuselink Foil Full Set provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Downwind · Prone"
      }
    ]
  },
  {
    "id": "pure-fuselink-complete-foil",
    "name": "Pure Fuselink complete foil",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "FREESTYLE",
    "badgeType": "performance",
    "price": "From 3017,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/04/Pure900_UHM80_0004.png",
    "url": "https://afs-foiling.com/product/pure-fuselink-complete-foil",
    "actionText": "DISCOVER",
    "disciplines": [
      "Kitefoil",
      "Wakefoil"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Pure Fuselink complete foil provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Kitefoil · Wakefoil"
      }
    ]
  },
  {
    "id": "evo-foil-full-set",
    "name": "Evo Foil Full Set",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "ACCESSIBLE PERFORMANCE",
    "badgeType": "accessibility",
    "price": "From 2275,99€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/02/1_Evo1450HM80CruiserL_0024.png",
    "url": "https://afs-foiling.com/product/evo-foil-full-set",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Foil Assist"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Evo Foil Full Set provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Foil Assist"
      }
    ]
  },
  {
    "id": "flyer-full-set",
    "name": "Flyer Full Set",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "ACCESSIBILITY",
    "badgeType": "accessibility",
    "price": "From 1429,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/Full-Set-Flyer-V2.png",
    "url": "https://afs-foiling.com/product/flyer-full-set",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Sup Foil"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Flyer Full Set provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Sup Foil"
      }
    ]
  },
  {
    "id": "pure-race-560",
    "name": "Pure Race 560",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "RACE",
    "badgeType": "performance",
    "price": "From 1509,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/03/pure-560-race.png",
    "url": "https://afs-foiling.com/product/pure-race-560",
    "actionText": "DISCOVER",
    "disciplines": [
      "Kitefoil",
      "Wing foil"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Pure Race 560 provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Kitefoil · Wing foil"
      }
    ]
  },
  {
    "id": "stow-parawing",
    "name": "Stow Parawing",
    "category": "Wings",
    "subCategory": "Wings",
    "badge": "INNOVATION",
    "badgeType": "feature",
    "price": "From 769,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/06/Stow_0002-1.png",
    "url": "https://afs-foiling.com/boutique/",
    "actionText": "DISCOVER",
    "disciplines": [
      "Parawing",
      "Downwind"
    ],
    "headline": "Power, Control & Ultra-Light Handling.",
    "subtitle": "Leading-edge aerodynamic wing designed for expansive wind range and effortless flagging.",
    "description": "The Stow Parawing delivers intuitive balance, crisp canopy tension, and instant low-end pull with neutral drift when riding ocean swells.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Wings"
      },
      {
        "label": "Sub-category",
        "value": "Wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Parawing · Downwind"
      }
    ]
  },
  {
    "id": "stream-one",
    "name": "Stream One",
    "category": "Wings",
    "subCategory": "Wings",
    "badge": "ALL-ROUND",
    "badgeType": "accessibility",
    "price": "From 899,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2026/04/StreamOne_4.0_Blue_0003.png",
    "url": "https://afs-foiling.com/product/stream-one",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil"
    ],
    "headline": "Power, Control & Ultra-Light Handling.",
    "subtitle": "Leading-edge aerodynamic wing designed for expansive wind range and effortless flagging.",
    "description": "The Stream One delivers intuitive balance, crisp canopy tension, and instant low-end pull with neutral drift when riding ocean swells.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Wings"
      },
      {
        "label": "Sub-category",
        "value": "Wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil"
      }
    ]
  },
  {
    "id": "stream",
    "name": "Stream",
    "category": "Wings",
    "subCategory": "Wings",
    "badge": "VERSATILITY",
    "badgeType": "performance",
    "price": "From 1159,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/07/pp_red0003-scaled.png",
    "url": "https://afs-foiling.com/product/stream",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Freeride"
    ],
    "headline": "Power, Control & Ultra-Light Handling.",
    "subtitle": "Leading-edge aerodynamic wing designed for expansive wind range and effortless flagging.",
    "description": "The Stream delivers intuitive balance, crisp canopy tension, and instant low-end pull with neutral drift when riding ocean swells.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Wings"
      },
      {
        "label": "Sub-category",
        "value": "Wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Freeride"
      }
    ]
  },
  {
    "id": "d-lite",
    "name": "D-Lite Black",
    "category": "Wings",
    "subCategory": "Wings",
    "badge": "VERSATILITY",
    "badgeType": "performance",
    "price": "From 629,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/02/DLite_0001.png",
    "url": "https://afs-foiling.com/product/d-lite",
    "actionText": "DISCOVER",
    "disciplines": [
      "Wing foil",
      "Lightwind"
    ],
    "headline": "Power, Control & Ultra-Light Handling.",
    "subtitle": "Leading-edge aerodynamic wing designed for expansive wind range and effortless flagging.",
    "description": "The D-Lite Black delivers intuitive balance, crisp canopy tension, and instant low-end pull with neutral drift when riding ocean swells.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Wings"
      },
      {
        "label": "Sub-category",
        "value": "Wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Lightwind"
      }
    ]
  },
  {
    "id": "silk-foil-front-wing-deal",
    "name": "Silk Foil Front Wing",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "sizes": [
      "850",
      "1050"
    ],
    "price": "599,00€",
    "originalPrice": "799,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2025/07/Silk_1050_Demontable_0001-scaled.png",
    "url": "https://afs-foiling.com/product/silk-foil-front-wing",
    "actionText": "GRAB THE DEAL",
    "disciplines": [
      "Prone",
      "Wing foil"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Silk Foil Front Wing represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "850 / 1050"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Wing foil"
      }
    ]
  },
  {
    "id": "pure-ha-stabiliser-deal",
    "name": "Pure HA Stabiliser",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "price": "From 229,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/afs-pure-ha.png",
    "url": "https://afs-foiling.com/product/pure-ha-stabiliser",
    "actionText": "DISCOVER",
    "disciplines": [
      "Downwind",
      "Kitefoil"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The Pure HA Stabiliser optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Downwind · Kitefoil"
      }
    ]
  },
  {
    "id": "silk-ha-stabilizer-deal",
    "name": "Silk HA Stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "price": "From 249,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2024/02/Stab__Top_Silk_HA_38.png",
    "url": "https://afs-foiling.com/product/silk-ha-stabilizer",
    "actionText": "DISCOVER",
    "disciplines": [
      "Prone",
      "Wing foil"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The Silk HA Stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Wing foil"
      }
    ]
  },
  {
    "id": "performer-stabilizer-deal",
    "name": "Performer Stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "price": "69,00€",
    "originalPrice": "199,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2022/07/surfoil_stab_performer_160.png",
    "url": "https://afs-foiling.com/product/performer-stabilizer",
    "actionText": "GRAB THE DEAL",
    "disciplines": [
      "Wing foil",
      "Prone"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The Performer Stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil · Prone"
      }
    ]
  },
  {
    "id": "pure-ha-fuselink-foil-deal",
    "name": "Pure HA Fuselink Foil",
    "category": "Foils",
    "subCategory": "Front wings",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "price": "899,00€",
    "originalPrice": "1249,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/11/afs-pure-ha.png",
    "url": "https://afs-foiling.com/product/pure-ha-fuselink-foil",
    "actionText": "GRAB THE DEAL",
    "disciplines": [
      "Kitefoil",
      "Wakefoil"
    ],
    "headline": "Sharper. Stronger. Smoother. Ultra-efficient Glide.",
    "subtitle": "High-modulus carbon hydrofoil front wing engineered for radical turning, instant glide, and low-end lift.",
    "description": "The Pure HA Fuselink Foil represents high-performance foiling innovation. Built with high-modulus carbon fibre over a rigid core, it delivers immediate roll response, effortless pump recovery, and stability through turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Front wings"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Kitefoil · Wakefoil"
      }
    ]
  },
  {
    "id": "silk-stabilizer-deal",
    "name": "Silk stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "price": "159,00€",
    "originalPrice": "229,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/04/F_SILK_stab_142_0002.png",
    "url": "https://afs-foiling.com/product/silk-stabilizer",
    "actionText": "GRAB THE DEAL",
    "disciplines": [
      "Prone",
      "Wing foil"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The Silk stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Wing foil"
      }
    ]
  },
  {
    "id": "silk-foil-deal",
    "name": "Silk Foil",
    "category": "Foils",
    "subCategory": "Full sets",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "sizes": [
      "650",
      "850",
      "1050"
    ],
    "price": "899,00€",
    "originalPrice": "1289,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/04/Silk-650-surf-foil-e1681377114743.png",
    "url": "https://afs-foiling.com/product/silk-foil",
    "actionText": "GRAB THE DEAL",
    "disciplines": [
      "Prone",
      "Surf Foil"
    ],
    "headline": "Complete High Performance Hydrofoil Package.",
    "subtitle": "Balanced carbon setup including front wing, mast, fuselage, and stabilizer.",
    "description": "The Silk Foil provides a turnkey high-performance hydrofoil system. Rigorously tested to match wing lift with mast stiffness and stabilizer drag for seamless flight.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Full sets"
      },
      {
        "label": "Available Sizes",
        "value": "650 / 850 / 1050"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Prone · Surf Foil"
      }
    ]
  },
  {
    "id": "pure-stabilizer-deal",
    "name": "Pure stabilizer",
    "category": "Foils",
    "subCategory": "Stabilizers",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "price": "From 229,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2023/04/stab165_11.png",
    "url": "https://afs-foiling.com/product/pure-stabilizer",
    "actionText": "DISCOVER",
    "disciplines": [
      "Kitefoil"
    ],
    "headline": "Hydrodynamic Balance & Pitch Stability.",
    "subtitle": "Carbon rear stabilizer tailored for intuitive carving and glide maintenance.",
    "description": "The Pure stabilizer optimises the balance between pitch control and rolling ease, reducing drag while retaining high-speed composure through chops and turns.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Stabilizers"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Kitefoil"
      }
    ]
  },
  {
    "id": "performer-carbon-mast-deal",
    "name": "Performer carbon mast",
    "category": "Foils",
    "subCategory": "Masts",
    "badge": "END OF LINE",
    "badgeType": "deal",
    "price": "549,50€",
    "originalPrice": "954,00€",
    "image": "https://api.afs-foiling.com/wp-content/uploads/2022/07/afs-mat-performer-produit_Plan-de-travail-1-min.png",
    "url": "https://afs-foiling.com/product/performer-carbon-mast",
    "actionText": "GRAB THE DEAL",
    "disciplines": [
      "Wing foil"
    ],
    "headline": "Ultra-Stiff Carbon Mast. Direct Transmission.",
    "subtitle": "Zero-torsion high modulus carbon mast for direct foot-to-foil connection.",
    "description": "The Performer carbon mast eliminates mast twist and flex, providing instantaneous feedback and maximum carving precision even in extreme surf or high-speed runs.",
    "features": [
      "100% Pre-preg High Modulus Carbon construction for unmatched stiffness-to-weight ratio",
      "Hydrodynamic profile refined in computer simulations and real-world wave testing",
      "Corrosion-resistant titanium and stainless assembly hardware",
      "Ergonomic modular interchangeability across the complete AFS ecosystem"
    ],
    "specs": [
      {
        "label": "Category",
        "value": "Foils"
      },
      {
        "label": "Sub-category",
        "value": "Masts"
      },
      {
        "label": "Available Sizes",
        "value": "Standard Size"
      },
      {
        "label": "Construction",
        "value": "High Modulus (HM) Carbon Fibre & High Density Core"
      },
      {
        "label": "Compatibility",
        "value": "AFS Modular System (Fuselink & Switch compatible)"
      },
      {
        "label": "Country of Origin",
        "value": "Designed & Crafted in Brittany, France (Foil and Co)"
      },
      {
        "label": "Dealer Warranty",
        "value": "Full Manufacturer Warranty + WA Local Support by Mark Mawby"
      },
      {
        "label": "Disciplines",
        "value": "Wing foil"
      }
    ]
  }
];

export const getAfsProductDetail = (id: string): AfsProductDetail | undefined => {
  return afsProductDetails.find((p) => p.id === id);
};
