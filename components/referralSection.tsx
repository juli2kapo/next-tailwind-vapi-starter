"use client";
import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function ReferralSection() {
  const { currentLanguage } = useLanguage();
  let firstRow;
  let parrafo;
  let secondRow;
  let secondParrafo;
  let thirdRow;
  let thirdParrafo;
  let fourthParrafo;
  let buttonText;
  
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
      buttonText = "Contactanos";
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
      buttonText = "Contact Us";
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
      buttonText = "Contactanos";
  }

  return (
    <section className="bg-black py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Elykia Logo and Brand */}
          <div className="horizontal-div justify-center mb-8">
            <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" width="40" />
            <div className="elykia-text text-white ml-2">ELYKIA</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 uppercase">
            <span className="green">{firstRow}</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-2xl max-w-5xl mx-auto leading-relaxed">
            {parrafo}
          </p>
        </div>

        {/* Cards Section - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto mb-20">
          {/* Casual Reseller Card */}
          <div className="services-card bg-black bg-opacity-60 border-2 border-gray-800 hover:border-purple-400 transition-all duration-300 p-10 rounded-lg flex-1">
            <div className="flex items-center mb-8">
              <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="Casual Reseller Icon" width="50" className="mr-6" />
              <h2 className="h3 white text-2xl md:text-3xl font-bold uppercase">{secondRow}</h2>
            </div>
            
            <div className="text-gray-300 space-y-6">
              <p className="leading-relaxed text-lg">
                {secondParrafo}
              </p>
              
              <div className="border-t border-gray-700 pt-6">
                <p className="text-base leading-relaxed">
                  {thirdParrafo}
                </p>
              </div>
            </div>
          </div>

          {/* Marketing Agencies Card */}
          <div className="services-card bg-black bg-opacity-60 border-2 border-gray-800 hover:border-purple-400 transition-all duration-300 p-10 rounded-lg flex-1">
            <div className="flex items-center mb-8">
              <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="Marketing Agency Icon" width="50" className="mr-6" />
              <h2 className="h3 white text-2xl md:text-3xl font-bold uppercase">{thirdRow}</h2>
            </div>
            
            <div className="text-gray-300">
              <p className="leading-relaxed text-lg">
                {fourthParrafo}
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/contact"
            className="button-2 inline-flex items-center px-12 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}