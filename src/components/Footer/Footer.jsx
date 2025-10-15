import React from "react";
import { motion } from "framer-motion";
import { companyDetails, footerLinks } from "../../constants";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <motion.div
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="logo-text">Sparklus</span>
                <span className="logo-accent">Lamps</span>
              </motion.div>
              <p className="footer-description">
                {companyDetails.name} is your trusted technology partner,
                helping businesses and entrepreneurs leverage technology to
                grow, automate, and succeed.
              </p>
              <div className="footer-social">
                {/* <a
                  href={companyDetails.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaFacebook />
                </a> */}
                <a
                  href={companyDetails.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaInstagram />
                </a>
                {/* <a
                  href={companyDetails.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaTwitter />
                </a> */}
                {/* <a
                  href={companyDetails.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin />
                </a> */}
                <a
                  href={companyDetails.socialMedia.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaPinterest />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="footer-column">
              <h3 className="footer-title">Get In Touch</h3>
              <div className="footer-contact">
                <p>
                  <strong>Email:</strong>
                  <br />
                  {companyDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  {companyDetails.phone}
                </p>
                <p>
                  <strong>Address:</strong>
                  <br />
                  {companyDetails.address.street}
                  <br />
                  {companyDetails.address.city}, {companyDetails.address.state}{" "}
                  {companyDetails.address.zip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {new Date().getFullYear()} {companyDetails.name}. All rights
              reserved.
            </p>
            <div className="footer-legal">
              {footerLinks.legal.map((link, index) => (
                <a key={index} href={link.path}>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
