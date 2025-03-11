import React from "react";
import { motion } from "framer-motion";
import "./LeadershipMembers.css";
import LeaderMember1 from "../../../assets/image/leader-image1.png";
import LeaderMember2 from "../../../assets/image/leader-image2.png";
import LeaderMember3 from "../../../assets/image/leader-image3.png";
import LeaderMember4 from "../../../assets/image/leader-image4.png";
import LeaderMember5 from "../../../assets/image/leader-image5.png";
import LeaderMember6 from "../../../assets/image/leader-image6.png";

const leaders = [
  { name: "JOHN MARK L. PULMANO, PhD", role: "Chief Technical Officer", image: LeaderMember1 },
  { name: "JAMES GUARINO, PhD", role: "SVP Business Strategy & Development", image: LeaderMember2 },
  { name: "MARLON G. RINOS, PhD", role: "SVP Early Development", image: LeaderMember3 },
  { name: "JOHN KENNETH, PhD", role: "Chief People Officer", image: LeaderMember4 },
  { name: "JOHN CARLO NONO, PhD", role: "Director, Policy & Development", image: LeaderMember5 },
  { name: "JOHN MARK L. PULMANO, PhD", role: "Founder & CEO", image: LeaderMember6 },
];

const LeadershipMembers = () => {
  return (
    <motion.div
      className="leadership-members"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <section className="leaderships-section">
        <motion.div
          className="leaderships-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              className="leaders-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={leader.image} alt={leader.name} className="leaders-image" />
              <h3 className="leaders-name">{leader.name}</h3>
              <p className="leaders-role">{leader.role}</p>
              
              {/* Animated Plus Sign */}
              <motion.span 
                className="leaders-plus"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                +
              </motion.span>

            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default LeadershipMembers;
