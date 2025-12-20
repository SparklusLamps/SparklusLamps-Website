import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { pastWorks } from "../../constants";
import "./PastWorks.css";

const PastWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollContainerRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const autoScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const isAtEnd =
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth - 10;

      if (isAtEnd) {
        // Reset to beginning
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll to next
        const scrollAmount = container.clientWidth;
        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  // Auto-scroll effect
  React.useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const interval = setInterval(() => {
      autoScroll();
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, inView]);

  return (
    <section id="works" className="section past-works-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Projects</h2>
          <p className="section-subtitle">
            Explore our portfolio of Customized Luxury lighting installations
            across the globe
          </p>
        </motion.div>
      </div>

      <motion.div
        ref={ref}
        className="carousel-wrapper-container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="works-carousel" ref={scrollContainerRef}>
          {pastWorks.map((work, index) => (
            <motion.div
              key={work.id}
              className="work-carousel-item"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="work-carousel-image">
                <img src={work.image} alt={work.title} />
                <div className="work-carousel-overlay">
                  <h3>{work.title}</h3>
                  <p className="work-tagline">{work.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PastWorks;
