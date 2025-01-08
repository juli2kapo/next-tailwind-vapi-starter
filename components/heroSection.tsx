"use client";
import Link from "next/link";
import React from "react";
import { useLanguage } from "./componentProvider";

export default function HeroSection() {
  const { currentLanguage } = useLanguage();
  let firstRow;
  let secondRow;
  let thirdRow;
  let button1;
  let button2;
  switch (currentLanguage) {
    case "ES":
      firstRow = "Lo que antes era imposible de automatizar";
      secondRow =
        "hoy es posible gracias a nuestros empleados virtuales";
      thirdRow = "con inteligencia artificial.";
      button1 = "IA Conversacional";
      button2 = "Desarrollo de chatbot";
      break;
    case "EN":
      firstRow = "What was once impossible to automate";
      secondRow = "is now possible thanks to our virtual employees powered";
      thirdRow = "by Artificial Intelligence.";
      button1 = "Conversational AI";
      button2 = "Chatbot Development";
      break;
    default:
      firstRow = "Lo que antes era imposible de automatizar";
      secondRow =
        "hoy es posible gracias a nuestros empleados virtuales";
      thirdRow = "con inteligencia artificial.";
  }

  return (
    <>
      <section
        className="section"
        style={{
          boxSizing: "border-box",
          display: "block",
          backgroundColor: "rgb(0, 0, 0)",
          paddingBottom: "6vh",
        }}
      >
        <div
          className="w-layout-blockcontainer hero mobile w-container"
          style={{
            boxSizing: "border-box",
            display: "block",
            padding: "20px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            // height: "",
          }}
        >
          <div
            className="hero-box main-hero"
            style={{
              boxSizing: "border-box",
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "column",
              opacity: 1,
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className="horizontal-div logo-sectionstart"
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
              <img
                width={40}
                alt="star"
                src="https://i.imgur.com/yHSIico.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                }}
              />
              <div
                className="elykia-text"
                style={{
                  boxSizing: "border-box",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "white",
                }}
              >
                ELYKIA
              </div>
            </div>
            <div
              id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2cf-f9ae67f1"
              style={{
                boxSizing: "border-box",
                gridTemplateRows: "auto",
                gridTemplateColumns: "1.25fr 1fr",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d0-f9ae67f1"
                  className="w-layout-cell"
                  style={{
                    boxSizing: "border-box",
                    flexDirection: "column",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <h1
                    className="h1 mainh1"
                    style={{
                      boxSizing: "border-box",
                      margin: "0.67em 0px",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                      marginTop: "0px",
                      fontWeight: 700,
                      lineHeight: "55px",
                      fontSize: "22px",
                      color: "white",
                    }}
                  >
                    <span
                      className="green"
                      style={{
                        boxSizing: "border-box",
                        color: "rgb(124, 108, 119)",
                        fontSize: "22px",
                      }}
                    >
                      {firstRow}
                    </span>
                    <br style={{ boxSizing: "border-box" }} />
                    {secondRow}
                    <br style={{ boxSizing: "border-box" }} />
                    {thirdRow}
                  </h1>
                </div>
                <div
                  id="w-node-d8a56c8c-1256-140d-6c7f-68e87ac0b2d1-f9ae67f1"
                  style={{ boxSizing: "border-box" }}
                >
                  <div className="box-border flex lg:flex-row justify-around gap-y-[1vw] lg:px-[22vw] flex-col px-[15vw]">
                    {/* <Link
    className="box-border rounded-md m-[0px_1px] p-[14px_30px] no-underline transition-colors duration-200 flex justify-center items-center border border-white bg-white text-black font-bold ml-[1vw] text-center"
    href="conversationai"
  >
    {button1}
  </Link> */}

                    <Link
                      className="box-border rounded-md m-[0px_1px] p-[14px_30px] no-underline transition-colors duration-200 flex justify-center items-center border border-white bg-white text-black font-bold ml-[1vw] text-center"
                      href={"conversationai"}
                    >
                      {button1}
                    </Link>
                    <Link
                      className="box-border rounded-md m-[0px_1px] p-[14px_30px] no-underline transition-colors duration-200 flex justify-center items-center border border-white bg-white text-black font-bold ml-[1vw] text-center"
                      href="chatbotgeneration"
                    >
                      {button2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
