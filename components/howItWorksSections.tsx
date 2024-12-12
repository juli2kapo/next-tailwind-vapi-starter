"use client"
import React from "react";
import { useLanguage } from "./componentProvider";

export default function HowItWorks() {
  const { currentLanguage } = useLanguage();
  let firstRow;
  let firstItem;
  let secondItem;
  let thirdItem;
  let fourthItem;
  let fifthItem;
  let sixthItem;
  switch(currentLanguage){
    case "ES":
      firstRow = "¿Por qué trabajar con nosotros?";
      firstItem = "Nuestra prioridad es hacer crecer tu negocio, no hacer software.";
      secondItem = "Soporte 24/7 y asistencia para todas tus necesidades.";
      thirdItem = "Servicio hecho para vos. Nos decís que necesitas y nosotros lo hacemos.";
      fourthItem = "Vas a ahorrar horas en entrada de datos y reducir errores.";
      fifthItem = "Capacidad de manejar más de 100.000 llamadas al día.";
      sixthItem = "Enfoque multicanal (Voz, Email, SMS, Whatsapp, etc.)";
      break;
    case "EN":
      firstRow = "Why work with us?";
      firstItem = "Our priority is to grow your business, not to make software.";
      secondItem = "24/7 support and assistance for all your needs.";
      thirdItem = "Service made for you. You tell us what you need and we do it.";
      fourthItem = "You will save hours on data entry and reduce errors.";
      fifthItem = "Ability to handle more than 100,000 calls per day.";
      sixthItem = "Multichannel approach (Voice, Email, SMS, Whatsapp, etc.)";
      break;
    default:
      firstRow = "¿Por qué trabajar con nosotros?";
      firstItem = "Nuestra prioridad es hacer crecer tu negocio, no hacer software.";
      secondItem = "Soporte 24/7 y asistencia para todas tus necesidades.";
      thirdItem = "Servicio hecho para vos. Nos decís que necesitas y nosotros lo hacemos.";
      fourthItem = "Vas a ahorrar horas en entrada de datos y reducir errores.";
      fifthItem = "Capacidad de manejar más de 100.000 llamadas al día.";
      sixthItem = "Enfoque multicanal (Voz, Email, SMS, Whatsapp, etc.)";
  }

  return (
    <>
      <div
        className="how-it-works"
        style={{
          boxSizing: "border-box",
          padding: "6vh 20px",
          backgroundColor: "black",
          color: "white",
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
            textTransform: "uppercase",
            backgroundColor: "black",
            color: "white",
            paddingBottom: "10vh",
          }}
        >
          {firstRow}
        </h2>
        <ul className="box-border px-2 grid grid-cols-1 md:grid-cols-2 mt-6vh mb-10vh gap-5 place-items-start justify-start">
          <li
            className="feature-item"
            style={{
              boxSizing: "border-box",
              fontSize: "16px",
              marginBottom: "3vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "start",
              flexDirection: "row",
            }}
          >
            <img
              className="feature-icon"
              alt="Feature Icon"
              src="https://i.imgur.com/yHSIico.png"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                marginLeft: "15px",
                width: "5vh",
                height: "auto",
                marginRight: "0.4vw",
              }}
            />
            <span
              style={{
                boxSizing: "border-box",
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {firstItem}
            </span>
          </li>
          <li
            className="feature-item"
            style={{
              boxSizing: "border-box",
              fontSize: "16px",
              marginBottom: "3vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "start",
              flexDirection: "row",
            }}
          >
            <img
              className="feature-icon"
              alt="Feature Icon"
              src="https://i.imgur.com/yHSIico.png"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                marginLeft: "15px",
                width: "5vh",
                height: "auto",
                marginRight: "0.4vw",
              }}
            />
            <span
              style={{
                boxSizing: "border-box",
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {secondItem}
            </span>
          </li>
          <li
            className="feature-item"
            style={{
              boxSizing: "border-box",
              fontSize: "16px",
              marginBottom: "3vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "start",
              flexDirection: "row",
            }}
          >
            <img
              className="feature-icon"
              alt="Feature Icon"
              src="https://i.imgur.com/yHSIico.png"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                marginLeft: "15px",
                width: "5vh",
                height: "auto",
                marginRight: "0.4vw",
              }}
            />
            <span
              style={{
                boxSizing: "border-box",
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {thirdItem}
            </span>
          </li>
          <li
            className="feature-item"
            style={{
              boxSizing: "border-box",
              fontSize: "16px",
              marginBottom: "3vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "start",
              flexDirection: "row",
            }}
          >
            <img
              className="feature-icon"
              alt="Feature Icon"
              src="https://i.imgur.com/yHSIico.png"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                marginLeft: "15px",
                width: "5vh",
                height: "auto",
                marginRight: "0.4vw",
              }}
            />
            <span
              style={{
                boxSizing: "border-box",
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {fourthItem}
            </span>
          </li>
          <li
            className="feature-item"
            style={{
              boxSizing: "border-box",
              fontSize: "16px",
              marginBottom: "3vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "start",
              flexDirection: "row",
            }}
          >
            <img
              className="feature-icon"
              alt="Feature Icon"
              src="https://i.imgur.com/yHSIico.png"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                marginLeft: "15px",
                width: "5vh",
                height: "auto",
                marginRight: "0.4vw",
              }}
            />
            <span
              style={{
                boxSizing: "border-box",
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {fifthItem}
            </span>
          </li>
          <li
            className="feature-item"
            style={{
              boxSizing: "border-box",
              fontSize: "16px",
              marginBottom: "3vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              textAlign: "start",
              flexDirection: "row",
            }}
          >
            <img
              className="feature-icon"
              alt="Feature Icon"
              src="https://i.imgur.com/yHSIico.png"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                marginLeft: "15px",
                width: "5vh",
                height: "auto",
                marginRight: "0.4vw",
              }}
            />
            <span
              style={{
                boxSizing: "border-box",
                color: "white",
                fontSize: "18px",
                fontWeight: 500,
              }}
            >
              {sixthItem}
            </span>
          </li>
        </ul>
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
