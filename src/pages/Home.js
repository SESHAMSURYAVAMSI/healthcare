import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <Features />
      <Services />
      <Testimonials />
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Healthcare Management?</h2>
          <p>Join hundreds of healthcare providers using Saascraft solutions</p>
          <button className="primary-btn">Schedule a Demo</button>
        </div>
      </section>
    </div>
  );
}

export default Home;