"use client";
import React, { useState, useEffect } from "react";
import { useLanguage } from "./componentProvider";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LanguageSelector = () => {
  let cookieText;
  let declineButton;
  let agreeButton;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  switch (currentLanguage) {
    case "EN":
      cookieText = "This website uses cookies to store your preferred language.";
      declineButton = "Decline";
      agreeButton = "Agree";
      break;
    case "ES":
      cookieText = "Este sitio web utiliza cookies para almacenar su idioma preferido.";
      declineButton = "Rechazar";
      agreeButton = "Aceptar";
      break;
    default:
      cookieText = "Este sitio web utiliza cookies para almacenar su idioma preferido.";
      declineButton = "Rechazar";
      agreeButton = "Aceptar";
  }
  const router = useRouter();

  useEffect(() => {
    const cookieConsent = Cookies.get("languageConsent");
    const savedLanguage = Cookies.get("preferredLanguage");

    if (!cookieConsent) {
      setCurrentLanguage("ES"); // Default to Spanish if no consent
      setShowCookieConsent(true); 
    }
  }, [setCurrentLanguage]);

  const handleLanguageChange = (language: string) => {
    const cookieConsent = Cookies.get("languageConsent");
    if(cookieConsent){
      Cookies.set("preferredLanguage", language, { expires: 365 });
    }
    if (language !== currentLanguage) {
      setCurrentLanguage(language);
      router.refresh(); 
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleCookieConsent = () => {
    Cookies.set("languageConsent", "true", { expires: 365 });
    setShowCookieConsent(false);
    handleLanguageChange(currentLanguage);
  };
  const handleCookiesReject = () => {
    Cookies.remove("languageConsent");
    Cookies.remove("preferredLanguage");
    setShowCookieConsent(false);
  }

  const getFlagSrc = (language: string) => {
    switch (language) {
      case "EN":
        return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
      case "ES":
        return "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg";
      default:
        return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
    }
  };

  return (
    <>
      <div
        className="language-selector"
        onMouseEnter={toggleDropdown}
        onMouseLeave={closeDropdown}
        style={{ position: "relative", display: "inline-block" }}
      >
        <button
          className="flag-button ml-4 mt-3"
          aria-label="Select Language"
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          <img
            src={getFlagSrc(currentLanguage)}
            alt="Language Selector"
            width="25"
          />
        </button>

        {isDropdownOpen && (
          <div
            className={`dropdown-menu flex-col min-w-14 ${
              isDropdownOpen ? "flex" : "hidden"
            }`}
            style={{
              position: "absolute",
              top: "100%",
              right: -10,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              zIndex: 1000,
              padding: "0.5rem",
            }}
          >
            <div
              className="dropdown-item"
              onClick={() => handleLanguageChange("EN")}
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt="English"
                width="20"
                style={{ marginRight: "0.5rem" }}
              />
            </div>
            <div
              className="dropdown-item"
              onClick={() => handleLanguageChange("ES")}
              style={{
                padding: "0.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
                alt="Español"
                width="20"
                style={{ marginRight: "0.5rem" }}
              />
            </div>
          </div>
        )}
      </div>

      {showCookieConsent && (
        <div
          className="cookie-consent-bar"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#f9f9f9",
            borderTop: "1px solid #ccc",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <span>
            {cookieText}
          </span>
          <div>

          <button
            onClick={handleCookiesReject}
            className="mr-2 border-gray-600"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            >
            {declineButton}
          </button>
          <button
            onClick={handleCookieConsent}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            >
            {agreeButton}
          </button>
            </div>
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
