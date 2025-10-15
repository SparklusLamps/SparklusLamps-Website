import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { faqs } from "../../constants";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQs.css";

const FAQs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="section faqs-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="faqs-container"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className={`faq-item ${openId === faq.id ? "active" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                <h3>{faq.question}</h3>
                <div className="faq-icon">
                  {openId === faq.id ? <FaMinus /> : <FaPlus />}
                </div>
              </div>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
