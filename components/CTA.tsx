"use client"

import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function CustomDevCTA() {
  const {currentLanguage} = useLanguage();
  let title;
  let description;
  let buttonText;

  switch (currentLanguage){
    case "EN":
      title = "Ready to Transform Your Business?";
      description = "Let's discuss how our custom AI solutions can elevate your operations and drive growth. Get in touch for a no-obligation consultation.";
      buttonText = "Schedule a Free Consultation";
      break;
    case "ES":
      title = "¿Listo para Transformar tu Negocio?";
      description = "Discutamos cómo nuestras soluciones de IA personalizadas pueden elevar tus operaciones e impulsar el crecimiento. Contáctanos para una consulta sin compromiso.";
      buttonText = "Comunicate con nosotros";
      break;
    default:
      title = "¿Listo para Transformar tu Negocio?";
      description = "Discutamos cómo nuestras soluciones de IA personalizadas pueden elevar tus operaciones e impulsar el crecimiento. Contáctanos para una consulta sin compromiso.";
      buttonText = "Programa una Consulta Gratuita";
  }

  return (
    // <section className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 py-16 md:py-24">
    <section className="bg-gray-100 py-16 md:py-24">
    
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-purple-400 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}