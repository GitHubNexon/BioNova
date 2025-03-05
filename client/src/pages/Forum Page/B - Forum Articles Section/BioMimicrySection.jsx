import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./BioMimicrySection.css";
import BioMimicryImage from "../../../assets/image/biomimicry-forum.png"; // Update with actual image path

const BioMimicrySection = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("bio-mimicry-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <motion.section
      id="bio-mimicry-section"
      className="bio-mimicry-container"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="bio-mimicry-header">
        <h2>ISSUE 01.02</h2>
        <p>Learning from Nature: Biomimicry & Bio-Innovation</p>
      </div>

      <div className="bio-mimicry-content">
        <motion.div
          className="bio-mimicry-image"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <img src={BioMimicryImage} alt="Biomimicry and nature" />
        </motion.div>

        <div className="bio-mimicry-articles">
          {[
            {
              title: "Nature-Inspired Medicine: Ancient Remedies in Modern Science",
              description: "How ethnobotany and traditional healing practices inspire biotech innovations.",
            },
            {
              title: "Biotechnology & Nature: What We Can Learn from Microorganisms",
              description: "Microbes as the key to future antibiotics, energy, and agriculture.",
            },
            {
              title: "The Rise of Plant-Based Pharmaceuticals",
              description: "Can plants be engineered to produce life-saving drugs?",
            },
            {
              title: "Precision Agriculture: AI, Data, and Biotech for Food Security",
              description: "The future of farming through genetic engineering and data science.",
            },
          ].map((article, index) => (
            <motion.div
              key={index}
              className="bio-mimicry-card"
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0, transition: { delay: index * 0.2, duration: 0.6 } },
              }}
            >
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a href="#">Read More →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BioMimicrySection;
