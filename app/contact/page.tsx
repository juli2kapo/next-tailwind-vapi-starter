"use client"
import { useLanguage } from "@/components/componentProvider";
import React from "react";
 

export default function Home() {
  const {currentLanguage} = useLanguage();
  let firstTitle;
  let secondTitle;
  let firstParrafo;
  let secondParrafo;
  let contactTitle;
  let emailLabel;
  let emailValue;
  let phoneLabel;
  let phoneValue;
  let addressLabel;
  let addressValue;
  let firstField;
  let secondField;
  let thirdField;
  let fourthField;
  let firstBudgetOption;
  let fifthField;
  let firstServiceOption;
  let secondServiceOption;
  let thirdServiceOption;
  let fourthServiceOption;
  let sixthField;
  let seventhField;
  let button;
  let sixthFieldPlaceholder;
  switch(currentLanguage){
    case "ES":
      firstTitle = "EL FUTURO ";
      secondTitle = "ESPERA";
      firstParrafo = "La inteligencia artificial es una herramienta poderosa para llevar tu empresa al siguiente nivel. Al integrar IA, optimizarás operaciones, reducirás costos y aumentarás la productividad. No es solo una inversión en tecnología, sino en el futuro de tu negocio. Aprovecha esta oportunidad para liderar tu industria y maximizar resultados.";
      secondParrafo = "Si tenés preguntas o simplemente querés informarte sobre lo que hacemos, no dudes en ponerte en contacto con nosotros. En Elykia estamos a su disposición para guiarlo y ayudarlo";
      contactTitle = "INFORMACIÓN DE CONTACTO";
      emailLabel = "Email:";
      emailValue = "info@elykia.com";
      phoneLabel = "Teléfono:";
      phoneValue = "+54 11 1234-5678";
      addressLabel = "Dirección:";
      addressValue = "Av. Corrientes 1234, CABA, Argentina";
      firstField = "Asunto";
      secondField = "Nombre";
      thirdField = "Email";
      fourthField = "¿Cuál es tu presupuesto para este proyecto? (USD)";
      firstBudgetOption = "Menos de $1,000";
      fifthField = "¿Qué servicio te interesa?";
      firstServiceOption = "IA Conversacional";
      secondServiceOption = "Desarrollo de chatbots";
      thirdServiceOption = "Desarrollo de software";
      fourthServiceOption = "Consulta general";
      sixthField = "¿A qué se dedica tu empresa?";
      sixthFieldPlaceholder = "Rubro";
      seventhField = "¿Cómo podemos ayudarte?";
      button = "Enviar";
      break;
    case "EN":
      firstTitle = "THE FUTURE ";
      secondTitle = "AWAITS";
      firstParrafo = "Artificial intelligence is a powerful tool to take your company to the next level. By integrating AI, you will optimize operations, reduce costs and increase productivity. It is not just an investment in technology, but in the future of your business. Seize this opportunity to lead your industry and maximize results.";
      secondParrafo = "If you have questions or just want to find out about what we do, don't hesitate to contact us. At Elykia we are at your disposal to guide and help you";
      contactTitle = "CONTACT INFORMATION";
      emailLabel = "Email:";
      emailValue = "info@elykia.com";
      phoneLabel = "Phone:";
      phoneValue = "+1 (555) 123-4567";
      addressLabel = "Address:";
      addressValue = "123 AI Boulevard, Tech Valley, CA 94025";
      firstField = "Subject";
      secondField = "Name";
      thirdField = "Email";
      fourthField = "What is your budget for this project? (USD)";
      firstBudgetOption = "Less than $1,000";
      fifthField = "What service are you interested in?";
      firstServiceOption = "Conversational AI";
      secondServiceOption = "Chatbot Development";
      thirdServiceOption = "Business consulting";
      fourthServiceOption = "General inquiry";
      sixthField = "What does your company do?";
      sixthFieldPlaceholder = "Industry";
      seventhField = "How can we help you?";
      button = "Send";
      break;
    default:
      firstTitle = "EL FUTURO ";
      secondTitle = "ESPERA";
      firstParrafo = "La inteligencia artificial es una herramienta poderosa para llevar tu empresa al siguiente nivel. Al integrar IA, optimizarás operaciones, reducirás costos y aumentarás la productividad. No es solo una inversión en tecnología, sino en el futuro de tu negocio. Aprovecha esta oportunidad para liderar tu industria y maximizar resultados.";
      secondParrafo = "Si tenés preguntas o simplemente querés informarte sobre lo que hacemos, no dudes en ponerte en contacto con nosotros. En Elykia estamos a su disposición para guiarlo y ayudarlo";
      contactTitle = "INFORMACIÓN DE CONTACTO";
      emailLabel = "Email:";
      emailValue = "info@elykia.com";
      phoneLabel = "Teléfono:";
      phoneValue = "+54 11 1234-5678";
      addressLabel = "Dirección:";
      addressValue = "Av. Corrientes 1234, CABA, Argentina";
      firstField = "Asunto";
      secondField = "Nombre";
      thirdField = "Email";
      fourthField = "¿Cuál es tu presupuesto para este proyecto? (USD)";
      firstBudgetOption = "Menos de $1,000";
      fifthField = "¿Qué servicio te interesa?";
      firstServiceOption = "IA Conversacional";
      secondServiceOption = "Desarrollo de chatbots";
      thirdServiceOption = "Consultoría empresarial";
      fourthServiceOption = "Consulta general";
      sixthField = "¿A qué se dedica tu empresa?";
      sixthFieldPlaceholder = "Rubro";
      seventhField = "¿Cómo podemos ayudarte?";
      button = "Enviar";
  }

  return (
    <>
      <div className="bg-black">
      <div
        className="w-layout-blockcontainer  container w-container bg-black"
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
        className="w-layout-layout contact-grid wf-layout-layout box-border md:grid p-5 auto-cols-fr justify-center gap-10 md:grid-rows-auto md:grid-cols-[1fr_1.5fr] flex flex-col"
      >
            <div
              id="w-node-_9da753b1-3363-aa89-00d9-9b6bd11f6579-3a1b43b1"
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
                {firstTitle}
                <span
                  style={{
                    boxSizing: "border-box",
                    // color: "rgb(124, 108, 119)",
                    color: "#9a5de5"
                  }}
                >
                  {secondTitle}
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
                {firstParrafo}
                <br style={{ boxSizing: "border-box" }} />
                <br style={{ boxSizing: "border-box" }} />
                {secondParrafo}
              </div>
              
              {/* Contact Information Section */}
              <div
                className="contact-info-section"
                style={{
                  boxSizing: "border-box",
                  marginTop: "30px",
                  padding: "20px",
                  borderRadius: "10px",
                  border: "1px solid #9a5de5",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    boxSizing: "border-box",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginTop: "0px",
                    marginBottom: "15px",
                    fontSize: "20px",
                    color: "#9a5de5",
                  }}
                >
                  {contactTitle}
                </h3>
                <div
                  className="contact-info-item"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      fontWeight: "bold",
                      marginRight: "10px",
                      color: "white",
                    }}
                  >
                    {emailLabel}
                  </span>
                  <span
                    style={{
                      boxSizing: "border-box",
                      color: "white",
                    }}
                  >
                    {emailValue}
                  </span>
                </div>
                <div
                  className="contact-info-item"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      fontWeight: "bold",
                      marginRight: "10px",
                      color: "white",
                    }}
                  >
                    {phoneLabel}
                  </span>
                  <span
                    style={{
                      boxSizing: "border-box",
                      color: "white",
                    }}
                  >
                    {phoneValue}
                  </span>
                </div>
                {/* <div
                  className="contact-info-item"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      fontWeight: "bold",
                      marginRight: "10px",
                      color: "white",
                    }}
                  >
                    {addressLabel}
                  </span>
                  <span
                    style={{
                      boxSizing: "border-box",
                      color: "white",
                    }}
                  >
                    {addressValue}
                  </span>
                </div> */}
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
                    className="text-field w-input rounded-none border-t-0 border-r-0 border-l-0 border-3"
                    name="Asunto"
                    type="text"
                    maxLength={256}
                    required
                    placeholder={firstField}
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
                      className="text-field w-input rounded-none border-t-0 border-r-0 border-l-0 border-3"
                      name="nombre"
                      type="text"
                      maxLength={256}
                      required
                      placeholder={secondField}
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
                      className="text-field w-input rounded-none border-t-0 border-r-0 border-l-0 border-3"
                      name="email"
                      type="email"
                      maxLength={256}
                      required
                      placeholder={thirdField}
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
                      {fourthField}
                    </strong>
                  </div>
                  <select
                    id="budget"
                    className="text-field dropdown w-select border-r-0 border-t-0 border-l-0 rounded-none"
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
                      {firstBudgetOption}
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
                      {fifthField}
                    </strong>
                  </div>
                  <select
                    id="service"
                    className="text-field dropdown w-select border-r-0 border-t-0 border-l-0 rounded-none"
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
                      {firstServiceOption}
                    </option>
                    <option
                      value="chatbot"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {secondServiceOption}
                    </option>
                    <option
                      value="consult"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {thirdServiceOption}
                    </option>
                    <option
                      value="chat"
                      style={{
                        boxSizing: "border-box",
                        backgroundColor: "black",
                      }}
                    >
                      {fourthServiceOption}
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
                      {sixthField}
                    </strong>
                  </div>
                  <input
                    id="rubro"
                    className="text-field w-input rounded-none border-t-0 border-r-0 border-l-0 border-3"
                    name="rubro"
                    type="text"
                    maxLength={256}
                    required
                    placeholder={sixthFieldPlaceholder}
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
                    className="text-field large w-input border-r-0 border-t-0 border-l-0 rounded-none"
                    name="How-can-we-help"
                    maxLength={5000}
                    required
                    placeholder={seventhField}
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
                    {button}
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
  background-color: rgb(0, 0, 0);
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