import React from "react";
import { motion } from "framer-motion";
import "./SustainabilitySection.css";
import sustainabilityVideo from "../../../assets/videos/sustainability-vid.mp4";
import SustainabilityImage2 from "../../../assets/image/sustainability-2.png";

const SustainabilitySection = () => {
  return (
    <section className="sustainability-section">
      {/* Top Video - Full Width */}
      <div className="sustainability-top-video">
        <video autoPlay loop muted playsInline>
        <source src={sustainabilityVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Bottom Content (Text + Right Image) */}
      <motion.div
        className="sustainability-bottom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Left: Text */}
        <div className="sustainability-content">
          <motion.h3
            className="section-subtitle"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            SUSTAINABILITY
          </motion.h3>

          <motion.h1
            className="section-title"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Our commitment to nature
          </motion.h1>

          <motion.p
            className="sustainability-text"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            Healthy people require a healthy planet. We recognize that humanity’s – and 
            BioNova’s – existence is intricately linked to the rich biodiversity of our planet.
          </motion.p>

          <motion.p
            className="sustainability-text"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
          >
            As we catalog life’s chemistry, we adhere to access- and benefit-sharing 
            provisions in line with the Convention on Biological Diversity. Moreover, 
            we go beyond compliance by actively engaging in biodiversity conservation 
            and restoration efforts in collaboration with our global partners.
          </motion.p>
        </div>

        {/* Right: Bottom Image (Static) */}
        <div className="sustainability-right-image">
          <img src={SustainabilityImage2} alt="Person hiking in nature" />
        </div>
      </motion.div>
    </section>
  );
};

export default SustainabilitySection;
