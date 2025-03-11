import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GenesIcon from "../../../assets/icons/genes.svg";
import BiopharmaIcon from "../../../assets/icons/BioPill.svg"; // Updated
import AgricultureIcon from "../../../assets/icons/agriculture.svg";
import { FaShareAlt, FaSun } from "react-icons/fa"; // Bottom design icons
import "./Featured-Innovation.css"; // Import CSS

const FeaturedInnovation = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Change to 'true' if you want animations only once
    threshold: 0.2,
  });

  const features = [
    {
      icon: GenesIcon,
      title: "Genetic Engineering",
      description: "Advanced CRISPR-based gene therapy to revolutionize medicine.",
      glowClass: "genes-glow",
    },
    {
      icon: BiopharmaIcon,
      title: "Biopharmaceutical Solutions",
      description: "Cutting-edge drug development and personalized medicine.",
      glowClass: "biopharma-glow",
    },
    {
      icon: AgricultureIcon,
      title: "Agricultural Biotechnology",
      description: "Sustainable, genetically optimized crops for food security.",
      glowClass: "agriculture-glow",
    },
  ];

  return (
    <section ref={ref} className="featured-innovation-section">
      {/* Heading */}
      <motion.h2
        className="features-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Innovation at BioNova Solutions
      </motion.h2>

      {/* Features Grid */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="features-card"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`feature-icon ${feature.glowClass}`}>
              <img src={feature.icon} alt={feature.title} className="feature-img" />
            </div>
            <h3 className="features-title">{feature.title}</h3>
            <p className="features-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Description Section */}
      <motion.p
        className="features-description-below"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        At <span className="bold">BioNova Solutions</span>, innovation drives our mission
        to redefine healthcare, agriculture, and sustainability through cutting-edge biotechnology.
        Our research and technology focus on groundbreaking advancements that shape the future.
      </motion.p>

      {/* Bottom Decorative Bar */}
      <motion.div
        className="featured-nav"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="nav-item">Genes</span>
        <FaShareAlt className="nav-icon" />
        <span className="nav-item">Translate</span>
        <FaSun className="nav-icon" />
        <span className="nav-item">Apply</span>
      </motion.div>
    </section>
  );
};

export default FeaturedInnovation;
