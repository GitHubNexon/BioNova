import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./AllArticlesSection.css";
import img1 from "../../../assets/image/article1.png"; 
import img2 from "../../../assets/image/article2.png";
import img3 from "../../../assets/image/article3.png";
import img4 from "../../../assets/image/article4.png";
import img5 from "../../../assets/image/article5.png";
import img6 from "../../../assets/image/article6.png";

const articles = [
  {
    image: img1,
    title: "Revolutionizing Medicine: The Role of Synthetic Biology",
    description: "How cutting-edge biotech is reshaping healthcare.",
  },
  {
    image: img2,
    title: "Breaking Barriers: AI-Driven Drug Discovery at Scale",
    description: "Machine learning’s impact on pharmaceutical breakthroughs.",
  },
  {
    image: img3,
    title: "Hacking the Unknown: Exploring the Hidden Potential of Microbial Life",
    description: "Unveiling new discoveries in the microscopic world.",
  },
  {
    image: img4,
    title: "The Chemical Code: Unlocking Life’s Molecular Secrets",
    description: "Exploring how nature’s chemistry can inspire innovation.",
  },
  {
    image: img5,
    title: "PRISM: A Foundation Model for Life’s Chemistry",
    description: "Decoding nature’s patterns to advance biotechnology.",
  },
  {
    image: img6,
    title: "Survival of the Fittest: Lessons from Nature in Drug Development",
    description: "How evolutionary biology inspires modern medicine.",
  },
];

const AllArticlesSection = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("all-articles-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(inViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isVisible, controls]);

  return (
    <motion.section
      id="all-articles-section"
      className="all-articles-container"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <div className="all-articles-header">
        <p>THERE’S ALWAYS MORE TO EXPLORE</p>
        <h2>ALL ARTICLES</h2>
      </div>

      <div className="all-articles-grid">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="all-articles-card"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } },
            }}
          >
            <img src={article.image} alt={article.title} />
            <div className="all-articles-content">
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a href="#">Read More →</a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AllArticlesSection;
