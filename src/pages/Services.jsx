import React from 'react';
import ContentWrapper from '../components/ContentWrapper';
import OverheadContours from '../assets/OverheadContours.png';

function Services() {
  return (
  <ContentWrapper>
    <section style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h1>Our Services</h1>
      <p>
        We provide advanced drone-based LiDAR and photogrammetry solutions tailored to
        your project needs.
      </p>

      <h2>3D Modeling & Mapping</h2>
      <p>
        High-resolution 3D models for landscape design, topographical conditions
        analysis, shoreline restoration, and land use planning. Ideal for visualizing site changes over
        time.
      </p>

      <h2>Drone Photography & Videography</h2>
      <p>
        Professional aerial imaging perfect for real estate listings, property
        management, and marketing campaigns.
      </p>

      <h2>Terrain Analysis</h2>
      <p>
        Using GIS software and custom drone flights, we generate detailed
        elevation data for construction planning, environmental studies, and
        more.
      </p>
	  <div className="services-image-wrapper">
        <img src={OverheadContours} alt="Overhead terrain contours from drone mapping" className="services-image" />
      </div>
    </section>
	</ContentWrapper>
  );
}

export default Services;
