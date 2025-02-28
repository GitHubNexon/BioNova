import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./PeopleSection.css";
import PeopleBackground from "../../../assets/image/people-bg.png"; // Ensure correct path

const PeopleSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -150]); // Stronger parallax effect

  return (
    <section className="people-section">
      {/* Parallax Background */}
      <motion.div
        className="parallax-bg"
        style={{ backgroundImage: `url(${PeopleBackground})`, y: backgroundY }}
      ></motion.div>

      {/* Content */}
      <motion.div
        className="people-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }} // Triggers animation earlier when in view
        transition={{ staggerChildren: 0.15 }} // Faster stagger
      >
        <motion.h2
          className="people-title"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          OUR PEOPLE
        </motion.h2>

        <motion.h1
          className="people-heading"
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
          }}
        >
          Human. <span className="highlight">Nature.</span>
        </motion.h1>

        <motion.p
          className="people-text"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          Become an advocate for biotechnology and help shape policy that promotes innovation!
        </motion.p>

        <motion.p
          className="people-text"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
          }}
        >
          We've cultivated a great team, and we're growing.
        </motion.p>

        <motion.button
          className="join-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } },
          }}
        >
          Join Us
        </motion.button>
      </motion.div>
    </section>
  );
};

export default PeopleSection;
