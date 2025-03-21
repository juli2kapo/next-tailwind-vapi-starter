"use client";
import React, { useEffect, useState } from "react";
import LanguageSelector from "./languageDropdown";
import { useLanguage } from "./componentProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { currentLanguage } = useLanguage();
  const currentPath = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    setIsMobileMenuOpen(false);
  },[currentPath])
  let inicio;
  let servicios;
  let contactanos;
  let resell;
  let ia;
  let chat;
  switch (currentLanguage) {
    case "ES":
      inicio = "Inicio";
      servicios = "Servicios";
      contactanos = "Contactanos";
      ia = "IA Conversacional";
      chat = "Desarrollo de chatbot";
      resell = "Reventa";
      break;
    case "EN":
      inicio = "Home";
      servicios = "Services";
      contactanos = "Contact Us";
      ia = "Conversational AI";
      resell = "Resell";
      chat = "Chatbot Development";
      break;
    default:
      inicio = "Inicio";
      servicios = "Servicios";
      contactanos = "Contactanos";
      ia = "IA Conversacional";
      chat = "Desarrollo de chatbot";
      resell = "Reventa";
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
        media="all"
      />
      <div
        data-animation="over-left"
        className="navbar w-nav"
        role="banner"
        id="particles-js"
      >
        <div className="hero-container w-container">
          <div className="nav-box" style={{ opacity: 1 }}>
            <div className="nav-core-component">
              <Link
                href="/"
                aria-current="page"
                className="w-nav-brand w--current"
                aria-label="home"
              >
                <img
                  src="https://i.imgur.com/ycaBSDa.jpeg"
                  loading="lazy"
                  alt="Elykia Logo"
                  className="nav-image"
                  width={60}
                />
              </Link>
              {/* <LanguageSelector /> */}
            </div>
            <div>
              <div className="float-right">
                <LanguageSelector />
              </div>

              <div className="nav-core-component">
                <nav role="navigation" className="nav-menu-mobile w-nav-menu">
                  <Link href="/" className="nav-link w-inline-block w--current">
                    <div className="nav-text">{inicio}</div>
                  </Link>
                  
                  <div
                    className="flex flex-col dropdown-container"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="nav-link dropdown-trigger">
                      <div className="nav-text">{servicios}</div>
                    </div>
                    <div
                      className={`dropdown-menu absolute ${
                        isDropdownOpen ? "flex" : "hidden"
                      }`}
                    >
                      <div className="inner-dropdown">
                        <Link href="/conversationai">{ia}</Link>
                        <Link href="/chatbotgeneration">{chat}</Link>
                      </div>
                    </div>
                  </div>
                  <Link href="/resell" className="nav-link w-inline-block w--current bg-transparent text-white hover:text-black hover:bg-white">
                    <div className="nav-text">{resell}</div>
                  </Link>
                </nav>
                <div>
                  <Link href="/contact" className="nav-link contact-button">
                    {contactanos}
                  </Link>
                </div>
                {/* Language Selection */}
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div
              className="menu-button w-nav-button"
              role="button"
              tabIndex={0}
              onClick={toggleMobileMenu}
            >
              <div className="menu-icon w-icon-nav-menu" />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <nav
          role="navigation"
          className={`nav-menu-mobile w-nav-menu fixed top-0 z-40 h-screen ${
            isMobileMenuOpen ? "open" : "closed"
          }`}
          style={{
            display: isMobileMenuOpen ? "block" : "none",
          }}
        >
          <Link
            href="#"
            className="close-nav-menu-link-block w-inline-block nav-link fixed right-3"
            onClick={toggleMobileMenu}
          >
            <div className="close-icon w-embed">
              <svg width={30} height={30} viewBox="0 0 20 20" fill="none">
                <path
                  d="M11 9.6L18.9 1.7C19.3 1.3 19.3 0.7 18.9 0.3C18.5 -0.1 17.9 -0.1 17.5 0.3L9.6 8.2L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L8.2 9.6L0.3 17.5C-0.1 17.9 -0.1 18.5 0.3 18.9C0.5 19.1 0.8 19.2 1 19.2C1.2 19.2 1.5 19.1 1.7 18.9L9.6 11L17.5 18.9C17.7 19.1 18 19.2 18.2 19.2C18.4 19.2 18.7 19.1 18.9 18.9C19.3 18.5 19.3 17.9 18.9 17.5L11 9.6Z"
                  fill="white"
                />
              </svg>
            </div>
          </Link>
          <Link href="/" className="nav-link w-inline-block">
            <div className="nav-text">{inicio}</div>
          </Link>
          <Link href="/conversationai" className="nav-link w-inline-block">
            <div className="nav-text">{ia}</div>
          </Link>
          <Link href="/chatbotgeneration" className="nav-link w-inline-block">
            <div className="nav-text">{chat}</div>
          </Link>
          <Link href="/contact" className="nav-link w-inline-block">
            <div className="nav-text">{contactanos}</div>
          </Link>
        </nav>
      </div>
      <style jsx>{`
        .flag-button {
          background: none;
          border: none;
          margin: 0 5px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
