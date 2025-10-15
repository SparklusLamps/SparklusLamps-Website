import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../constants";
import { useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="logo-text">Sparklus</span>
          <span className="logo-accent">Lamps</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={`/#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === "/") {
                    scrollToSection(link.id);
                  } else {
                    window.location.href = `/#${link.id}`;
                  }
                }}
                className="nav-link"
              >
                {link.title}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          initial={false}
          animate={isOpen ? { x: 0 } : { x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul className="navbar-menu">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={`/#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === "/") {
                      scrollToSection(link.id);
                    } else {
                      window.location.href = `/#${link.id}`;
                    }
                  }}
                  className="nav-link"
                >
                  {link.title}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
