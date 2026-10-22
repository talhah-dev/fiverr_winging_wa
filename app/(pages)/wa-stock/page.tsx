import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StockHero from "@/components/stock/StockHero";
import StockCatalog from "@/components/stock/StockCatalog";

export const metadata: Metadata = {
  title: "WA Stock Available | Winging WA | AFS Foils & Manta Foil Assist",
  description:
    "Direct inventory of genuine AFS Carbon Foils, Stream Wings, and Manta Foil Assist kits in Western Australia. Immediate dispatch or local pickup. Call 0487 042 694.",
};

const WAStockPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7]">
      <Navbar />
      <main className="flex-1">
        <StockHero />
        <StockCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default WAStockPage;
