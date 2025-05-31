import ServicesSection from "@/components/servicesSection";
import HeroSection from "@/components/heroSection";
import PrivacySection from "@/components/privacySection";
import ReferralSection from "@/components/referralSection";
import CustomAISection from "@/components/customAISection";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <CustomAISection />
        <PrivacySection />
        {/* <ReferralSection /> test commit */}
      </main>
    </>
  );
}