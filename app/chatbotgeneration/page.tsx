import HowItWorksChatBot from "@/components/chatbotgeneration/howItWorks";
import ProductSectionChatbot from "@/components/chatbotgeneration/productSection";
import KnowMore from "@/components/wannaKnowMore";
import "@/components/chatbotGeneration.css";
export default function Home() {
  return (
    <>
      <div className="bg-black">
        <ProductSectionChatbot />
        <HowItWorksChatBot />
        <KnowMore />
      </div>
    </>
  );
}
