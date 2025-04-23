"use client";
import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function CustomDevCTA() {
    const { currentLanguage } = useLanguage();
    let title;
    let description;
    let buttonText;

    switch (currentLanguage) {
        case "EN":
            title = "Ready to Build Your Custom Solution?";
            description = "Let's discuss how our AI-powered development can transform your business.";
            buttonText = "Request a Consultation";
            break;
        default: // ES
            title = "¿Listo para Construir tu Solución a Medida?";
            description = "Conversemos sobre cómo nuestro desarrollo potenciado por IA puede transformar tu negocio.";
            buttonText = "Solicitar una Consulta";
    }

    return (
        <section className="custom-cta bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-xl text-gray-600 mb-8">{description}</p>
                <Link
                    href="/contact" // Update with your actual contact page URL
                    className="inline-block bg-black text-white px-8 py-4 rounded font-bold text-lg transition-colors duration-200 hover:bg-gray-800"
                >
                    {buttonText}
                </Link>
            </div>
        </section>
    );
}