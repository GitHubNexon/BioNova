import React from "react";
import "./WhyItMatters.css"; // Import CSS file
import BioNovaImage from "../../../assets/image/why-it-matters.png"; // Import image

const WhyItMatters = () => {
  return (
    <section className="why-matters">
      {/* Left Side: Text Content */}
      <div className="why-content">
        <div className="decorative-box"></div> {/* Small squares */}
        <h2 className="why-title">Why It Matters</h2>
        <p className="why-description">
          At BioNova Solutions, we bridge the gap between science and real-world impact, ensuring that biotechnology transforms lives, industries, and the environment.
        </p>
        <a href="#contact" className="join-button">Join Us</a>
      </div>

      {/* Right Side: Image + Quotes */}
      <div className="why-image-container">
        <div className="why-image-overlay"></div>
        <img src={BioNovaImage} alt="BioNova Team" className="why-image" />
      </div>
    </section>
  );
};

export default WhyItMatters;
