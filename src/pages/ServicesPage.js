import React from 'react';
import './ServicesPage.css';

function ServicesPage() {
  const services = [
    {
      title: 'Electronic Health Records (EHR)',
      description: 'Comprehensive digital patient records with seamless access across departments',
      features: ['Cloud-based storage', 'Real-time updates', 'Secure data sharing', 'Custom templates'],
      icon: '📋'
    },
    {
      title: 'Appointment Management',
      description: 'Smart scheduling system that reduces no-shows and optimizes provider time',
      features: ['Online booking', 'Automated reminders', 'Waitlist management', 'Calendar sync'],
      icon: '📅'
    },
    {
      title: 'Telemedicine Platform',
      description: 'Secure video consultations and remote patient monitoring',
      features: ['HD video calls', 'Screen sharing', 'Prescription management', 'Billing integration'],
      icon: '🩺'
    },
    {
      title: 'Billing & Insurance',
      description: 'Automated billing and insurance claim processing',
      features: ['Claim submission', 'Payment processing', 'Insurance verification', 'Analytics'],
      icon: '💰'
    },
    {
      title: 'Patient Portal',
      description: 'Empower patients with access to their health information',
      features: ['Health records access', 'Secure messaging', 'Lab results', 'Prescription refills'],
      icon: '👤'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Data-driven insights for better decision making',
      features: ['Real-time metrics', 'Predictive analytics', 'Custom reports', 'Performance tracking'],
      icon: '📊'
    }
  ];

  const solutions = [
    {
      for: 'Hospitals',
      features: ['Multi-department coordination', 'Resource management', 'Staff scheduling', 'Inventory control']
    },
    {
      for: 'Clinics',
      features: ['Appointment optimization', 'Patient flow management', 'Billing automation', 'Reporting tools']
    },
    {
      for: 'Specialty Practices',
      features: ['Specialty-specific templates', 'Referral management', 'Procedure tracking', 'Outcome analysis']
    },
    {
      for: 'Telehealth Providers',
      features: ['Virtual waiting rooms', 'Secure consultations', 'Remote monitoring', 'Prescription services']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Healthcare Solutions</h1>
          <p className="hero-subtitle">
            Comprehensive software services tailored for modern healthcare providers
          </p>
        </div>
      </section>

      <section className="services-overview">
        <div className="container">
          <div className="section-header">
            <h2>Core Services</h2>
            <p>Everything you need to manage your healthcare practice efficiently</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Learn More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="container">
          <div className="section-header">
            <h2>Tailored Solutions</h2>
            <p>Customized packages for different healthcare settings</p>
          </div>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <h3>For {solution.for}</h3>
                <ul className="solution-features">
                  {solution.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="solution-footer">
                  <span className="price">Starting at $999/mo</span>
                  <button className="primary-btn">Get Quote</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="integration-section">
        <div className="container">
          <div className="integration-content">
            <div className="integration-text">
              <h2>Seamless Integration</h2>
              <p>
                Our platform integrates with your existing systems:
              </p>
              <div className="integration-partners">
                <div className="partner">Epic Systems</div>
                <div className="partner">Cerner</div>
                <div className="partner">Allscripts</div>
                <div className="partner">Athenahealth</div>
                <div className="partner">Practice Fusion</div>
                <div className="partner">Custom APIs</div>
              </div>
              <p className="integration-note">
                *Custom integration solutions available for all major EHR systems
              </p>
            </div>
            <div className="integration-visual">
              <div className="visual-placeholder">
                <div className="connector-line"></div>
                <div className="system-node">Your Current System</div>
                <div className="connector-line"></div>
                <div className="system-node center">Saascraft Platform</div>
                <div className="connector-line"></div>
                <div className="system-node">Enhanced Features</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="demo-cta">
        <div className="container">
          <div className="demo-content">
            <h2>See Our Platform in Action</h2>
            <p>Schedule a personalized demo to see how Saascraft can transform your healthcare practice</p>
            <div className="demo-form">
              <input type="email" placeholder="Enter your work email" />
              <button className="primary-btn">Schedule Demo</button>
            </div>
            <p className="demo-note">No credit card required • 30-day free trial available</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;