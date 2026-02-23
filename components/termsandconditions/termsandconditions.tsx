"use client"

import { useLanguage } from "../componentProvider";

const TermsAndConditions = () => {
  const { currentLanguage } = useLanguage();
  
  // Translation variables
  let termsTitle;
  let lastUpdated;
  let intro;
  
  let legalTitle;
  let companyName;
  let ein;
  let address;
  let activity;
  let emailContact;
  let phoneContact;

  let servicesTitle;
  let servicesContent;

  let paymentTitle;
  let pricingSub;
  let pricingContent;
  let recurringSub;
  let recurringContent;
  let defaultSub;
  let defaultContent;

  let refundTitle;
  let customDevSub;
  let customDevContent;
  let cancelSub;
  let cancelContent;

  let deliveryTitle;
  let timesSub;
  let timesContent;
  let supportSub;
  let supportContent;

  let ipTitle;
  let licenseSub;
  let licenseContent;
  let codeSub;
  let codeContent;
  let portfolioSub;
  let portfolioContent;

  switch(currentLanguage) {
    case "EN":
      termsTitle = "Terms and Conditions";
      lastUpdated = "Last updated: Monday, February 23, 2026";
      intro = "These Terms and Conditions govern your use of our services. Please read them carefully before using our software, chatbots, or website development services.";
      
      legalTitle = "1. Legal Information of the Company";
      companyName = "Company Name: Elykia LLC.";
      ein = "Tax ID (EIN): 36-5165570.";
      address = "Principal Address: 30 N Gould St #59659, Sheridan, WY 82801, United States.";
      activity = "Principal Activity: AI process automation, chatbot development, and software services.";
      emailContact = "Contact Email: info@elykia.com.ar";
      phoneContact = "Contact Phone: +54 9 11 2634-7201";

      servicesTitle = "2. Description of Services";
      servicesContent = "Elykia LLC provides technology development services, which include, but are not limited to: website development, process automation using Artificial Intelligence, and custom chatbot creation. The specifications, scope, and functionalities of each project will be defined in writing in the commercial proposal or service contract accepted by the client before work begins.";

      paymentTitle = "3. Payment and Billing Conditions";
      pricingSub = "Pricing Structure";
      pricingContent = "Services may consist of setup or initial development fees (one-time payment) and maintenance, hosting, or support fees (recurring payments or subscriptions).";
      recurringSub = "Recurring Subscriptions";
      recurringContent = "For services requiring continuous maintenance, the client authorizes the automatic charge of the agreed fee to their payment method at the beginning of each billing cycle.";
      defaultSub = "Payment Default";
      defaultContent = "In the event that a recurring payment is rejected or not received by the due date, Elykia LLC reserves the right to temporarily suspend services or deactivate the chatbots/websites until the situation is resolved.";

      refundTitle = "4. Cancellation and Refund Policies";
      customDevSub = "Custom Development Services";
      customDevContent = "Due to the custom nature of software, chatbot, and website creation, no refunds will be issued once development has begun. The initial payment compensates for the time and technical resources invested.";
      cancelSub = "Subscription Cancellation";
      cancelContent = "The client may cancel any recurring or maintenance service by notifying info@elykia.com.ar in writing at least 7 days prior to the next billing cycle. Cancellation will prevent future charges, but no prorated refunds will be generated for the current month.";

      deliveryTitle = "5. Delivery Times and Support";
      timesSub = "Execution Times";
      timesContent = "The estimated delivery times for each project will only begin when the client has provided all the required material, access, and information. The standard timeframe is 15 to 30 business days, subject to variations depending on the project's complexity.";
      supportSub = "Technical Support";
      supportContent = "Elykia LLC will provide technical support to resolve software bugs or errors for a period of 30 days after delivery. Any structural modification, addition of new features, or changes to conversation flows outside the initial scope will be quoted separately.";

      ipTitle = "6. Intellectual Property";
      licenseSub = "License of Use";
      licenseContent = "Upon full settlement of payments corresponding to the development, Elykia LLC grants the client an exclusive, non-transferable, and perpetual license to use the developed website or chatbot.";
      codeSub = "Code Ownership";
      codeContent = "The underlying source code, automation methodologies, and proprietary integrations developed by Elykia LLC will remain the intellectual property of the company, unless otherwise agreed in writing.";
      portfolioSub = "Portfolio";
      portfolioContent = "Elykia LLC reserves the right to mention the project and use screenshots for promotional purposes in its portfolio, unless the client expressly requests a Non-Disclosure Agreement (NDA).";
      break;
      
    default: // ES
      termsTitle = "Términos y Condiciones";
      lastUpdated = "Última actualización: Lunes 23, Febrero 2026";
      intro = "Estos Términos y Condiciones regulan el uso de nuestros servicios. Por favor, léalos cuidadosamente antes de utilizar nuestros servicios de desarrollo de software, chatbots o páginas web.";
      
      legalTitle = "1. Información Legal de la Empresa";
      companyName = "Nombre de la Empresa: Elykia LLC.";
      ein = "Identificador Fiscal (EIN): 36-5165570.";
      address = "Domicilio Principal: 30 N Gould St #59659, Sheridan, WY 82801, Estados Unidos.";
      activity = "Actividad Principal: Automatización de procesos con IA, desarrollo de chatbots y servicios de software.";
      emailContact = "Correo Electrónico de Contacto: info@elykia.com.ar";
      phoneContact = "Teléfono de Contacto: +54 9 11 2634-7201";

      servicesTitle = "2. Descripción de los Servicios";
      servicesContent = "Elykia LLC provee servicios de desarrollo tecnológico, que incluyen, pero no se limitan a: desarrollo de páginas web, automatización de procesos mediante Inteligencia Artificial y creación de chatbots personalizados. Las especificaciones, alcance y funcionalidades de cada proyecto se definirán por escrito en la propuesta comercial o contrato de servicio aceptado por el cliente antes del inicio del trabajo.";

      paymentTitle = "3. Condiciones de Pago y Facturación";
      pricingSub = "Estructura de Precios";
      pricingContent = "Los servicios pueden constar de tarifas de configuración o desarrollo inicial (pago único) y tarifas de mantenimiento, alojamiento (hosting) o soporte (pagos recurrentes o suscripciones).";
      recurringSub = "Suscripciones Recurrentes";
      recurringContent = "Para los servicios que requieran mantenimiento continuo, el cliente autoriza el cobro automático de la tarifa acordada en su método de pago al inicio de cada ciclo de facturación.";
      defaultSub = "Incumplimiento de Pago";
      defaultContent = "En caso de que un pago recurrente sea rechazado o no se reciba en la fecha de vencimiento, Elykia LLC se reserva el derecho de suspender temporalmente los servicios o desactivar los chatbots/páginas web hasta que se regularice la situación.";

      refundTitle = "4. Políticas de Cancelación y Reembolso";
      customDevSub = "Servicios de Desarrollo a Medida";
      customDevContent = "Debido a la naturaleza personalizada de la creación de software, chatbots y sitios web, no se emitirán reembolsos una vez que el desarrollo haya comenzado. El pago inicial compensa el tiempo y los recursos técnicos invertidos.";
      cancelSub = "Cancelación de Suscripciones";
      cancelContent = "El cliente puede cancelar cualquier servicio recurrente o de mantenimiento notificando por escrito a info@elykia.com.ar con al menos 7 días de anticipación al próximo ciclo de facturación. La cancelación evitará cobros futuros, pero no se generarán reembolsos prorrateados por el mes en curso.";

      deliveryTitle = "5. Plazos de Entrega y Soporte";
      timesSub = "Tiempos de Ejecución";
      timesContent = "Los plazos de entrega estimados para cada proyecto comenzarán a regir únicamente cuando el cliente haya entregado la totalidad del material, accesos e información requerida. El plazo estándar es de 15 a 30 días hábiles, sujeto a variaciones según la complejidad del proyecto.";
      supportSub = "Soporte Técnico";
      supportContent = "Elykia LLC proporcionará soporte técnico para resolver errores o fallas (bugs) del software entregado durante un período de 30 días posteriores a la entrega. Cualquier modificación estructural, adición de nuevas funciones o cambios en los flujos de conversación fuera del alcance inicial será cotizada por separado.";

      ipTitle = "6. Propiedad Intelectual";
      licenseSub = "Licencia de Uso";
      licenseContent = "Tras la liquidación total de los pagos correspondientes al desarrollo, Elykia LLC otorga al cliente una licencia exclusiva, intransferible y perpetua para utilizar la página web o el chatbot desarrollado.";
      codeSub = "Propiedad del Código";
      codeContent = "El código fuente subyacente, las metodologías de automatización y las integraciones propietarias desarrolladas por Elykia LLC seguirán siendo propiedad intelectual de la empresa, a menos que se acuerde lo contrario por escrito.";
      portfolioSub = "Portafolio";
      portfolioContent = "Elykia LLC se reserva el derecho de mencionar el proyecto y utilizar capturas de pantalla con fines promocionales en su portafolio, salvo que el cliente solicite expresamente un Acuerdo de Confidencialidad (NDA).";
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-24 md:px-[10vw]">
        <h1 className="text-center uppercase font-black md:text-[6vh] text-[24px] mb-8">
          {termsTitle}
        </h1>
        
        <div className="space-y-8 md:space-y-12">
          {/* Header Info */}
          <div className="border-b border-gray-700 pb-8">
            <p className="text-gray-400 md:text-[2vh] text-sm mb-4">
              {lastUpdated}
            </p>
            <p className="md:text-[2.5vh] text-base text-gray-300 leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Section 1: Legal Information */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{legalTitle}</h2>
            <ul className="space-y-4">
              {[companyName, ein, address, activity, emailContact, phoneContact].map((info, index) => (
                <li key={index} className="flex items-start">
                  <img src="https://i.imgur.com/yHSIico.png" className="w-[3vh] mr-4 mt-1" alt="bullet" />
                  <span className="text-gray-300 text-[2vh]">{info}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 2: Services */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{servicesTitle}</h2>
            <p className="text-gray-300 text-[2vh]">{servicesContent}</p>
          </div>

          {/* Section 3: Payment and Billing */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{paymentTitle}</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{pricingSub}</h4>
                <p className="text-gray-300 text-[2vh]">{pricingContent}</p>
              </div>
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{recurringSub}</h4>
                <p className="text-gray-300 text-[2vh]">{recurringContent}</p>
              </div>
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{defaultSub}</h4>
                <p className="text-gray-300 text-[2vh]">{defaultContent}</p>
              </div>
            </div>
          </div>

          {/* Section 4: Refunds & Cancellations */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{refundTitle}</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{customDevSub}</h4>
                <p className="text-gray-300 text-[2vh]">{customDevContent}</p>
              </div>
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{cancelSub}</h4>
                <p className="text-gray-300 text-[2vh]">{cancelContent}</p>
              </div>
            </div>
          </div>

          {/* Section 5: Delivery & Support */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{deliveryTitle}</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{timesSub}</h4>
                <p className="text-gray-300 text-[2vh]">{timesContent}</p>
              </div>
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{supportSub}</h4>
                <p className="text-gray-300 text-[2vh]">{supportContent}</p>
              </div>
            </div>
          </div>

          {/* Section 6: Intellectual Property */}
          <div className="pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{ipTitle}</h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{licenseSub}</h4>
                <p className="text-gray-300 text-[2vh]">{licenseContent}</p>
              </div>
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{codeSub}</h4>
                <p className="text-gray-300 text-[2vh]">{codeContent}</p>
              </div>
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{portfolioSub}</h4>
                <p className="text-gray-300 text-[2vh]">{portfolioContent}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;