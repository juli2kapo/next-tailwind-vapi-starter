"use client";
import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function ServicesSection() {
  const { currentLanguage } = useLanguage();
  let firstRow;
  let parrafo;
  let button;
  switch (currentLanguage) {
    case "ES":
      firstRow = "Soluciones de IA y software a medida para tu negocio";
      parrafo =
        "En Elykia nos dedicamos a desarrollar una solucion especifica para tu negocio, usamos nuestro conocimiento y experiencia para implementar o crear nuevas tecnologias perfectas para tus sistemas existentes. Nuestras herramientas para garantizarte esto son una profunda dedicacion a la comprension de tu negocio y la oportunidad de utilizar IA para abordar desafios que previamente se consideraban imposibles, generando resultados tangibles y ventajas competitivas para tu empresa"
      button = "Solución personalizada";
      break;
    case "EN":
      firstRow = "Custom AI and software solutions for your business";
      parrafo =
        "At Elykia, we are dedicated to developing a specific solution for your business, we use our knowledge and experience to implement or create new technologies perfect for your existing systems. Our tools to guarantee this are a deep dedication to understanding your business and the opportunity to use AI to address challenges that were previously considered impossible, generating tangible results and competitive advantages for your company.";
      button = "Custom Solution";
      break;
    default:
      firstRow = "Soluciones de IA y software a medida para tu negocio";
      parrafo =
        "En Elykia nos dedicamos a desarrollar una solucion especifica para tu negocio, usamos nuestro conocimiento y experiencia para implementar o crear nuevas tecnologias perfectas para tus sistemas existentes. Nuestras herramientas para garantizarte esto son una profunda dedicacion a la comprension de tu negocio y la oportunidad de utilizar IA para abordar desafios que previamente se consideraban imposibles, generando resultados tangibles y ventajas competitivas para tu empresa";
      button = "Solución personalizada";
  }
  return (
    <section className="section">
      <div id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2cf-f9ae67f1">
        <div className=" bg-gradient-to-b from-gray-400 to-gray-200 h-[2vh] "/>
        {/* <DripTransition /> */}
          <div
            id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1"
            className="w-layout-cell flex justify-center items-center m-auto text-center self-center
             flex-col p-8 pb-8 xl:pb-4 pt-0 lg:px-[15vw] bg-gray-200
            "
          >
            <div className=" m-auto pb-0">
              <h1 className="h1 mainh1 text-black md:my-5 lg:my-0">
                {/* <span className="text-[#9B5DE5] text-[32px] leading-[3]"> */}
                <span className="text-black text-[20px] xl:text-[25px] 2xl:text-[32px] leading-none lg:leading-[3]">
                  {firstRow}
                </span>
              </h1>
            </div>
            <div>
              <p className=" font-medium text-black text-[13px] 2xl:text-[17px] leading-4 lg:leading-8 pb-8 lg:pb-4">
                {parrafo}
              </p>
            </div>
            <Link href="/contact" 
                  // className="nav-link contact-button bg-"
              // className=" py-4 px-6 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-bold text-center transition-colors duration-300"
                className="py-4 px-6 rounded-md border border-black bg-transparent hover:bg-black hover:text-white text-black font-bold text-center transition-colors duration-300"
              >
                {button}
            </Link>
          </div>
        
      </div>
    </section>
  );
}