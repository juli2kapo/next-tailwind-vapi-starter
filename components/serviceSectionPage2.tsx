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
    <section className="bg-black py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full" />
            <img 
              src="https://i.imgur.com/yHSIico.png" 
              alt="star" 
              className="w-8 h-8 animate-pulse" 
            />
            <div className="w-12 h-1 bg-gradient-to-l from-yellow-400 to-amber-600 rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {currentLanguage === "EN" 
              ? "Innovative solutions for modern business challenges" 
              : "Soluciones innovadoras para los retos empresariales modernos"}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800 hover:border-amber-500/20 transition-all"
            >
              {/* Service Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center">
                  <img 
                    src="https://i.imgur.com/yHSIico.png" 
                    alt="icon" 
                    className="w-8 h-8 animate-pulse" 
                  />
                </div>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.name}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <svg 
                      className="flex-shrink-0 w-5 h-5 text-amber-500 mt-1" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className="text-base text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-auto">
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 hover:gap-3 transition-all"
                >
                  {currentLanguage === "EN" ? "Learn More" : "Más Información"}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}