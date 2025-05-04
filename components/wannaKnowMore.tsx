"use client";
import Link from "next/link";
import { useLanguage } from "./componentProvider";

export default function KnowMore() {
  const { currentLanguage } = useLanguage();
  let firstRow;
  let secondRow;
  switch (currentLanguage) {
    case "ES":
      firstRow = "¿Querés saber más?";
      secondRow = "Contactanos";
      break;
    case "EN":
      firstRow = "Want to know more?";
      secondRow = "Contact us";
      break;
    default:
      firstRow = "¿Querés saber más?";
      secondRow = "Contactanos";
  }
  return (
    <div className="cta-section flex flex-col items-center justify-center bg-gray-100">
      <h2 className="section-heading">{firstRow}</h2>
      <div className="mx-auto">
        <Link
          href="/contact"
          className="nav-link contact-button bg-black text-white"
        >
          {secondRow}
        </Link>
      </div>
    </div>
  );
}
