import React from "react";
import "./GeneticEngineering.css";
import crisprImage from "../../../assets/icons/GeneticEngineering.svg"; 
import GeneticOrbs from "../../../assets/icons/Genetic-Engineering-Orbs.svg"; 

const GeneticEngineering = () => {
  return (
    <section className="genetic-section">
      <div className="genetic-content">
        <h3>Revolutionizing Medicine with CRISPR</h3>
        <h1 className="genetic-title">Genetic Engineering</h1>
        <p className="genetic-description">
          We harness the power of CRISPR and advanced gene-editing technologies to treat genetic disorders 
          and unlock new possibilities in precision medicine.
        </p>
        <ul className="genetic-list">
          <li><strong>Targeted Gene Therapy:</strong> Correcting defective genes to cure inherited diseases.</li>
          <li><strong>Cell & Gene Therapies:</strong> Using modified cells to fight cancer and immune disorders.</li>
          <li><strong>Synthetic Biology:</strong> Engineering DNA to create new biological solutions.</li>
        </ul>
      </div>
      
      {/* Image & Orb Container */}
      <div className="genetic-image-container">
        <div className="genetic-gradient-glow"></div>
        <img src={crisprImage} alt="CRISPR Molecule" className="genetic-image floating-animation" />
        <img src={GeneticOrbs} alt="Decorative Orbs" className="genetic-orbs on-top" />
      </div>
    </section> 
  );
};

export default GeneticEngineering;
