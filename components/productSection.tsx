"use client"
import { Loader2Icon, Mic, Phone } from "lucide-react";
import "./productSection.css";
import Orb from "./orb";
import useVapi from "@/hooks/use-vapi";
import { useLanguage } from "./componentProvider";

export default function ProductSection(){
    const { isSessionActive, toggleCall, isLoading, endCall } = useVapi();
    const { currentLanguage } = useLanguage();
    let firstRow;
    let secondRow;
    let firstCardTitle;
    let firstCardItem1;
    let firstCardItem2;
    let firstCardItem3;
    let secondCardTitle;
    let secondCardItem1;
    let secondCardItem2;
    let secondCardItem3;
    let thirdCardTitle;
    let thirdCardItem1;
    let thirdCardItem2;
    let thirdCardItem3;
    let demoTitle;
    let demoSubtitle;
    switch (currentLanguage) {
      case "ES":
        firstRow = "IA Conversacional";
        secondRow = "Nuestro servicio puede manejar conversaciones y tareas complejas de forma autónoma. Logrando automatizar hasta un 90% de tus interacciones diarias.";
        firstCardTitle = "Rotación de personal";
        firstCardItem1 = "Evita entrenamientos repetitivos y contrataciones temporales.";
        firstCardItem2 = "Aumenta la productividad y maneja múltiples llamadas a la vez.";
        firstCardItem3 = "Dedica el capital humano a tareas no automatizables.";
        secondCardTitle = "Mejor experiencia del consumidor";
        secondCardItem1 = "Libera recursos para dedicar a otras áreas.";
        secondCardItem2 = "Sé líder en atención al cliente.";
        secondCardItem3 = "Atiende multiples clientes a la vez las 24 horas";
        thirdCardTitle = "IA para servir, no para controlar";
        thirdCardItem1 = "Automatización que resuelve como humano y escala como software.";
        thirdCardItem2 = "Experiencia personalizada y segura.";
        thirdCardItem3 = "Humanos involucrados para escalabilidad y autorizaciones.";
        demoTitle = "Probar demo";
        demoSubtitle = "Reserva de restaurante";
        break;
      case "EN":
        firstRow = "Conversational AI";
        secondRow = "Our service can handle complex conversations and tasks autonomously. Automating up to 90% of your daily interactions.";
        firstCardTitle = "Staff rotation";
        firstCardItem1 = "Avoid repetitive training and temporary hires.";
        firstCardItem2 = "Increase production and handle multiple calls at once.";
        firstCardItem3 = "Dedicate human capital to non-automatable tasks.";
        secondCardTitle = "Better consumer experience";
        secondCardItem1 = "Free up resources to dedicate to other areas.";
        secondCardItem2 = "Be a leader in customer service.";
        secondCardItem3 = "Tangible customer satisfaction values.";
        thirdCardTitle = "AI to serve, not to control";
        thirdCardItem1 = "Automation that solves like a human and scales like software.";
        thirdCardItem2 = "Personalized and secure experience.";
        thirdCardItem3 = "Humans involved for scalability and authorizations.";
        demoTitle = "Try demo";
        demoSubtitle = "Restaurant reservation";
        break;
      default:
        firstRow = "IA Conversacional";
        secondRow = "Nuestro servicio puede manejar conversaciones y tareas complejas de forma autónoma. Logrando automatizar hasta un 90% de tus interacciones diarias.";
        firstCardTitle = "Rotación de personal";
        firstCardItem1 = "Evita entrenamientos repetitivos y contrataciones temporales.";
        firstCardItem2 = "Aumenta la productividad y maneja múltiples llamadas a la vez.";
        firstCardItem3 = "Dedica el capital humano a tareas no automatizables.";
        secondCardTitle = "Mejor experiencia del consumidor";
        secondCardItem1 = "Libera recursos para dedicar a otras áreas.";
        secondCardItem2 = "Sé líder en atención al cliente.";
        secondCardItem3 = "Atiende multiples clientes a la vez las 24 horas";
        thirdCardTitle = "IA para servir, no para controlar";
        thirdCardItem1 = "Automatización que resuelve como humano y escala como software.";
        thirdCardItem2 = "Experiencia personalizada y segura.";
        thirdCardItem3 = "Humanos involucrados para escalabilidad y autorizaciones.";
        demoTitle = "Probar demo";
        demoSubtitle = "Reserva de restaurante";
      }
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
                // onClick={
                //   ()=>{
                //     if(isSessionActive){
                //       endCall();
                //     }
                //     else{
                //       toggleCall();
                //     }
                //   }
                // }
                >
                  {/* boton demo */}
                    {/* <div className="border-white rounded-full pb-2 pr-2 pt-4 pl-4 flex flex-row items-center border-2">
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
                            {demoTitle}
                        </p>
                        <p className="text-white text-[9px] mr-2 opacity-65">
                            {demoSubtitle}
                        </p>
                      </div>
                    </div> */}
                    <div className="border-white rounded-full pb-2 pr-2 pt-0 pl-4 flex flex-col items-center ">
                      <h4 className="text-white text-[14px] mr-2 mb-0">
                          {demoTitle}
                      </h4>
                      <h4 className="text-white text-[13px] mr-2 mb-0 mt-0 opacity-80">
                          {demoSubtitle}
                      </h4>
                      <div className="flex flex-row items-center">
                        {/* <Phone size={20} color="white" className="mr-1" /> */}
                      <h5 className="text-white text-[12px] mr-2 opacity-65 mt-0 items-center">
                        +54 9 11 2270-0514
                      </h5>
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
          className="product-heading text-[6vh]"
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
          {firstRow}
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
            secondRow
          }
        </h2>
        <div
  className="card-list flex flex-col lg:flex-row justify-around gap-6 mt-[15vh] mx-[5vw]"
>
  <div
    className="details-card border-3 border-white rounded-lg p-4 text-white min-h-[50vh] min-w-[25vw] max-h-[75vh] max-w-[80vw] bg-cover"
    style={{
      backgroundImage: 'url("https://www.elykia.com.ar/Images/product-bg.jpg")',
    }}
  >
    <h3 className="text-[4vh] font-bold mt-5 mb-4">{firstCardTitle}</h3>
    <ul className="features-list text-left text-gray-200">
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {firstCardItem1}
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {firstCardItem2}
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {firstCardItem3}
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
    <h3 className="text-[4vh] font-bold mt-5 mb-4">{secondCardTitle}</h3>
    <ul className="features-list text-left text-gray-200">
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {secondCardItem1}
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {secondCardItem2}
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {secondCardItem3}
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
    <h3 className="text-[4vh] font-bold mt-5 mb-4">{thirdCardTitle}</h3>
    <ul className="features-list text-left text-gray-200">
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {thirdCardItem1}
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {thirdCardItem2}
        </span>
      </li>
      <li className="flex items-center mb-4">
        <img
          className="w-[3vh] mx-4"
          alt="Feature Icon"
          src="https://i.imgur.com/yHSIico.png"
        />
        <span className="text-[2.5vh]">
          {thirdCardItem3}
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