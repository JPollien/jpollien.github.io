import React from 'react';
import './Home.css';
import maineLandscape from '../assets/maine-landscape-drone-1.png'

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Downeast Landscape Imaging</h1>
          <h2>Maine-based Photogrammetry &amp; Mapping</h2>
          <p>
          Downeast Landscape Imaging turns Maine’s rugged coastlines and landscapes into crisp 3D data, giving builders, planners, and researchers the insights they need, fast. Elevate your project with precise drone photogrammetry and mapping you can trust.
        </p>
          <button className="cta-button">Contact Us</button>
        </div>
        <div className="hero-image-wrapper">
          <img src={maineLandscape} alt="Maine landscape" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;