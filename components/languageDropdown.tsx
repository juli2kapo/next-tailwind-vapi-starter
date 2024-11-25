"use client"
import React, { useState } from "react";
import { useLanguage } from "./componentProvider";
import { useRouter } from "next/navigation";

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const router = useRouter();

  const handleLanguageChange = (language: string) => {
    if (language === currentLanguage) {
      return;
    } else {
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

  const getFlagSrc = (language: string) => {
    switch (language) {
      case "EN":
        return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
      case "ES":
        return "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg";
      // Add more cases for other languages as needed
      default:
        return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"; // Default to English flag
    }
  };

  return (
    <div
      className="language-selector"
      onMouseEnter={toggleDropdown}
      onMouseLeave={closeDropdown}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button
        className="flag-button ml-4 
        mt-3
        "
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
          {/* Add more languages here as needed */}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;