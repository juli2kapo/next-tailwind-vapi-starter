"use client";
import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function ReferralSection() {
  const { currentLanguage } = useLanguage();
  let firstRow;
  let parrafo;
  let secondRow;
  let secondParrafo;
  let thirdRow
  let thirdParrafo
  let fourthParrafo
  switch (currentLanguage) {
    case "ES":
      firstRow = "Convertite en revendedor";
      parrafo =
        "En Elykia tenemos la ambición de ser algo grande, lo cual es imposible de conseguir sin aliados. Por esto, implementamos el sistema de revendedor como parte de nuestra expansión.";
      secondRow = "Revendedor casual";
      secondParrafo = "Si tenés un contacto, un conocido o un amigo que le pueda ser de utilidad nuestros servicios, ofrecemos un 30% del valor de la puesta a punto e integración por la recomendación. El pago del mismo será efectuado el mismo día del pago del servicio."
      thirdParrafo = "Información que necesitamos de vos: quien sos, a que te dedicas, a que se dedica tu contacto, que tan directo es y que servicio querés ofrecerle. (Si no es ningún servicio en especifico y solo querés que agende una consulta empresarial para que lo ayudemos en algún tema en especifico acláralo, en caso de concretar nuestra oferta para vos es la misma)"
      thirdRow = "Agencias de marketing"
      fourthParrafo = "Si sos de una agencia de marketing y te interesa nuestro servicio para distribuir en tus clientes o llegar a un acuerdo de reventa, contáctate con nosotros y agendamos una reunión para conocerte y negociar los detalles"
      break;
    case "EN":
      firstRow = "Become a reseller";
      parrafo =
        "At Elykia we have the ambition to be something big, which is impossible to achieve without allies. For this reason, we have implemented the reseller system as part of our expansion.";
      secondRow = "Casual reseller";
      secondParrafo = "If you have a contact, an acquaintance, a friend who can be useful for our services, we offer 30% of the value of the setup and integration for the recommendation. Payment will be made on the same day as the service payment."
      thirdParrafo = "Information we need from you: who you are, what you do, what your contact does, how direct it is and what service you want to offer. (If it is not any specific service and you just want to schedule a business consultation for us to help you with a specific topic, clarify it, in case of finalizing our offer for you is the same)"
      thirdRow = "Marketing agencies"
      fourthParrafo = "If you are from a marketing agency and you are interested in our service to distribute to your clients or reach a resale agreement, contact us and we will schedule a meeting to get to know you and negotiate the details."
      
      break;
    default:
      firstRow = "Convertite en revendedor";
      parrafo =
        "En Elykia tenemos la ambición de ser algo grande, lo cual es imposible de conseguir sin aliados. Por esto, implementamos el sistema de revendedor como parte de nuestra expansión.";
      secondRow = "Revendedor casual";
      secondParrafo = "Si tenés un contacto, un conocido o un amigo que le pueda ser de utilidad nuestros servicios, ofrecemos un 30% del valor de la puesta a punto e integración por la recomendación. El pago del mismo será efectuado el mismo día del pago del servicio."
      thirdParrafo = "Información que necesitamos de vos: quien sos, a que te dedicas, a que se dedica tu contacto, que tan directo es y que servicio querés ofrecerle. (Si no es ningún servicio en especifico y solo querés que agende una consulta empresarial para que lo ayudemos en algún tema en especifico acláralo, en caso de concretar nuestra oferta para vos es la misma)"
      thirdRow = "Agencias de marketing"
      fourthParrafo = "Si sos de una agencia de marketing y te interesa nuestro servicio para distribuir en tus clientes o llegar a un acuerdo de reventa, contáctate con nosotros y agendamos una reunión para conocerte y negociar los detalles"
      
  }
  return (
    <section className="section">
      <div id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2cf-f9ae67f1">
        <div className="flex flex-col p-8 lg:px-[15vw] bg-gray-100">
          <div
            id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1"
            className="w-layout-cell flex justify-center items-center m-auto text-center self-center"
          >
            <div className="mb-[1vh] m-auto">
              <h1 className="h1 mainh1 text-black">
                <span className="text-[#9B5DE5] text-[32px] leading-[3]">
                  {firstRow}
                </span>
              </h1>
            </div>
            <div>
              <p className=" uppercase font-bold text-black text-[17px] leading-4 lg:leading-8">
                {parrafo}
              </p>
            </div>
          </div>
          <div className="mx-auto my-[4vh] flex lg:flex-row flex-col justify-between">
            <div className="flex-col pr-4 flex-1 text-center">
              <p className= " text-[#9B5DE5] text-[32px] leading-[3] uppercase font-bold">
                {secondRow}
              </p>
              <p className="text-black text-[17px] leading-4 lg:leading-8 uppercase font-bold">
                {secondParrafo}
              </p>
              <br/>
              <p className="text-black text-[17px] leading-4 lg:leading-8 uppercase font-bold">
                {thirdParrafo}
              </p>
            </div>
            <div className="flex-col flex-1 text-center">
              <span className="text-[#9B5DE5] text-[32px] leading-[3] uppercase font-bold">
                {thirdRow}
              </span>
              <p className="text-black text-[17px] leading-4 lg:leading-8 uppercase font-bold">
                {fourthParrafo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
