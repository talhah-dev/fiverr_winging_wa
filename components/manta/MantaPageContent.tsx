"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MantaHero from "@/components/manta/MantaHero";
import MantaDisciplines from "@/components/manta/MantaDisciplines";
import MantaAnnouncement from "@/components/manta/MantaAnnouncement";
import MantaFAQ from "@/components/manta/MantaFAQ";

const MantaPageContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <MantaHero />
        <MantaDisciplines />
        <MantaAnnouncement />
        <MantaFAQ />  
      </main>
      <Footer />
    </div>
  );
};

export default MantaPageContent;
