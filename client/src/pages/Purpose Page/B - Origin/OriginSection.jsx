import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import "./OriginSection.css";
import dnaImage from "../../../assets/icons/DNA-illustration.svg"; // Replace with your actual path

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } // Ultra-smooth easing
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.3, // Delays each child for smoother effect
    },
  },
};

const OriginSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  if (isInView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <section className="origin-section" ref={sectionRef}>
      {/* Left Content */}
      <motion.div
        className="origin-content"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"} // Animates once
        variants={staggerContainer}
      >
        <motion.h4 variants={fadeInUp}>OUR ORIGIN</motion.h4>
        <motion.h2 variants={fadeInUp}>What’s in <br /> a name?</motion.h2>
        <motion.h1 variants={fadeInUp}>Bio <br /> Nova</motion.h1>
        <motion.p className="description" variants={fadeInUp}>
          The essence of “bio” (life) with “nova” (a new beginning), symbolizing innovation in biotechnology.
        </motion.p>
      </motion.div>

      {/* DNA Image (Repeats Animation Every Time in View) */}
      <motion.div
        className="origin-image"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } 
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.img
          src={dnaImage}
          alt="DNA Illustration"
          initial={{ y: 0 }}
          whileInView={{ y: [-10, 0] }} // Subtle entrance float
          animate={{ y: [0, -15, 0] }} // Continuous floating
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="origin-mission"
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"} // Animates once
        variants={staggerContainer}
      >
        <motion.p variants={fadeInUp}>
          We unlock knowledge to shape the future—advancing medicine, agriculture, and sustainability.
          Our mission is to transform lives, industries, and the planet.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OriginSection;
