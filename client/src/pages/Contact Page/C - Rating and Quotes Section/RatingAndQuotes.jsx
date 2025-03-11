import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./RatingAndQuotes.css";

const quotes = [
  "Exceptionally open work culture; no question is stupid at BioNova.",
  "A truly inclusive environment where everyone’s ideas are valued.",
  "Supportive leadership that fosters both personal and professional growth.",
  "Innovation-driven company that encourages creative problem-solving.",
  "A fantastic workplace with a strong sense of community and purpose.",
];

const RatingAndQuotesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="rating-and-quotes-section">
      {/* Background Image */}
      <div className="static-bg"></div>

      {/* Gradient Glow */}
      <div className="gradient-glow"></div>

      {/* Content */}
      <motion.div
        className="rating-and-quotes-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.h3
          className="rating-and-quotes-subtitle"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          GLASSDOOR <br /> RATINGS & QUOTES
        </motion.h3>

        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            className="rating-and-quotes-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            “{quotes[currentIndex]}”
          </motion.h1>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="pagination-dots">
          {quotes.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RatingAndQuotesSection;
