import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundImagePurpose from "../../../assets/image/HeroPurpose.png"; 
import glowEffect from "../../../assets/image/Gradient-glow-purpose.png"; 
import "./Hero-Purpose.css";

const TypewriterText = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayedText(""); // Reset text before animation starts
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust speed (lower = faster)

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="typewriter-text" // Apply typewriter font
    >
      {displayedText}
    </motion.p>
  );
};

const Purpose = () => {
  return (
    <section
      id="hero-section"
      className="purpose"
      style={{
        backgroundImage: `url(${backgroundImagePurpose})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glow Effect */}
      <div
        className="purpose-glow-effect"
        style={{
          backgroundImage: `url(${glowEffect})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="purpose-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Future is Engineered
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          BioNova Solutions is shaping a world where biotechnology unlocks life's 
          full potential—redefining medicine, agriculture, and sustainability.
        </motion.p>

        {/* Typewriter Effect Applied Here */}
        <div className="typewriter-container">
          <TypewriterText
            text="TToday's mission: Advancing genetic engineering biopharmaceuticals, and precision agriculture.                                          Tomorrow’s possibilities: Curing diseases, securing food systems, and restoring the planet."
            delay={1}
          />
        </div> 
      </div>
    </section>
  );
};

export default Purpose;
