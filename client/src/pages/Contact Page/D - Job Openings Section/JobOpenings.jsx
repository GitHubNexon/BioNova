import React from "react";
import { motion } from "framer-motion";
import "./JobOpenings.css";

const jobData = [
  {
    id: 1,
    category: "Clinical",
    number: "01",
    title: "Biomarker Operations Manager",
    location: "Boulder, CO.",
    description:
      "Proud to be recognized as one of Forbes' America's Best Startup Employers! Enveda is looking for a Biomarker Operations Manager to join our team! The contribution you will make: As the Biomarker Operations Manager, you will help support biomarker...",
  },
  {
    id: 2,
    category: "Drug Development",
    number: "02",
    title: "CMC Chemistry Director",
    location: "Boulder, CO.",
    description:
      "BioNova is looking for a CMC Chemistry Director to join our team remotely! The contribution you will make: As CMC Chemistry Director, you will play an important role in the execution of BioNova's chemical and pharmaceutical development and manufacturi...",
  },
  {
    id: 3,
    category: "Platform",
    number: "03",
    title: "Research Associate, Platform Chemistry",
    location: "Boulder, CO.",
    description:
      "BioNova is looking for a Research Associate to join our Natural Products Chemistry team in Boulder, CO.! The contribution you will make: We are looking for a motivated chemist with proficiency in extraction and processing of natural products from plan...",
  },
];

const JobOpenings = () => {
  return (
    <div className="job-container">
      <motion.h4 
        className="job-header"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        LET’S GET TO IT
      </motion.h4>

      <hr className="job-divider" />
      
      <motion.h2 
        className="job-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        JOB OPENINGS
      </motion.h2>

      {jobData.map((job, index) => (
        <motion.div 
          key={job.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="job-section"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="job-category">
              {job.number} {job.category}
            </h3>

            <motion.div 
              className="job-details"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="job-title">{job.title}</h4>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              <a href="#" className="job-learn-more">
                Learn more &gt;
              </a>
            </motion.div>
          </motion.div>

          {index !== jobData.length - 1 && <hr className="job-divider" />}
        </motion.div>
      ))}
    </div>
  );
};

export default JobOpenings;
