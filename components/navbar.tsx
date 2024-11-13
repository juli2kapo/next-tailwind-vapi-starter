'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <header className="navbar">
    //   <div className="hero-container">
    //     <div className="nav-box">
    //       <Link href="/">
    //         <Image src="https://i.imgur.com/ycaBSDa.jpeg" alt="Elykia Logo" width={60} height={60} />
    //       </Link>
    //       <div className="nav-core-component">
    //         <nav className={`nav-menu-mobile ${menuOpen ? 'open' : ''}`}>
    //           <Link href="/">Inicio</Link>
    //           <div className="nav-link">
    //             <span>Servicios</span>
    //             <div className="dropdown-menu">
    //               <Link href="/conversationai">IA Conversacional</Link>
    //               <Link href="/chatbotgeneration">Desarrollo de chatbot</Link>
    //             </div>
    //           </div>
    //           <Link href="/contact" className="contact-button">Contactanos</Link>
    //         </nav>
    //         <button
    //           className="menu-button"
    //           onClick={() => setMenuOpen(!menuOpen)}
    //           aria-label="Toggle Menu"
    //         >
    //           ☰
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <>
    <div data-animation="over-left" className="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium"
      data-w-id="07f4b03e-b653-bf76-2345-ebb47fb39754" role="banner" id="particles-js">
  <div className="hero-container w-container">
    <div data-w-id="07f4b03e-b653-bf76-2345-ebb47fb39756" className="nav-box opacity-100">
      <Link href="/" aria-current="page" className="w-nav-brand w--current" aria-label="home">
        <img src="https://i.imgur.com/ycaBSDa.jpeg" loading="lazy" alt="Elykia Logo" className="nav-image" width="60" />
      </Link>

      <div className="nav-core-component flex items-center">
        {/* Desktop Navigation */}
        <nav role="navigation" className="hidden md:flex gap-4">
          <Link href="/" aria-current="page" className="nav-link w-inline-block w--current">
            <div className="nav-text">Inicio</div>
          </Link>

          <div className="nav-link relative group">
            <div className="nav-text cursor-pointer">Servicios</div>
            <div className="dropdown-menu absolute hidden group-hover:flex flex-col bg-white shadow-lg rounded-lg mt-2">
              <div className="inner-dropdown p-4">
                <a href="/conversationai" className="block px-4 py-2 hover:bg-gray-100">IA Conversacional</a>
                <a href="/chatbotgeneration" className="block px-4 py-2 hover:bg-gray-100">Desarrollo de chatbot</a>
              </div>
            </div>
          </div>
        </nav>

        <a href="/contact" className="nav-link contact-button nav-text">Contactanos</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-button w-nav-button md:hidden" aria-label="menu" role="button" tabIndex={0} aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false">
        <div className="menu-icon w-icon-nav-menu">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>

        {/* Mobile Navigation */}
        <nav role="navigation" className="nav-menu-mobile w-nav-menu flex flex-col gap-4 bg-white p-4 absolute top-full left-0 right-0 shadow-lg md:hidden">
          <a href="#" className="close-nav-menu-link-block w-inline-block">
            <div className="close-icon w-embed">
              <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9.6L18.9 1.7C19.3 1.3 19.3 0.7 18.9 0.3C18.5 -0.1 17.9 -0.1 17.5 0.3L9.6 8.2L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L8.2 9.6L0.3 17.5C-0.1 17.9 -0.1 18.5 0.3 18.9C0.5 19.1 0.8 19.2 1 19.2C1.2 19.2 1.5 19.1 1.7 18.9L9.6 11L17.5 18.9C17.7 19.1 18 19.2 18.2 19.2C18.4 19.2 18.7 19.1 18.9 18.9C19.3 18.5 19.3 17.9 18.9 17.5L11 9.6Z" fill="black"></path>
              </svg>
            </div>
          </a>

          <Link href="/" className="nav-link w-inline-block">
            <div className="nav-text">Inicio</div>
          </Link>
          <a href="/conversationai" className="nav-link w-inline-block">
            <div className="nav-text">IA Conversacional</div>
          </a>
          <a href="/chatbotgeneration" className="nav-link w-inline-block">
            <div className="nav-text">Desarrollo de chatbot</div>
          </a>
          <div className="button mobile w-button nav-text bg-white text-black p-2 rounded-md">
            <a href="/contact" className="nav-text text-black no-underline">Contactanos</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
  <div className="w-nav-overlay hidden" data-wf-ignore="" id="w-nav-overlay-0"></div>
</div>

    </>
  );
}
