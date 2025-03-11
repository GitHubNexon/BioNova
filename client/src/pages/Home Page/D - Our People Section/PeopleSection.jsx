import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./PeopleSection.css";
import PeopleBackground from "../../../assets/image/people-bg.png";

const PeopleSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -150]); 

  // Opacity rectangles move up/down
  const rectangleY = useTransform(scrollY, [0, 500], [0, -100]);

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <section className="people-section">
      {/* Parallax Background */}
      <motion.div
        className="parallax-bg"
        style={{
          backgroundImage: `url(${PeopleBackground})`,
          backgroundPositionY: backgroundY,
        }}
      ></motion.div>

      {/* Moving Opacity Rectangles */}
      <motion.div className="opacity-rectangle left" style={{ y: rectangleY }} />
      <motion.div className="opacity-rectangle right" style={{ y: rectangleY }} />

      {/* Content */}
      <motion.div
        className="people-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h2
          className="peoples-title"
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
          onClick={handleNavigate}
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
