"use client"

import { useLanguage } from "./componentProvider";

export default function CustomDevProductSection() {
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
            title = "Custom Software Development";
            description = "We create tailored software solutions that adapt to your business needs and help you stay ahead of the competition";
            firstItem = "Personalized development strategy aligned with your business goals.";
            secondItem = "Flexible architecture that scales with your business growth.";
            thirdItem = "Integration with existing systems and databases.";
            fourthItem = "Modern technology stack with optional AI capabilities.";
            fifthItem = "Rigorous quality assurance and testing protocols.";
            sixthItem = "Ongoing technical support and maintenance.";
            break;
        case "ES":
            title = "Desarrollo de Software a Medida";
            description = "Creamos soluciones de software personalizadas que se adaptan a las necesidades de tu negocio y te ayudan a mantenerte por delante de la competencia";
            firstItem = "Estrategia de desarrollo personalizada alineada con tus objetivos de negocio.";
            secondItem = "Arquitectura flexible que escala con el crecimiento de tu negocio.";
            thirdItem = "Integración con sistemas y bases de datos existentes.";
            fourthItem = "Stack tecnológico moderno con capacidades de IA opcionales.";
            fifthItem = "Protocolos rigurosos de control de calidad y pruebas.";
            sixthItem = "Soporte técnico y mantenimiento continuo.";
            break;
        default:
            title = "Desarrollo de Software a Medida";
            description = "Creamos soluciones de software personalizadas que se adaptan a las necesidades de tu negocio y te ayudan a mantenerte por delante de la competencia";
            firstItem = "Estrategia de desarrollo personalizada alineada con tus objetivos de negocio.";
            secondItem = "Arquitectura flexible que escala con el crecimiento de tu negocio.";
            thirdItem = "Integración con sistemas y bases de datos existentes.";
            fourthItem = "Stack tecnológico moderno con capacidades de IA opcionales.";
            fifthItem = "Protocolos rigurosos de control de calidad y pruebas.";
            sixthItem = "Soporte técnico y mantenimiento continuo.";
    }

    return (
        <section className="section services bg-black">
            {/* <div className="horizontal-div pl-6 pt-6">
                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" className="" width="40" />
                <div className="elykia-text text-white">ELYKIA</div>
            </div> */}
            
            <section id="services" data-w-id="b90accb7-49e1-4682-7912-de74aec760d2"
                className="w-layout-blockcontainer container w-container transform opacity-100 translate-y-0 scale-100 rotate-0 skew-0 preserve-3d transition">
                <div id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1" 
                    className="w-layout-cell flex justify-center items-center mx-auto text-center">
                    <h1 className="h1 mainh1 text-2xl text-white text-center">
                        <div className="mx-[10vw] text-center pt-[2vh]">
                            <span className="green text-white text-[30px]">{title}</span><br />
                        </div>  
                        
                        <div className="product-subheading px-[12vw] text-gray-300 mb-[5vh]">
                            {description}
                        </div>
                        
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-[6vh] mb-[10vh] justify-center items-center">
                            <div className="flex flex-col items-center text-center justify-center">
                                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" 
                                    className="mb-[1vh]" width="45" />
                                <span className="color-white text-white text-[23px] md:leading-[2.4vh] leading-9">
                                    {firstItem.split('.')[0]}
                                    <h4>{firstItem.split('.').slice(1).join('.')}</h4>
                                </span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center justify-center">
                                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" 
                                    className="mb-[1vh]" width="45" />
                                <span className="color-white text-white text-[23px] md:leading-[2.4vh] leading-9">
                                    {secondItem.split('.')[0]}
                                    <h4>{secondItem.split('.').slice(1).join('.')}</h4>
                                </span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center justify-center">
                                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" 
                                    className="mb-[1vh]" width="45" />
                                <span className="color-white text-white text-[23px] md:leading-[2.4vh] leading-9">
                                    {thirdItem.split('.')[0]}
                                    <h4>{thirdItem.split('.').slice(1).join('.')}</h4>
                                </span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center justify-center">
                                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" 
                                    className="mb-[1vh]" width="45" />
                                <span className="color-white text-white text-[23px] md:leading-[2.4vh] leading-9">
                                    {fourthItem.split('.')[0]}
                                    <h4>{fourthItem.split('.').slice(1).join('.')}</h4>
                                </span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center justify-center">
                                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" 
                                    className="mb-[1vh]" width="45" />
                                <span className="color-white text-white text-[23px] md:leading-[2.4vh] leading-9">
                                    {fifthItem.split('.')[0]}
                                    <h4>{fifthItem.split('.').slice(1).join('.')}</h4>
                                </span>
                            </div>
                            
                            <div className="flex flex-col items-center text-center justify-center">
                                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" 
                                    className="mb-[1vh]" width="45" />
                                <span className="color-white text-white text-[23px] md:leading-[2.4vh] leading-9">
                                    {sixthItem.split('.')[0]}
                                    <h4>{sixthItem.split('.').slice(1).join('.')}</h4>
                                </span>
                            </div>
                        </div>
                    </h1>
                </div>
            </section>
        </section>
    )
}