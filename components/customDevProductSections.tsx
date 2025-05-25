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
            description = "En Elykia, convertimos tus ideas en productos digitales exitosos. Nuestro equipo de expertos combina creatividad, tecnología de vanguardia y pensamiento estratégico para desarrollar soluciones personalizadas que impulsan tu negocio.";
            benefits = [
                "Desarrollo estratégico alineado con tu visión y objetivos empresariales",
                "Arquitectura escalable diseñada para adaptarse y crecer sin problemas", 
                "Integración perfecta con tus sistemas existentes y arquitectura de datos",
                "Stack tecnológico avanzado con capacidades potenciadas por IA",
                "Soporte tiempo completo y respuesta rápida para tus preocupaciones",
                "Servicios de soporte dedicado y mejora continua"
            ];
            break;
        default:
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
    }

    return (
        <div className="bg-black z-20">
            <div className="product-section" style={{
                boxSizing: "border-box",
                padding: "1px 1px 10vh",
                backgroundColor: "rgb(0, 0, 0)",
                textAlign: "center",
            }}>
                <h1 className="product-heading md:text-[5.5vh] text-[30px] bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300" style={{
                    boxSizing: "border-box",
                    margin: "0.67em 0px",
                    marginTop: "20px",
                    lineHeight: "1.2",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                }}>
                    {title}
                </h1>
                
                <h2 className="product-subheading md:text-[2.8vh] text-[20px] leading-relaxed md:mb-[40px] mb-[20px]" style={{
                    marginTop: "20px",
                    fontWeight: 300,
                    color: "rgb(170, 170, 170)",
                    maxWidth: "80%",
                    margin: "20px auto 40px",
                }}>
                    {description}
                </h2>

                <div className="card-list grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 mx-auto max-w-7xl px-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} 
                            className="benefit-card rounded-xl p-6 text-white bg-opacity-10 backdrop-blur-sm border border-gray-900 hover:border-gray-500 transition-all"
                            style={{
                                background: "linear-gradient(45deg, rgba(30,30,30,0.9), rgba(40,40,40,0.8))",
                            }}>
                            <div className="flex items-start space-x-4">
                                <img
                                    className="w-[4vh] mt-1"
                                    alt="Feature Icon"
                                    src="https://i.imgur.com/yHSIico.png"
                                />
                                <span className="text-[2.2vh] text-left font-light leading-relaxed text-gray-100">
                                    {benefit}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}