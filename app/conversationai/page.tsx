import HowItWorks from "@/components/howItWorksSections";
import ProductSection from "@/components/productSection";
import Testimonials from "@/components/testimonials";
import "../globals.css";
import KnowMore from "@/components/wannaKnowMore";
export default function Home() {
  return (
    <>
      <ProductSection />
      <HowItWorks />
      <Testimonials />
      <KnowMore />
    </>
  );
}
