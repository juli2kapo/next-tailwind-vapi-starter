"use client"
import { Loader2Icon, Mic, Phone } from "lucide-react";
import "./productSection.css";
import Orb from "./orb";
import useVapi from "@/hooks/use-vapi";

export default function ProductSection(){
    const { isSessionActive, toggleCall, isLoading, endCall } = useVapi();
    return (

        <>
        <div className="bg-black">
        <div className="container bg-black pb-0">
            <div className="horizontal-div flex items-center justify-between">
                <div className="horizontal-div flex">
                    
                <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" className="" width="40" />
                <div className="elykia-text text-white ml-2">ELYKIA</div>
                </div>
                <div className="horizontal-div flex pr-2 align-middle hover:cursor-pointer">
                    <div className="border-white rounded-full border-2 pb-2 pr-2 pt-4 pl-4 flex flex-row">
                        {
                            isLoading ? (
                                <Loader2Icon size={24} color="white" className="mr-3 animate-spin" />
                            ):
                            isSessionActive ? 
                            (

                                <Phone size={24} color="white" className="mr-3" onClick={endCall} />
                            )
                            :
                            (
                                <Mic  size={24} color="white" className="mr-3" onClick={toggleCall} />
                            )
                        }
                        {/* <Mic  size={24} color="white" className="mr-3" onClick={toggleCall} /> */}
                        {/* <Orb /> */}
                        <p className="text-white text-lg mr-2">
                            Probar demo
                        </p>
                    </div>
                </div>
            </div>

            </div>
        
        <div className="product-section bg-black">
            <h1 className="product-heading text-center text-[48px] font-black text-white uppercase">IA Conversacional</h1>
            <h2 className="product-subheading px-[12vw] text-[24px] text-center font-light text-[#aaa]">
                Nuestro servicio puede manejar conversaciones y tareas complejas de forma autónoma. Logrando automatizar hasta un 90% de tus interacciones diarias.
            </h2>
            <div className="card-list grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
                <div className="details-card p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold ">Rotación de personal</h3>
                    <ul className="features-list mt-4 space-y-2">
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Evita entrenamientos repetitivos y contrataciones temporales.</span>
                        </li>
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Aumenta la producción y maneja múltiples llamadas a la vez.</span>
                        </li>
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Dedica el capital humano a tareas no automatizables.</span>
                        </li>
                    </ul>
                </div>
                <div className="details-card p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold ">Mejor experiencia del consumidor</h3>
                    <ul className="features-list mt-4 space-y-2">
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Libera recursos para dedicar a otras áreas.</span>
                        </li>
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Se líder en atención al cliente.</span>
                        </li>
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Valores tangibles de satisfacción del cliente</span>
                        </li>
                    </ul>
                </div>
                <div className="details-card p-6 bg-white rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">IA para servir, no para controlar</h3>
                    <ul className="features-list mt-4 space-y-2">
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Automatización que resuelve como humano y escala como software.</span>
                        </li>
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Experiencia personalizada y segura.</span>
                        </li>
                        <li className="feature-item flex items-start">
                            <img src="https://i.imgur.com/yHSIico.png" alt="Feature Icon" className="feature-icon w-[3vh] h-auto" />
                            <span className="product-text ml-2 text-[#aaa]">Humanos involucrados en el proceso para escalabilidad y autorizaciones.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</div>
        </>
    )
}