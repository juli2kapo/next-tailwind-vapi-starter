"use client"
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
            </div>
        </>
    )
}