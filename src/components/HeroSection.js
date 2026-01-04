import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1>Revolutionizing Healthcare Management</h1>
          <p className="hero-subtitle">
            Saascraft provides cutting-edge software solutions for healthcare providers, 
            hospitals, and clinics to streamline operations and enhance patient care.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Start Free Trial</button>
            <button className="secondary-btn">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="dashboard-title">Saascraft Health Dashboard</div>
            </div>
            <div className="dashboard-content">
              <div className="metric-card">
                <h4>Patient Visits</h4>
                <p className="metric-value">1,247</p>
                <p className="metric-change">↑ 12% this month</p>
              </div>
              <div className="metric-card">
                <h4>Appointments</h4>
                <p className="metric-value">89</p>
                <p className="metric-change">Today</p>
              </div>
              <div className="metric-card">
                <h4>Efficiency</h4>
                <p className="metric-value">94%</p>
                <p className="metric-change">↑ 8% this quarter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;