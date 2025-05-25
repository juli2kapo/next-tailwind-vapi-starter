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
  let fifthItemTitle;
  let fifthItemDescription;
  let sixthItemTitle;
  let sixthItemDescription;
  
  switch (currentLanguage){
      case "EN":
          title = "Our Development Process";
          firstItemTitle = "ANALYSIS AND IDEA DEFINITION.";
          firstItemDescription = "We begin with a detailed meeting to thoroughly understand your objectives, needs, and challenges. We analyze your proposal and define the project scope, ensuring a solid foundation for development.";
          secondItemTitle = "DETAILED TECHNICAL DOCUMENTATION.";
          secondItemDescription = "We prepare comprehensive documentation that includes the app's key functionalities, technical requirements, and project specifications. This document serves as a roadmap throughout the development.";
          thirdItemTitle = "UX/UI PROTOTYPING AND DESIGN.";
          thirdItemDescription = "We design interactive and attractive prototypes with user experience-centered interfaces. We ensure smooth navigation and an app that offers intuitive and visually impactful interaction.";
          fourthItemTitle = "APPLICATION DEVELOPMENT.";
          fourthItemDescription = "We implement agile methodologies like Scrum to ensure constant progress and quick deliveries. We conduct thorough testing at each phase to ensure optimal performance and eliminate potential errors.";
          fifthItemTitle = "LAUNCH AND DEPLOYMENT.";
          fifthItemDescription = "Once the development phase is completed, we launch the application on the chosen platforms (iOS, Android, or web). We also conduct final tests to ensure everything works flawlessly from day one.";
          sixthItemTitle = "CONTINUOUS MAINTENANCE AND SCALABILITY.";
          sixthItemDescription = "We offer maintenance services and regular updates to keep your application running perfectly. We also guarantee scalability, allowing you to add new functions as your business grows.";
          break;
      case "ES":
          title = "Nuestro Proceso de Desarrollo";
          firstItemTitle = "ANÁLISIS Y DEFINICIÓN DE LA IDEA.";
          firstItemDescription = "Comenzamos con una reunión detallada para entender a fondo tus objetivos, necesidades y desafíos. Analizamos tu propuesta y definimos el alcance del proyecto, asegurándonos de establecer una base sólida para el desarrollo.";
          secondItemTitle = "DOCUMENTACIÓN TÉCNICA DETALLADA.";
          secondItemDescription = "Preparamos documentación exhaustiva que incluye las funcionalidades clave de la aplicación, los requerimientos técnicos y las especificaciones del proyecto. Este documento sirve como hoja de ruta durante todo el desarrollo.";
          thirdItemTitle = "PROTOTIPADO Y DISEÑO UX/UI.";
          thirdItemDescription = "Diseñamos prototipos interactivos y atractivos con interfaces centradas en la experiencia del usuario. Garantizamos que la navegación sea fluida y que la app ofrezca una interacción intuitiva y visualmente impactante.";
          fourthItemTitle = "DESARROLLO DE LA APLICACIÓN.";
          fourthItemDescription = "Implementamos metodologías ágiles como Scrum para asegurar avances constantes y entregas rápidas. Realizamos pruebas exhaustivas en cada fase para garantizar un rendimiento óptimo y eliminar posibles errores.";
          fifthItemTitle = "LANZAMIENTO Y DESPLIEGUE.";
          fifthItemDescription = "Una vez completada la fase de desarrollo, lanzamos la aplicación en las plataformas elegidas (iOS, Android o web). También llevamos a cabo pruebas finales para asegurar que todo funcione de manera impecable desde el primer día.";
          sixthItemTitle = "MANTENIMIENTO CONTINUO Y ESCALABILIDAD.";
          sixthItemDescription = "Ofrecemos servicios de mantenimiento y actualizaciones regulares para que tu aplicación siga funcionando a la perfección. También garantizamos escalabilidad, permitiendo añadir nuevas funciones a medida que tu negocio crece.";
          break;
      default:
          title = "Nuestro Proceso de Desarrollo";
          firstItemTitle = "ANÁLISIS Y DEFINICIÓN DE LA IDEA.";
          firstItemDescription = "Comenzamos con una reunión detallada para entender a fondo tus objetivos, necesidades y desafíos. Analizamos tu propuesta y definimos el alcance del proyecto, asegurándonos de establecer una base sólida para el desarrollo.";
          secondItemTitle = "DOCUMENTACIÓN TÉCNICA DETALLADA.";
          secondItemDescription = "Preparamos documentación exhaustiva que incluye las funcionalidades clave de la aplicación, los requerimientos técnicos y las especificaciones del proyecto. Este documento sirve como hoja de ruta durante todo el desarrollo.";
          thirdItemTitle = "PROTOTIPADO Y DISEÑO UX/UI.";
          thirdItemDescription = "Diseñamos prototipos interactivos y atractivos con interfaces centradas en la experiencia del usuario. Garantizamos que la navegación sea fluida y que la app ofrezca una interacción intuitiva y visualmente impactante.";
          fourthItemTitle = "DESARROLLO DE LA APLICACIÓN.";
          fourthItemDescription = "Implementamos metodologías ágiles como Scrum para asegurar avances constantes y entregas rápidas. Realizamos pruebas exhaustivas en cada fase para garantizar un rendimiento óptimo y eliminar posibles errores.";
          fifthItemTitle = "LANZAMIENTO Y DESPLIEGUE.";
          fifthItemDescription = "Una vez completada la fase de desarrollo, lanzamos la aplicación en las plataformas elegidas (iOS, Android o web). También llevamos a cabo pruebas finales para asegurar que todo funcione de manera impecable desde el primer día.";
          sixthItemTitle = "MANTENIMIENTO CONTINUO Y ESCALABILIDAD.";
          sixthItemDescription = "Ofrecemos servicios de mantenimiento y actualizaciones regulares para que tu aplicación siga funcionando a la perfección. También garantizamos escalabilidad, permitiendo añadir nuevas funciones a medida que tu negocio crece.";
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
              {/* First item */}
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

              {/* Fifth item */}
              <li className="feature-item" style={{boxSizing: "border-box", fontSize: "16px", display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "start", flexDirection: "row", marginBottom: "1vh",}}>
                <img className="feature-icon" alt="Feature Icon" src="https://i.imgur.com/uAx9MVb.png" style={{boxSizing: "border-box", border: "0px", verticalAlign: "middle", maxWidth: "100%", display: "inline-block", marginLeft: "1vw", width: "5vh", height: "auto", marginRight: "1vw",}} />
                <span style={{boxSizing: "border-box", color: "black", fontSize: "22px", fontWeight: 700,}}>{fifthItemTitle}</span>
              </li>
              <p style={{boxSizing: "border-box", marginTop: "0px", fontWeight: 500, fontSize: "17px", marginLeft: "4.5vw", marginRight: "6vw", textAlign: "start", marginBottom: "3vh",}}>{fifthItemDescription}</p>

              {/* Sixth item */}
              <li className="feature-item" style={{boxSizing: "border-box", fontSize: "16px", display: "flex", justifyContent: "flex-start", alignItems: "center", textAlign: "start", flexDirection: "row", marginBottom: "1vh",}}>
                <img className="feature-icon" alt="Feature Icon" src="https://i.imgur.com/uAx9MVb.png" style={{boxSizing: "border-box", border: "0px", verticalAlign: "middle", maxWidth: "100%", display: "inline-block", marginLeft: "1vw", width: "5vh", height: "auto", marginRight: "1vw",}} />
                <span style={{boxSizing: "border-box", color: "black", fontSize: "22px", fontWeight: 700,}}>{sixthItemTitle}</span>
              </li>
              <p style={{boxSizing: "border-box", marginTop: "0px", fontWeight: 500, fontSize: "17px", marginLeft: "4.5vw", marginRight: "6vw", textAlign: "start", marginBottom: "3vh",}}>{sixthItemDescription}</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}