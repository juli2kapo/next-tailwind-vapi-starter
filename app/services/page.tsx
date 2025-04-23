import "../globals.css";
import KnowMore from "@/components/wannaKnowMore";
import ServicesSection from "@/components/servicesSection";
import WhoBenefits from "@/components/whoBenefits";
import AllServices from "@/components/serviceSectionPage";

export default function Services() {
  return (
    <>
      <div className="bg-black">
        {/* <ServicesSection /> */}
        <AllServices />
        {/* <div className="py-12 bg-[#f0f0f0]">
          <WhoBenefits />
        </div> */}
        {/* <KnowMore /> */}
      </div>
    </>
  );
}