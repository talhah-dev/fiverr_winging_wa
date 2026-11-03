import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MantaBackpackContent from "@/components/manta/MantaBackpackContent";

export const metadata: Metadata = {
  title: "MANTA PACKPACK | Foil Assist Universal Backpack | Winging WA",
  description:
    "Universal backpack for foil assist kits. Relocate your foil assist off the board and onto your back for less weight and more agility. Western Australia dealer Winging WA.",
};

const TakeoffBackpackPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-clip">
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-28">
        <MantaBackpackContent />
      </main>
      <Footer />
    </div>
  );
};

export default TakeoffBackpackPage;

