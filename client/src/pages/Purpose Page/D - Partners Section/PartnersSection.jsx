import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./PartnersSection.css";
import BroadLogo from "../../../assets/image/broad.png";
import CrisprLogo from "../../../assets/image/crispr.png";
import IndigoLogo from "../../../assets/image/indigo.png";

const PartnersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false });

  return (
    <section className="partners-section" ref={sectionRef}>
      {/* Title Animation */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        OUR PARTNERS
      </motion.h4>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Innovation for a Healthier Future
      </motion.h2>

      {/* Paragraphs */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        We believe that everyone deserves access to groundbreaking biotechnology. By harnessing the power of genetics, 
        bioinformatics, and synthetic biology, we are shaping the future of medicine, agriculture, and sustainability.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      >
        We are proud to collaborate with leading organizations and research institutions to push the boundaries of science 
        and create real-world impact. Together, we are transforming the future of healthcare, food security, and environmental sustainability.
      </motion.p>

      {/* Partner Logos */}
      <motion.div
        className="partners-logos"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={BroadLogo}
          alt="Broad Institute"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        />
        <motion.img
          src={CrisprLogo}
          alt="CRISPR Therapeutics"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        />
        <motion.img
          src={IndigoLogo}
          alt="Indigo"
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="decorations">
        <motion.div
          className="gradient-bar left"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="gradient-bar right"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 1, ease: "easeOut" }}
        ></motion.div>

        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="square"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: "easeOut" }}
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
