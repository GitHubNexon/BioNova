import React, { useEffect, useState } from "react";
import { motion, useAnimation, useSpring } from "framer-motion";
import {useNavigate} from "react-router-dom";
import { useInView } from "react-intersection-observer";
import HeroBG from "../../../assets/image/HeroBG.png";
import Gradient from "../../../assets/image/Gradient Glow.png";

import Molecule from "../../../assets/icons/molecule.svg";
import Molecule2 from "../../../assets/icons/molecule2.svg";
import Molecule3 from "../../../assets/icons/molecule3.svg";
import Molecule4 from "../../../assets/icons/molecule4.svg";
import Molecule5 from "../../../assets/icons/molecule5.svg";

import "./HeroSection.css";

// Counter Component
const Counter = ({ to, suffix = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [count, setCount] = useState(0);

  const animatedValue = useSpring(0, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    if (inView) {
      animatedValue.set(to);
    }
  }, [inView, animatedValue, to]);

  useEffect(() => {
    const unsubscribe = animatedValue.onChange((latest) => {
      setCount(Math.round(latest));
    });

    return () => unsubscribe();
  }, [animatedValue]);

  return (
    <span ref={ref} className="stat-value">
      {count}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Floating Molecules Data
  const molecules = [
    { id: 1, src: Molecule, style: { top: "10%", left: "25%" } },
    { id: 2, src: Molecule2, style: { top: "20%", right: "15%" } },
    { id: 3, src: Molecule3, style: { bottom: "50%", left: "20%" } },
    { id: 4, src: Molecule4, style: { top: "50%", left: "70%" } },
    { id: 5, src: Molecule5, style: { bottom: "20%", right: "10%" } },
  ];

  // Statistics Data
  const stats = [
    { value: 10, label: "Years in Biotech Innovation", suffix: "+" },
    { value: 50, label: "Successful Research Projects", suffix: "+" },
    { value: 100, label: "Commitment to Sustainability", suffix: "%" },
  ];

  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleNavigate = () => {
    navigate("/innovation"); // ✅ Change this to the correct route
  };

  return (
    <section id="hero-section" className="hero-section">
      {/* Background */}
      <div className="hero-background" style={{ backgroundImage: `url(${HeroBG})` }}></div>

      <motion.div
        className="home-hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <motion.div
        className="home-gradient-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      {/* Floating Molecules */}
      {molecules.map((molecule) => (
        <motion.img
          key={molecule.id}
          src={molecule.src}
          className="animated-molecule"
          style={{
            position: "absolute",
            ...molecule.style,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0], // Fade in and out
            scale: [1, 1.1, 1], // Slight scaling effect
            y: [0, -10, 0], // Floating up and down
            rotate: [0, 10, -10, 0], // Subtle rotation
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3, // Random stagger
          }}
        />
      ))}

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        style={{ backgroundImage: `url(${Gradient})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Innovating the Future of Biotechnology
        </motion.h1>
        <motion.p
          className="hero-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Advancing Science for a better Tomorrow. At BioNova Solution, we
          leverage cutting-edge biotechnology to revolutionize healthcare,
          agriculture, and environmental sustainability.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={handleNavigate}
        >
          Innovation
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ y: 0, opacity: 0.8 }}
        animate={{ y: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      ></motion.div>

      {/* Statistics Section */}
      <motion.div
        ref={ref}
        id="stats-section"
        className="hero-stats"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 },
        }}
        transition={{ duration: 0.8 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-box"
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <Counter to={stat.value} suffix={stat.suffix} />
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
