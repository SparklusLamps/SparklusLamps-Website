import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { designerTestimonials } from "../../constants";
import "./DesignerTestimonials.css";

const getInitials = (name) =>
  name
    .replace(/^Ar\.\s*/i, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const TestimonialAvatar = ({ testimonial }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="testimonial-avatar-ring">
      <div className="testimonial-avatar">
        {!imageError && testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.author}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="testimonial-avatar-fallback">
            {getInitials(testimonial.author)}
          </span>
        )}
      </div>
    </div>
  );
};

const DesignerTestimonials = () => {
  const { title, testimonials } = designerTestimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goTo = (index) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  };

  const active = testimonials[activeIndex];

  return (
    <div className="designer-testimonials">
      <div className="testimonials-header">
        <h2 className="testimonials-title">{title}</h2>
      </div>

      <div className="testimonials-showcase">
        {testimonials.length > 1 && (
          <button
            type="button"
            className="testimonial-nav testimonial-nav-prev"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
        )}

        <div className="testimonial-card-inner">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="testimonial-slide"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45 }}
            >
              <div className="testimonial-quote-block">
                <span className="testimonial-quote-icon" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="testimonial-text">{active.quote}</p>
              </div>

              <div className="testimonial-divider" aria-hidden="true" />

              <div className="testimonial-attribution">
                <TestimonialAvatar testimonial={active} />
                <div className="testimonial-meta">
                  <p className="testimonial-author">{active.author}</p>
                  <p className="testimonial-company">{active.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {testimonials.length > 1 && (
          <button
            type="button"
            className="testimonial-nav testimonial-nav-next"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        )}
      </div>

      {testimonials.length > 1 && (
        <div className="testimonial-dots">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`testimonial-dot ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial from ${item.author}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DesignerTestimonials;
