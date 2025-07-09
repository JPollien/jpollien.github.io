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

      <h2>Topographic Mapping for Site Planning</h2>
      <p>
        <ul>
	<li>Target: Contractors, earthwork specialists, landscapers.</li>
	<li>Value: Rapid and accurate maps of terrain to inform grading, drainage, and layout planning.</li>
	<li>Deliverables: Contours, orthomosaics, DSMs, and exportable CAD-friendly data (e.g. DXF/GeoTIFF).</li>
	</ul>
      </p>

      <h2>Vegetation & Terrain Characterization</h2>
      <p>
	<ul>
        <li>Target: Landscape designers, conservation orgs, site planners, foresters.</li>
	<li>Value: Identify tree locations and characteristics, canopy density, and terrain features to support layout design, clearing plans, and erosion control strategies.</li>
	<li>Deliverables: Tree maps, canopy height models, forest biomass estimates, slope and aspect maps, and terrain profiles.</li>
	</ul>
      </p>

      <h2>Pre- and Post-Construction Documentation</h2>
      <p>
	<ul>
        <li>Target: Builders, project managers.</li>
	<li>Value: Before/after visuals, elevation data, and vegetation clearing confirmation to assist with permitting and progress reports.</li>
	<li>Deliverables: Time-stamped orthoimagery, elevation change maps, video flyovers.</li>
	</ul>
      </p>
	  <div className="services-image-wrapper">
        <img src={OverheadContours} alt="Overhead terrain contours from drone mapping" className="services-image" />
      </div>
    </section>
	</ContentWrapper>
  );
}

export default Services;
