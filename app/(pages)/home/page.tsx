import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import HomeSlider from "@/components/home/HomeSlider";
import MantaAnnouncement from "@/components/home/MantaAnnouncement";
import WAStockSection from "@/components/home/WAStockSection";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <MantaAnnouncement />
      <HomeSlider />
      <WAStockSection />
      <Footer />
    </div>
  );
};

export default HomePage;
