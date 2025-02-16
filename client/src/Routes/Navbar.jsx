import React, { useState } from "react";
import Mode from "../components/Mode";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing react-icons

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },

];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 shadow-lg  m-auto fixed top-0 left-0 z-50 w-full rounded-b-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-between space-x-2">
          <a
            className="text-xl font-bold cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            BioNova Solutions
          </a>
          <Mode />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="lg:hidden">
          <div onClick={toggleMenu} className="text-xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Links */}
        <ul
          className={` rounded-2xl mt-2 lg:hidden flex-col space-y-4 absolute top-16 left-0 w-full p-6  shadow-lg transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                  setIsMenuOpen(false);
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
