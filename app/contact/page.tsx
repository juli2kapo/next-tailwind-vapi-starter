import React from "react";

export default function Home() {
  return (
    <>
      <div className="bg-black">
      <div
        className="w-layout-blockcontainer container w-container bg-black"
        style={{
          boxSizing: "border-box",
          display: "block",
          padding: "20px",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "black",
        }}
      >
        <div
          className="hero-box"
          style={{
            boxSizing: "border-box",
            flexDirection: "row",
            justifyContent: "space-between",
            display: "flex",
            opacity: 1,
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            id="w-node-_9da753b1-3363-aa89-00d9-9b6bd11f6578-3a1b43b1"
            className="w-layout-layout contact-grid wf-layout-layout"
            style={{
              boxSizing: "border-box",
              display: "grid",
              padding: "20px",
              gridAutoColumns: "1fr",
              justifyContent: "center",
              gap: "40px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr 1.5fr",
            }}
          >
            <div
              id="w-node-_9da753b1-3363-aa89-00d9-9b6bd11f6579-3a1b43b1"
              className="w-layout-cell"
              style={{
                boxSizing: "border-box",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <h2
                className="h2"
                style={{
                  boxSizing: "border-box",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  marginTop: "0px",
                  marginBottom: "0px",
                  fontSize: "50px",
                  lineHeight: "50px",
                  color: "white",
                }}
              >
                {"EL FUTURO "}
                <span
                  style={{
                    boxSizing: "border-box",
                    color: "rgb(124, 108, 119)",
                  }}
                >
                  ESPERA
                </span>
              </h2>
              <div
                className="text margin-top"
                style={{
                  boxSizing: "border-box",
                  fontSize: "15px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  marginTop: "49px",
                  color: "white",
                }}
              >
                {`La inteligencia artificial es una herramienta poderosa para llevar
tu empresa al siguiente nivel. Al integrar IA, optimizarás
operaciones, reducirás costos y aumentarás la productividad. No es
solo una inversión en tecnología, sino en el futuro de tu negocio.
Aprovecha esta oportunidad para liderar tu industria y maximizar
resultados.`}
                <br style={{ boxSizing: "border-box" }} />
                <br style={{ boxSizing: "border-box" }} />
                {`Si tenés preguntas o simplemente querés informarte sobre lo que
hacemos, no dudes en ponerte en contacto con nosotros. En Elykia
estamos a su disposición para guiarlo y ayudarlo`}
              </div>
            </div>
            <div
              id="w-node-_9da753b1-3363-aa89-00d9-9b6bd11f657e-3a1b43b1"
              className="w-layout-cell button-cell-top-right"
              style={{
                boxSizing: "border-box",
                flexDirection: "column",
                justifyContent: "flex-start",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div
                id="Contact-Us-Form-Block"
                className="contact-form w-form"
                style={{
                  boxSizing: "border-box",
                  margin: "0px 0px 15px",
                  width: "100%",
                }}
              >
                <form
                  id="email-form"
                  name="email-form"
                  action="https://formspree.io/f/mgveedbr"
                  aria-label="Email Form"
                  method="POST"
                  style={{ boxSizing: "border-box" }}
                >
                  <input
                    id="asunto"
                    className="text-field w-input"
                    name="Asunto"
                    type="text"
                    maxLength={256}
                    required
                    placeholder="Asunto"
                    style={{
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      padding: "8px 12px",
                      verticalAlign: "middle",
                      width: "100%",
                      height: "38px",
                      marginBottom: "10px",
                      fontSize: "14px",
                      lineHeight: 1.42857,
                      display: "block",
                      borderWidth: "1px 1px 2px",
                      borderColor: "rgb(0, 0, 0)",
                      borderImage: "initial",
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontFamily: "Montserrat, sans-serif",
                      border: "1px solid rgb(204, 204, 204)",
                      borderRadius: "10px",
                      borderTopStyle: "solid",
                      borderRightStyle: "solid",
                      borderBottomStyle: "solid",
                      borderLeftStyle: "solid",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  />
                  <div
                    className="horizontal-div"
                    style={{
                      boxSizing: "border-box",
                      gap: "8px",
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginBottom: "-2px",
                      fontWeight: 500,
                      display: "flex",
                    }}
                  >
                    <input
                      id="nombre"
                      className="text-field w-input"
                      name="nombre"
                      type="text"
                      maxLength={256}
                      required
                      placeholder="Nombre"
                      style={{
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        padding: "8px 12px",
                        verticalAlign: "middle",
                        width: "100%",
                        height: "38px",
                        marginBottom: "10px",
                        fontSize: "14px",
                        lineHeight: 1.42857,
                        display: "block",
                        borderWidth: "1px 1px 2px",
                        borderColor: "rgb(0, 0, 0)",
                        borderImage: "initial",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        fontFamily: "Montserrat, sans-serif",
                        border: "1px solid rgb(204, 204, 204)",
                        borderRadius: "10px",
                        borderTopStyle: "solid",
                        borderRightStyle: "solid",
                        borderBottomStyle: "solid",
                        borderLeftStyle: "solid",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    />
                    <input
                      id="email"
                      className="text-field w-input"
                      name="email"
                      type="email"
                      maxLength={256}
                      required
                      placeholder="Email"
                      style={{
                        boxSizing: "border-box",
                        font: "inherit",
                        margin: "0px",
                        padding: "8px 12px",
                        verticalAlign: "middle",
                        width: "100%",
                        height: "38px",
                        marginBottom: "10px",
                        fontSize: "14px",
                        lineHeight: 1.42857,
                        display: "block",
                        borderWidth: "1px 1px 2px",
                        borderColor: "rgb(0, 0, 0)",
                        borderImage: "initial",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                        fontFamily: "Montserrat, sans-serif",
                        border: "1px solid rgb(204, 204, 204)",
                        borderRadius: "10px",
                        borderTopStyle: "solid",
                        borderRightStyle: "solid",
                        borderBottomStyle: "solid",
                        borderLeftStyle: "solid",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    />
                  </div>
                  <div
                    className="contact-form-text"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(155, 155, 155)",
                      paddingLeft: "8px",
                    }}
                  >
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bold" }}
                    >
                      ¿Cuál es tu presupuesto para este proyecto?
                    </strong>
                  </div>
                  <select
                    id="budget"
                    className="text-field dropdown w-select"
                    name="Budget"
                    required
                    style={{
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      textTransform: "none",
                      padding: "8px 12px",
                      verticalAlign: "middle",
                      height: "38px",
                      marginBottom: "10px",
                      fontSize: "14px",
                      lineHeight: 1.42857,
                      borderWidth: "1px 1px 2px",
                      borderColor: "rgb(0, 0, 0)",
                      borderImage: "initial",
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontFamily: "Montserrat, sans-serif",
                      justifyContent: "space-around",
                      width: "100%",
                      display: "flex",
                      paddingLeft: "8px",
                      border: "1px solid rgb(204, 204, 204)",
                      borderRadius: "10px",
                      borderTopStyle: "solid",
                      borderRightStyle: "solid",
                      borderBottomStyle: "solid",
                      borderLeftStyle: "solid",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <option
                      value="Menos de $1,000"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"Menos de $1,000"}
                    </option>
                    <option
                      value="$1,000 - $5,000"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"$1,000 - $5,000"}
                    </option>
                    <option
                      value="$5,000 - $10,000"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"$5,000 - $10,000"}
                    </option>
                    <option
                      value="$10,000 - $20,000"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"$10,000 - $20,000"}
                    </option>
                    <option
                      value="$20,000 +"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"$20,000 +"}
                    </option>
                  </select>
                  <div
                    className="contact-form-text"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(155, 155, 155)",
                      paddingLeft: "8px",
                    }}
                  >
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bold" }}
                    >
                      ¿Qué servicio te interesa?
                    </strong>
                  </div>
                  <select
                    id="service"
                    className="text-field dropdown w-select"
                    name="Service"
                    required
                    style={{
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      textTransform: "none",
                      padding: "8px 12px",
                      verticalAlign: "middle",
                      height: "38px",
                      marginBottom: "10px",
                      fontSize: "14px",
                      lineHeight: 1.42857,
                      borderWidth: "1px 1px 2px",
                      borderColor: "rgb(0, 0, 0)",
                      borderImage: "initial",
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontFamily: "Montserrat, sans-serif",
                      justifyContent: "space-around",
                      width: "100%",
                      display: "flex",
                      paddingLeft: "8px",
                      border: "1px solid rgb(204, 204, 204)",
                      borderRadius: "10px",
                      borderTopStyle: "solid",
                      borderRightStyle: "solid",
                      borderBottomStyle: "solid",
                      borderLeftStyle: "solid",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <option
                      value="conversationai"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"IA Conversacional"}
                    </option>
                    <option
                      value="chatbot"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"Desarrollo de chatbots"}
                    </option>
                    <option
                      value="consult"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"Consultoría empresarial"}
                    </option>
                    <option
                      value="chat"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {"Consulta general"}
                    </option>
                  </select>
                  <div
                    className="contact-form-text"
                    style={{
                      boxSizing: "border-box",
                      color: "rgb(155, 155, 155)",
                      paddingLeft: "8px",
                    }}
                  >
                    <strong
                      style={{ boxSizing: "border-box", fontWeight: "bold" }}
                    >
                      ¿A qué se dedica tu empresa?
                    </strong>
                  </div>
                  <input
                    id="rubro"
                    className="text-field w-input"
                    name="rubro"
                    type="text"
                    maxLength={256}
                    required
                    placeholder="Rubro"
                    style={{
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      padding: "8px 12px",
                      verticalAlign: "middle",
                      width: "100%",
                      height: "38px",
                      fontSize: "14px",
                      lineHeight: 1.42857,
                      display: "block",
                      borderWidth: "1px 1px 2px",
                      borderColor: "rgb(0, 0, 0)",
                      borderImage: "initial",
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontFamily: "Montserrat, sans-serif",
                      border: "1px solid rgb(204, 204, 204)",
                      borderRadius: "10px",
                      borderTopStyle: "solid",
                      borderRightStyle: "solid",
                      borderBottomStyle: "solid",
                      borderLeftStyle: "solid",
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "3vh",
                    }}
                  />
                  <textarea
                    id="description"
                    className="text-field large w-input"
                    name="How-can-we-help"
                    maxLength={5000}
                    required
                    placeholder="¿Cómo podemos ayudarte?"
                    style={{
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      overflow: "auto",
                      padding: "8px 12px",
                      verticalAlign: "middle",
                      marginBottom: "10px",
                      fontSize: "14px",
                      lineHeight: 1.42857,
                      display: "block",
                      borderWidth: "1px 1px 2px",
                      borderColor: "rgb(0, 0, 0)",
                      borderImage: "initial",
                      backgroundColor: "rgba(255, 255, 255, 0)",
                      paddingTop: "5px",
                      paddingBottom: "5px",
                      fontFamily: "Montserrat, sans-serif",
                      height: "auto",
                      width: "100%",
                      minHeight: "70px",
                      maxHeight: "200px",
                      marginTop: "10px",
                      border: "1px solid rgb(204, 204, 204)",
                      borderRadius: "10px",
                      borderTopStyle: "solid",
                      borderRightStyle: "solid",
                      borderBottomStyle: "solid",
                      borderLeftStyle: "solid",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  />
                  <button
                    id="submit"
                    className="form-button w-button contact-button"
                    type="submit"
                    value="Enviar"
                    style={{
                      boxSizing: "border-box",
                      font: "inherit",
                      margin: "0px",
                      overflow: "visible",
                      textTransform: "none",
                      appearance: "button",
                      textDecoration: "none",
                      lineHeight: "inherit",
                      cursor: "pointer",
                      display: "inline-block",
                      border: "1px solid white",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      padding: "20px",
                      transition: "background-color 0.2s",
                      width: "100%",
                      marginTop: "20px",
                      fontSize: "16px",
                      backgroundColor: "white",
                      color: "black",
                      marginLeft: "0px",
                    }}
                  >
                    {"Enviar"}
                  </button>
                </form>
                <div
                  className="w-form-done"
                  aria-label="Email Form success"
                  role="region"
                  tabIndex={-1}
                  style={{
                    boxSizing: "border-box",
                    padding: "20px",
                    textAlign: "center",
                    backgroundColor: "rgb(221, 221, 221)",
                    display: "none",
                  }}
                >
                  <div style={{ boxSizing: "border-box" }}>
                    {"Thank you! Your submission has been received!"}
                  </div>
                </div>
                <div
                  className="w-form-fail"
                  aria-label="Email Form failure"
                  role="region"
                  tabIndex={-1}
                  style={{
                    boxSizing: "border-box",
                    padding: "10px",
                    backgroundColor: "rgb(255, 222, 222)",
                    marginTop: "10px",
                    display: "none",
                  }}
                >
                  <div style={{ boxSizing: "border-box" }}>
                    {"Oops! Something went wrong while submitting the form."}
                  </div>
                </div>
              </div>
            </div>
          </div>
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
