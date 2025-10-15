import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { aboutContent } from "../../constants";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageSrc = aboutContent.ourStory.image;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Story</h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="about-row"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-image" whileHover={{ scale: 1.02 }}>
            <img src={imageSrc} alt="Sparklus Lamps - Our Story" />
          </motion.div>

          <motion.div className="about-text" variants={containerVariants}>
            <p>{aboutContent.ourStory.content}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
