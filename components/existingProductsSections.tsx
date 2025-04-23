"use client";
import { useLanguage } from "./componentProvider";
import Link from "next/link";

export default function ExistingProductsSection() {
  const { currentLanguage } = useLanguage();
  let title;
  let description;
  let product1Title;
  let product1Desc;
  let product1Link;
  let product2Title;
  let product2Desc;
  let product2Link;
  let learnMore;

  switch (currentLanguage) {
    case "EN":
      title = "Our Market-Ready Products";
      description = "Discover our proven AI-powered solutions already helping businesses worldwide";
      product1Title = "Conversational AI";
      product1Desc = "AI-powered virtual agents that handle complex conversations autonomously, automating up to 90% of daily interactions";
      product1Link = "Learn more about Conversational AI";
      product2Title = "Chatbot Development";
      product2Desc = "Intelligent chatbots that increase business productivity and maximize purchase opportunities across multiple channels";
      product2Link = "Learn more about Chatbot Development";
      learnMore = "Learn More";
      break;
    default:
      title = "Nuestros Productos Disponibles";
      description = "Descubre nuestras soluciones probadas impulsadas por IA que ya están ayudando a empresas en todo el mundo";
      product1Title = "IA Conversacional";
      product1Desc = "Agentes virtuales potenciados por IA que manejan conversaciones complejas de forma autónoma, automatizando hasta el 90% de las interacciones diarias";
      product1Link = "Conoce más sobre IA Conversacional";
      product2Title = "Desarrollo de Chatbots";
      product2Desc = "Chatbots inteligentes que aumentan la productividad empresarial y maximizan las oportunidades de compra en múltiples canales";
      product2Link = "Conoce más sobre Desarrollo de Chatbots";
      learnMore = "Conocer Más";
  }

  return (
    <section className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-12 mx-auto max-w-5xl">
          {/* Product 1 Card */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-md flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{product1Title}</h3>
            <p className="text-gray-700 mb-6 flex-grow">{product1Desc}</p>
            <Link
              href="/conversationai"
              className="inline-block bg-black text-white px-6 py-3 rounded font-bold text-center transition-colors duration-200 hover:bg-gray-800 mt-auto w-fit"
            >
              {learnMore}
            </Link>
          </div>

          {/* Product 2 Card */}
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 shadow-md flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{product2Title}</h3>
            <p className="text-gray-700 mb-6 flex-grow">{product2Desc}</p>
            <Link
              href="/chatbotgeneration"
              className="inline-block bg-black text-white px-6 py-3 rounded font-bold text-center transition-colors duration-200 hover:bg-gray-800 mt-auto w-fit"
            >
              {learnMore}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}