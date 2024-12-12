import HowItWorks from "@/components/howItWorksSections";
import ProductSection from "@/components/productSection";
import Testimonials from "@/components/testimonials";
import "../globals.css";
import KnowMore from "@/components/wannaKnowMore";
import WhoBenefits from "@/components/whoBenefits";
import ReferralSection from "@/components/referralSection";
import KnowMoreMail from "@/components/wannaKnowMoreMail";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <ReferralSection />
      <div className="py-10 pb-16">
        <KnowMoreMail />
      </div>
    </div>
  );
}
