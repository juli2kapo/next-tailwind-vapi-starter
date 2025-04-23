"use client";
import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function AllServices() {
  const { currentLanguage } = useLanguage();
  
  let title;
  let services;
  
  switch (currentLanguage) {
    case "EN":
      title = "Our Services";
      services = [
        {
          id: "conversationai",
          name: "Conversational AI",
          description: "Our AI solution that can make or receive calls and manage multiple communication channels for your business.",
          features: [
            "24/7 support and assistance for all your customers' needs",
            "Ability to handle more than 100,000 calls per day",
            "Multichannel approach (Voice, Email, SMS, Whatsapp, etc.)",
            "Real-time data analysis to continuously improve responses"
          ],
          link: "/conversationai"
        },
        {
          id: "chatbot",
          name: "Chatbot Development",
          description: "Custom chatbots that increase business productivity and maximize purchase opportunities.",
          features: [
            "Integration with AI for non-robotic interactions",
            "Multilanguage and multiplatform support",
            "Complete customization to adapt to your brand identity",
            "Ability to retain and expose selected information"
          ],
          link: "/chatbotgeneration"
        },
        {
          id: "custom",
          name: "Custom Development",
          description: "Tailor-made solutions designed specifically for your business needs and challenges.",
          features: [
            "Our priority is to grow your business, not just make software",
            "Service made for you - you tell us what you need and we do it",
            "Save hours on data entry and reduce errors",
            "We align with your security and compliance needs"
          ],
          link: "/contact"
        }
      ];
      break;
    default:
      title = "Nuestros Servicios";
      services = [
        {
          id: "conversationai",
          name: "IA Conversacional",
          description: "Nuestra solución de IA que puede realizar o recibir llamadas y gestionar múltiples canales de comunicación para tu negocio.",
          features: [
            "Soporte 24/7 y asistencia para todas las necesidades de tus clientes",
            "Capacidad de manejar más de 100.000 llamadas al día",
            "Enfoque multicanal (Voz, Email, SMS, Whatsapp, etc.)",
            "Análisis de datos en tiempo real para mejorar continuamente las respuestas"
          ],
          link: "/conversationai"
        },
        {
          id: "chatbot",
          name: "Desarrollo de Chatbot",
          description: "Chatbots personalizados que aumentan la productividad empresarial y maximizan las oportunidades de compra.",
          features: [
            "Integración con IA, para que las interacciones no sean robóticas",
            "Soporte multilenguaje y multiplataforma",
            "Personalización completa para adaptarse a la identidad de tu marca",
            "Capaz de retener y exponer información seleccionada"
          ],
          link: "/chatbotgeneration"
        },
        {
          id: "custom",
          name: "Desarrollo Personalizado",
          description: "Soluciones a medida diseñadas específicamente para las necesidades y desafíos de tu negocio.",
          features: [
            "Nuestra prioridad es hacer crecer tu negocio, no hacer software",
            "Servicio hecho para vos. Nos decís que necesitas y nosotros lo hacemos",
            "Vas a ahorrar horas en entrada de datos y reducir errores",
            "Nos alineamos con tus necesidades de seguridad y cumplimiento"
          ],
          link: "/contact"
        }
      ];
  }

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <img src="https://i.imgur.com/yHSIico.png" alt="star" className="w-[5vh] mr-4" />
          <h2 className="text-[36px] font-bold uppercase text-white">{title}</h2>
        </div>
        
        <div className="flex flex-col gap-8 mt-12">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              currentLanguage={currentLanguage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceCard = ({ service, currentLanguage }: { service: Service; currentLanguage: string }) => (
  <div className="w-full bg-black rounded-xl p-8 border border-white hover:border-gray-400 transition-all shadow-lg">
    <div className="flex flex-col h-full">
      <h3 className="text-[28px] font-black text-white mb-6 uppercase tracking-wide">{service.name}</h3>
      <p className="text-[18px] text-gray-300 mb-8 flex-grow">{service.description}</p>
      <ul className="space-y-4 mb-8">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <img 
              src="https://i.imgur.com/yHSIico.png" 
              alt="Feature Icon" 
              className="w-[3vh] mr-4"
            />
            <span className="text-[16px] font-medium text-white">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href={service.link}
        className="mt-auto inline-flex items-center bg-black text-white font-bold py-3 px-8 rounded uppercase border border-white hover:bg-white hover:text-black transition-colors text-[16px]"
        style={{ letterSpacing: "1px" }}
      >
        {currentLanguage === "EN" ? "Learn More" : "Más Información"}
      </Link>
    </div>
  </div>
);