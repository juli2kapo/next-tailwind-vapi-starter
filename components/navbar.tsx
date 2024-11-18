"use client"
import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        data-w-id="07f4b03e-b653-bf76-2345-ebb47fb39754"
        role="banner"
        data-duration={400}
        id="particles-js"
      >
        <div className="hero-container w-container">
          <div
            data-w-id="07f4b03e-b653-bf76-2345-ebb47fb39756"
            className="nav-box"
            style={{ opacity: 1 }}
          >
            <a
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
            </a>
            <p></p>
            <div className="nav-core-component">
              <nav role="navigation" className="nav-menu-mobile w-nav-menu">
                <a
                  href="/"
                  aria-current="page"
                  className="nav-link w-inline-block w--current"
                >
                  <div className="nav-text">Inicio</div>
                </a>
                <div className="flex flex-col dropdown-container" onMouseEnter={()=>setIsDropdownOpen(true)} onMouseLeave={()=>setIsDropdownOpen(false)}>
                  <div className="nav-link dropdown-trigger">
                    <div className="nav-text" >Servicios</div>
                  </div>
                  <div className={("dropdown-menu absolute " + (isDropdownOpen ? "flex" : "hidden")) }>
                    <div className="inner-dropdown">
                      <a href="/conversationai">IA Conversacional</a>
                      <a href="/chatbotgeneration">Desarrollo de chatbot</a>
                    </div>
                  </div>
                </div>

              </nav>
              <a href="/contact" className="nav-link contact-button">
                Contactanos
              </a>
            </div>
            {/* Mobile Menu Button */}
            <div
              className="menu-button w-nav-button"
              style={{ WebkitUserSelect: "text" }}
              aria-label="menu"
              role="button"
              tabIndex={0}
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <div className="menu-icon w-icon-nav-menu" />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          role="navigation"
          className={`nav-menu-mobile w-nav-menu ${
            isMobileMenuOpen ? "open" : "closed"
          }`}
          style={{
            display: isMobileMenuOpen ? "block" : "none",
          }}
        >
          <a
            data-w-id="3aad70a9-d556-c5fc-d440-1ccc6b36ed78"
            href="#"
            className="close-nav-menu-link-block w-inline-block nav-link"
            onClick={toggleMobileMenu}
          >
            <div className="close-icon w-embed mt-16 z-50">
              <svg
                width={30}
                height={30}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.6L18.9 1.7C19.3 1.3 19.3 0.7 18.9 0.3C18.5 -0.1 17.9 -0.1 17.5 0.3L9.6 8.2L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L8.2 9.6L0.3 17.5C-0.1 17.9 -0.1 18.5 0.3 18.9C0.5 19.1 0.8 19.2 1 19.2C1.2 19.2 1.5 19.1 1.7 18.9L9.6 11L17.5 18.9C17.7 19.1 18 19.2 18.2 19.2C18.4 19.2 18.7 19.1 18.9 18.9C19.3 18.5 19.3 17.9 18.9 17.5L11 9.6Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
          <a href="/" className="nav-link w-inline-block">
            <div className="nav-text">Inicio</div>
          </a>
          <a href="/conversationai" className="nav-link w-inline-block">
            <div className="nav-text">IA Conversacional</div>
          </a>
          <a href="/chatbotgeneration" className="nav-link w-inline-block">
            <div className="nav-text">Desarrollo de chatbot</div>
          </a>
          <a href="/contact" className="nav-link w-inline-block">
            <div className="nav-text">Contactanos</div>
          </a>
        </nav>
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
}

/* Mobile Navigation Styles */
@media screen and (max-width: 960px) {
  .nav-menu-mobile {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9); /* Dark background */
    z-index: 1000; /* Ensure it's above other content */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .nav-menu-mobile.closed {
    display: none;
  }

  .nav-menu-mobile.open {
    display: flex; /* Flex for centering menu items */
  }

  .nav-link {
    margin: 20px 0; /* Space between items */
    font-size: 18px;
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  .close-nav-menu-link-block {
    position: relative;
    bottom: 18vh;
    left: 75vw;
    cursor: pointer;
  }



    .dropdown-menu {
  position: absolute;
  top: 100%; /* Position right below the trigger */
  left: 0;
  background-color: #ffffff; /* White background */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999; /* Ensure it appears above other elements */
  border-radius: 4px;
  padding: 10px 0;
  width: 200px;
}

.dropdown-container:hover .dropdown-menu {
  display: block; /* Show on hover */
}

.inner-dropdown a {
  display: block;
  padding: 8px 16px;
  color: #333;
  text-decoration: none;
  font-size: 14px;
}

.inner-dropdown a:hover {
  background-color: #f0f0f0; /* Light gray on hover */
}
.dropdown-container {
  position: relative;
}

  .close-icon svg {
    fill: #fff;
  }
}
`,
  }}
/>



    </>
  );
}
