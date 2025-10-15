import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { statistics } from "../../constants";
import {
  FaTrophy,
  FaStar,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import "./Statistics.css";

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (iconName) => {
    switch (iconName) {
      case "stock":
        return <BsFillCollectionFill />;
      case "star":
        return <FaStar />;
      case "check":
        return <FaCheckCircle />;
      case "location":
        return <FaMapMarkerAlt />;
      default:
        return <FaStar />;
    }
  };

  return (
    <section className="statistics-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="stats-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="stat-icon">{getIcon(stat.icon)}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
