import React from 'react';

export default function FloatingSocials() {
  return (
    <div className="floating-socials-sidebar">
      <a
        href="https://www.instagram.com/skyparz_innovations"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-social-btn"
        aria-label="Instagram"
      >
        <i className="bi bi-instagram" style={{ fontSize: '1.2rem' }}></i>
        <span className="floating-social-tooltip">Instagram</span>
      </a>

      <a
        href="https://x.com/skyparzinnovate"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-social-btn"
        aria-label="Twitter X"
      >
        <i className="bi bi-twitter-x" style={{ fontSize: '1.2rem' }}></i>
        <span className="floating-social-tooltip">Twitter X</span>
      </a>

      <a
        href="mailto:skyparzinnovation@gmail.com"
        className="floating-social-btn"
        aria-label="Email Us"
      >
        <i className="bi bi-envelope" style={{ fontSize: '1.2rem' }}></i>
        <span className="floating-social-tooltip">Email Us</span>
      </a>
    </div>
  );
}
