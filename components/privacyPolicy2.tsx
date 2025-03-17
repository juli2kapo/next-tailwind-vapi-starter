"use client"
import React from 'react';
import { useLanguage } from "./componentProvider";

const PrivacyPolicy = () => {
  const { currentLanguage } = useLanguage();
  
  // Translation variables
  let privacyTitle;
  let lastUpdated;
  let intro;
  let interpretationTitle;
  let interpretationContent;
  let definitionsTitle;
  let accountDef;
  let companyDef;
  let cookiesDef;
  let countryDef;
  let deviceDef;
  let personalDataDef;
  let serviceDef;
  let serviceProviderDef;
  let usageDataDef;
  let websiteDef;
  let youDef;
  let collectingTitle;
  let typesDataTitle;
  let personalDataTitle;
  let personalDataList;
  let usageDataTitle;
  let usageDataContent1;
  let usageDataContent2;
  let messagesTitle;
  let messagesContent;
  let useDataTitle;
  let useDataList;
  let securityTitle;
  let securityContent;
  let thirdPartyTitle;
  let thirdPartyContent;
  let thirdPartyList;
  let rightsTitle;
  let rightsContent;
  let complianceTitle;
  let complianceContent;
  let retentionTitle;
  let retentionContent;
  let childrenTitle;
  let childrenContent;
  let updatesTitle;
  let updatesContent;
  let contactTitle;
  let contactContent;
  let legalBasisTitle;
  let legalBasisContent;
  let transfersTitle;
  let transfersContent;
  let rightsList;
  let breachTitle;
  let breachContent;
  let ccpaTitle;
  let ccpaContent;
  contactContent

  switch(currentLanguage) {
    case "EN":
      privacyTitle = "Privacy Policy";
      legalBasisTitle = "Legal Basis for Processing";
      legalBasisContent = "We process your data based on: (1) Contractual obligations, (2) Legitimate business interests, and (3) Your explicit consent when required.";
      transfersTitle = "International Data Transfers";
      transfersContent = "Your data is stored in databases located in the United States. We ensure protection through Standard Contractual Clauses approved by European authorities.";
      breachTitle = "Data Breaches";
      breachContent = "In case of a data breach, we will notify affected users and authorities within 72 hours of discovery as required by law.";
      ccpaTitle = "CCPA Compliance";
      ccpaContent = "We do not and will never sell your personal data to third parties.";
      lastUpdated = "Last updated: Monday 17, March 2025";
      intro = "This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.";
      interpretationTitle = "Interpretation and Definitions";
      interpretationContent = "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.";
      definitionsTitle = "Definitions";
      accountDef = "Account: A unique account created for You to access our Service or parts of our Service.";
      companyDef = "Company: Elykia (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement).";
      cookiesDef = "Cookies: Small files placed on Your device containing browsing history details.";
      countryDef = "Country: Argentina.";
      deviceDef = "Device: Any device that can access the Service (computer, cellphone, tablet).";
      personalDataDef = "Personal Data: Information relating to an identified or identifiable individual.";
      serviceDef = "Service: Refers to the Website.";
      serviceProviderDef = "Service Provider: Third-party companies/individuals employed to facilitate the Service.";
      usageDataDef = "Usage Data: Data collected automatically through Service usage.";
      websiteDef = "Website: Elykia bots, accessible from elykia.com.ar.";
      youDef = "You: Individual or entity accessing/using the Service.";
      collectingTitle = "Collecting and Using Your Personal Data";
      typesDataTitle = "Types of Data Collected";
      personalDataTitle = "Personal Data";
      personalDataList = "May include: Email, Name, Phone, Address, Usage Data";
      usageDataTitle = "Usage Data";
      usageDataContent1 = "Includes IP address, browser type, pages visited, device information";
      usageDataContent2 = "When accessing via mobile, we collect device type, mobile OS, and browser type.";
      messagesTitle = "Messages";
      messagesContent = "Chatbot interactions are stored to improve service quality.";
      useDataTitle = "Use of Personal Data";
      useDataList = [
        "Service provision and maintenance",
        "Account management",
        "Contract performance",
        "User communication",
        "News and offers",
        "Request management"
      ];
      securityTitle = "Data Security";
      securityContent = "We implement encryption and security measures, though no system is 100% secure.";
      thirdPartyTitle = "Third-Party Services";
      thirdPartyContent = "We use:";
      thirdPartyList = ["META for WhatsApp/Facebook/Instagram integration"];
      rightsTitle = "User Rights";
      rightsContent = "You have the right to:";
      rightsList = [
        "Access your personal data",
        "Correct inaccurate information",
        "Delete your data",
        "Data portability",
        "Object to processing",
        "Restrict processing",
        "Withdraw consent"
      ];
      complianceTitle = "Compliance";
      complianceContent = "We adhere to Argentina's Personal Data Protection Law (Ley 25.326), GDPR (EU General Data Protection Regulation), and CCPA (California Consumer Privacy Act). Contact us with any concerns.";
      retentionTitle = "Data Retention";
      retentionContent = "We retain personal data for 3 years unless required longer by law.";
      childrenTitle = "Children's Privacy";
      childrenContent = "Our service does not target and is not intended for users under 16 years of age.";
      updatesTitle = "Policy Updates";
      updatesContent = "We may update this policy and will notify you via email of significant changes.";
      contactTitle = "Contact Us";
      contactContent = `Address: Anibal Troilo 906, Capital Federal, Argentina | Phone: +5491122700514 | Email: `;
      break;
    default: // ES
      privacyTitle = "Política de Privacidad";
      legalBasisTitle = "Base Legal para el Procesamiento";
      legalBasisContent = "Procesamos sus datos basados en: (1) Obligaciones contractuales, (2) Intereses comerciales legítimos y (3) Su consentimiento explícito cuando sea necesario.";
        transfersTitle = "Transferencias Internacionales de Datos";
        transfersContent = "Sus datos se almacenan en bases de datos ubicadas en Estados Unidos. Garantizamos protección mediante Cláusulas Contractuales Estándar aprobadas por autoridades europeas.";
        breachTitle = "Violaciones de Datos";
        breachContent = "En caso de una violación de datos, notificaremos a los usuarios afectados y a las autoridades dentro de las 72 horas posteriores al descubrimiento según lo requiere la ley.";
        ccpaTitle = "Cumplimiento de CCPA";
        ccpaContent = "No vendemos ni venderemos sus datos personales a terceros.";
      lastUpdated = "Última actualización: Lunes 17, Marzo 2025";
      intro = "Esta Política de Privacidad describe Nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de Su información cuando utiliza el Servicio y le informa sobre Sus derechos de privacidad y cómo la ley lo protege.";
      interpretationTitle = "Interpretación y Definiciones";
      interpretationContent = "Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural.";
      definitionsTitle = "Definiciones";
      accountDef = "Cuenta: Una cuenta única creada para que Usted acceda a nuestro Servicio o partes de nuestro Servicio.";
      companyDef = "Empresa: Elykia (referida como 'la Empresa', 'Nosotros', 'Nos' o 'Nuestro' en este Acuerdo).";
      cookiesDef = "Cookies: Pequeños archivos colocados en Su dispositivo que contienen detalles del historial de navegación.";
      countryDef = "País: Argentina.";
      deviceDef = "Dispositivo: Cualquier dispositivo que pueda acceder al Servicio (computadora, teléfono, tableta).";
      personalDataDef = "Datos Personales: Información relacionada con un individuo identificado o identificable.";
      serviceDef = "Servicio: Se refiere al Sitio Web.";
      serviceProviderDef = "Proveedor de Servicios: Terceros empleados para facilitar el Servicio.";
      usageDataDef = "Datos de Uso: Datos recopilados automáticamente mediante el uso del Servicio.";
      websiteDef = "Sitio Web: Elykia bots, accesible desde elykia.com.ar.";
      youDef = "Usted: Individuo o entidad que accede/utiliza el Servicio.";
      collectingTitle = "Recolección y Uso de Datos Personales";
      typesDataTitle = "Tipos de Datos Recolectados";
      personalDataTitle = "Datos Personales";
      personalDataList = "Puede incluir: Email, Nombre, Teléfono, Dirección, Datos de Uso";
      usageDataTitle = "Datos de Uso";
      usageDataContent1 = "Incluye dirección IP, tipo de navegador, páginas visitadas, información del dispositivo";
      usageDataContent2 = "Al acceder vía móvil, recolectamos tipo de dispositivo, SO móvil y tipo de navegador.";
      messagesTitle = "Mensajes";
      messagesContent = "Las interacciones con el chatbot se almacenan para mejorar la calidad del servicio.";
      useDataTitle = "Uso de Datos Personales";
      useDataList = [
        "Provisión y mantenimiento del servicio",
        "Gestión de cuentas",
        "Ejecución de contratos",
        "Comunicación con usuarios",
        "Noticias y ofertas",
        "Gestión de solicitudes"
      ];
      securityTitle = "Seguridad de Datos";
      securityContent = "Implementamos cifrado y medidas de seguridad, aunque ningún sistema es 100% seguro.";
      thirdPartyTitle = "Servicios de Terceros";
      thirdPartyContent = "Utilizamos:";
      thirdPartyList = ["META para integración con WhatsApp, Facebook e Instagram"];
      rightsTitle = "Derechos del Usuario";
      rightsContent = "Usted tiene derecho a:";
      rightsList = [
        "Acceder a sus datos personales",
        "Corregir información inexacta",
        "Eliminar sus datos",
        "Portabilidad de datos",
        "Oponerse al procesamiento",
        "Restringir el procesamiento",
        "Retirar el consentimiento"
        ];
      complianceTitle = "Cumplimiento";
      complianceContent = "Cumplimos con la Ley de Protección de Datos Personales de Argentina (Ley 25.326), GDPR (Reglamento General de Protección de Datos de la UE) y CCPA (Ley de Privacidad del Consumidor de California). Contáctenos con cualquier inquietud.";
      retentionTitle = "Retención de Datos";
      retentionContent = "Conservamos datos personales por 3 años a menos que la ley requiera más tiempo.";
      childrenTitle = "Privacidad Infantil";
      childrenContent = "Nuestro servicio no está dirigido a menores de 16 años.";
      updatesTitle = "Actualizaciones de Políticas";
      updatesContent = "Podemos actualizar esta política y le notificaremos por email cambios significativos.";
      contactTitle = "Contáctenos";
        contactContent = `Dirección: Anibal Troilo 906, Capital Federal, Argentina | Teléfono: +5491122700514 | Email: `;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-24 md:px-[10vw]">
        <h1 className="text-center uppercase font-black md:text-[6vh] text-[24px] mb-8">
          {privacyTitle}
        </h1>
        
        <div className="space-y-8 md:space-y-12">
          <div className="border-b border-gray-700 pb-8">
            <p className="text-gray-400 md:text-[2vh] text-sm mb-4">
              {lastUpdated}
            </p>
            <p className="md:text-[2.5vh] text-base text-gray-300 leading-relaxed">
              {intro}
            </p>
          </div>

          {/* Interpretation Section */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{interpretationTitle}</h2>
            <h3 className="text-[3vh] font-bold mb-4 mt-8">{interpretationTitle.split(' ')[0]}</h3>
            <p className="mb-6">{interpretationContent}</p>

            <h3 className="text-[3vh] font-bold mb-4">{definitionsTitle}</h3>
            <ul className="space-y-4">
              {[accountDef, companyDef, cookiesDef, countryDef, deviceDef, personalDataDef, 
                serviceDef, serviceProviderDef, usageDataDef, websiteDef, youDef].map((definition, index) => (
                <li key={index} className="flex items-start">
                  <img src="https://i.imgur.com/yHSIico.png" className="w-[3vh] mr-4 mt-1" alt="bullet" />
                  <div>
                    <span className="text-[2.5vh]">{definition.split(':')[0]}:</span>
                    <span className="ml-2 text-gray-300 text-[2vh]">{definition.split(':').slice(1).join(':')}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Collection Section */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{collectingTitle}</h2>
            
            <h3 className="text-[3vh] font-bold mb-4 mt-8">{typesDataTitle}</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{personalDataTitle}</h4>
                <p className="text-gray-300 text-[2vh]">{personalDataList}</p>
              </div>
              
              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{usageDataTitle}</h4>
                <p className="text-gray-300 text-[2vh]">{usageDataContent1}</p>
                <p className="text-gray-300 text-[2vh] mt-2">{usageDataContent2}</p>
              </div>

              <div>
                <h4 className="text-[2.5vh] font-semibold mb-2">{messagesTitle}</h4>
                <p className="text-gray-300 text-[2vh]">{messagesContent}</p>
              </div>
            </div>

            <h3 className="text-[3vh] font-bold mb-4 mt-8">{useDataTitle}</h3>
            <ul className="space-y-4">
              {useDataList.map((item, index) => (
                <li key={index} className="flex items-start">
                  <img src="https://i.imgur.com/yHSIico.png" className="w-[3vh] mr-4 mt-1" alt="bullet" />
                  <span className="text-gray-300 text-[2vh]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        
          {/* Data Security */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{securityTitle}</h2>
            <p className="text-gray-300 text-[2vh]">{securityContent}</p>
          </div>

          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{legalBasisTitle}</h2>
            <p className="text-gray-300 text-[2vh]">{legalBasisContent}</p>
          </div>
          <div className="border-b border-gray-700 pb-8">
  <h2 className="text-[3.5vh] font-bold uppercase mb-6">{transfersTitle}</h2>
  <p className="text-gray-300 text-[2vh]">{transfersContent}</p>
</div>

          {/* Third-Party Services */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{thirdPartyTitle}</h2>
            <p className="text-gray-300 text-[2vh] mb-4">{thirdPartyContent}</p>
            <ul className="list-disc pl-6">
              {thirdPartyList.map((item, index) => (
                <li key={index} className="text-gray-300 text-[2vh]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* User Rights */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{rightsTitle}</h2>
            <p className="text-gray-300 text-[2vh] mb-4">{rightsContent}</p>
            <ul className="space-y-4">
                {rightsList.map((right, index) => (
                <li key={index} className="flex items-start">
                    <img src="https://i.imgur.com/yHSIico.png" className="w-[3vh] mr-4 mt-1" alt="bullet" />
                    <span className="text-gray-300 text-[2vh]">{right}</span>
                </li>
                ))}
            </ul>
            {
                currentLanguage === "EN" ?
                <p className="mt-4 text-gray-300 text-[2vh]">These rights can be exercised through your account profile settings or by contacting us directly.</p>
                :
                <p className="mt-4 text-gray-300 text-[2vh]">Estos derechos pueden ejercerse a través de la configuración de su perfil de cuenta o poniéndose en contacto con nosotros directamente.</p>
            }
            
          </div>
        {/* Data Breach Notification */}
        <div className="border-b border-gray-700 pb-8">
        <h2 className="text-[3.5vh] font-bold uppercase mb-6">{breachTitle}</h2>
        <p className="text-gray-300 text-[2vh]">{breachContent}</p>
        </div>

        {/* CCPA Compliance */}
        <div className="border-b border-gray-700 pb-8">
        <h2 className="text-[3.5vh] font-bold uppercase mb-6">{ccpaTitle}</h2>
        <p className="text-gray-300 text-[2vh]">{ccpaContent}</p>
        </div>
          {/* Compliance */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{complianceTitle}</h2>
            <p className="text-gray-300 text-[2vh]">{complianceContent}</p>
          </div>

          {/* Data Retention */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{retentionTitle}</h2>
            <p className="text-gray-300 text-[2vh]">{retentionContent}</p>
          </div>

          {/* Children's Privacy */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{childrenTitle}</h2>
            <p className="text-gray-300 text-[2vh]">{childrenContent}</p>
          </div>

          {/* Policy Updates */}
          <div className="border-b border-gray-700 pb-8">
            <h2 className="text-[3.5vh] font-bold uppercase mb-6">{updatesTitle}</h2>
            <p className="text-gray-300 text-[2vh]">{updatesContent}</p>
          </div>

          {/* Contact Section */}
          <div className="pt-8">
  <h2 className="text-[3.5vh] font-bold uppercase mb-6">{contactTitle}</h2>
  <p className="text-gray-300 text-[2vh]">
    {contactContent}
    <a href="mailto:sesto@elykia.com.ar" className="text-blue-400 underline">
      sesto@elykia.com.ar
    </a>
  </p>
</div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;