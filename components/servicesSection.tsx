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
      firstRow = "Consultoría empresarial";
      parrafo =
        "En Elykia entendemos que cada empresa tiene objetivos, retos y panoramas únicos. Por eso, aprovechamos nuestro profundo conocimiento del sector e ideas de vanguardia para diseñar una estrategia IA coherente y práctica, cuidadosamente adaptada según las necesidades específicas de su empresa.";
      button = "Contactanos";
      break;
    case "EN":
      firstRow = "Business consulting";
      parrafo =
        "At Elykia we understand that each company has unique objectives, challenges, and landscapes. That's why we leverage our deep sector knowledge and cutting-edge ideas to design a coherent and practical AI strategy, carefully tailored to the specific needs of your company.";
      button = "Contact us";
      break;
    default:
      firstRow = "Consultoría empresarial";
      parrafo =
        "En Elykia entendemos que cada empresa tiene objetivos, retos y panoramas únicos. Por eso, aprovechamos nuestro profundo conocimiento del sector e ideas de vanguardia para diseñar una estrategia IA coherente y práctica, cuidadosamente adaptada según las necesidades específicas de su empresa.";
      button = "Contactanos";
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
                <span className="text-[#7C6C77] text-[32px] leading-[3]">
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
          <div className="mx-auto my-[4vh]">
            <Link
              href="/contact"
              className="nav-link contact-button !bg-black !text-white !px-[7vw] !py-4"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
