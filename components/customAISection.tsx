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
      title = "Revolutionize Your Business with AI";
      description = "Unlock unprecedented growth with cutting-edge AI solutions tailored precisely to your industry challenges and business goals";
      service1Title = "Custom AI Development";
      service1Desc = "Bespoke solutions engineered to solve your unique business challenges and create powerful competitive advantages";
      service2Title = "Systems Integration";
      service2Desc = "Seamless incorporation of AI technologies into your existing infrastructure with zero business disruption";
      service3Title = "Elite Support Services";
      service3Desc = "24/7 optimization and evolution of your solutions by our dedicated team of AI specialists";
      service4Title = "Strategic AI Consulting";
      service4Desc = "Data-driven insights and expert guidance to maximize ROI and accelerate business transformation";
      ctaButton = "Transform Your Business Now";
      break;
    default:
      title = "Revoluciona Tu Empresa con IA";
      description = "Desbloquea un crecimiento sin precedentes con soluciones de IA de vanguardia adaptadas con precisión a los desafíos de tu industria y objetivos de negocio";
      service1Title = "Desarrollo IA a Medida";
      service1Desc = "Soluciones diseñadas para resolver tus desafíos empresariales únicos y crear poderosas ventajas competitivas";
      service2Title = "Integración de Sistemas";
      service2Desc = "Incorporación perfecta de tecnologías de IA en tu infraestructura existente sin interrumpir la operación";
      service3Title = "Soporte Élite";
      service3Desc = "Optimización y evolución 24/7 de tus soluciones por nuestro equipo dedicado de especialistas en IA";
      service4Title = "Consultoría Estratégica";
      service4Desc = "Insights basados en datos y guía experta para maximizar el ROI y acelerar la transformación empresarial";
      ctaButton = "Transforma Tu Empresa Ahora";
  }

  return (
    <section className="section">
      <div id="w-node-custom-ai-section" className="flex flex-col p-8 lg:px-[15vw] bg-black">
        <div
          id="w-node-custom-ai-section-content"
          className="w-layout-cell flex justify-center items-center m-auto text-center self-center"
        >
          <div className="mb-[1vh] m-auto">
            <h1 className="h1 mainh1 text-white">
              <span className="text-white text-[32px] leading-[3]">
                {title}
              </span>
            </h1>
          </div>
          <div>
            <p className="text-white text-[17px] leading-4 lg:leading-8 mb-8">
              {description}
            </p>
          </div>
        </div>

        {/* Grid for service titles with icons */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-[4vh] mb-[2vh] justify-center">
          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/yHSIico.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-white text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service1Title}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/yHSIico.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-white text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service2Title}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/yHSIico.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-white text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service3Title}
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="h-[45px] flex items-center justify-center mb-[1vh]">
              <img
                src="https://i.imgur.com/yHSIico.png"
                loading="lazy"
                alt="star"
                width="45"
              />
            </div>
            <div className="text-white text-[22px] font-semibold py-2 flex items-center h-[60px] justify-center">
              {service4Title}
            </div>
          </div>
        </div>

        {/* Grid for service descriptions */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mb-[6vh] justify-center">
          <div className="flex flex-col items-center text-center">
            <p className="text-white text-[16px] px-2">
              {service1Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-white text-[16px] px-2">
              {service2Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-white text-[16px] px-2">
              {service3Desc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="text-white text-[16px] px-2">
              {service4Desc}
            </p>
          </div>
        </div>

        <div className="mx-auto my-[4vh]">
          <Link
            href="/contact"
            className="nav-link contact-button !bg-white !text-black !px-[7vw] !py-4"
          >
            {ctaButton}
          </Link>
        </div>
      </div>
    </section>
  );
}