import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Real-time Analytics',
      description: 'Monitor healthcare metrics and patient data with live dashboards'
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliant',
      description: 'Secure patient data with enterprise-grade security and compliance'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Insights',
      description: 'Predictive analytics and intelligent recommendations'
    },
    {
      icon: '📱',
      title: 'Mobile First',
      description: 'Access your healthcare platform from any device, anywhere'
    },
    {
      icon: '🔄',
      title: 'Seamless Integration',
      description: 'Connect with existing EHR/EMR systems effortlessly'
    },
    {
      icon: '📊',
      title: 'Advanced Reporting',
      description: 'Generate comprehensive reports and visualizations'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <div className="section-header fade-in">
          <h2>Why Choose Saascraft Healthcare?</h2>
          <p>Our platform is designed specifically for modern healthcare needs</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} 
            className="feature-card fade-in hover-left"
            style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;