import React from "react";
import "./BiopharmaSolution.css";
import biopharmaImage from "../../../assets/icons/BiopharmaSolutions.svg";
import biopharmaOrbs from "../../../assets/icons/Biopharma-Solutions-Orbs.svg";

const BiopharmaceuticalSolutions = () => {
  return (
    <section className="biopharma-section">
      <div className="biopharma-content">
        <h3>Advancing Healthcare with Biotechnology</h3>
        <h1 className="biopharma-title">Biopharmaceutical Solutions</h1>
        <p className="biopharma-description">
          We specialize in innovative biopharmaceutical technologies,  
          enabling the development of next-generation therapeutics and vaccines.
        </p>
        <ul className="biopharma-list">
          <li><strong>Monoclonal Antibodies:</strong> Targeted therapies for autoimmune diseases and cancer.</li>
          <li><strong>mRNA & Gene-Based Treatments:</strong> Cutting-edge advancements in precision medicine.</li>
          <li><strong>Bioengineered Vaccines:</strong> Safer, more effective immunization strategies.</li>
        </ul>
      </div>

      {/* Image & Orb Container */}
      <div className="biopharma-image-container">
        <div className="biopharma-gradient-glow"></div>
        <img src={biopharmaImage} alt="Biopharmaceutical Molecule" className="biopharma-image floating-animation" />
        <img src={biopharmaOrbs} alt="Decorative Orbs" className="biopharma-orbs on-top" />
      </div>
    </section> 
  );
};

export default BiopharmaceuticalSolutions;
