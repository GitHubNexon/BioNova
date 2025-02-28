import React from "react";
import { motion } from "framer-motion";
import "./ForumSection.css";
import ForumImage from "../../../assets/image/forum-image.png";

const ForumSection = () => {
  return (
    <motion.section
      className="forum-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.3 }} // Re-triggers when 30% is visible
    >
      {/* Top Text Section */}
      <motion.div
        className="forum-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.3 }} // Re-triggers when scrolling back
      >
        <h4 className="forum-subtitle">OUR FORUM</h4>
        <h2 className="forum-title">
          Unlocking Knowledge <br />
          Potential for Biotech <br />
          Innovations
        </h2>
      </motion.div>

      {/* Bottom Section: Two Columns */}
      <motion.div
        className="forum-content"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ amount: 0.3 }}
      >
        {/* Left Side - Dark Box */}
        <motion.div
          className="forum-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <div className="cutout-box"></div> {/* Square Cutout */}
          <div className="cutout-box"></div> {/* Square Cutout */}
          <h5 className="forum-label">LEARN WITH US</h5>
          <h3 className="forum-text">
            Insights into BioNova. <br />
            Insights into Knowledge.
          </h3>

          <motion.button
            className="forum-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side - Image with Motion */}
        <motion.div
          className="forum-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ amount: 0.3 }}
        >
          <img src={ForumImage} alt="BioNova Forum Discussion" className="forum-image" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ForumSection;
