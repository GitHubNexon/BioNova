import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PurposeImage from "../../../assets/image/purpose-image.png"; // Replace with actual image path
import { FaArrowRight } from "react-icons/fa";
import "./PurposeSection.css";

const PurposeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="purpose-section" className="purpose-section" ref={ref}>
      {/* Main Title */}
      <motion.h1
        className="purpose-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        A world where biotechnology drives sustainable solutions, improves lives, and shapes the future of science
      </motion.h1>

      <div className="purpose-content-wrapper">
        {/* Image Section */}
        <motion.div
          className="purpose-image"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          <img src={PurposeImage} alt="Biotech Purpose" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="purpose-content"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2>OUR PURPOSE</h2>
          <p>
            "Discover our mission to revolutionize biotechnology through innovation,
            sustainability, and precision. Learn more about our journey and vision for
            the future."
          </p>
          <motion.button
            className="learn-more-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Learn More <FaArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PurposeSection;
