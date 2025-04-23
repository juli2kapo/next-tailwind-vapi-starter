"use client";

import { useLanguage } from "./componentProvider";


// Example technology icons (replace with actual paths or components)
const techIcons = {
    react: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    node: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    python: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    docker: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
};

export default function TechnologyStack() {
    const { currentLanguage } = useLanguage();
    let title;
    let description;

    switch (currentLanguage) {
        case "EN":
            title = "Our Technology Expertise";
            description = "We leverage modern and robust technologies to build scalable and efficient solutions.";
            break;
        default: // ES
            title = "Nuestra Experiencia Tecnológica";
            description = "Utilizamos tecnologías modernas y robustas para construir soluciones escalables y eficientes.";
    }

    return (
        <section className="tech-stack bg-white py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">{description}</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {Object.entries(techIcons).map(([key, src]) => (
                        <div key={key} className="flex flex-col items-center" title={key.charAt(0).toUpperCase() + key.slice(1)}>
                            <img src={src} alt={`${key} logo`} className="h-12 md:h-16 object-contain" />
                            {/* Optional: Add text label below icon */}
                            {/* <span className="mt-2 text-sm text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</span> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}