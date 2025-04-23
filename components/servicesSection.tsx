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
      firstRow = "Desarrollo personalizado con IA";
      parrafo =
        "En Elykia nos especializamos en crear soluciones a medida que responden a los desafíos específicos de tu negocio. Combinamos nuestra experiencia técnica con un profundo conocimiento sectorial para desarrollar e implementar tecnologías que se integran perfectamente en tus sistemas existentes, adicionalmente utilizamos nuestro conocimiento sobre Inteligencia Artificial para traerte automatizaciones previamente no posibles, generando resultados tangibles y ventajas competitivas para tu empresa.";
      button = "Contactanos";
      break;
    case "EN":
      firstRow = "Custom AI Development";
      parrafo =
        "At Elykia, we specialize in creating tailored solutions that address your business's specific challenges. We combine our technical expertise with deep industry knowledge to develop and implement technologies that seamlessly integrate into your existing systems. Additionally, we leverage our understanding of Artificial Intelligence to bring you previously impossible automations, generating tangible results and competitive advantages for your company.";
      button = "Contact us";
      break;
    default:
      firstRow = "Desarrollo personalizado de IA";
      parrafo =
        "En Elykia nos especializamos en crear soluciones a medida que responden a los desafíos específicos de tu negocio. Combinamos nuestra experiencia técnica con un profundo conocimiento sectorial para desarrollar e implementar tecnologías que se integran perfectamente en tus sistemas existentes, adicionalmente utilizamos nuestro conocimiento sobre Inteligencia Artificial para traerte automatizaciones previamente no posibles, generando resultados tangibles y ventajas competitivas para tu empresa.";
      button = "Contactanos";
  }
  return (
    <section className="section">
      <div id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2cf-f9ae67f1">
        <div className="flex flex-col p-8 py-4 lg:px-[15vw] bg-gradient-to-b from-gray-400 to-gray-100 to-[5%]">
          <div
            id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1"
            className="w-layout-cell flex justify-center items-center m-auto text-center self-center"
          >
            <div className=" m-auto">
              <h1 className="h1 mainh1 text-black">
                {/* <span className="text-[#9B5DE5] text-[32px] leading-[3]"> */}
                <span className="text-blue-400 text-[32px] leading-[3]">

                  {firstRow}
                </span>
              </h1>
            </div>
            <div>
              <p className=" font-medium text-black text-[17px] leading-4 lg:leading-8 pb-8">
                {parrafo}
              </p>
            </div>
          </div>
          {/* <div className="mx-auto my-[4vh]">
            <Link
              href="/contact"
              className="nav-link contact-button !bg-black !text-white !px-[7vw] !py-4"
            >
              {button}
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}