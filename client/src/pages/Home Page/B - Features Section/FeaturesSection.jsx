import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GenesIcon from "../../../assets/icons/genes.svg";
import AgricultureIcon from "../../../assets/icons/agriculture.svg";
import MedicalIcon from "../../../assets/icons/medical.svg";
import { FaShareAlt, FaSun } from "react-icons/fa"; // Bottom design icons
import "./FeaturesSection.css"; // Import CSS

const FeaturesSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Keeps animating when scrolling in and out
    threshold: 0.2, // When 20% of section is visible, trigger animations
  });

  const features = [
    {
      icon: GenesIcon,
      title: "Genes",
      description:
        "Innovating gene therapy and DNA sequencing to revolutionize healthcare and disease treatment.",
      glowClass: "genes-glow",
    },
    {
      icon: AgricultureIcon,
      title: "Agriculture",
      description:
        "Enhancing crops and farming with biotech for sustainable and eco-friendly agriculture.",
      glowClass: "agriculture-glow",
    },
    {
      icon: MedicalIcon,
      title: "Medical",
      description:
        "Advancing precision medicine and biopharmaceuticals for better healthcare solutions.",
      glowClass: "medical-glow",
    },
  ];

  return (
    <section ref={ref} className="features-section">
      {/* Heading */}
      <motion.h2
        className="features-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Transforming Science,
      </motion.h2>
      <motion.h2
        className="features-title2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        Improving Lives
      </motion.h2>

      {/* Features Grid */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8, y: inView ? 0 : 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={`feature-icon ${feature.glowClass}`}>
              <img src={feature.icon} alt={feature.title} className="feature-img" />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Description Section */}
      <motion.p
        className="features-description"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        At <span className="bold">BioNova Solutions</span>, we pioneer biotech innovations that advance healthcare, agriculture, and sustainability. Through precision science and research, we transform ideas into life-changing solutions.
      </motion.p>

      {/* Bottom Decorative Bar */}
      <motion.div
        className="features-nav"
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

export default FeaturesSection;
