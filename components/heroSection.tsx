"use client"
import { useLanguage } from "./componentProvider";
import Link from "next/link";

export default function HeroSection() {
  const { currentLanguage } = useLanguage();
  let headline;
  let subheadline;
  let ctaPrimary;
  let ctaSecondary;

  switch (currentLanguage) {
    case "ES":
      headline = "Potencia tu empresa con inteligencia artificial";
      // subheadline = "Soluciones personalizadas que impulsan resultados reales y transforman tu negocio";
      subheadline = "Automatiza la atención al cliente, las ventas y los procesos internos utilizando soluciones personalizadas que trabajan 24/7."
      ctaPrimary = "Hablar con un experto";
      ctaSecondary = "Ver servicios";
      break;
    case "EN":
      headline = "Empower Your Business with AI";
      subheadline = "Custom solutions that drive real results and transform your business";
      ctaPrimary = "Talk to an Expert";
      ctaSecondary = "View Services";
      break;
    default:
      headline = "Potencia tu empresa con inteligencia artificial";
      subheadline = "Soluciones personalizadas que impulsan resultados reales y transforman tu negocio";
      ctaPrimary = "Hablar con un experto";
      ctaSecondary = "Ver servicios";
  }

  return (
    <>
      <section className="bg-black py-8 z-40">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 pb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 z-40 to-purple-400">
              {headline}
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl">
              {subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md z-30 pb-10">
              {/* <Link
                href="contact"
                className="w-full py-4 px-6 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-bold text-center transition-colors duration-300"
              >
                {ctaPrimary}
              </Link> */}
              
              {/* <Link
                href="services"
                className="w-full py-4 px-6 rounded-md border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-center transition-colors duration-300"
              >
                {ctaSecondary}
              </Link> */}
              <Link
                href="services"
                className="w-full py-4 px-6 rounded-md border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-center transition-colors duration-300"
              >
                Desarrollo de chatbot
              </Link>
              <Link
                href="services"
                className="w-full py-4 px-6 rounded-md border border-white bg-transparent hover:bg-white hover:text-black text-white font-bold text-center transition-colors duration-300"
              >
                IA Conversacional
              </Link>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md z-30 pb-10">
              
              <Link
                href="contact"
                className=" w-5/6 ml-8 py-4 px-6 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-bold text-center transition-colors duration-300"
              >
                {ctaPrimary}
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font-family: sans-serif;
  height: 100%;
}
body {
  box-sizing: border-box;
  margin: 0px;
  background-color: rgb(255, 255, 255);
  min-height: 100%;
  color: rgb(0, 0, 0);
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  isolation: isolate;
}
`,
        }}
      />
    </>
  );
}