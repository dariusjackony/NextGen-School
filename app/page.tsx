import Image from "next/image";
import Hero from "./components/home/Hero"
import WelcomeSection from "./components/home/WelcomeSection"
import WhoWeAre from "./components/home/WhoWeAre";
import CurriculumOverview from "./components/home/CurriculumOverview";
import Updates from "./components/home/Updates";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/layout/Footer"
import Newsletter from "./components/home/Newsletter"
export default function Home() {
  return (
    <>
    <Hero />
    <WelcomeSection />
    <WhoWeAre />
    <CurriculumOverview />
    <Updates />
    <Testimonials />
    <Newsletter />
    <Footer />
    </>
  );
}
