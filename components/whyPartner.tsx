"use client";

import { useLanguage } from "./componentProvider";

export default function WhyChooseUs() {
    const { currentLanguage } = useLanguage();
    let title;
    let point1Title;
    let point1Desc;
    let point2Title;
    let point2Desc;
    let point3Title;
    let point3Desc;

    switch (currentLanguage) {
        case "EN":
            title = "Why Partner with Us?";
            point1Title = "AI-Enhanced Solutions";
            point1Desc = "We strategically integrate AI to boost efficiency and unlock new capabilities in your custom software.";
            point2Title = "Collaborative Approach";
            point2Desc = "Your insights are crucial. We maintain transparent communication and work closely with you throughout the project.";
            point3Title = "Focus on Business Value";
            point3Desc = "Our development is driven by your goals, ensuring the final product delivers tangible results and ROI.";
            break;
        default: // ES
            title = "¿Por Qué Elegirnos?";
            point1Title = "Soluciones Mejoradas con IA";
            point1Desc = "Integramos estratégicamente la IA para impulsar la eficiencia y desbloquear nuevas capacidades en tu software personalizado.";
            point2Title = "Enfoque Colaborativo";
            point2Desc = "Tus ideas son cruciales. Mantenemos una comunicación transparente y trabajamos estrechamente contigo durante todo el proyecto.";
            point3Title = "Enfoque en el Valor Comercial";
            point3Desc = "Nuestro desarrollo está impulsado por tus objetivos, asegurando que el producto final entregue resultados tangibles y ROI.";
    }

    return (
        <section className="why-choose-us bg-black text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="section-heading text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Point 1 */}
                    <div className="text-center md:text-left p-6 bg-gray-900 rounded-lg">
                         {/* Optional: Add an icon */}
                        <h3 className="text-xl font-bold mb-2">{point1Title}</h3>
                        <p className="text-gray-300">{point1Desc}</p>
                    </div>
                    {/* Point 2 */}
                    <div className="text-center md:text-left p-6 bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">{point2Title}</h3>
                        <p className="text-gray-300">{point2Desc}</p>
                    </div>
                    {/* Point 3 */}
                    <div className="text-center md:text-left p-6 bg-gray-900 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">{point3Title}</h3>
                        <p className="text-gray-300">{point3Desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}