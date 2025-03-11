import React from "react";
import { motion } from "framer-motion";
import "./LeadershipSection.css";
import leaderImage from "../../../assets/image/leader-image.png"; // Importing the image

const Leadership = () => {
  return (
    <section className="leadership">
      <h1 className="title">Our Leadership</h1>
      <motion.div
        className="leader-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="leader-image">
          <img src={leaderImage} alt="August Allen" />
        </div>
        <div className="leader-info">
          <h2>DR. PRINCESS ARIELLE PEREZ</h2>
          <p className="position">Chief Scientific Officer</p>
          <p className="quote">
          "Innovation in biotechnology is not just about discovery; it's about making a real-world impact."
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;
