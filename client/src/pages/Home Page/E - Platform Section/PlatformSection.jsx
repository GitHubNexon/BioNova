import React from "react";
import { motion } from "framer-motion";
import "./PlatformSection.css";
import PlatformImage from "../../../assets/image/platform-image.png";
import PlatformOrbsImage from "../../../assets/image/platform-orbs-image.png";

const PlatformSection = () => {
  return (
    <section className="platform-section">
      {/* Left Content Section */}
      <motion.div
        className="platform-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Replays on scroll
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.h2
          className="platform-title"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          OUR PLATFORM
        </motion.h2>

        <motion.h1
          className="platform-heading"
          variants={{
            hidden: { opacity: 0, x: -50, scale: 0.95 },
            visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          Unlocking Nature’s Potential for Biotech Innovations
        </motion.h1>

        <motion.p
          className="platform-text"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
          }}
        >
          A significant portion of groundbreaking biotech advancements come from 
          nature’s untapped resources. However, the complexity of natural compounds 
          presents a challenge for scientists, with the cost and time required to 
          purify molecules, identify their structures, and analyze their effects.
        </motion.p>

        <motion.p
          className="platform-text"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } },
          }}
        >
          With our cutting-edge platform, BioNova Solution is making it possible to 
          explore and decode nature’s intricate biology at an unprecedented pace and scale. 
          By harnessing millions of years of evolutionary intelligence, we’re providing 
          biotech innovators with access to the vast potential hidden within nature for the first time.
        </motion.p>

        <motion.button
          className="explore-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.15 } },
          }}
        >
          Explore Our Platform
        </motion.button>
      </motion.div>

      {/* Right Side Image with Floating Effect */}
      <div className="platform-image-container">
        <motion.div
          className="platform-image"
          animate={{
            y: [0, -8, 0], // Smoother floating effect
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <img src={PlatformImage} alt="Platform Visualization" />
        </motion.div>

        {/* Floating Orbs positioned above the platform */}
        <motion.div
          className="platform-orbs-image"
          animate={{
            y: [0, 12, 0], // Slightly larger floating motion for variation
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <img src={PlatformOrbsImage} alt="Platform Orbs" />
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
