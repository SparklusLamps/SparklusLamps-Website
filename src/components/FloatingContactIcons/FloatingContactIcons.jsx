import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { floatingContactIcons } from "../../constants";
import "./FloatingContactIcons.css";

const FloatingContactIcons = () => {
  const { phoneHref, whatsappHref } = floatingContactIcons;

  return (
    <motion.div
      className="floating-contact"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <a href={phoneHref} className="floating-contact-icon phone-icon">
        <FaPhone />
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact-icon whatsapp-icon"
      >
        <FaWhatsapp />
      </a>
    </motion.div>
  );
};

export default FloatingContactIcons;
