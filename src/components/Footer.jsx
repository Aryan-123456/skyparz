import React from 'react';

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOurTeamClick = (e) => {
    e.preventDefault();
    setCurrentPage('about');
    // Allow React state transition to complete before scrolling
    setTimeout(() => {
      const element = document.getElementById('team');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 1200, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Info & Socials */}
          <div className="footer-brand">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="nav-logo"
            >
              <div className="logo-icon">S</div>
              <span>SKYPARZ</span>
            </a>
            <p>
              We're a full-service digital agency helping brands grow through strategic marketing, stunning design, and
              innovative technology solutions.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/skyparz_innovations"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://x.com/skyparzinnovate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={handleOurTeamClick}>
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Get in Touch */}
          <div className="footer-column">
            <h4>Get in Touch</h4>
            <ul>
              <li>
                <a
                  href="mailto:skyparzinnovation@gmail.com"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <i className="bi bi-envelope"></i>
                  skyparzinnovation@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="footer-bottom">
          <p>&copy; 2024 SkyparzInnovation. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('privacy');
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('terms');
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
