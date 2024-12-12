"use client"
import { useLanguage } from "./componentProvider";

export default function WhoBenefits(){
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
  let secondParrafo;
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
      secondParrafo = "Nuestro servicio no es una solución preestablecida, podemos agregar y eliminar funciones según las necesidad especificas de tu negocio. Cualquier empresa con un volumen significativo de llamadas o mensajes puede beneficiarse de nuestra tecnología."

      break;
    case "EN":
      firstRow = "Who does the service benefit?";
      firstTitle = "Restaurants.";
      firstDescription = "Manage reservations, delivery and inquiries.";
      secondTitle = "Hotels and tourism.";
      secondDescription = "Reservations, inquiries about services and events or provide information about destinations.";
      thirdTitle = "Clinics and sanatoriums.";
      thirdDescription = "Schedule appointments, answer frequently asked questions, follow-ups and reminders.";
      fourthTitle = "Transport and logistics.";
      fourthDescription = "Confirmation of schedules, consultation on order status.";
      secondParrafo = "These are just initial proposals. Our service is not a pre-established solution, and we can adapt it to add or remove features according to the specific needs of your business. Any company with a significant volume of calls or messages can benefit from our technology, beyond the examples mentioned above."
      break;
    default:
      firstRow = "¿A quien beneficia el servicio?";
      firstTitle = "Restaurantes.";
      firstDescription = "Gestiona reservas, delivery y consultas.";
      secondTitle = "Hoteles y turismo.";
      secondDescription = "Reservas, consultas sobre servicios y eventos o brindar información sobre destinos.";
      thirdTitle = "Clínicas y sanatorios.";
      thirdDescription = "Agendar citas, responder preguntas frecuentes, seguimientos y recordatorios.";
      fourthTitle = "Transporte y logística.";
      fourthDescription = "Confirmación de horarios, consulta sobre estado de pedidos.";
      secondParrafo = "Nuestro servicio no es una solución preestablecida, podemos agregar y eliminar funciones según las necesidad especificas de tu negocio. Cualquier empresa con un volumen significativo de llamadas o mensajes puede beneficiarse de nuestra tecnología."

  }
    return (
        <section className="section services bg-white mt-[4vh]">
  <section id="services" data-w-id="b90accb7-49e1-4682-7912-de74aec760d2"
    className="w-layout-blockcontainer container w-container transform opacity-100 translate-y-0 scale-100 rotate-0 skew-0 preserve-3d transition">
    <div id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1" 
         className="w-layout-cell flex justify-center items-center mx-auto text-center">
      <h1 className="h1 mainh1 text-2xl text-white text-center">
        <div className="mx-[10vw] text-center pt-[2vh]">
          <span className="green text-black text-[30px] ">{firstRow}</span><br />
        </div>  
        
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-[6vh] mb-[10vh] justify-center items-center">
          
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] md:leading-[2.4vh] leading-9">
              {firstTitle}
              <h4>{firstDescription}</h4>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] md:leading-[2.4vh] leading-9">
              {secondTitle}
              <h4>{secondDescription}</h4>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] md:leading-[2.4vh] leading-9">
              {thirdTitle}
              <h4>{thirdDescription}</h4>
            </span>
          </div>
        
          <div className="flex flex-col items-center text-center justify-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="star" 
                 className="mb-[1vh]" width="45" />
            <span className="color-white text-black text-[23px] md:leading-[2.4vh] leading-9">
              {fourthTitle}
              <h4>{fourthDescription}</h4>
            </span>
          </div>
          
        </div>
        <h4 className="text-black">{secondParrafo}</h4>
      </h1>
    </div>
  </section>
</section>

    )
}