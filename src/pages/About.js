import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1>About Saascraft Healthcare</h1>
          <p className="hero-subtitle">
            Pioneering healthcare technology solutions since 2015
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To empower healthcare providers with innovative, user-friendly software 
              solutions that enhance patient care, streamline operations, and drive 
              healthcare innovation forward.
            </p>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Healthcare Partners</p>
            </div>
            <div className="stat-card">
              <h3>50,000+</h3>
              <p>Patients Served Daily</p>
            </div>
            <div className="stat-card">
              <h3>99.9%</h3>
              <p>System Uptime</p>
            </div>
            <div className="stat-card">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;