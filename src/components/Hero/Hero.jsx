import React from "react";
import { motion } from "framer-motion";
import { heroContent } from "../../constants";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
} from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {heroContent.tagline}
          </motion.p>

          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {heroContent.heading}
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {heroContent.description}
          </motion.p>

          <motion.button
            className="btn btn-primary hero-cta"
            onClick={scrollToProducts}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {heroContent.ctaText}
          </motion.button>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-wrapper">
            {/* Placeholder for luxury lamp image */}
            <div className="hero-lamp-placeholder">
              {/* You'll add your actual lamp image here */}
            </div>
          </div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="hero-social"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="tel:+919548218100" className="social-icon">
            <FaPhone />
          </a>
          <a
            href="https://wa.me/9548218100"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="scroll-text">Explore</span>
          <div className="scroll-arrow"></div>
        </motion.div>

        {/* Page Counter */}
        {/* <motion.div
          className="page-counter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <span className="counter-current">01</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">08</span>
        </motion.div> */}
      </div>

      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;
