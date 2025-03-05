import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./ProgressSection.css"; // Import the CSS file

const ProgressSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false });

  return (
    <section className="progress-section" ref={sectionRef}>
      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Be a part of our progress
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        Together, we can rapidly multiply our knowledge of the world’s chemistry
        and solve the greatest challenges in human and planetary health.
      </motion.p>

      {/* Buttons Animation */}
      <motion.div
        className="buttons-container"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <motion.button
          className="gradient-button"
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.95 }}
        >
          Partner With Us
        </motion.button>
        <motion.button
          className="gradient-button"
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)" }}
          whileTap={{ scale: 0.95 }}
        >
          Join The Team
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ProgressSection;
