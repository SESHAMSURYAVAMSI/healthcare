import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'contact@saascraft.com',
      subtitle: 'Response within 24 hours'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Available on website',
      subtitle: 'Instant support during business hours'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Healthcare Ave',
      subtitle: 'MedCity, HC 12345'
    }
  ];

  const services = [
    'EHR Consultation',
    'Platform Demo',
    'Technical Support',
    'Billing Inquiry',
    'Partnership',
    'Other'
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">
            Let's discuss how Saascraft can transform your healthcare practice
          </p>
        </div>
      </section>

      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="method-card">
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="method-details">{method.details}</p>
                <p className="method-subtitle">{method.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and our team will contact you shortly</p>
            </div>

            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@healthcare.org"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="organization">Organization</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Healthcare Center"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your healthcare management needs..."
                  ></textarea>
                </div>

                <div className="form-footer">
                  <button type="submit" className="primary-btn">
                    Send Message
                  </button>
                  <p className="form-note">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            {[
              {
                question: 'How quickly can we implement Saascraft?',
                answer: 'Implementation typically takes 2-4 weeks depending on your organization size and requirements.'
              },
              {
                question: 'Is training included?',
                answer: 'Yes, we provide comprehensive training for your staff and ongoing support.'
              },
              {
                question: 'Do you offer custom development?',
                answer: 'Absolutely! We can tailor our platform to meet your specific healthcare needs.'
              },
              {
                question: 'Is the platform HIPAA compliant?',
                answer: 'Yes, we maintain strict HIPAA compliance and undergo regular security audits.'
              },
              {
                question: 'Can we integrate with our existing systems?',
                answer: 'We offer seamless integration with most major EHR/EMR systems through APIs.'
              },
              {
                question: 'What support do you provide?',
                answer: '24/7 technical support, dedicated account managers, and regular platform updates.'
              }
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-overlay">
                <h3>Our Headquarters</h3>
                <p>123 Healthcare Ave, MedCity, HC 12345</p>
                <button className="secondary-btn">Get Directions</button>
              </div>
            </div>
            <div className="office-hours">
              <h3>Office Hours</h3>
              <ul>
                <li>Monday - Friday: 9:00 AM - 6:00 PM EST</li>
                <li>Saturday: 10:00 AM - 4:00 PM EST</li>
                <li>Sunday: Closed</li>
              </ul>
              <p className="emergency-note">
                For technical emergencies outside business hours, call our 24/7 support line: +1 (555) 987-6543
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;