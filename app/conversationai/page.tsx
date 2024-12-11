import HowItWorks from "@/components/howItWorksSections";
import ProductSection from "@/components/productSection";
import Testimonials from "@/components/testimonials";
import "../globals.css";
import KnowMore from "@/components/wannaKnowMore";
import WhoBenefits from "@/components/whoBenefits";
export default function Home() {
  return (
    <>
      <ProductSection />
      <WhoBenefits />
      <HowItWorks />
      <Testimonials />
      <KnowMore />
    </>
  );
}
