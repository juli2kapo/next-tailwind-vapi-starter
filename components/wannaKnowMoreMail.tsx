"use client";
import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function KnowMoreMail() {
  const { currentLanguage } = useLanguage();
  let firstRow;
  let secondRow;
  switch (currentLanguage) {
    case "ES":
      firstRow = "Contactanos";
      secondRow = "info@elykia.com.ar";
      break;
    case "EN":
      firstRow = "Contact us";
      secondRow = "info@elykia.com.ar";
      break;
    default:
      firstRow = "Contactanos";
      secondRow = "info@elykia.com.ar";
  }
  return (
    <div className="cta-section flex flex-col items-center justify-center">
      <h2 className="section-heading">{firstRow}</h2>
      <div className="mx-auto">
        <a
          href={"mailto:" + {secondRow}} 
          className="text-2xl"
        >
          {secondRow}
        </a>
        {/* <Link
          href="/contact"
          className="nav-link contact-button bg-black text-white"
        >
          {secondRow}
        </Link> */}
      </div>
    </div>
  );
}
