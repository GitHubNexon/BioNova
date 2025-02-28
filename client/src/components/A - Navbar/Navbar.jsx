import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5"; // Icons for open/close menu
import Logo from "../../assets/image/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo (Takes user to Home) */}
        <Link to="/" className="logo">
          <img src={Logo} alt="BioNova Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {["Home", "Innovation", "Purpose", "Forum", "People"].map((item, index) => (
            <Link 
              key={index} 
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
              className="nav-link"
            >
              {item}
            </Link>
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

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        {["Home", "Innovation", "Purpose", "Forum", "People"].map((item, index) => (
          <Link 
            key={index} 
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`} 
            className="mobile-link" 
            onClick={() => setIsOpen(false)}
          >
            {item}
          </Link>
        ))}
        <Link to="/contact" className="mobile-contact-btn" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
