"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MantaHero from "@/components/manta/MantaHero";

const MantaPageContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <MantaHero />
      </main>
      <Footer />
    </div>
  );
};

export default MantaPageContent;

