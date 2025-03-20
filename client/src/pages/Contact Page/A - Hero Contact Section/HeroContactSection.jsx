import React from "react";
import heroVideo from "../../../assets/videos/HeroContactSection.mp4"; 
import glowImage from "../../../assets/image/Gradient-glow-people.png";
import "./HeroContactSection.css"; 

const HeroContactSection = () => {
  return (
    <section id="hero-section"className="contact-hero-section">
      {/* Background Video */}
      <div className="contact-video-container">
        <video className="contact-hero-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="contact-overlay"></div>

      {/* Glow Image */}
      <img src={glowImage} alt="Glowing Effect" className="contact-glow-image" />

      {/* Content */}
      <div className="contact-hero-content">
        <h1 className="contact-hero-title">Your Next Breakthrough <br /> Starts Here</h1>
        <p className="contact-hero-subtitle">Whether you have inquiries, collaboration ideas, or need support, we’re here to help. Reach out and let’s make something great together.</p>
        <button 
          className="contact-hero-button"
          onClick={() => document.getElementById("contact-form-section").scrollIntoView({ behavior: "smooth" })}
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default HeroContactSection;
