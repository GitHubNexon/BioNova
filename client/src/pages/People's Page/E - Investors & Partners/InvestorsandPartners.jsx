import React from "react";
import "./InvestorsandPartners.css";

// Import SVG Logos
import PfizerLogo from "../../../assets/icons/pfizer.svg";
import NovartisLogo from "../../../assets/icons/novartis.svg";
import AlozLogo from "../../../assets/icons/aloz.svg";
import BayerLogo from "../../../assets/icons/bayer.svg";
import JohnsonLogo from "../../../assets/icons/johnson.svg";
import AmgenLogo from "../../../assets/icons/amgen.svg";

const logos = [PfizerLogo, NovartisLogo, AlozLogo, BayerLogo, JohnsonLogo, AmgenLogo];

const PartnersSection = () => {
  return (
    <div className="partners-section">
      {/* HR Above Title */}
      <hr className="title-hr" />

      {/* Title */}
      <h2>Investors & <br /> Partners</h2>

      {/* Moving Logos */}
      <div className="logos-container">
        <div className="logos-slide">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Partner Logo" className="logo" />
          ))}
          {logos.map((logo, index) => (
            <img key={`duplicate-${index}`} src={logo} alt="Partner Logo" className="logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
