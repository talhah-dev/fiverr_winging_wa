import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MantaFoils2Content from "@/components/manta-foils-2/MantaFoils2Content";

export const metadata: Metadata = {
  title: "Manta TakeOff Evo | Winging WA | Western Australia Dealer",
  description:
    "Explore the Manta TakeOff Evo foil assist system with ultra-light direct drive motor, quick-swap airline compliant batteries, and drag-free folding propeller.",
};

const MantaFoils2Page = () => {
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

export default MantaFoils2Page;
