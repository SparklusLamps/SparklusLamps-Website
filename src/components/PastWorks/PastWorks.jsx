import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { pastWorks } from "../../constants";
import "./PastWorks.css";

const PastWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollContainerRef = useRef(null);
  const previousIndexRef = useRef(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeWorkId, setActiveWorkId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const closeDetails = useCallback(() => {
    setActiveWorkId(null);
    setIsAutoPlaying(true);
  }, []);

  const goToSlideIndex = useCallback(
    (index) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const total = pastWorks.length;
      const nextIndex = ((index % total) + total) % total;

      closeDetails();

      container.scrollTo({
        left: nextIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentIndex(nextIndex);
      previousIndexRef.current = nextIndex;
    },
    [closeDetails]
  );

  const goToNext = useCallback(() => {
    goToSlideIndex(currentIndex + 1);
  }, [currentIndex, goToSlideIndex]);

  const goToPrev = useCallback(() => {
    goToSlideIndex(currentIndex - 1);
  }, [currentIndex, goToSlideIndex]);

  useEffect(() => {
    if (!isAutoPlaying || !inView || activeWorkId !== null) return;

    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, activeWorkId, goToNext]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return undefined;

    const syncIndexFromScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);

      if (index !== previousIndexRef.current) {
        previousIndexRef.current = index;
        setCurrentIndex(index);
        closeDetails();
      }
    };

    syncIndexFromScroll();
    container.addEventListener("scroll", syncIndexFromScroll, { passive: true });
    window.addEventListener("resize", syncIndexFromScroll);

    return () => {
      container.removeEventListener("scroll", syncIndexFromScroll);
      window.removeEventListener("resize", syncIndexFromScroll);
    };
  }, [closeDetails]);

  const supportsHover = useCallback(
    () => window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    []
  );

  const handleWorkEnter = (workId) => {
    if (!supportsHover()) return;
    setActiveWorkId(workId);
    setIsAutoPlaying(false);
  };

  const handleWorkLeave = () => {
    if (!supportsHover()) return;
    setActiveWorkId(null);
    setIsAutoPlaying(true);
  };

  const handleWorkToggle = (workId) => {
    if (supportsHover()) return;

    setActiveWorkId((current) => {
      const next = current === workId ? null : workId;
      setIsAutoPlaying(next === null);
      return next;
    });
  };

  const progressPercent =
    pastWorks.length <= 1
      ? 100
      : ((currentIndex + 1) / pastWorks.length) * 100;

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
      >
        <div className="works-carousel" ref={scrollContainerRef}>
          {pastWorks.map((work, index) => {
            const isActive =
              activeWorkId === work.id && index === currentIndex;

            return (
              <motion.div
                key={work.id}
                className={`work-carousel-item ${isActive ? "is-active" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => handleWorkEnter(work.id)}
                onMouseLeave={handleWorkLeave}
                onClick={() => handleWorkToggle(work.id)}
                role="presentation"
              >
                <div className="work-carousel-card">
                  <div className="work-carousel-image">
                    <div className="work-carousel-image-frame">
                      <img src={work.image} alt={work.title} />
                    </div>
                    {!isActive && (
                      <div className="work-carousel-overlay">
                        <h3>{work.title}</h3>
                        <p className="work-tagline">{work.location}</p>
                        <span className="work-year">{work.year}</span>
                      </div>
                    )}
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.aside
                        className="work-detail-panel"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 24 }}
                        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <div className="work-detail-panel-header">
                          <span className="work-detail-year">{work.year}</span>
                          <h3>{work.title}</h3>
                          <p className="work-detail-location">{work.location}</p>
                        </div>

                        <div className="work-detail-panel-body">
                          <div className="work-detail-block">
                            <span className="work-detail-label">
                              Client Requirements
                            </span>
                            <p>{work.clientRequirements}</p>
                          </div>
                          <div className="work-detail-block">
                            <span className="work-detail-label">Our Solution</span>
                            <p>{work.ourSolution}</p>
                          </div>
                        </div>
                      </motion.aside>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="works-carousel-controls">
          <button
            type="button"
            className="works-carousel-arrow works-carousel-arrow--prev"
            onClick={goToPrev}
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>

          <div className="works-carousel-progress">
            <div className="works-carousel-progress-track">
              <motion.div
                className="works-carousel-progress-fill"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </div>
            <span className="works-carousel-progress-label">
              {currentIndex + 1} / {pastWorks.length}
            </span>
          </div>

          <button
            type="button"
            className="works-carousel-arrow works-carousel-arrow--next"
            onClick={goToNext}
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default PastWorks;
