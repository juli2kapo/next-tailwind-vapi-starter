"use client";
import Image from "next/image";
import { useLanguage } from "./componentProvider";

export default function Footer() {
  const { currentLanguage } = useLanguage();
  let address;
  let contact;
  switch (currentLanguage) {
    case "ES":
      address = "Ubicación";
      contact = "Contacto";
      break;
    case "EN":
      address = "Location";
      contact = "Contact";
      break;
    default:
      address = "Ubicación";
      contact = "Contacto";
  }
  return (
    <section className="footer">
      <div className="w-layout-blockcontainer hero-container footer w-container">
        <div
          className="footer-left-div"
          style={{
            boxSizing: "border-box",
            flex: "1 1 0%",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <img
            src="Images/icon.jpg"
            srcSet="Images/icon.jpg"
            style={{
              boxSizing: "border-box",
              height: "60px",
              width: "auto",
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
              color: "white",
              position: "relative",
              left: "10px",
              top: "20px",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            Elykia
          </div>
        </div>
        <div className="footer-right-div">
          <div className="footer-right-div-top-div horizontal-div columnifmedia">
            <div>
              <div className="horizontal-div flex items-center space-x-2">
                <div className="address-icon w-embed">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 8.4666669 8.4666669"
                    id="svg8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="layer1" transform="translate(0,-288.53332)">
                      <path
                        d="m 4.2324219,288.79688 c -1.6042437,0 -2.9101556,1.30591 -2.9101563,2.91015 -10e-7,2.82277 2.7460938,4.96875 2.7460938,4.96875 a 0.26460978,0.26460978 0 0 0 0.3300781,0 c 0,0 2.7460996,-2.14598 2.7460937,-4.96875 -3.4e-6,-1.60424 -1.3078657,-2.91015 -2.9121093,-2.91015 z m 0,0.52929 c 1.3182605,0 2.3828097,1.0626 2.3828125,2.38086 4.8e-6,2.30926 -2.0910618,4.13374 -2.3808594,4.38086 -0.2884142,-0.24588 -2.3828134,-2.0707 -2.3828125,-4.38086 5e-7,-1.31826 1.0625988,-2.38086 2.3808594,-2.38086 z"
                        id="path929"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="m 4.2324219,290.38477 c -0.7274912,0 -1.3222633,0.59477 -1.3222657,1.32226 -4.5e-6,0.7275 0.5947697,1.32422 1.3222657,1.32422 0.727496,0 1.3242233,-0.59672 1.3242187,-1.32422 -2.3e-6,-0.72749 -0.5967275,-1.32226 -1.3242187,-1.32226 z m 0,0.52929 c 0.4415089,0 0.7949204,0.35146 0.7949219,0.79297 2.7e-6,0.44151 -0.35341,0.79492 -0.7949219,0.79492 -0.441512,0 -0.7929715,-0.35341 -0.7929688,-0.79492 1.4e-6,-0.44151 0.3514598,-0.79297 0.7929688,-0.79297 z"
                        id="circle931"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="footer-text text-white">{address}</div>
              </div>
              <div className="footer-text text-[#7C6C77] mt-1">
                Buenos Aires, Argentina
              </div>
            </div>
            <div className="div-block-5">
              <div className="horizontal-div flex items-center mb-1 space-x-2">
                <div className="email-icon w-embed">
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 10.8182V3.18182C18 1.42545 16.56 0 14.7857 0H3.21429C1.44 0 0 1.42545 0 3.18182V10.8182C0 12.5745 1.44 14 3.21429 14H14.7857C16.56 14 18 12.5745 18 10.8182ZM16.7143 3.85003V10.8182C16.7143 11.8745 15.8529 12.7273 14.7857 12.7273H3.21429C2.14714 12.7273 1.28571 11.8745 1.28571 10.8182V3.85003L7.19353 7.8273C8.28639 8.55912 9.71361 8.55912 10.8065 7.8273L16.7143 3.85003ZM16.5536 2.41821C16.2579 1.74367 15.5764 1.27273 14.7857 1.27273H3.21429C2.42357 1.27273 1.74214 1.74367 1.44643 2.41821L7.91361 6.77092C8.56932 7.21637 9.43068 7.21637 10.0864 6.77092L16.5536 2.41821Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="footer-text text-white">{contact}</div>
              </div>
              <a
                href="mailto:info@elykia.com.ar?subject=Asunto"
                className="footer-text text-[#7C6C77]"
              >
                info@elykia.com.ar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
