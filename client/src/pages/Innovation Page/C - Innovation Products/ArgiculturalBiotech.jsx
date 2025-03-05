import React from "react";
import "./AgriculturalBiotech.css";
import agriculturalBiotechImage from "../../../assets/icons/AgriculturalBiotech.svg";
import agriculturalBiotechOrbs from "../../../assets/icons/Agricultural-Biotech-Orbs.svg";

const AgriculturalBiotech = () => {
  return (
    <section className="agri-bio-section">
      <div className="agri-bio-content">
        <h3>Securing the Future of Food & Sustainability</h3>
        <h1 className="agri-bio-title">Agricultural Biotechnology</h1>
        <p className="agri-bio-description">
          We develop genetically optimized crops and eco-friendly solutions  
          to enhance food security and sustainable farming.
        </p>
        <ul className="agri-bio-list">
          <li><strong>Bioengineered Crops:</strong> Higher yields, improved nutrition, and climate resistance.</li>
          <li><strong>Biopesticides & Biofertilizers:</strong> Reducing chemical use with natural, biotech-based solutions.</li>
          <li><strong>Smart Farming Innovations:</strong> Data-driven biotech for precision agriculture.</li>
        </ul>
      </div>

      {/* Image & Orb Container */}
      <div className="agri-bio-image-container">
        <div className="agri-bio-gradient-glow"></div>
        <img src={agriculturalBiotechImage} alt="Agricultural Biotech" className="agri-bio-image floating-animation" />
        <img src={agriculturalBiotechOrbs} alt="Decorative Orbs" className="agri-bio-orbs on-top" />
      </div>
    </section> 
  );
};

export default AgriculturalBiotech;
