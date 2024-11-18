import React from "react";

export default function InnerDropdown() {
  return (
    <>
      <div
        className="inner-dropdown"
        style={{
          boxSizing: "border-box",
          padding: "4px",
          borderRadius: "5px",
          position: "relative",
          paddingTop: "2%",
          backgroundColor: "rgb(241, 241, 241)",
          display: "inline-block",
        }}
      >
        <a
          href="conversationai"
          style={{
            boxSizing: "border-box",
            backgroundColor: "rgba(0, 0, 0, 0)",
            padding: "12px 16px",
            textDecoration: "none",
            transition: "background-color 0.3s",
            display: "block",
            color: "rgb(51, 51, 51)",
            fontSize: "14px",
          }}
        >
          IA Conversacional
        </a>
        <a
          href="chatbotgeneration"
          style={{
            boxSizing: "border-box",
            backgroundColor: "rgba(0, 0, 0, 0)",
            padding: "12px 16px",
            textDecoration: "none",
            transition: "background-color 0.3s",
            display: "block",
            color: "rgb(51, 51, 51)",
            fontSize: "14px",
          }}
        >
          Desarrollo de chatbot
        </a>
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
