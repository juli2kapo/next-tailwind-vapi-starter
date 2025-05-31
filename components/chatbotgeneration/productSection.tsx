"use client"
import { Phone } from "lucide-react";
import { useLanguage } from "../componentProvider";

export default function ProductSectionChatbot() {
    const {currentLanguage} = useLanguage();
    let title;
    let description;
    let firstItem;
    let secondItem;
    let thirdItem;
    let fourthItem;
    let fifthItem;
    let sixthItem;
    switch (currentLanguage){
        case "EN":
            title = "Chatbot Development";
            description = "Our chatbots increase business productivity and maximize purchase opportunities in your business";
            firstItem = "Integration with AI, so that interactions are not robotic.";
            secondItem = "24/7 support and assistance for all your customers' needs.";
            thirdItem = "Multilanguage and multiplatform support.";
            fourthItem = "Complete customization to adapt to your brand identity.";
            fifthItem = "Real-time data analysis to continuously improve responses.";
            sixthItem = "Able to retain and expose selected information.";
            break;
        case "ES":
            title = "Desarrollo de chatbot";
            description = "Nuestros chatbots aumentan la productividad empresarial y maximizan las oportunidades de compra en tu negocio";
            firstItem = "Desarrollado con IA, para que las interacciones sean naturales.";
            thirdItem = "Soporte 24/7 y asistencia para todas las necesidades de tus clientes.";
            secondItem = "Soporte multilenguaje y multiplataforma.";
            fourthItem = "Personalización completa para adaptarse a la identidad de tu marca.";
            fifthItem = "Análisis de datos en tiempo real para mejorar continuamente las respuestas.";
            sixthItem = "Capaz de retener y exponer informacion seleccionada";
            break;
        default:
            title = "Desarrollo de chatbot";
            description = "Nuestros chatbots aumentan la productividad empresarial y maximizan las oportunidades de compra en tu negocio";
            firstItem = "Integracion con IA, para que las interacciones no sean roboticas.";
            secondItem = "Soporte 24/7 y asistencia para todas las necesidades de tus clientes.";
            thirdItem = "Soporte multilenguaje y multiplataforma.";
            fourthItem = "Personalización completa para adaptarse a la identidad de tu marca.";
            fifthItem = "Análisis de datos en tiempo real para mejorar continuamente las respuestas.";
            sixthItem = "Capaz de retener y exponer informacion seleccionada";
    }
    return (
        <>
            {/* <div className="horizontal-div pl-6 pt-6">
                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" className="" width="40" />
                <div className="elykia-text text-white">ELYKIA</div>
            </div> */}
            
            <div className="product-section pt-12">
                <h1 className="product-heading lg:text-[48px] md:text-[35px] text-[30px] mb-0 leading-none">{title}</h1>
                <h2 className="product-subheading lg:text-[24px] md:text-[21px] text-[16px] px-[12vw] leading-tight">
                    {description}
                </h2>
                <div className="how-it-works bg-black">
                    <div className="section-heading">
                        <ul className="grid md:grid-cols-2 grid-cols-1  mt-[6vh] mb-[10vh] justify-start justify-items-start items-start gap-y-0 gap-x-[10vw] mx-[5vw]">
                            <li className="feature-item flex items-center">
                                <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[5vh] h-auto mr-[1vw]" />
                                <span className="text-white text-[18px] font-medium normal-case">{firstItem}</span>
                            </li>
                            <li className="feature-item flex items-center">
                                <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[5vh] h-auto mr-[1vw]" />
                                <span className="text-white text-[18px] font-medium normal-case">{secondItem}</span>
                            </li>
                            <li className="feature-item flex items-center">
                                <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[5vh] h-auto mr-[1vw]" />
                                <span className="text-white text-[18px] font-medium normal-case">{thirdItem}</span>
                            </li>
                            <li className="feature-item flex items-center">
                                <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[5vh] h-auto mr-[1vw]" />
                                <span className="text-white text-[18px] font-medium normal-case">{fourthItem}</span>
                            </li>
                            <li className="feature-item flex items-center">
                                <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[5vh] h-auto mr-[1vw]" />
                                <span className="text-white text-[18px] font-medium normal-case">{fifthItem}</span>
                            </li>
                            <li className="feature-item flex items-center">
                                <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[5vh] h-auto mr-[1vw]" />
                                <span className="text-white text-[18px] font-medium normal-case">{sixthItem}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-5 mx-[5vw]">
                <div className="mb-5 mx-[5vw]">
  <div className="bg-black/80 border-2 border-white rounded-xl p-8 text-center backdrop-blur-sm mb-12">
    <h3 className="text-white text-[3.5vh] font-bold mb-4 uppercase">
      {currentLanguage === "EN" ? "Try Our AI Assistant" : "Prueba Nuestro Asistente de IA"}
    </h3>
    <p className="text-gray-300 text-[2.2vh] mb-6 max-w-2xl mx-auto">
      {currentLanguage === "EN" ? 
        "Experience the power of our conversational AI firsthand" : 
        "Experimenta el poder de nuestra IA conversacional de primera mano"
      }
    </p>
    
    <div className="flex flex-col items-center space-y-4">
      <a 
        href="https://wa.me/5491152586782" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-3 bg-white hover:bg-gray-200 transition-colors duration-300 rounded-lg px-8 py-4 border-2 border-white group hover:text-green-400"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className=""
        >
          <path 
            fill="currentColor" 
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.736"
          />
        </svg>
        <span className="text-black text-[2.5vh] font-bold tracking-wider">
          {currentLanguage === "EN" ? "Chat on WhatsApp" : "Probar por WhatsApp"}
        </span>
      </a>
      
      <p className="text-gray-400 text-[1.8vh] max-w-md mx-auto">
        {currentLanguage === "EN" ? 
          "Get instant responses and see our AI in action" : 
          "Obtén respuestas instantáneas y ve nuestra IA en acción"
        }
      </p>
    </div>
  </div>
</div>
        </div>
            </div>
        </>
    )
}