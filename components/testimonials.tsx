"use client"
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="testimonials">
      <h2 className="section-heading text-white">Preguntas frecuentes</h2>
      <div className="flex flex-row justify-around pl-12 pr-20">
        <div className="parent-container">
          <ul className="faq space-y-6 text-center m-auto items-center">
            {faqData.map((item, index) => (
              <div key={index} className="text-center">
              <li
                key={index}
                className={`faq-item text-center  ${activeIndex === index ? "active" : ""}`}
              >
                <h3
                  className="question flex items-center cursor-pointer justify-center text-center"
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                  <div
                    className={`plus-minus-toggle ml-2 ${
                      activeIndex === index ? "" : "collapsed"
                    }`}
                  ></div>
                </h3>
                <div className="answer">{item.answer}</div>
              </li>
            </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "¿Qué ofrece exactamente el servicio de IA conversacional?",
    answer:
      "Proporcionamos una infraestructura diseñada específicamente según tus necesidades para la conversión de clientes. Esto incluye el desarrollo e integración de nuestra IA la cual es capaz de llamar o recibir llamadas y gestionar SMS y/o mails para automatizar la programación de citas y seguimiento.",
  },
  {
    question: "¿Cómo se gestionan las llamadas en frío?",
    answer:
      "Eficientemente. Nuestra IA puede realizar miles de llamadas en frío siguiendo cualquier guion y criterios específicos.",
  },
  {
    question:
      "¿Es realmente la IA capaz de reducir la tasa de inasistencia de mis clientes?",
    answer:
      "Sí. Nuestra IA envía recordatorios periódicos y puede reprogramar citas.",
  },
  {
    question: "¿Qué tan rápido es capaz la IA de responder a clientes?",
    answer:
      "Instantáneamente. Nuestra IA atiende llamadas y mensajes 24/7, en cuestión de segundos.",
  },
  {
    question: "¿Cómo se integra su servicio con embudos de mercado ya existentes?",
    answer:
      "Cuando un posible prospecto ve un anuncio y expresa interés explícito, nuestra IA puede automáticamente realizar una llamada para discutir sobre el producto y agendar una reunión.",
  },
];
