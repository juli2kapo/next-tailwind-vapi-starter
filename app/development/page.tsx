import KnowMore from "@/components/wannaKnowMore";
import "../globals.css"; // Assuming you want global styles
import CustomDevProductSection from "@/components/developmentProductSections";
import CustomDevHowItWorks from "@/components/developmentHowItWorks";
import WhyChooseUs from "@/components/whyPartner";
import TechnologyStack from "@/components/stackSection";
import CustomDevCTA from "@/components/CTAComponent";

export default function CustomDevelopmentPage() {
    return (
      <>
        <CustomDevProductSection />
        <CustomDevHowItWorks />
        <WhyChooseUs />          {/* Added Section */}
        <TechnologyStack />      {/* Added Section */}
        <CustomDevCTA />         {/* Added Section */}
        {/* <KnowMore /> */}
      </>
    );
  }