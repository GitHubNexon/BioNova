import React from "react";
import { Link } from "react-router-dom";
import heroVideo from "../../../assets/videos/HeroPeopleSection.mp4"; // Adjust path accordingly
import glowImage from "../../../assets/image/Gradient-glow-people.png"; // Import glow image
import "./HeroPeopleSection.css"; // Import CSS

const HeroPeopleSection = () => {
  return (
    <section id="hero-section"className="people-hero-section">
      {/* Background Video */}
      <div className="people-video-container">
        <video className="people-hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="people-overlay"></div>

      {/* Glow Image */}
      <img src={glowImage} alt="Glowing Effect" className="people-glow-image" />

      {/* Content */}
      <div className="people-hero-content">
        <h1 className="people-hero-title">Learning from life <br /> And each other.</h1>
        <Link to="/contact" className="people-hero-button">See Opening</Link>
      </div>
    </section>
  );
};

export default HeroPeopleSection;
