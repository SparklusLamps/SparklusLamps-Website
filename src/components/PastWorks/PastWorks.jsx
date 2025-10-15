import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pastWorks } from "../../constants";
import "./PastWorks.css";

const PastWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="works" className="section past-works-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Past Works</h2>
          <p className="section-subtitle">
            Explore our portfolio of luxury lighting installations across the
            globe
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="works-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pastWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="work-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="work-image">
                <img src={work.image} alt={work.title} />
                <div className="work-overlay">
                  <span className="work-year">{work.year}</span>
                </div>
              </div>
              <div className="work-content">
                <h3>{work.title}</h3>
                <p className="work-location">{work.location}</p>
                <p className="work-description">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PastWorks;
