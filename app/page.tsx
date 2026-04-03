

import Navbar from "@/components/client/Navbar";
import HeroSection from "@/components/client/HeroSection";
import RentalSection from "@/components/client/RentalSection";
import Footer from "@/components/client/Footer";
import RatesSection from "@/components/client/RatesSection";
export default function HomePage() {
  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <HeroSection />
      <RatesSection/>
      {/* Rental Section */}
      <RentalSection />

      <Footer/>
    </>
  );
}
