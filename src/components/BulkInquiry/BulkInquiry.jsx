import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { companyDetails } from "../../constants";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./BulkInquiry.css";

const BulkInquiry = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section bulk-inquiry-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Bulk Inquiry & Contact</h2>
          <p className="section-subtitle">
            Get in touch for bulk orders, corporate projects, or any inquiries
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="contact-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p className="contact-detail">{companyDetails.email}</p>
            <p className="contact-description">
              Send us an email anytime and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="contact-icon">
              <FaPhone />
            </div>
            <h3>Call Us</h3>
            <p className="contact-detail">{companyDetails.phone}</p>
            <p className="contact-description">
              Speak directly with our luxury lighting specialists
            </p>
          </motion.div>

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="contact-icon">
              <FaClock />
            </div>
            <h3>Office Hours</h3>
            <p className="contact-detail">
              {companyDetails.officeHours.weekdays}
            </p>
            <p className="contact-description">
              {companyDetails.officeHours.saturday} •{" "}
              {companyDetails.officeHours.sunday}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BulkInquiry;
