"use client"

import { useLanguage } from "./componentProvider";

export default function CustomDevProductSection() {
    const { currentLanguage } = useLanguage();
    let title;
    let subtitle;
    let description;
    let benefits = [];

    switch (currentLanguage) {
        case "EN":
            title = "Innovative Technology Solutions";
            subtitle = "Transforming Ideas into Reality";
            description = "At Elykia, we're passionate about turning your ideas into successful digital products. Our expert team combines creativity, cutting-edge technology, and strategic thinking to develop customized solutions that drive your business forward.";
            benefits = [
                "Strategic development aligned with your business vision and objectives",
                "Scalable architecture designed for seamless growth and adaptation",
                "Seamless integration with your existing systems and data architecture",
                "Advanced technology stack with AI-powered capabilities",
                "Comprehensive quality assurance ensuring flawless performance",
                "Dedicated support and continuous improvement services"
            ];
            break;
        case "ES":
            title = "Desarrollo de software a medida";
            subtitle = "Transformamos Ideas en Realidad";
            description = "En Elykia, nos apasiona convertir tus ideas en productos digitales exitosos. Nuestro equipo de expertos combina creatividad, tecnología de vanguardia y pensamiento estratégico para desarrollar soluciones personalizadas que impulsan tu negocio.";
            benefits = [
                "Desarrollo estratégico alineado con tu visión y objetivos empresariales",
                "Arquitectura escalable diseñada para un crecimiento y adaptación sin fricciones",
                "Integración perfecta con tus sistemas existentes y arquitectura de datos",
                "Stack tecnológico avanzado con capacidades potenciadas por IA",
                "Garantía de calidad integral que asegura un rendimiento impecable",
                "Servicios de soporte dedicado y mejora continua"
            ];
            break;
        default:
            title = "Soluciones Tecnológicas Innovadoras";
            subtitle = "Transformamos Ideas en Realidad";
            description = "En Elykia, nos apasiona convertir tus ideas en productos digitales exitosos. Nuestro equipo de expertos combina creatividad, tecnología de vanguardia y pensamiento estratégico para desarrollar soluciones personalizadas que impulsan tu negocio.";
            benefits = [
                "Desarrollo estratégico alineado con tu visión y objetivos empresariales",
                "Arquitectura escalable diseñada para un crecimiento y adaptación sin fricciones",
                "Integración perfecta con tus sistemas existentes y arquitectura de datos",
                "Stack tecnológico avanzado con capacidades potenciadas por IA",
                "Garantía de calidad integral que asegura un rendimiento impecable",
                "Servicios de soporte dedicado y mejora continua"
            ];
    }

    return (
        <section className=" bg-black py-16">
            <section id="services" data-w-id="b90accb7-49e1-4682-7912-de74aec760d2"
                className="w-layout-blockcontainer container w-container transform opacity-100 translate-y-0 scale-100 rotate-0 skew-0 preserve-3d transition">
                <div className="w-layout-cell flex flex-col justify-center items-center mx-auto text-center max-w-6xl">
                    
                    <h1 className="text-4xl font-bold mb-3 uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-200 z-40 to-purple-400">{title}</h1>
                    {/* <h2 className="text-2xl text-green-400 mb-6">{subtitle}</h2> */}
                    
                    <div className="text-gray-300 text-lg mb-12 mx-auto max-w-3xl px-4">
                        {description}
                    </div>
                    
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-8 mb-12">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col items-center text-center justify-start p-6 bg-black bg-opacity-60 rounded-lg border border-gray-800 hover:border-purple-400 transition-all h-full">
                                <div className="mb-4">
                                    <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" width="45" />
                                </div>
                                <p className="text-white text-lg font-medium">{benefit}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* <div className="mt-12">
                        <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
                            {currentLanguage === "EN" ? "Get Started" : "Comienza Ahora"}
                        </button>
                    </div> */}
                </div>
            </section>
        </section>
    )
}