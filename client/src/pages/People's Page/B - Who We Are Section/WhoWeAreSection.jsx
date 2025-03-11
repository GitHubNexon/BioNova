import React from "react";
import { motion } from "framer-motion";
import "./WhoWeAreSection.css";
import image1 from "../../../assets/image/people-frontiers-1.png";
import image2 from "../../../assets/image/people-frontiers-2.png";
import image3 from "../../../assets/image/people-frontiers-3.png";

const WhoWeAreSection = () => {
  return (
    <section className="people-who-we-are">
      <div className="people-who-we-are-content">
        {/* Left Side - Text */}
        <motion.div
          className="people-text-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="people-subtitle">WHO WE ARE</h3>
          <h2 className="people-title">The people behind our progress</h2>
          <p className="people-description">
            Our work is a group effort. We’ve built a stellar team and already come a long way. Join us on the journey.
          </p>
          <p className="people-description">
            We invest in learn-it-alls, not know-it-alls — people who love the process, are obsessed with their craft, and
            enjoy building with other like-minded people each day. If you’re a self-starter seeking new challenges in a
            supportive and collaborative environment, we encourage you to apply.
          </p>
        </motion.div>

        {/* Right Side - Images */}
        <div className="people-images-container">
          <motion.img
            src={image1}
            alt="Team Member 1"
            className="people-image top-right"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.img
            src={image2}
            alt="Team Member 2"
            className="people-image bottom-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />
          <motion.img
            src={image3}
            alt="Team Member 3"
            className="people-image bottom-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
