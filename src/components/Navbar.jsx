import React, { useState, useEffect } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="nav-logo"
            aria-label="SkyparzInnovation Home"
          >
            <div className="logo-icon">S</div>
            <span>SKYPARZ</span>
          </a>

          <div className="nav-links" id="navLinks">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className={currentPage === 'home' ? 'active' : ''}
            >
              Home
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('services');
              }}
              className={currentPage === 'services' ? 'active' : ''}
            >
              Services
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
              className={currentPage === 'about' ? 'active' : ''}
            >
              About
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={currentPage === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </div>

          <div className="nav-cta">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="btn btn-primary btn-sm"
            >
              Get Started <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div
            className={`hamburger ${isOpen ? 'active' : ''}`}
            id="hamburger"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isOpen ? 'active' : ''}`} id="mobileNav">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className={currentPage === 'home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('services');
          }}
          className={currentPage === 'services' ? 'active' : ''}
        >
          Services
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('about');
          }}
          className={currentPage === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('contact');
          }}
          className={currentPage === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('contact');
          }}
          className="btn btn-primary"
          style={{ marginTop: '16px', color: '#ffffff' }}
        >
          Get Started <i className="bi bi-arrow-right" style={{ marginLeft: '8px', color: '#ffffff' }}></i>
        </a>
      </div>
    </>
  );
}
