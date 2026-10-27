"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AfsHero from "@/components/afs/AfsHero";
import AfsDisciplineSlider from "@/components/afs/AfsDisciplineSlider";
import AfsCatalog from "@/components/afs/AfsCatalog";

const AfsPageContent = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string | null>(
    null,
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#4A505B] text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <AfsHero />
        <AfsDisciplineSlider
          selectedDiscipline={selectedDiscipline}
          onSelectDiscipline={setSelectedDiscipline}
        />
        <AfsCatalog
          selectedDiscipline={selectedDiscipline}
          onClearDiscipline={() => setSelectedDiscipline(null)}
        />
      </main>
      <Footer />
    </div>
  );
};

export default AfsPageContent;
