import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./FindUsFollowUs.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import locationIcon from "../../../assets/icons/Location.svg";
import sustainabilityVideo from "../../../assets/videos/sustainability-purpose-vid.mp4";

const FindUsFollowUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      className="findusfollowus-container"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <hr className="findusfollowus-top-line" />

      {/* Main Content */}
      <div className="findusfollowus-content">
        {/* Find Us Section */}
        <motion.div
          className="findusfollowus-find-us"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="findusfollowus-location">
            <img src={locationIcon} alt="Location" className="findusfollowus-location-icon" />
            <div className="findusfollowus-location-text">
              <h1 className="findusfollowus-section-title">Find Us</h1>
              <p>Quezon City, Philippines</p>
              <p>Aurora, 2821 S Parker</p>
              <p>Rd#163, CO 80014</p>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="findusfollowus-divider"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={isInView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        ></motion.div>

        {/* Follow Us Section */}
        <motion.div
          className="findusfollowus-follow-us"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="findusfollowus-section-title">Follow Us</h1>
          <motion.div
            className="findusfollowus-icons"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Dribbble"><FaDribbble /></a>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Section */}
      <motion.div
        className="findusfollowus-video"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <video autoPlay loop muted playsInline>
          <source src={sustainabilityVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="findusfollowus-video-overlay"></div>
      </motion.div>
    </motion.div>
  );
};

export default FindUsFollowUs;
