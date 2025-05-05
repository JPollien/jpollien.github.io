import React from 'react';

function Pricing() {
  return (
    <section style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h1>Pricing</h1>
      <p>We offer a range of packages to fit your budget and project scale.</p>

      <h2>Basic Mapping Package</h2>
      <ul>
        <li>Single Location Scan</li>
        <li>Standard Resolution Drone Imagery</li>
        <li>Basic 3D Model Output</li>
        <li>$500 per Project</li>
      </ul>

      <h2>Advanced Modeling Package</h2>
      <ul>
        <li>High-Resolution Drone Imagery</li>
        <li>Multi-Point Ground Control</li>
        <li>Detailed 3D Mesh & Orthomosaic</li>
        <li>$1,500 per Project</li>
      </ul>

      <h2>Custom Solutions</h2>
      <p>
        For specialized surveys, ongoing mapping, or large-scale projects, please
        <strong> contact us</strong> to discuss a custom quote.
      </p>
    </section>
  );
}

export default Pricing;
