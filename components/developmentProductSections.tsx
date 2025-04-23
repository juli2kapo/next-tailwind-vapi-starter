"use client";

import { useLanguage } from "./componentProvider";

export default function CustomDevProductSection() {
    const { currentLanguage } = useLanguage();
    let title;
    let description;
    let firstItem;
    let secondItem;
    let thirdItem;
    let fourthItem;
    // Add more items as needed

    switch (currentLanguage) {
        case "EN":
            title = "Custom IT Development with AI";
            description = "Tailored software solutions, enhanced with Artificial Intelligence, designed specifically for your business challenges and goals.";
            firstItem = "Bespoke Software Solutions";
            secondItem = "AI-Powered Process Automation";
            thirdItem = "Seamless System Integrations";
            fourthItem = "Scalable & Secure Architecture";
            // Add more English text
            break;
        case "ES":
            title = "Desarrollo de IT Personalizado con IA";
            description = "Soluciones de software a medida, potenciadas con Inteligencia Artificial, diseñadas específicamente para los desafíos y objetivos de tu negocio.";
            firstItem = "Soluciones de Software a Medida";
            secondItem = "Automatización de Procesos con IA";
            thirdItem = "Integraciones de Sistemas Fluidas";
            fourthItem = "Arquitectura Escalable y Segura";
            // Add more Spanish text
            break;
        default:
            title = "Desarrollo de IT Personalizado con IA";
            description = "Soluciones de software a medida, potenciadas con Inteligencia Artificial, diseñadas específicamente para los desafíos y objetivos de tu negocio.";
            firstItem = "Soluciones de Software a Medida";
            secondItem = "Automatización de Procesos con IA";
            thirdItem = "Integraciones de Sistemas Fluidas";
            fourthItem = "Arquitectura Escalable y Segura";
            // Add more default (Spanish) text
    }

    return (
        // Use a structure similar to components/chatbotgeneration/productSection.tsx
        // Adapt the styling and layout as needed for this new section
        <section className="product-section bg-black text-white py-16 md:py-24">
             <div className="container mx-auto px-4 text-center">
                <h1 className="product-heading text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <h2 className="product-subheading text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                    {description}
                </h2>
                {/* Consider adding a list or grid for features like in productSectionChatbot */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-4xl mx-auto text-left">
                     <li className="feature-item flex items-center">
                         {/* Use an appropriate icon */}
                         <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-8 h-8 mr-3" />
                         <span className="text-lg">{firstItem}</span>
                     </li>
                     <li className="feature-item flex items-center">
                         <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-8 h-8 mr-3" />
                         <span className="text-lg">{secondItem}</span>
                     </li>
                     <li className="feature-item flex items-center">
                         <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-8 h-8 mr-3" />
                         <span className="text-lg">{thirdItem}</span>
                     </li>
                     <li className="feature-item flex items-center">
                         <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-8 h-8 mr-3" />
                         <span className="text-lg">{fourthItem}</span>
                     </li>
                     {/* Add more list items */}
                 </ul>
            </div>
        </section>
    );
}