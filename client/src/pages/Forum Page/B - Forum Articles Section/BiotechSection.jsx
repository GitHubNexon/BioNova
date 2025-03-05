import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./BiotechSection.css";
import BiotechImage from "../../../assets/image/frontier-biotech-forum.png"; // Update with actual image path

const BiotechSection = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("biotech-section");
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
      id="biotech-section"
      className="biotech-section"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="biotech-header">
        <h3>LEARN WITH US</h3>
        <hr />
        <h2>ISSUE 01.01</h2>
        <p>Frontiers of Biotechnology</p>
      </div>

      <div className="biotech-content">
        <motion.div
          className="biotech-image"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <img src={BiotechImage} alt="Scientist in lab" />
        </motion.div>

        <div className="biotech-articles">
          {[
            {
              title: "The Genetic Revolution: Unlocking the Future of Medicine",
              description: "How gene editing and synthetic biology are changing healthcare.",
            },
            {
              title: "Bioengineering for a Sustainable Planet",
              description: "Can synthetic biology help solve climate change?",
            },
            {
              title: "AI & Drug Discovery: A New Era for Biopharmaceuticals",
              description: "The role of artificial intelligence in creating life-saving treatments.",
            },
            {
              title: "The Microbiome: The Hidden Universe Inside Us",
              description: "Exploring how gut bacteria influence health, disease, and longevity.",
            },
          ].map((article, index) => (
            <motion.div
              key={index}
              className="biotech-card"
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

export default BiotechSection;
