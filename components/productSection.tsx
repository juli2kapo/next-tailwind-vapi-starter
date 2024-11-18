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
                <div className="horizontal-div flex pr-2 align-middle hover:cursor-pointer"
                onClick={
                  ()=>{
                    if(isSessionActive){
                      endCall();
                    }
                    else{
                      toggleCall();
                    }
                  }
                }>
                    <div className="border-white rounded-full border pb-2 pr-2 pt-4 pl-4 flex flex-row items-center border-2">
                      <div className="mb-[2vh]">
                        {
                            isLoading ? (
                                <Loader2Icon size={20} color="white" className="mr-3 animate-spin" />
                            ):
                            isSessionActive ? 
                            (

                                <Phone size={20} color="white" className="mr-3" />
                            )
                            :
                            (
                                <Mic  size={20} color="white" className="mr-3" />
                            )
                        }
                      </div>
                      <div className="flex flex-col">

                        <p className="text-white text-[14px] mr-2 mb-0">
                            Probar demo
                        </p>
                        <p className="text-white text-[9px] mr-2 opacity-65">
                            Reserva de restaurante
                        </p>
                      </div>
                    </div>
                </div>
            </div>

            </div>
        
            <div
        className="product-section"
        style={{
          boxSizing: "border-box",
          padding: "1px 1px 10vh",
          backgroundColor: "rgb(0, 0, 0)",
          textAlign: "center",
        }}
      >
        <h1
          className="product-heading text-[4vh]"
          style={{
            boxSizing: "border-box",
            margin: "0.67em 0px",
            marginTop: "20px",
            lineHeight: "44px",
            // fontSize: "48px",
            fontWeight: 900,
            marginBottom: "30px",
            color: "rgb(255, 255, 255)",
            textTransform: "uppercase",
          }}
        >
          IA Conversacional
        </h1>
        <h2
          className="product-subheading text-[3vh]"
          style={{
            boxSizing: "border-box",
            marginTop: "20px",
            lineHeight: "36px",
            // fontSize: "24px",
            fontWeight: 300,
            marginBottom: "50px",
            color: "rgb(170, 170, 170)",
            paddingLeft: "12vw",
            paddingRight: "12vw",
          }}
        >
          {
            "Nuestro servicio puede manejar conversaciones y tareas complejas de forma autónoma. Logrando automatizar hasta un 90% de tus interacciones diarias."
          }
        </h2>
        <div
  className="card-list flex flex-col lg:flex-row justify-around gap-6 lg:gap-4 mt-[15vh] mx-[5vw]"
>
  <div
    className="details-card border-3 border-white rounded-lg p-4 text-white min-h-[50vh] min-w-[25vw] max-h-[75vh] max-w-[80vw] bg-cover"
    style={{
      backgroundImage: 'url("https://www.elykia.com.ar/Images/product-bg.jpg")',
    }}
  >
    <h3 className="text-[4vh] font-bold mt-5 mb-4">Rotación de personal</h3>
    <ul className="features-list text-left text-gray-200">
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Evita entrenamientos repetitivos y contrataciones temporales.
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Aumenta la producción y maneja múltiples llamadas a la vez.
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Dedica el capital humano a tareas no automatizables.
        </span>
      </li>
    </ul>
  </div>

  <div
    className="details-card border-3 border-white rounded-lg p-4 text-white min-h-[50vh] min-w-[25vw] max-h-[75vh] max-w-[80vw] bg-cover"
    style={{
      backgroundImage: 'url("https://www.elykia.com.ar/Images/product-bg.jpg")',
    }}
  >
    <h3 className="text-[4vh] font-bold mt-5 mb-4">Mejor experiencia del consumidor</h3>
    <ul className="features-list text-left text-gray-200">
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Libera recursos para dedicar a otras áreas.
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">Se líder en atención al cliente.</span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Valores tangibles de satisfacción del cliente.
        </span>
      </li>
    </ul>
  </div>

  <div
    className="details-card border-3 border-white rounded-lg p-4 text-white min-h-[50vh] min-w-[25vw] max-h-[75vh] max-w-[80vw] bg-cover"
    style={{
      backgroundImage: 'url("https://www.elykia.com.ar/Images/product-bg.jpg")',
    }}
  >
    <h3 className="text-[4vh] font-bold mt-5 mb-4">IA para servir, no para controlar</h3>
    <ul className="features-list text-left text-gray-200">
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Automatización que resuelve como humano y escala como software.
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Experiencia personalizada y segura.
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          Humanos involucrados para escalabilidad y autorizaciones.
        </span>
      </li>
    </ul>
  </div>
</div>

      </div>
</div>
        </>
    )
}