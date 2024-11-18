

    
    import React from "react";

    export default function HowItWorksChatBot() {
      return (
        <>
          <div
            className="how-it-works"
            style={{
              boxSizing: "border-box",
              padding: "3vh 1vh",
              color: "black",
              backgroundColor: "white",
              textAlign: "center",
            }}
          >
            <h2
              className="section-heading"
              style={{
                boxSizing: "border-box",
                marginTop: "20px",
                lineHeight: "36px",
                fontSize: "36px",
                fontWeight: 700,
                marginBottom: "20px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              ¿Cual es el valor agregado de Elykia?
            </h2>
            <div
              className="how-it-works"
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
                      MEJOR QUE UN HUMANO.
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
                    Gracias a la integración con inteligencia artificial nuestro
                    chatbot es capaz de responder de forma inteligente y precisa,
                    basandose en la información provista, las 24 horas del día y de
                    forma inmediata.
                  </p>
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
                      ESCALABILIDAD.
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
                    Es capaz de manejar multiples conversaciones simultáneamente sin
                    comprometer la calidad de la respuesta, mientras que al mismo
                    tiempo recopila y analiza los datos de las interacciones para
                    mejorar continuamente el servicio y adaptarse mejor a los
                    usuarios.
                  </p>
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
                      ADAPTABLE.
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
                    En caso de contar con acceso a informacion relacionada al
                    usuario, el chatbot es capaz de personalizar la conversacion
                    para mejorar la interaccion o facilitar una venta.
                  </p>
                </ul>
              </div>
            </div>
          </div>
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
    
