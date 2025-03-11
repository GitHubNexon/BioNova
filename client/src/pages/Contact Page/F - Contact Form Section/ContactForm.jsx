import React from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <motion.div 
      className="form-container"
      initial={{ opacity: 0, y: 50 }} // Start hidden & move up
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Runs once per page load
    >
      {/* Header Section with Motion */}
      <motion.div 
        className="form-header"
        initial={{ opacity: 0, x: -50 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1>Great Work.<br />Great Rewards.</h1>
        <motion.div 
          className="form-description"
          initial={{ opacity: 0, x: 50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="gradient-line"></div>
          <p>We love to connect with curious people.<br />Fill out the form below to get in touch.</p>
        </motion.div>
      </motion.div>

      {/* Form Fields with Staggered Animation */}
      <motion.form 
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="form-group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone Number" />
        </motion.div>
        <motion.div 
          className="form-group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Inquiry Type" />
        </motion.div>
        <motion.div 
          className="form-group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Country" />
        </motion.div>
        <motion.textarea 
          placeholder="I'm interested in"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        ></motion.textarea>
        <motion.textarea 
          placeholder="Share Your Message"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
        ></motion.textarea>

        {/* Submit Button Animation */}
        <motion.div 
          className="submit-container"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          viewport={{ once: true }}
        >
          <button type="submit" className="submit-btn">Submit</button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
