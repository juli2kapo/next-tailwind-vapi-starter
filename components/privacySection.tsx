"use client"
import { useLanguage } from "./componentProvider";

export default function PrivacySection(){
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
      firstRow = "Tu privacidad es importante para nosotros";
      firstTitle = "Seguridad como pilar fundamental";
      firstDescription = "En Elykia, la protección de datos y las interacciones de los usuarios es una prioridad central.";
      secondTitle = "Cumplimiento de requisitos";
      secondDescription = "Nos alineamos con tus necesidades de seguridad y cumplimiento, garantizando que nuestros chatbots estén a la altura de tus necesidades.";
      thirdTitle = "Defensa contra vulnerabilidades";
      thirdDescription = "Desarrollamos chatbots robustos que resisten amenazas y vulnerabilidades sin comprometer la funcionalidad ni la experiencia del usuario.";
      fourthTitle = "Protección de datos";
      fourthDescription = "Implementamos medidas avanzadas de cifrado de datos para mantener segura toda la información manejada por los chatbots.";
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
        <section className="section services bg-gray-200">
  <section id="services" data-w-id="b90accb7-49e1-4682-7912-de74aec760d2"
    className="w-layout-blockcontainer container w-container transform opacity-100 translate-y-0 scale-100 rotate-0 skew-0 preserve-3d transition">
    <div id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1" 
         className="w-layout-cell flex justify-center items-center mx-auto text-center">
      <h1 className="h1 mainh1 text-2xl text-black text-center">
        <div className="mx-[10vw] text-center">
          <span className="green text-black text-[25px] pt-7 px-4 py-2 rounded">{firstRow}</span><br />
        </div>  
        
        <div className="grid grid-cols-2 gap-5 mt-[6vh] mb-[10vh] justify-center items-center">
          
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[2vh]" width="30" />
            <span className="text-black text-[17px] leading-[2.4vh] font-medium">
              {firstTitle}
              <h5 className="text-gray-700">{firstDescription}</h5>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[2vh]" width="30" />
            <span className="text-black text-[17px] leading-[2.4vh] font-medium">
              {secondTitle}
              <h5 className="text-gray-700">{secondDescription}</h5>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[2vh]" width="30" />
            <span className="text-black text-[17px] leading-[2.4vh] font-medium">
              {thirdTitle}
              <h5 className="text-gray-700">{thirdDescription}</h5>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[2vh]" width="30" />
            <span className="text-black text-[17px] leading-[2.4vh] font-medium">
              {fourthTitle}
              <h5 className="text-gray-700">{fourthDescription}</h5>
            </span>
          </div>
          
        </div>
      </h1>
    </div>
  </section>
</section>

    )
}