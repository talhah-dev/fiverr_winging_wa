import type { Metadata } from "next";
import HowItWorksPageContent from "@/components/manta/how-it-works/HowItWorksPageContent";

export const metadata: Metadata = {
  title: "How It Works | Manta TakeOff Evo Foil Assist | Winging WA",
  description:
    "Follow our 3-step setup process to choose the ideal battery, charger, and folding propeller for your Manta TakeOff Evo foil assist system.",
};

const MantaFoilsHowItWorksPage = () => {
  return <HowItWorksPageContent />;
};

export default MantaFoilsHowItWorksPage;

