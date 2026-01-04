import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SAASCRAFT</h3>
            <p className="footer-description">
              Transforming healthcare management through innovative software solutions.
              Empowering providers to deliver exceptional patient care.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>Patient Management</li>
              <li>Appointment Scheduling</li>
              <li>Billing & Insurance</li>
              <li>Telemedicine</li>
              <li>Electronic Health Records</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📧 contact@saascraft.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Healthcare Ave, MedCity, HC 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {currentYear} Saascraft Healthcare Solutions. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;