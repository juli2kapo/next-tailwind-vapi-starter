"use client";
import { useLanguage } from "./componentProvider";

export default function DevelopmentFocusSection() {
  const { currentLanguage } = useLanguage();
  let title;
  let description;
  let service1Title;
  let service1Desc;
  let service2Title;
  let service2Desc;
  let service3Title;
  let service3Desc;

  switch (currentLanguage) {
    case "EN":
      title = "Custom IT Development";
      description = "We build tailored IT solutions powered by AI to transform your business processes and drive innovation";
      service1Title = "Software Development";
      service1Desc = "Custom software solutions built to address your specific business needs and challenges";
      service2Title = "AI Integration";
      service2Desc = "Leveraging artificial intelligence to enhance your existing systems and develop smarter applications";
      service3Title = "Digital Transformation";
      service3Desc = "Complete technology overhaul strategies to modernize your business for the digital age";
      break;
    default:
      title = "Desarrollo de IT Personalizado";
      description = "Construimos soluciones IT a medida potenciadas por IA para transformar tus procesos de negocio e impulsar la innovación";
      service1Title = "Desarrollo de Software";
      service1Desc = "Soluciones de software a medida construidas para abordar tus necesidades y desafíos empresariales específicos";
      service2Title = "Integración de IA";
      service2Desc = "Aprovechamos la inteligencia artificial para mejorar tus sistemas existentes y desarrollar aplicaciones más inteligentes";
      service3Title = "Transformación Digital";
      service3Desc = "Estrategias completas de renovación tecnológica para modernizar tu negocio en la era digital";
  }

  return (
    <section className="section bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">{title}</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">{description}</p>
        </div>
        
        {/* Grid for Services */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Service 1 Card */}
          <div className="bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center transition duration-300 ease-in-out hover:bg-gray-800">
            {/* Placeholder for an icon, consider using an img tag like in other components */}
            {/* <img src="path/to/your/icon1.png" alt="Software Icon" className="w-12 h-12 mb-4" /> */}
            <h3 className="text-xl font-bold mb-3">{service1Title}</h3>
            <p className="text-gray-400">{service1Desc}</p>
          </div>
          
          {/* Service 2 Card */}
          <div className="bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center transition duration-300 ease-in-out hover:bg-gray-800">
            {/* <img src="path/to/your/icon2.png" alt="AI Icon" className="w-12 h-12 mb-4" /> */}
            <h3 className="text-xl font-bold mb-3">{service2Title}</h3>
            <p className="text-gray-400">{service2Desc}</p>
          </div>
          
          {/* Service 3 Card */}
          <div className="bg-gray-900 p-8 rounded-lg text-center flex flex-col items-center transition duration-300 ease-in-out hover:bg-gray-800">
            {/* <img src="path/to/your/icon3.png" alt="Transformation Icon" className="w-12 h-12 mb-4" /> */}
            <h3 className="text-xl font-bold mb-3">{service3Title}</h3>
            <p className="text-gray-400">{service3Desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}