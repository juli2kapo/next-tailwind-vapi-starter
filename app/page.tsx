import ServicesSection from "@/components/servicesSection";
import HeroSection from "@/components/heroSection";
import PrivacySection from "@/components/privacySection";
import DevelopmentFocusSection from "@/components/developmentFocusSections";
import ExistingProductsSection from "@/components/existingProductsSections";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <DevelopmentFocusSection />
        <ExistingProductsSection />
        <PrivacySection />
      </main>
    </>
  );
}