import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VerifiedBy from "@/components/VerifiedBy";
import OurProducts from "@/components/OurProducts";
import WhyTrust from "@/components/WhyTrust";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CustomerReview from "@/components/CustomerReview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <WhyTrust />
        <OurProducts />

        <Testimonials />
        <VerifiedBy />
        <FAQSection />
        <CustomerReview />
      </main>
      <Footer />
    </div>
  );
}
