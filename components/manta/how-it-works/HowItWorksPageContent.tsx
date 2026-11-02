"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksInteractive from "@/components/manta/how-it-works/HowItWorksInteractive";

const HowItWorksPageContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <HowItWorksInteractive />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPageContent;
