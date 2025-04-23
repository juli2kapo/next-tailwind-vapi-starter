"use client";
import { useLanguage } from "./componentProvider";
import Link from "next/link";

export default function CustomAISection() {
  const { currentLanguage } = useLanguage();
  let title;
  let description;
  let service1Title;
  let service1Desc;
  let service2Title;
  let service2Desc;
  let service3Title;
  let service3Desc;
  let service4Title;
  let service4Desc;
  let ctaButton;

  switch (currentLanguage) {
    case "EN":
      title = "Advanced Technologies for Enterprise";
      description = "We offer development services, supported by AI and tailored to your unique requirements";
      service1Title = "Custom AI Development";
      service1Desc = "Solutions built from scratch to address your specific business challenges";
      service2Title = "Systems Integration";
      service2Desc = "Seamless incorporation of AI technologies into your existing infrastructure";
      service3Title = "Ongoing Support";
      service3Desc = "Continuous optimization and evolution of your solutions";
      service4Title = "AI Consulting";
      service4Desc = "Expert guidance on implementing and using AI to maximize your competitive edge";
      ctaButton = "Contact Us";
      break;
    default:
      title = "Tecnologías Avanzadas para Empresas";
      description = "Ofrecemos servicios de desarrollo, con apoyo de IA y especializados en tus requerimientos únicos";
      service1Title = "Desarrollo a Medida";
      service1Desc = "Soluciones construidas desde cero para abordar tus desafíos empresariales específicos";
      service2Title = "Integración de Sistemas";
      service2Desc = "Incorporación perfecta de tecnologías de IA en tu infraestructura existente";
      service3Title = "Soporte Continuo";
      service3Desc = "Optimización y evolución continua de tus soluciones";
      service4Title = "Consultoría en Inteligencia Artificial";
      service4Desc = "Orientación experta en la implementación y uso de IA para maximizar tu ventaja competitiva";
      ctaButton = "Contactanos";
  }

  return (
    <section className="section">
      <div id="w-node-custom-ai-section" className="flex flex-col p-8 lg:px-[15vw] bg-white">
        <div
          id="w-node-custom-ai-section-content"
          className="w-layout-cell flex justify-center items-center m-auto text-center self-center"
        >
          <div className="mb-[1vh] m-auto">
            <h1 className="h1 mainh1 text-black">
              <span className="text-[#9B5DE5] text-[32px] leading-[3]">
                {title}
              </span>
            </h1>
          </div>
          <div>
            <p className="text-black text-[17px] leading-4 lg:leading-8 mb-8">
              {description}
            </p>
          </div>
        </div>

        {/* Grid for service titles with icons */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-[4vh] mb-[2vh] justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/uAx9MVb.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-black text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service1Title}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/uAx9MVb.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-black text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service2Title}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/uAx9MVb.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-black text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service3Title}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/uAx9MVb.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-black text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service4Title}
            </div>
          </div>
        </div>

        {/* Grid for service descriptions */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mb-[6vh] justify-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-black text-[16px] px-2">
              {service1Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-black text-[16px] px-2">
              {service2Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-black text-[16px] px-2">
              {service3Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-black text-[16px] px-2">
              {service4Desc}
            </p>
          </div>
        </div>

        <div className="mx-auto my-[4vh]">
          <Link
            href="/contact"
            className="nav-link contact-button !bg-black !text-white !px-[7vw] !py-4"
          >
            {ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}