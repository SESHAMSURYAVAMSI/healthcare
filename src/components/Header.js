import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-container">
              {/* Using logo from public folder */}
              <img 
                src="/logo.jpeg" 
                alt="Saascraft Logo" 
                className="logo-image"
                width="90"
                height="90"
              />
              <div className="logo-text-container">
                {/* <span className="logo-text">SAASCRAFT</span> */}
                <span className="logo-subtitle">Healthcare Solutions</span>
              </div>
            </div>
          </Link>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <button className="cta-btn">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;