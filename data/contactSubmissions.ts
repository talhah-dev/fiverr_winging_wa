export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  interest: string;
  category: "foils" | "manta" | "demo" | "stock" | "other";
  message: string;
  submittedAt: string;
  status: "new" | "contacted" | "demo-booked" | "closed";
  notes?: string;
}

export const initialContactSubmissions: ContactSubmission[] = [
  {
    id: "sub-101",
    name: "Simon Turner",
    email: "simon.turner@perthwind.com.au",
    phone: "0412 884 192",
    location: "Point Walter, WA",
    interest: "Manta TakeOff Evo Assist Kit",
    category: "manta",
    message: "Hi Mark, looking to get the TakeOff Evo with the 850Wh battery configuration. I weigh 86kg and wing mostly on the Swan River and Woodman Point. Can we arrange a demo this weekend?",
    submittedAt: "Today, 10:42 AM",
    status: "new",
    notes: "Requested Swan River demo on Saturday morning.",
  },
  {
    id: "sub-102",
    name: "Dave Cooper",
    email: "dave.cooper@fremantlemarina.com",
    phone: "0429 551 038",
    location: "Fremantle, WA",
    interest: "AFS Carbon Foils (Silk, Enduro, Flyer)",
    category: "foils",
    message: "Hi Mark, I am upgrading my downwind and light wind setup. Interested in the Silk v2 850 or 950 front wing with the 75cm carbon mast. Do you have stock available in Perth to inspect?",
    submittedAt: "Today, 08:15 AM",
    status: "new",
    notes: "Interested in Silk v2 850 in-stock stock check.",
  },
  {
    id: "sub-103",
    name: "Chloe Bennett",
    email: "chloe.b@margaretriverwinery.com",
    phone: "0438 901 442",
    location: "Margaret River, WA",
    interest: "Arrange a Demo / Viewing",
    category: "demo",
    message: "G'day Mark! We are down in Margaret River and want to try out the Manta assist system for prone foiling small beach breaks. Are you coming down south anytime in the next fortnight?",
    submittedAt: "Yesterday, 4:30 PM",
    status: "contacted",
    notes: "Spoke via WhatsApp, planned demo during South West trip next week.",
  },
  {
    id: "sub-104",
    name: "Liam O'Connor",
    email: "liam.oc@sorrento.net.au",
    phone: "0401 773 219",
    location: "Sorrento, WA",
    interest: "Manta Foil Assist Backpack",
    category: "manta",
    message: "Hi there, does the Manta backpack hold the 850Wh battery and mast cable neatly for transport? Can I pick one up directly from Melville or have it shipped to Sorrento?",
    submittedAt: "Yesterday, 1:12 PM",
    status: "contacted",
    notes: "Advised local pickup from Melville warehouse or courier delivery.",
  },
  {
    id: "sub-105",
    name: "Brett Macleod",
    email: "brett.macleod@geraldtonfish.com",
    phone: "0488 230 914",
    location: "Geraldton, WA",
    interest: "AFS Stream Wings & Parawings",
    category: "foils",
    message: "Interested in the Stream 5.5m wing for strong Geraldton seabreezes. Looking for advice on boom setup vs soft handles and canopy durability.",
    submittedAt: "Nov 8, 2026, 3:20 PM",
    status: "demo-booked",
    notes: "Demo booked for Nov 14 Geraldton clinic.",
  },
  {
    id: "sub-106",
    name: "Jason Van Der Meer",
    email: "jason.vdm@safetybaysurf.com",
    phone: "0419 662 108",
    location: "Safety Bay, WA",
    interest: "WA In-Stock Inventory",
    category: "stock",
    message: "Hi Mark, I saw on the WA Stock page that you have an AFS Silk v2 750 with HM 82 carbon mast ready for immediate collection. Can you confirm if still available and payment options?",
    submittedAt: "Nov 7, 2026, 11:05 AM",
    status: "closed",
    notes: "Collected in person, paid via direct deposit. Handover complete.",
  },
  {
    id: "sub-107",
    name: "Michelle Zhang",
    email: "m.zhang@optusnet.com.au",
    phone: "0433 445 119",
    location: "South Perth, WA",
    interest: "Arrange a Demo / Viewing",
    category: "demo",
    message: "Hi Mark, looking for beginner-to-intermediate assist setup for wingfoiling flat water on Melville water. Would love to try the TakeOff Evo before committing.",
    submittedAt: "Nov 6, 2026, 6:18 PM",
    status: "demo-booked",
    notes: "Booked demo session for Saturday 9am at Melville Beach.",
  },
  {
    id: "sub-108",
    name: "Tom Henderson",
    email: "tom.h@cottesloe.org.au",
    phone: "0411 992 384",
    location: "Cottesloe, WA",
    interest: "Other Questions",
    category: "other",
    message: "Do you offer mast adapter plates for Tuttle box boards to Manta foil assist motors, or only standard twin US track mounts?",
    submittedAt: "Nov 5, 2026, 2:50 PM",
    status: "contacted",
    notes: "Answered technical compatibility question, advised US track adapter plate.",
  },
];

