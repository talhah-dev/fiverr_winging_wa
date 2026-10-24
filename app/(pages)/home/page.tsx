import Footer from "@/components/Footer";
import BrandsSection from "@/components/home/BrandsSection";
import FollowUsSection from "@/components/home/FollowUsSection";
import Hero from "@/components/home/Hero";
import HomeSlider from "@/components/home/HomeSlider";
import WAStockSection from "@/components/home/WAStockSection";

const HomePage = () => {
  return (
    <div className="bg-[#4A505B] min-h-screen text-white">
      <Hero />
      <BrandsSection />
      <HomeSlider />
      <WAStockSection />
      <FollowUsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
