import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import HomeSlider from "@/components/home/HomeSlider";
import MantaAnnouncement from "@/components/home/MantaAnnouncement";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <MantaAnnouncement />
      <HomeSlider />
      <Footer />
    </div>
  );
};

export default HomePage;
