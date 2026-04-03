
import Navbar from "@/components/client/Navbar";
import HeroSection from "@/components/client/HeroSection";
import RentalSection from "@/components/client/RentalSection";
export default function HomePage() {
  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <HeroSection />

      {/* Rental Section */}
      <RentalSection />

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 px-6 text-center">
        <h3 className="text-3xl font-bold text-orange-600 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-8">
          Have questions or want to book a room? Reach out to us today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:info@angkorliving.com"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Email Us
          </a>
          <a
            href="tel:+855123456789"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Call Us
          </a>
        </div>
      </section>
    </>
  );
}
