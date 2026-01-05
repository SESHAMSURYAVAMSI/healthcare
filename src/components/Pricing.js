import React, { useState } from 'react';
import '@/components/Pricing.css';

function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small clinics',
      price: { monthly: 99, yearly: 950 },
      features: [
        'Up to 10 users',
        'Basic EHR',
        'Appointment Scheduling',
        'Email Support',
        'Standard Security'
      ],
      cta: 'Start Free Trial',
      popular: false,
      color: '#2a6ecc'
    },
    {
      name: 'Professional',
      description: 'For growing healthcare practices',
      price: { monthly: 299, yearly: 2870 },
      features: [
        'Up to 50 users',
        'Advanced EHR',
        'Telemedicine',
        'Billing & Insurance',
        'Priority Support',
        'HIPAA Compliance',
        'Advanced Analytics'
      ],
      cta: 'Get Started',
      popular: true,
      color: '#10b981'
    },
    {
      name: 'Enterprise',
      description: 'For hospitals & large networks',
      price: { monthly: 899, yearly: 8630 },
      features: [
        'Unlimited users',
        'Custom EHR',
        'API Access',
        'Custom Integrations',
        '24/7 Support',
        'Dedicated Manager',
        'Custom Reporting',
        'Training & Onboarding'
      ],
      cta: 'Contact Sales',
      popular: false,
      color: '#667eea'
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Flexible Pricing Plans</h2>
          <p>Choose the plan that fits your healthcare practice needs</p>
          
          <div className="billing-toggle">
            <button
              className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly <span className="discount-badge">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price[billingCycle]}</span>
                  <span className="period">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="plan-cta">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;