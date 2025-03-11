import { motion } from "framer-motion";
import "./WordsToLiveBy.css";

// Import SVG icons
import CuriosityIcon from "../../../assets/icons/curiosity.svg";
import JourneyIcon from "../../../assets/icons/journey.svg";
import UnityIcon from "../../../assets/icons/unity.svg";
import AgencyIcon from "../../../assets/icons/agency.svg";

const values = [
  { 
    title: "CURIOSITY", 
    description: "Learn and challenge", 
    icon: CuriosityIcon, 
    color: "rgba(255, 193, 7, 0.3)" 
  },
  { 
    title: "JOURNEY", 
    description: "Love the process", 
    icon: JourneyIcon, 
    color: "rgba(189, 217, 107, 0.3)" 
  },
  { 
    title: "UNITY", 
    description: "We are on Biots", 
    icon: UnityIcon, 
    color: "rgba(96, 178, 227, 0.3)" 
  },
  { 
    title: "AGENCY", 
    description: "Own and initiate", 
    icon: AgencyIcon, 
    color: "rgba(240, 98, 146, 0.3)" 
  }
];

const WordsToLiveBy = () => {
  return (
    <section className="words-section">
      <motion.p 
        className="words-subtitle"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        DRIVING OUR EVERY ACTION
      </motion.p>

      <motion.h2 
        className="words-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.6 }}
      >
        Words to <br /> live by
      </motion.h2>

      <div className="words-grid">
        {values.map((value, index) => (
          <motion.div 
            key={index} 
            className="word-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="icon-bg" style={{ backgroundColor: value.color }}></div>
            <img src={value.icon} alt={value.title} className="word-icon" />
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WordsToLiveBy;
