import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { customizationVision } from "../../constants";
import "./CustomizationVision.css";

const CustomizationVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { title, subtitle, cards } = customizationVision;

  return (
    <section
      className="section customization-vision-section"
      id="customized-vision"
    >
      <div className="container">
        <motion.div
          className="section-title"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </motion.div>

        <div className="customization-cards">
          {cards.map((card, index) => (
            <motion.div
              key={card.step}
              className={`customization-card ${
                card.layout === "image-right" ? "image-right" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="customization-image">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="customization-content">
                <div className="customization-header">
                  <div className="customization-step">{card.step}</div>
                  <h3>{card.title}</h3>
                </div>
                <p>{card.description}</p>
                <div
                  className={`customization-options ${card.optionsType || ""}`}
                >
                  {card.options.map((option) => (
                    <div className="customization-option" key={option.label}>
                      {card.optionsType === "size" ? (
                        <span
                          className="option-size-image"
                          style={{
                            width: option.width,
                            height: option.height,
                          }}
                        >
                          <img src={option.image} alt={option.label} />
                        </span>
                      ) : (
                        <span className="option-swatch">
                          <img src={option.image} alt={option.label} />
                        </span>
                      )}
                      <span className="option-label">{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizationVision;
