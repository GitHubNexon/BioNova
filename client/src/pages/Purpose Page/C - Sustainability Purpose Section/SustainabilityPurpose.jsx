import React from "react";
import { motion } from "framer-motion";
import "./SustainabilityPurpose.css";
import SustainabilityPurposeVideo from "../../../assets/videos/sustainability-purpose-vid.mp4";
import SustainabilityPurposeImage from "../../../assets/image/sustainability-purpose.png";

const SustainabilityPurpose = () => {
  return (
    <section className="sustainability-purpose-section">
      {/* Top Video - Full Width */}
      <div className="sustainability-top-video">
        <video autoPlay loop muted playsInline>
        <source src={SustainabilityPurposeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-purpose-overlay"></div>
      </div>

      {/* Bottom Content (Text + Right Image) */}
      <motion.div
        className="sustainability-purpose-bottom"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {/* Left: Text */}
        <div className="sustainability-purpose-content">
          <motion.h3
            className="section-purpose-subtitle"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            SUSTAINABILITY
          </motion.h3>

          <motion.h1
            className="section-purpose-title"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            Our commitment to nature
          </motion.h1>

          <motion.p
            className="sustainability-purpose-text"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            Healthy people require a healthy planet. We recognize that humanity’s – and 
            BioNova’s – existence is intricately linked to the rich biodiversity of our planet.
          </motion.p>

          <motion.p
            className="sustainability-purpose-text"
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
        <div className="sustainability-purpose-right-image">
          <img src={SustainabilityPurposeImage} alt="Person hiking in nature" />
        </div>
      </motion.div>

    <div>
      <motion.p
            className="sustainability-footer-text"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } },
            }}
          >
           SUSTAINABILITY IS CRITICAL TO OUR MISSION.
          </motion.p>
        </div>
    </section>
  );
};

export default SustainabilityPurpose;
