import Footer from "@/components/Footer";
import AFSSection from "@/components/home/AFSSection";
import FollowUsSection from "@/components/home/FollowUsSection";
import Hero from "@/components/home/Hero";
import HomeSlider from "@/components/home/HomeSlider";
import MantaAnnouncement from "@/components/home/MantaAnnouncement";
import WAStockSection from "@/components/home/WAStockSection";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <AFSSection />
      <MantaAnnouncement />
      <HomeSlider />
      <WAStockSection />
      <FollowUsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
