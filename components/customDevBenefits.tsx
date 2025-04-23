"use client"

import { useLanguage } from "./componentProvider";


export default function CustomDevBenefits() {
  const {currentLanguage} = useLanguage();
  let title;
  let subtitle;
  let benefit1Title;
  let benefit1Description;
  let benefit2Title;
  let benefit2Description;
  let benefit3Title;
  let benefit3Description;
  let benefit4Title;
  let benefit4Description;

  switch (currentLanguage){
      case "EN":
          title = "Benefits of Custom Development";
          subtitle = "Solutions designed for your unique business challenges";
          benefit1Title = "TAILORED TO YOUR NEEDS";
          benefit1Description = "Unlike off-the-shelf software, custom solutions are built specifically to address your unique business processes and challenges.";
          benefit2Title = "COMPETITIVE ADVANTAGE";
          benefit2Description = "Gain edge over competitors with proprietary software that automates your unique workflows and optimizes operations in ways others can't match.";
          benefit3Title = "SCALABILITY & FLEXIBILITY";
          benefit3Description = "Custom software grows with your business and adapts to changing requirements without the limitations of commercial packages.";
          benefit4Title = "SEAMLESS INTEGRATION";
          benefit4Description = "Connect with all your existing systems—from legacy databases to modern cloud services—creating a unified ecosystem that maximizes efficiency.";
          break;
      case "ES":
          title = "Beneficios del Desarrollo a Medida";
          subtitle = "Soluciones diseñadas para los desafíos únicos de tu negocio";
          benefit1Title = "ADAPTADO A TUS NECESIDADES";
          benefit1Description = "A diferencia del software comercial, las soluciones a medida se construyen específicamente para abordar tus procesos y desafíos empresariales únicos.";
          benefit2Title = "VENTAJA COMPETITIVA";
          benefit2Description = "Obtén ventaja sobre los competidores con software propietario que automatiza tus flujos de trabajo únicos y optimiza operaciones de formas que otros no pueden igualar.";
          benefit3Title = "ESCALABILIDAD Y FLEXIBILIDAD";
          benefit3Description = "El software personalizado crece con tu negocio y se adapta a los requisitos cambiantes sin las limitaciones de los paquetes comerciales.";
          benefit4Title = "INTEGRACIÓN PERFECTA";
          benefit4Description = "Conéctate con todos tus sistemas existentes —desde bases de datos heredadas hasta servicios modernos en la nube— creando un ecosistema unificado que maximiza la eficiencia.";
          break;
      default:
          title = "Beneficios del Desarrollo a Medida";
          subtitle = "Soluciones diseñadas para los desafíos únicos de tu negocio";
          benefit1Title = "ADAPTADO A TUS NECESIDADES";
          benefit1Description = "A diferencia del software comercial, las soluciones a medida se construyen específicamente para abordar tus procesos y desafíos empresariales únicos.";
          benefit2Title = "VENTAJA COMPETITIVA";
          benefit2Description = "Obtén ventaja sobre los competidores con software propietario que automatiza tus flujos de trabajo únicos y optimiza operaciones de formas que otros no pueden igualar.";
          benefit3Title = "ESCALABILIDAD Y FLEXIBILIDAD";
          benefit3Description = "El software personalizado crece con tu negocio y se adapta a los requisitos cambiantes sin las limitaciones de los paquetes comerciales.";
          benefit4Title = "INTEGRACIÓN PERFECTA";
          benefit4Description = "Conéctate con todos tus sistemas existentes —desde bases de datos heredadas hasta servicios modernos en la nube— creando un ecosistema unificado que maximiza la eficiencia.";
  }

  return (
    <section className="py-16 md:py-20 bg-white text-black">
      {/* Removed the Elykia logo row to match other sections better */}
      {/* <div className="horizontal-div pl-6 pt-6">
        <img src="https://i.imgur.com/yHSIico.png" loading="lazy" alt="star" className="" width="40" />
        <div className="elykia-text text-black">ELYKIA</div>
      </div> */}

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          {/* Adjusted heading size and spacing */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">{title}</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Changed grid layout and styling for benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="Benefit Icon"
                 className="mb-4" width="45" />
            <h3 className="text-xl font-semibold mb-2 uppercase tracking-wider">{benefit1Title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit1Description}</p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="Benefit Icon"
                 className="mb-4" width="45" />
            <h3 className="text-xl font-semibold mb-2 uppercase tracking-wider">{benefit2Title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit2Description}</p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="Benefit Icon"
                 className="mb-4" width="45" />
            <h3 className="text-xl font-semibold mb-2 uppercase tracking-wider">{benefit3Title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit3Description}</p>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col items-center text-center">
            <img src="https://i.imgur.com/uAx9MVb.png" loading="lazy" alt="Benefit Icon"
                 className="mb-4" width="45" />
            {/* Corrected variable name from benefit3Title to benefit4Title */}
            <h3 className="text-xl font-semibold mb-2 uppercase tracking-wider">{benefit4Title}</h3>
            <p className="text-gray-600 leading-relaxed">{benefit4Description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}