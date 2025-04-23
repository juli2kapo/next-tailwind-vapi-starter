
import CustomDevProductSection from "@/components/customDevProductSections";
import "../globals.css";
import CustomDevBenefits from "@/components/customDevBenefits";
import CustomDevProcess from "@/components/customDevProcess";
import CustomDevCTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <CustomDevProductSection />
      <CustomDevBenefits />
      <CustomDevProcess />
      {/* <CustomDevTestimonials /> */}
      <CustomDevCTA />
    </>
  );
}