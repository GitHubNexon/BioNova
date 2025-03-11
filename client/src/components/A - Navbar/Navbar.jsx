import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5"; // Icons for open/close menu
import { motion, AnimatePresence } from "framer-motion"; // Motion effects
import Logo from "../../assets/image/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo (Centered in Navbar) */}
        <Link to="/" className="logo">
          <img src={Logo} alt="BioNova Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {["Home", "Innovation", "Purpose", "People", "Forum"].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                className="nav-link"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <Link to="/contact" className="contact-btn">
          Contact <FiArrowUpRight className="icon" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu with Motion Effects */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            {["Home", "Innovation", "Purpose", "Forum", "People", "Contact"].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
                  className="mobile-link" 
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <Link to="/contact" className="mobile-contact-btn" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
