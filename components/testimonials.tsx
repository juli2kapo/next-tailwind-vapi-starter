"use client"
import { useState } from "react";
import { useLanguage } from "./componentProvider";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {currentLanguage} = useLanguage();
  let firstRow;
  let faqUsar;
  switch(currentLanguage){
    case "ES":
      firstRow = "Preguntas frecuentes";
      faqUsar = faqData;
      break;
    case "EN":
      firstRow = "Frequently asked questions";
      faqUsar = faqDataEnglish;
      break;
    default:
      firstRow = "Preguntas frecuentes";
      faqUsar = faqData;
  }
  const handleToggle = (index:number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="testimonials bg-gray-100">
      <h2 className="section-heading text-black">{firstRow}</h2>
      <div className="flex flex-row justify-around pl-3 pr-3">
        <div className="parent-container pr-0">
          <ul className="faq space-y-6 text-center m-auto items-center pl-0 pr-0 text-black">
            {faqUsar.map((item, index) => (
              <div key={index} className="text-center">
              <li
                key={index}
                className={`faq-item text-center border-black ${activeIndex === index ? "active" : ""}`}
              >
                <h3
                  className="question flex items-center cursor-pointer justify-center text-center mx-12 text-black"
                  onClick={() => handleToggle(index)}
                >
                  <div
                    className={`plus-minus-toggle pr-12 ${
                      activeIndex === index ? "" : "collapsed"
                    }`}
                  ></div>
                  {item.question}

                </h3>
                <div className="answer text-black">{item.answer}</div>
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

const faqDataEnglish = [
  {
    question: "What exactly does the conversational AI service offer?",
    answer:
      "We provide an infrastructure specifically designed according to your needs for customer conversion. This includes the development and integration of our AI which is capable of making or receiving calls and managing SMS and/or emails to automate appointment scheduling and follow-up.",
  },
  {
    question: "How are cold calls managed?",
    answer:
      "Efficiently. Our AI can make thousands of cold calls following any script and specific criteria.",
  },
  {
    question:
      "Is AI really capable of reducing my clients' no-show rate?",
    answer:
      "Yes. Our AI sends periodic reminders and can reschedule appointments.",
  },
  {
    question: "How fast is AI able to respond to clients?",
    answer:
      "Instantly. Our AI answers calls and messages 24/7, in a matter of seconds.",
  },
  {
    question: "How does your service integrate with existing market funnels?",
    answer:
      "When a potential prospect sees an ad and expresses explicit interest, our AI can automatically make a call to discuss the product and schedule a meeting.",
  },
]
