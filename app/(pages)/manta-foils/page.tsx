import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MantaFoils2Content from "@/components/manta-foils-2/MantaFoils2Content";

export const metadata: Metadata = {
  title: "Manta TakeOff Evo Foil Assist | Winging WA | Western Australia Dealer",
  description:
    "Official Western Australian dealer for Manta TakeOff Evo Foil Assist. Direct drive maintenance-free electric hydrofoil motor and airline-compliant battery packs. Call Mark on 0487 042 694.",
};

const MantaFoilsPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-clip">
      <Navbar />
      <main className="flex-1 pt-24 sm:pt-28">
        <MantaFoils2Content />
      </main>
      <Footer />
    </div>
  );
};

export default MantaFoilsPage;
