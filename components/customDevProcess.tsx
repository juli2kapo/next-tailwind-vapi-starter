"use client"

import { useLanguage } from "./componentProvider";

export default function CustomDevProcess() {
  const {currentLanguage} = useLanguage();
  let title;
  let firstItemTitle;
  let firstItemDescription;
  let secondItemTitle;
  let secondItemDescription;
  let thirdItemTitle;
  let thirdItemDescription;
  let fourthItemTitle;
  let fourthItemDescription;
  
  switch (currentLanguage){
      case "EN":
          title = "Our Development Process";
          firstItemTitle = "REQUIREMENTS ANALYSIS.";
          firstItemDescription = "We begin by thoroughly understanding your business needs, user requirements, and market opportunities to create a detailed project roadmap tailored to your specific goals.";
          secondItemTitle = "ARCHITECTURE & DESIGN.";
          secondItemDescription = "Our team designs a robust, scalable architecture and intuitive user experience that provides the optimal foundation for your custom software solution.";
          thirdItemTitle = "AGILE DEVELOPMENT.";
          thirdItemDescription = "Using modern agile methodologies, we develop your solution with frequent iterations, continuous feedback, and transparent progress tracking.";
          fourthItemTitle = "DEPLOYMENT & SUPPORT.";
          fourthItemDescription = "We ensure smooth deployment, comprehensive testing, and provide ongoing technical support to keep your software running optimally.";
          break;
      case "ES":
          title = "Nuestro Proceso de Desarrollo";
          firstItemTitle = "ANÁLISIS DE REQUISITOS.";
          firstItemDescription = "Comenzamos entendiendo a fondo las necesidades de tu negocio, requisitos de usuario y oportunidades de mercado para crear una hoja de ruta detallada adaptada a tus objetivos específicos.";
          secondItemTitle = "ARQUITECTURA Y DISEÑO.";
          secondItemDescription = "Nuestro equipo diseña una arquitectura robusta y escalable con una experiencia de usuario intuitiva que proporciona la base óptima para tu solución de software personalizada.";
          thirdItemTitle = "DESARROLLO ÁGIL.";
          thirdItemDescription = "Utilizando metodologías ágiles modernas, desarrollamos tu solución con iteraciones frecuentes, retroalimentación continua y seguimiento transparente del progreso.";
          fourthItemTitle = "IMPLEMENTACIÓN Y SOPORTE.";
          fourthItemDescription = "Garantizamos una implementación sin problemas, pruebas exhaustivas y proporcionamos soporte técnico continuo para mantener tu software funcionando de manera óptima.";
          break;
      default:
          title = "Nuestro Proceso de Desarrollo";
          firstItemTitle = "ANÁLISIS DE REQUISITOS.";
          firstItemDescription = "Comenzamos entendiendo a fondo las necesidades de tu negocio, requisitos de usuario y oportunidades de mercado para crear una hoja de ruta detallada adaptada a tus objetivos específicos.";
          secondItemTitle = "ARQUITECTURA Y DISEÑO.";
          secondItemDescription = "Nuestro equipo diseña una arquitectura robusta y escalable con una experiencia de usuario intuitiva que proporciona la base óptima para tu solución de software personalizada.";
          thirdItemTitle = "DESARROLLO ÁGIL.";
          thirdItemDescription = "Utilizando metodologías ágiles modernas, desarrollamos tu solución con iteraciones frecuentes, retroalimentación continua y seguimiento transparente del progreso.";
          fourthItemTitle = "IMPLEMENTACIÓN Y SOPORTE.";
          fourthItemDescription = "Garantizamos una implementación sin problemas, pruebas exhaustivas y proporcionamos soporte técnico continuo para mantener tu software funcionando de manera óptima.";
  }
  
  return (
    <>
      <div
        className="how-it-works bg-gray-100"
        style={{
          boxSizing: "border-box",
          padding: "3vh 1vh",
          color: "black",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <h2
          className="section-heading bg-gray-100"
          style={{
            boxSizing: "border-box",
            marginTop: "20px",
            lineHeight: "36px",
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "20px",
            // backgroundColor: "white",
            color: "black",
          }}
        >
          {title}
        </h2>
        <div
          className="how-it-works bg-gray-100"
          style={{
            boxSizing: "border-box",
            padding: "3vh 1vh",
            color: "black",
            textAlign: "center",
          }}
        >
          <div
            className="section-heading"
            style={{
              boxSizing: "border-box",
              fontSize: "36px",
              fontWeight: 700,
              marginBottom: "20px",
              color: "black",
            }}
          >
            <ul
              style={{
                boxSizing: "border-box",
                paddingLeft: "10px",
                paddingRight: "10px",
                margin: "6vh 5vw 10vh",
                placeItems: "start",
                gap: "0% 10vw",
                display: "grid",
                gridTemplateColumns: "repeat(1, 1fr)",
                marginTop: "6vh",
                marginBottom: "10vh",
                justifyContent: "start",
              }}
            >
              <li
                className="feature-item"
                style={{
                  boxSizing: "border-box",
                  fontSize: "16px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  textAlign: "start",
                  flexDirection: "row",
                  marginBottom: "1vh",
                }}
              >
                <img
                  className="feature-icon"
                  alt="Feature Icon"
                  src="https://i.imgur.com/uAx9MVb.png"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    maxWidth: "100%",
                    display: "inline-block",
                    marginLeft: "1vw",
                    width: "5vh",
                    height: "auto",
                    marginRight: "1vw",
                  }}
                />
                <span
                  style={{
                    boxSizing: "border-box",
                    color: "black",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {firstItemTitle}
                </span>
              </li>
              <p
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  fontWeight: 500,
                  fontSize: "17px",
                  marginLeft: "4.5vw",
                  marginRight: "6vw",
                  textAlign: "start",
                  marginBottom: "3vh",
                }}
              >
                {firstItemDescription}
              </p>
              
              {/* Second item */}
              <li className="feature-item" style={{boxSizing: "border-box", fontSize: "16px", display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "start", flexDirection: "row", marginBottom: "1vh",}}>
                <img className="feature-icon" alt="Feature Icon" src="https://i.imgur.com/uAx9MVb.png" style={{boxSizing: "border-box", border: "0px", verticalAlign: "middle", maxWidth: "100%", display: "inline-block", marginLeft: "1vw", width: "5vh", height: "auto", marginRight: "1vw",}} />
                <span style={{boxSizing: "border-box", color: "black", fontSize: "22px", fontWeight: 700,}}>{secondItemTitle}</span>
              </li>
              <p style={{boxSizing: "border-box", marginTop: "0px", fontWeight: 500, fontSize: "17px", marginLeft: "4.5vw", marginRight: "6vw", textAlign: "start", marginBottom: "3vh",}}>{secondItemDescription}</p>
              
              {/* Third item */}
              <li className="feature-item" style={{boxSizing: "border-box", fontSize: "16px", display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "start", flexDirection: "row", marginBottom: "1vh",}}>
                <img className="feature-icon" alt="Feature Icon" src="https://i.imgur.com/uAx9MVb.png" style={{boxSizing: "border-box", border: "0px", verticalAlign: "middle", maxWidth: "100%", display: "inline-block", marginLeft: "1vw", width: "5vh", height: "auto", marginRight: "1vw",}} />
                <span style={{boxSizing: "border-box", color: "black", fontSize: "22px", fontWeight: 700,}}>{thirdItemTitle}</span>
              </li>
              <p style={{boxSizing: "border-box", marginTop: "0px", fontWeight: 500, fontSize: "17px", marginLeft: "4.5vw", marginRight: "6vw", textAlign: "start", marginBottom: "3vh",}}>{thirdItemDescription}</p>
              
              {/* Fourth item */}
              <li className="feature-item" style={{boxSizing: "border-box", fontSize: "16px", display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "start", flexDirection: "row", marginBottom: "1vh",}}>
                <img className="feature-icon" alt="Feature Icon" src="https://i.imgur.com/uAx9MVb.png" style={{boxSizing: "border-box", border: "0px", verticalAlign: "middle", maxWidth: "100%", display: "inline-block", marginLeft: "1vw", width: "5vh", height: "auto", marginRight: "1vw",}} />
                <span style={{boxSizing: "border-box", color: "black", fontSize: "22px", fontWeight: 700,}}>{fourthItemTitle}</span>
              </li>
              <p style={{boxSizing: "border-box", marginTop: "0px", fontWeight: 500, fontSize: "17px", marginLeft: "4.5vw", marginRight: "6vw", textAlign: "start", marginBottom: "3vh",}}>{fourthItemDescription}</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}