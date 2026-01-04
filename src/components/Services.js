import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Patient Management',
      description: 'Comprehensive patient records, history tracking, and personalized care plans',
      features: ['Electronic Health Records', 'Patient Portal', 'Medical History']
    },
    {
      title: 'Appointment Scheduling',
      description: 'Smart scheduling system with automated reminders and waitlist management',
      features: ['Online Booking', 'Automated Reminders', 'Calendar Sync']
    },
    {
      title: 'Billing & Insurance',
      description: 'Streamlined billing processes and insurance claim management',
      features: ['Automated Billing', 'Insurance Verification', 'Claim Processing']
    },
    {
      title: 'Telemedicine',
      description: 'Secure video consultations and remote patient monitoring',
      features: ['Video Consultations', 'Remote Monitoring', 'Prescription Management']
    },
    {
      title: 'Analytics & Reporting',
      description: 'Advanced analytics for performance tracking and decision making',
      features: ['Real-time Dashboards', 'Custom Reports', 'Predictive Analytics']
    },
    {
      title: 'Compliance Management',
      description: 'HIPAA, GDPR, and other regulatory compliance tools',
      features: ['Security Audits', 'Compliance Reports', 'Data Encryption']
    }
  ];

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Healthcare Solutions</h2>
          <p>Comprehensive software solutions designed specifically for healthcare providers</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {index + 1}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;