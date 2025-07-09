import React from 'react';
import './Home.css';
import logoText from '../assets/Logo.png'

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img src={logoText} alt="Downeast Landscape Imaging" className="hero-image" />
        </div>
        <div className="hero-text">
          <h2>Maine-based Photogrammetry &amp; Mapping</h2>
          <p>
            Downeast Landscape Imaging turns Maine’s rugged coastlines and landscapes into crisp 3D data, giving builders, planners, foresters, and researchers the insights they need, fast. Elevate your project with precise drone photogrammetry and mapping you can trust.
          </p>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>
    </section>
  );
}

export default Home;