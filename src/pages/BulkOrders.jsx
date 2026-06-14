import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { bulkOrdersPage, navCta, companyDetails } from "../constants";
import "./PageLayout.css";

const BulkOrders = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="site-page bulk-orders-page">
      <Navbar />
      <section className="page-hero">
        <motion.div {...fadeInUp}>
          <h1>{bulkOrdersPage.hero.title}</h1>
          <p>{bulkOrdersPage.hero.subtitle}</p>
        </motion.div>
      </section>

      <div className="page-content">
        <section className="section">
          <div className="container">
            <div className="page-card-grid">
              {bulkOrdersPage.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="page-card"
                  {...fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div className="page-cta-row" {...fadeInUp}>
              <a
                href={navCta.href}
                className="page-cta-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
                {navCta.label}
              </a>
              <a
                href={`mailto:${companyDetails.email}?subject=Bulk%20Order%20Inquiry`}
                className="page-cta-btn secondary"
              >
                Email for Bulk Quote
              </a>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BulkOrders;
