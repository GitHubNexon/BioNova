import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaBehance } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import LocationIcon from "../../assets/icons/Location.svg"; // Custom location SVG
import LearningSVG from "../../assets/icons/LearningFromLife.svg"; // Custom "Learning From Life" SVG

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { triggerOnce: false, margin: "-50px" });

  return (
    <footer ref={footerRef} className="footer">
      {/* Top Line */}
      <motion.div
        className="footer-top-line"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ></motion.div>

      {/* Footer Content */}
      <div className="footer-content">
        {/* Navigation */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4>Navigation</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Purpose</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </motion.div>

        {/* Social Media & Contact */}
        <motion.div
          className="footer-section"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4>Follow Us</h4>
          <motion.div
            className="footer-icons"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaFacebookF />
            <FaInstagram />
            <FaBehance />
          </motion.div>
          <div className="footer-contact">
            <p><HiOutlineMail /> <a href="mailto:contact@bionovasolution.com">contact@bionovasolution.com</a></p>
            <p><HiOutlinePhone /> (63+) 987-654-3210</p>
            <p>
              <img src={LocationIcon} alt="Location Icon" className="location-icon" />
              Quezon City, Philippines <br />
              Aurora, 2821 S Parker Rd#163, CO 80014
            </p>
          </div>
        </motion.div>

        {/* Logo & Slogan */}
        <motion.div
          className="footer-section footer-brand"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="footer-gradient-line"></div>
          <motion.img
            src={LearningSVG}
            alt="Learning From Life"
            className="learning-svg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p>Copyright ©2025 BioNova Solution All rights reserved</p>
        <p>Privacy policy</p>
        <p>Site by Arielle</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
