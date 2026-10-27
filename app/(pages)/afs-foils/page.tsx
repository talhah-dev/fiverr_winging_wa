import type { Metadata } from "next";
import AfsPageContent from "@/components/afs/AfsPageContent";

export const metadata: Metadata = {
  title: "AFS Foils Collection | Winging WA | Australian Distributor",
  description:
    "Official Australian distributor for genuine AFS Foils from Brittany, France. Explore High Modulus carbon front wings, masts, stabilizers, fuselages, boards, and wings.",
};

const AfsFoilsPage = () => {
  return <AfsPageContent />;
};

export default AfsFoilsPage;
