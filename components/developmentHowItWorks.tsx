"use client";

import { useLanguage } from "./componentProvider";

export default function CustomDevHowItWorks() {
    const { currentLanguage } = useLanguage();
    let title;
    let firstItemTitle;
    let firstItemDescription;
    let secondItemTitle;
    let secondItemDescription;
    let thirdItemTitle;
    let thirdItemDescription;
    let fourthItemTitle;
    let fourthItemDescription;
    // Add more steps/items as needed

    switch (currentLanguage) {
        case "EN":
            title = "Our Custom Development Process";
            firstItemTitle = "1. Discovery & Strategy";
            firstItemDescription = "We work closely with you to understand your needs, challenges, and objectives, defining a clear project roadmap.";
            secondItemTitle = "2. Design & Prototyping";
            secondItemDescription = "Crafting intuitive user interfaces and experiences, followed by prototypes to visualize the final product.";
            thirdItemTitle = "3. Agile Development & AI Integration";
            secondItemDescription = "Building your solution using agile methodologies, integrating AI capabilities where they add the most value.";
            fourthItemTitle = "4. Testing & Deployment";
            fourthItemDescription = "Rigorous testing ensures quality and reliability before deploying the solution into your environment.";
            // Add more English text
            break;
        case "ES":
            title = "Nuestro Proceso de Desarrollo Personalizado";
            firstItemTitle = "1. Descubrimiento y Estrategia";
            firstItemDescription = "Trabajamos contigo para entender tus necesidades, desafíos y objetivos, definiendo una hoja de ruta clara del proyecto.";
            secondItemTitle = "2. Diseño y Prototipado";
            secondItemDescription = "Creando interfaces y experiencias de usuario intuitivas, seguidas de prototipos para visualizar el producto final.";
            thirdItemTitle = "3. Desarrollo Ágil e Integración IA";
            thirdItemDescription = "Construyendo tu solución con metodologías ágiles, integrando capacidades de IA donde aportan el mayor valor.";
            fourthItemTitle = "4. Pruebas y Despliegue";
            fourthItemDescription = "Pruebas rigurosas aseguran la calidad y fiabilidad antes de desplegar la solución en tu entorno.";
            // Add more Spanish text
            break;
        default:
             title = "Nuestro Proceso de Desarrollo Personalizado";
            firstItemTitle = "1. Descubrimiento y Estrategia";
            firstItemDescription = "Trabajamos contigo para entender tus necesidades, desafíos y objetivos, definiendo una hoja de ruta clara del proyecto.";
            secondItemTitle = "2. Diseño y Prototipado";
            secondItemDescription = "Creando interfaces y experiencias de usuario intuitivas, seguidas de prototipos para visualizar el producto final.";
            thirdItemTitle = "3. Desarrollo Ágil e Integración IA";
            thirdItemDescription = "Construyendo tu solución con metodologías ágiles, integrando capacidades de IA donde aportan el mayor valor.";
            fourthItemTitle = "4. Pruebas y Despliegue";
            fourthItemDescription = "Pruebas rigurosas aseguran la calidad y fiabilidad antes de desplegar la solución en tu entorno.";
            // Add more default (Spanish) text
    }

    return (
        // Use a structure similar to components/chatbotgeneration/howItWorks.tsx
        // Adapt the styling (inline or CSS classes) and layout
         <section className="how-it-works bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    {title}
                </h2>
                <ul className="max-w-4xl mx-auto">
                    {/* Item 1 */}
                    <li className="mb-8">
                        <div className="flex items-start">
                             {/* Use an appropriate icon */}
                            <img src="https://i.imgur.com/uAx9MVb.png" alt="Step Icon" className="w-10 h-10 mr-4 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{firstItemTitle}</h3>
                                <p className="text-gray-700">{firstItemDescription}</p>
                            </div>
                        </div>
                    </li>
                     {/* Item 2 */}
                     <li className="mb-8">
                         <div className="flex items-start">
                             <img src="https://i.imgur.com/uAx9MVb.png" alt="Step Icon" className="w-10 h-10 mr-4 mt-1" />
                             <div>
                                 <h3 className="text-xl font-bold text-gray-900 mb-1">{secondItemTitle}</h3>
                                 <p className="text-gray-700">{secondItemDescription}</p>
                             </div>
                         </div>
                     </li>
                     {/* Item 3 */}
                     <li className="mb-8">
                         <div className="flex items-start">
                             <img src="https://i.imgur.com/uAx9MVb.png" alt="Step Icon" className="w-10 h-10 mr-4 mt-1" />
                             <div>
                                 <h3 className="text-xl font-bold text-gray-900 mb-1">{thirdItemTitle}</h3>
                                 <p className="text-gray-700">{thirdItemDescription}</p>
                             </div>
                         </div>
                     </li>
                     {/* Item 4 */}
                     <li className="mb-8">
                         <div className="flex items-start">
                             <img src="https://i.imgur.com/uAx9MVb.png" alt="Step Icon" className="w-10 h-10 mr-4 mt-1" />
                             <div>
                                 <h3 className="text-xl font-bold text-gray-900 mb-1">{fourthItemTitle}</h3>
                                 <p className="text-gray-700">{fourthItemDescription}</p>
                             </div>
                         </div>
                     </li>
                     {/* Add more list items */}
                 </ul>
            </div>
        </section>
    );
}