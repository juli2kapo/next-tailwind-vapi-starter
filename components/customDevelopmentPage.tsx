import Link from "next/link";
import "../globals.css";

export default function CustomDevelopmentPage() {
  return (
    <section className="bg-black min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <img src="https://i.imgur.com/yHSIico.png" alt="star" className="w-[5vh] mr-4" />
          <h1 className="text-[36px] font-bold uppercase text-white">Custom Development</h1>
        </div>
        <p className="text-gray-300 text-[20px] mb-10 max-w-3xl">
          We build tailor-made solutions for your business, whether you need automation, integrations, data management, or advanced AI features. Our priority is to help your business grow with technology that fits your unique needs.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-[#181818] rounded-xl p-8 border border-white hover:border-gray-400 transition-all shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="w-[3vh] mr-3" />
              <h2 className="text-[24px] font-bold text-white uppercase tracking-wide">Business Automation</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Streamline repetitive tasks, reduce errors, and save time with custom automation solutions.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="text-[16px] text-white">• Data entry automation</span>
              </li>
              <li className="flex items-center">
                <span className="text-[16px] text-white">• Workflow optimization</span>
              </li>
              <li className="flex items-center">
                <span className="text-[16px] text-white">• Integration with your existing tools</span>
              </li>
            </ul>
          </div>
          <div className="bg-[#181818] rounded-xl p-8 border border-white hover:border-gray-400 transition-all shadow-lg flex flex-col">
            <div className="flex items-center mb-4">
              <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="w-[3vh] mr-3" />
              <h2 className="text-[24px] font-bold text-white uppercase tracking-wide">AI Integration (Optional)</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Enhance your solution with artificial intelligence—only if it fits your goals.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <span className="text-[16px] text-white">• Smart chatbots & assistants</span>
              </li>
              <li className="flex items-center">
                <span className="text-[16px] text-white">• Predictive analytics</span>
              </li>
              <li className="flex items-center">
                <span className="text-[16px] text-white">• Natural language processing</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#181818] rounded-xl p-8 border border-white hover:border-gray-400 transition-all shadow-lg mb-12">
          <div className="flex items-center mb-4">
            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="w-[3vh] mr-3" />
            <h2 className="text-[24px] font-bold text-white uppercase tracking-wide">Why Choose Us?</h2>
          </div>
          <ul className="space-y-2">
            <li className="text-[16px] text-white">• Solutions designed for your business, not generic software</li>
            <li className="text-[16px] text-white">• Security and compliance as a priority</li>
            <li className="text-[16px] text-white">• Ongoing support and partnership</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center bg-black text-white font-bold py-3 px-8 rounded uppercase border border-white hover:bg-white hover:text-black transition-colors text-[16px]"
            style={{ letterSpacing: "1px" }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}