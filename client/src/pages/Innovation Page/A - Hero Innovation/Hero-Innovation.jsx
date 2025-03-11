import React from "react";
import { motion } from "framer-motion";
import backgroundImageInno from "../../../assets/image/HeroInnovation.png"; // Background image
import glowEffect from "../../../assets/image/Gradient-glow-innovation.png"; // Glow PNG
import "./Hero-Innovation.css";

const Innovation = () => {
  return (
    <section id="hero-section"
      className="innovation"
      style={{
        backgroundImage: `url(${backgroundImageInno})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glow Effect */}
      <div
        className="glow-effect"
        style={{
          backgroundImage: `url(${glowEffect})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          What Innovation Means to BioNova
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At BioNova Solution, we drive innovation to transform healthcare,
          agriculture, and environmental sustainability. Our research focuses on
          groundbreaking biotechnologies that shape the future.
        </motion.p>
      </div>
    </section>
  );
};

export default Innovation;
