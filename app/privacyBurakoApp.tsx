"use client"

import { useLanguage } from "@/components/componentProvider";

export default function Home() {
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
  let countryDef;
  let deviceDef;
  let personalDataDef;
  let serviceDef;
  let serviceProviderDef;
  let youDef;
  let collectingTitle;
  let typesDataTitle;
  let personalDataTitle;
  let personalDataContent;
  let cameraUsageTitle;
  let cameraUsageContent;
  let diagnosticDataTitle;
  let diagnosticDataContent;
  let useDataTitle;
  let useDataList;
  let securityTitle;
  let securityContent;
  let thirdPartyTitle;
  let thirdPartyList;
  let rightsTitle;
  let rightsContent;
  let rightsList;
  let rightsInstructions;
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

  switch(currentLanguage) {
    case "EN":
      privacyTitle = "Burako Calculator - Privacy Policy";
      lastUpdated = "Last updated: Monday, March 17, 2025";
      intro = "This Privacy Policy describes Our policies on the collection, use, and disclosure of Your information when You use the Application and informs You about Your privacy rights and how the law protects You.";
      interpretationTitle = "1. Interpretation and Definitions";
      interpretationContent = "Words with an initial capital letter are defined under the following conditions. These definitions apply whether they appear in singular or plural form.";
      definitionsTitle = "Definitions";
      accountDef = "Account: A unique account for accessing our Service.";
      companyDef = "Company: Elykia (referred to as 'the Company', 'We', 'Us', or 'Our').";
      countryDef = "Country: Argentina.";
      deviceDef = "Device: Any device that can access the Service (smartphone, tablet).";
      personalDataDef = "Personal Data: Information related to an identified or identifiable individual.";
      serviceDef = "Application (or Service): Refers to Burako Calculator, the software provided by the Company.";
      serviceProviderDef = "Service Provider: Third parties employed to facilitate the Service or analyze its use.";
      youDef = "You: The individual accessing or using the Service.";
      collectingTitle = "2. Collection and Use of Personal Data";
      typesDataTitle = "Types of Data Collected";
      personalDataTitle = "Personal Information";
      personalDataContent = "While using Our Application, we may ask you to provide personally identifiable information, such as your email address, for account management and subscription synchronization.";
      cameraUsageTitle = "Camera Usage";
      cameraUsageContent = "Our Application requires access to your device's Camera. This access is exclusively used for capturing images of Burako tiles for automatic AI-powered score calculation. Images are processed to extract the score and are not permanently stored on our servers or shared with third parties.";
      diagnosticDataTitle = "Usage and Diagnostic Data";
      diagnosticDataContent = "We automatically collect information about app performance, technical errors, and device model to ensure service stability.";
      useDataTitle = "Use of Your Personal Data";
      useDataList = [
        "To provide and maintain the Service, including tile recognition and score calculation.",
        "To manage your subscription status (e.g., 'Pro' or 'Premium').",
        "For anonymous AI model improvement to enhance recognition accuracy.",
        "To communicate with you regarding updates or technical support."
      ];
      securityTitle = "3. Data Security";
      securityContent = "We implement industry-standard encryption and security measures. However, no electronic storage method is 100% secure.";
      thirdPartyTitle = "4. Third-Party Services (Providers)";
      thirdPartyList = [
        "RevenueCat: Used to manage in-app subscriptions and purchases.",
        "Google AdMob: Used to display advertisements in the free version. This provider may collect advertising identifiers to personalize ads.",
        "Apple App Store / Google Play Store: Used for payment processing. We do not store your credit card information."
      ];
      rightsTitle = "5. User Rights";
      rightsContent = "Under data protection laws (including Argentina's Law 25.326, GDPR, and CCPA), you have the right to:";
      rightsList = [
        "Access, correct, or delete your personal data.",
        "Withdraw consent for camera use at any time from your device settings.",
        "Request data portability.",
        "Object to data processing for marketing purposes."
      ];
      rightsInstructions = "You can exercise these rights by contacting us directly.";
      complianceTitle = "6. Legal Compliance";
      complianceContent = "We comply with Argentina's Personal Data Protection Law (Law 25.326), GDPR (EU General Data Protection Regulation), and CCPA (California Consumer Privacy Act).";
      retentionTitle = "7. Data Retention";
      retentionContent = "We retain personal data for as long as necessary to fulfill the purposes described, or for a maximum of 3 years of inactivity.";
      childrenTitle = "8. Children's Privacy";
      childrenContent = "Our service is not directed to children under 13 (or 16 in some jurisdictions). We do not knowingly collect information from minors without parental consent.";
      updatesTitle = "9. Policy Updates";
      updatesContent = "We may update this policy and will notify you of significant changes.";
      contactTitle = "10. Contact Us";
      contactContent = "If you have questions about this policy, please contact us:";
      break;
    default: // ES
      privacyTitle = "Burako Calculator - Política de Privacidad";
      lastUpdated = "Última actualización: Lunes 17, Marzo 2025";
      intro = "Esta Política de Privacidad describe Nuestras políticas sobre la recopilación, uso y divulgación de Su información cuando utiliza la Aplicación y le informa sobre Sus derechos de privacidad y cómo la ley lo protege.";
      interpretationTitle = "1. Interpretación y Definiciones";
      interpretationContent = "Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Estas definiciones se aplican tanto en singular como en plural.";
      definitionsTitle = "Definiciones";
      accountDef = "Cuenta: Una cuenta única para acceder a nuestro Servicio.";
      companyDef = "Empresa: Elykia (referida como 'la Empresa', 'Nosotros', 'Nos' o 'Nuestro').";
      countryDef = "País: Argentina.";
      deviceDef = "Dispositivo: Cualquier dispositivo que pueda acceder al Servicio (teléfono inteligente, tableta).";
      personalDataDef = "Datos Personales: Información relacionada con un individuo identificado o identificable.";
      serviceDef = "Aplicación (o Servicio): Se refiere a Burako Calculator, el software proporcionado por la Empresa.";
      serviceProviderDef = "Proveedor de Servicios: Terceros empleados para facilitar el Servicio o analizar cómo se utiliza.";
      youDef = "Usted: El individuo que accede o utiliza el Servicio.";
      collectingTitle = "2. Recolección y Uso de Datos Personales";
      typesDataTitle = "Tipos de Datos Recolectados";
      personalDataTitle = "Datos Personales";
      personalDataContent = "Mientras utiliza Nuestra Aplicación, podemos pedirle que nos proporcione información de identificación personal, como su dirección de correo electrónico, para la gestión de la cuenta y la sincronización de la suscripción.";
      cameraUsageTitle = "Uso de la Cámara";
      cameraUsageContent = "Nuestra Aplicación requiere acceso a la Cámara de su dispositivo. Este acceso se utiliza exclusivamente para capturar imágenes de las fichas de Burako para el cálculo automático de puntaje mediante IA. Las imágenes se procesan para extraer el puntaje y no se almacenan de forma permanente en nuestros servidores ni se comparten con terceros.";
      diagnosticDataTitle = "Datos de Uso y Diagnóstico";
      diagnosticDataContent = "Recopilamos información automática sobre el rendimiento de la app, errores técnicos y modelo de dispositivo para garantizar la estabilidad del servicio.";
      useDataTitle = "Uso de Sus Datos Personales";
      useDataList = [
        "Para proveer y mantener el Servicio, incluyendo el reconocimiento de fichas y el cálculo de puntajes.",
        "Para gestionar su estado de suscripción (ej. 'Pro' o 'Premium').",
        "Para la mejora anónima del modelo de IA para aumentar la precisión del reconocimiento.",
        "Para comunicarnos con usted sobre actualizaciones o soporte técnico."
      ];
      securityTitle = "3. Seguridad de los Datos";
      securityContent = "Implementamos cifrado y medidas de seguridad estándar de la industria. Sin embargo, ningún método de almacenamiento electrónico es 100% seguro.";
      thirdPartyTitle = "4. Servicios de Terceros (Proveedores)";
      thirdPartyList = [
        "RevenueCat: Utilizado para gestionar las suscripciones y compras dentro de la aplicación.",
        "Google AdMob: Utilizado para mostrar anuncios en la versión gratuita. Este proveedor puede recopilar identificadores de publicidad para personalizar los anuncios.",
        "Apple App Store / Google Play Store: Utilizado para el procesamiento de pagos. Nosotros no almacenamos los datos de su tarjeta de crédito."
      ];
      rightsTitle = "5. Derechos del Usuario";
      rightsContent = "Bajo las leyes de protección de datos (incluyendo la Ley 25.326 de Argentina, GDPR y CCPA), Usted tiene derecho a:";
      rightsList = [
        "Acceder, corregir o eliminar sus datos personales.",
        "Retirar su consentimiento para el uso de la cámara en cualquier momento desde la configuración de su dispositivo.",
        "Solicitar la portabilidad de sus datos.",
        "Oponerse al procesamiento de datos para fines de marketing."
      ];
      rightsInstructions = "Puede ejercer estos derechos contactándonos directamente.";
      complianceTitle = "6. Cumplimiento Legal";
      complianceContent = "Cumplimos con la Ley de Protección de Datos Personales de Argentina (Ley 25.326), GDPR (Reglamento General de Protección de Datos de la UE) y CCPA (Ley de Privacidad del Consumidor de California).";
      retentionTitle = "7. Retención de Datos";
      retentionContent = "Conservamos los datos personales durante el tiempo necesario para cumplir con los propósitos descritos, o por un máximo de 3 años de inactividad.";
      childrenTitle = "8. Privacidad Infantil";
      childrenContent = "Nuestro servicio no está dirigido a menores de 13 años (o 16 en algunas jurisdicciones). No recopilamos conscientemente información de menores sin el consentimiento de los padres.";
      updatesTitle = "9. Actualizaciones de la Política";
      updatesContent = "Podemos actualizar esta política y le notificaremos sobre cambios significativos.";
      contactTitle = "10. Contáctenos";
      contactContent = "Si tiene preguntas sobre esta política, puede contactarnos:";
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <div className="container mx-auto px-4 py-12 md:py-24 md:px-[10vw]">
        <header className="text-center mb-12">
          <h1 className="uppercase font-black text-3xl md:text-5xl mb-2">
            {privacyTitle}
          </h1>
          <p className="text-gray-400 text-sm">{lastUpdated}</p>
        </header>
        
        <main className="space-y-10">
          <p className="text-base text-gray-300 leading-relaxed">{intro}</p>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{interpretationTitle}</h2>
            <p className="mb-6 text-gray-400">{interpretationContent}</p>
            <h3 className="text-xl font-bold mb-3">{definitionsTitle}</h3>
            <ul className="space-y-2 list-disc list-inside">
                {[accountDef, companyDef, countryDef, deviceDef, personalDataDef, serviceDef, serviceProviderDef, youDef].map((definition, index) => (
                    <li key={index} className="text-gray-300">
                        <strong className="text-white">{definition.split(':')[0]}:</strong>{definition.split(':').slice(1).join(':')}
                    </li>
                ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{collectingTitle}</h2>
            <h3 className="text-xl font-bold mb-3">{typesDataTitle}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">{personalDataTitle}</h4>
                <p className="text-gray-400">{personalDataContent}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">{cameraUsageTitle}</h4>
                <p className="text-gray-400">{cameraUsageContent}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">{diagnosticDataTitle}</h4>
                <p className="text-gray-400">{diagnosticDataContent}</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 mt-6">{useDataTitle}</h3>
            <ul className="space-y-2 list-disc list-inside">
              {useDataList.map((item, index) => (
                <li key={index} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </section>
        
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{thirdPartyTitle}</h2>
            <ul className="space-y-2 list-disc list-inside">
              {thirdPartyList.map((item, index) => (
                <li key={index} className="text-gray-300">
                    <strong className="text-white">{item.split(':')[0]}:</strong>{item.split(':').slice(1).join(':')}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{rightsTitle}</h2>
            <p className="text-gray-400 mb-4">{rightsContent}</p>
            <ul className="space-y-2 list-disc list-inside">
                {rightsList.map((right, index) => (
                  <li key={index} className="text-gray-300">{right}</li>
                ))}
            </ul>
            <p className="mt-4 text-gray-400">{rightsInstructions}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{securityTitle}</h2>
            <p className="text-gray-400">{securityContent}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{complianceTitle}</h2>
            <p className="text-gray-400">{complianceContent}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{retentionTitle}</h2>
            <p className="text-gray-400">{retentionContent}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{childrenTitle}</h2>
            <p className="text-gray-400">{childrenContent}</p>
          </ci>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">{updatesTitle}</h2>
            <p className="text-gray-400">{updatesContent}</p>
          </section>

          <footer className="pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-bold uppercase mb-4">{contactTitle}</h2>
            <p className="text-gray-400">{contactContent}</p>
            <p className="text-gray-400">Email: <a href="mailto:sesto@elykia.com.ar" className="text-blue-400 underline">sesto@elykia.com.ar</a></p>
            <p className="text-gray-400">Phone: +5491122700514</p>
          </footer>
        </main>
      </div>
    </div>
  );
};
