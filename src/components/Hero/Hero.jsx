import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroContent, siteActions } from "../../constants";
import FloatingContactIcons from "../FloatingContactIcons/FloatingContactIcons";
import BrochureModal from "../BrochureModal/BrochureModal";
import "./Hero.css";

const Hero = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const openBrochureModal = heroContent.ctaBehavior === "modal";

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

          {Array.isArray(heroContent.tags) && heroContent.tags.length > 0 && (
            <motion.div
              className="hero-tags"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              {heroContent.tags.map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {heroContent.description}
          </motion.p>

          {openBrochureModal ? (
            <motion.button
              className="btn btn-primary hero-cta"
              onClick={() => setIsBrochureOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {heroContent.ctaText}
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={siteActions.visionCta} className="btn btn-primary hero-cta">
                {heroContent.ctaText}
              </Link>
            </motion.div>
          )}
        </motion.div>

        <FloatingContactIcons />

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

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </section>
  );
};

export default Hero;
