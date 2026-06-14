import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { navLinks, navCta } from "../../constants";
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

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname === path;
  };

  const renderNavLink = (link) => (
    <Link
      to={link.path}
      className={`nav-link ${isActive(link.path) ? "active" : ""}`}
      onClick={() => setIsOpen(false)}
    >
      {link.title}
    </Link>
  );

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <span className="logo-text">Sparklus</span>
          <span className="logo-accent">Lamps</span>
        </Link>

        <div className="navbar-right desktop-menu">
          <ul className="navbar-menu">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                {renderNavLink(link)}
              </motion.li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a
              href={navCta.href}
              className="nav-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              {navCta.label}
            </a>
          </div>
        </div>

        <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </div>

        <motion.div
          className={`mobile-menu ${isOpen ? "open" : ""}`}
          initial={false}
          animate={isOpen ? { x: 0 } : { x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul className="navbar-menu">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, x: 50 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ delay: index * 0.08 }}
              >
                {renderNavLink(link)}
              </motion.li>
            ))}
          </ul>

          <div className="navbar-actions mobile-actions">
            <a
              href={navCta.href}
              className="nav-cta-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <FaWhatsapp />
              {navCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
