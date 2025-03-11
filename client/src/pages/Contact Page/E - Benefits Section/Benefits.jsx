import { motion } from "framer-motion";
import "./Benefits.css";

// Import SVG icons
import WorkFromHomeStipend from "../../../assets/icons/WorkFromHomeStipend.svg";
import PaidParentalLeave from "../../../assets/icons/PaidParentalLeave.svg";
import WorkLifeHarmony from "../../../assets/icons/WorkLifeHarmony.svg";


const values = [
  { 
    title: "Work from Home Stipend", 
    description: "Get what you need to do your best work", 
    icon: WorkFromHomeStipend, 
    color: "rgba(40, 99, 38, 0.3)" 
  },
  { 
    title: "Paid Parental Leave", 
    description: "12 weeks for all parents", 
    icon: PaidParentalLeave, 
    color: "rgba(217, 201, 107, 0.44)" 
  },
  { 
    title: "Work Life Harmony", 
    description: "We believe are human beings, need time for others. We work hard, but we rest hard too", 
    icon: WorkLifeHarmony, 
    color: "rgba(190, 96, 227, 0.47)" 
  },
];

const WordsToLiveBy = () => {
  return (
    <section className="benefits-words-section">
      <motion.p 
        className="benefits-words-subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        BENEFITS
      </motion.p>

      <motion.h2 
        className="benefits-words-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        Great Work. <br /> Great Rewards.
      </motion.h2>

      <div className="benefits-words-grid">
        {values.map((value, index) => (
          <motion.div 
            key={index} 
            className="benefits-word-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="benefits-icon-bg" style={{ backgroundColor: value.color }}></div>
            <img src={value.icon} alt={value.title} className="benefits-word-icon" />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WordsToLiveBy;
