import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Medical Director, City Hospital',
      content: 'Saascraft has transformed our patient management system. The efficiency gains have been remarkable.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Clinic Administrator',
      content: 'The billing and insurance module saved us 20+ hours per week. Incredible ROI.',
      rating: 5
    },
    {
      name: 'Jennifer Lee',
      role: 'Healthcare IT Manager',
      content: 'Implementation was smooth and the support team has been exceptional throughout.',
      rating: 5
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Trusted by Healthcare Professionals</h2>
          <p>See what our clients say about our healthcare solutions</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;