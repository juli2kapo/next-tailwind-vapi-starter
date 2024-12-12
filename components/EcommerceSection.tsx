"use client"
import { useLanguage } from "./componentProvider";

export default function EcommerceSection(){
  const {currentLanguage} = useLanguage();
  let firstRow;
  let firstTitle;
  let firstDescription;
  let secondTitle;
  let secondDescription;
  let thirdTitle;
  let thirdDescription;
  let fourthTitle;
  let fourthDescription;
  switch(currentLanguage){
    case "ES":
      firstRow = "¿A quien beneficia el servicio?";
      firstTitle = "Restaurantes.";
      firstDescription = "Gestiona reservas, delivery y consultas.";
      secondTitle = "Hoteles y turismo.";
      secondDescription = "Reservas, consultas sobre servicios y eventos o brindar información sobre destinos.";
      thirdTitle = "Clínicas y sanatorios.";
      thirdDescription = "Agendar citas, responder preguntas frecuentes, seguimientos y recordatorios.";
      fourthTitle = "Transporte y logística.";
      fourthDescription = "Confirmación de horarios, consulta sobre estado de pedidos.";
      break;
    case "EN":
      firstRow = "Your privacy is important to us";
      firstTitle = "Security as a fundamental pillar";
      firstDescription = "At Elykia, data protection and user interactions are a central priority.";
      secondTitle = "Compliance with requirements";
      secondDescription = "We align with your security and compliance needs, ensuring that our chatbots meet your needs.";
      thirdTitle = "Defense against vulnerabilities";
      thirdDescription = "We develop robust chatbots that withstand threats and vulnerabilities without compromising functionality or user experience.";
      fourthTitle = "Data protection";
      fourthDescription = "We implement advanced data encryption measures to keep all information handled by chatbots secure.";
      break;
    default:
      firstRow = "Tu privacidad es importante para nosotros";
      firstTitle = "Seguridad como pilar fundamental";
      firstDescription = "En Elykia, la protección de datos y las interacciones de los usuarios es una prioridad central.";
      secondTitle = "Cumplimiento de requisitos";
      secondDescription = "Nos alineamos con tus necesidades de seguridad y cumplimiento, garantizando que nuestros chatbots estén a la altura de tus necesidades.";
      thirdTitle = "Defensa contra vulnerabilidades";
      thirdDescription = "Desarrollamos chatbots robustos que resisten amenazas y vulnerabilidades sin comprometer la funcionalidad ni la experiencia del usuario.";
      fourthTitle = "Protección de datos";
      fourthDescription = "Implementamos medidas avanzadas de cifrado de datos para mantener segura toda la información manejada por los chatbots.";
  }
    return (
        <section className="section services bg-white mt-[6vh]">
  <section id="services" data-w-id="b90accb7-49e1-4682-7912-de74aec760d2"
    className="w-layout-blockcontainer container w-container transform opacity-100 translate-y-0 scale-100 rotate-0 skew-0 preserve-3d transition">
    <div id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1" 
         className="w-layout-cell flex justify-center items-center mx-auto text-center">
      <h1 className="h1 mainh1 text-2xl text-white text-center">
        <div className="mx-[10vw] text-center pt-[2vh]">
          <span className="green text-black text-[30px] ">{firstRow}</span><br />
        </div>  
        
        <div className="grid grid-cols-2 gap-5 mt-[6vh] mb-[10vh] justify-center items-center">
          
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] leading-[2.4vh]">
              {firstTitle}
              <h4>{firstDescription}</h4>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] leading-[2.4vh]">
              {secondTitle}
              <h4>{secondDescription}</h4>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] leading-[2.4vh]">
              {thirdTitle}
              <h4>{thirdDescription}</h4>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] leading-[2.4vh]">
              {fourthTitle}
              <h4>{fourthDescription}</h4>
            </span>
          </div>
          
        </div>
      </h1>
    </div>
  </section>
</section>

    )
}