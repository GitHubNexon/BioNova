import React from "react";
import HeroVideo from "../../../assets/videos/HeroForumSection.mp4"; // Adjust path accordingly
import glowImage from "../../../assets/image/Gradient-glow-forum.png"; // Import glow image
import "./HeroForumSection.css"; // Import CSS

const HeroForumSection = () => {
  return (
    <section id="hero-section"className="forum-hero-section">
      {/* Background Video */}
      <div className="forum-video-container">
        <video className="forum-hero-video" autoPlay loop muted playsInline>
          <source src={HeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay */}
      <div className="forum-overlay"></div>

      {/* Glow Image */}
      <img src={glowImage} alt="Glowing Effect" className="forum-glow-image" />

      {/* Content */}
      <div className="forum-hero-content">
        <h1 className="forum-hero-title">Discuss. Discover. Innovate. <br /> Welcome to the BioNova Forum </h1>
        <p className="forum-hero-subtitle">Join the community of biotechnology enthusiasts, researchers, and professionals to discuss the latest trends, share your insights, and collaborate on innovative projects.</p>
      </div>
    </section>
  );
};

export default HeroForumSection;
