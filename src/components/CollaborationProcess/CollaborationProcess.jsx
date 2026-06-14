import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { collaborationProcess } from "../../constants";
import "./CollaborationProcess.css";

const ProcessIcon = ({ type }) => {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "vision":
      return (
        <svg {...props}>
          <path d="M6 9.5a6 6 0 0112 0c0 2.8-1.9 5.2-4.5 5.9L11 19.5v-3.2A6 6 0 016 9.5z" />
          <circle cx="10" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="12" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="14" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      );
    case "consultation":
      return (
        <svg {...props}>
          <circle cx="8" cy="7.5" r="2.5" />
          <path d="M4.5 17c0-2.5 1.7-4 3.5-4s3.5 1.5 3.5 4" />
          <circle cx="16" cy="7.5" r="2.5" />
          <path d="M12.5 17c0-2.5 1.7-4 3.5-4s3.5 1.5 3.5 4" />
        </svg>
      );
    case "finalize":
      return (
        <svg {...props}>
          <rect x="5.5" y="4.5" width="10" height="14" rx="1" />
          <path d="M8 8.5h5.5M8 11h5.5M8 13.5h3.5" />
          <path d="M15 6.5l3.5 3.5-5.5 5.5H12v-3.5z" />
        </svg>
      );
    case "prototype":
      return (
        <svg {...props}>
          <path d="M12 3.5l6.5 4v7c0 3.8-2.9 6.5-6.5 8.5C8.4 20.5 5.5 17.8 5.5 14.5v-7z" />
          <path d="M12 10v5.5" />
          <path d="M9.5 18.5h5" />
        </svg>
      );
    case "production":
      return (
        <svg {...props}>
          <path d="M7.5 17.5c1.2-3.2 3.2-5.5 4.5-7.5 1.3 2 3.3 4.3 4.5 7.5" />
          <path d="M12 10v7.5" />
          <path d="M5.5 19.5h13" />
          <path d="M15 9.5l1.8-1.8 1.8 1.8" />
        </svg>
      );
    case "quality":
      return (
        <svg {...props}>
          <path d="M5.5 9h13l-1.2 10.5H6.7z" />
          <path d="M8.5 9V7a3.5 3.5 0 017 0v2" />
          <path d="M15.5 12.5l1.3 1.3 2.7-3" />
        </svg>
      );
    case "installation":
      return (
        <svg {...props}>
          <path d="M9 17c0-4 1.8-6.8 3.5-9 1.7 2.2 3.5 5 3.5 9" />
          <path d="M12 8.5v4.5" />
          <ellipse cx="12" cy="17.5" rx="3.5" ry="1.8" />
          <path d="M9.5 20.5h5" />
        </svg>
      );
    default:
      return null;
  }
};

const TimelineArrow = () => (
  <svg
    className="timeline-arrow-icon"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.172 12L8.222 7.05l1.415-1.414L16 12l-6.363 6.364-1.415-1.414z" />
  </svg>
);

const ProcessStep = ({ step, inView, delay }) => (
  <motion.div
    className="process-step"
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
  >
    <div className="process-step-icon">
      <ProcessIcon type={step.icon} />
    </div>
    <h3>{step.title}</h3>
    <p>{step.description}</p>
  </motion.div>
);

const TimelineConnector = ({ number, inView, delay }) => (
  <motion.div
    className="timeline-connector"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.4, delay }}
    aria-hidden="true"
  >
    <span className="timeline-connector-line" />
    <span className="timeline-connector-badge">{number}</span>
    <span className="timeline-connector-line" />
    <TimelineArrow />
  </motion.div>
);

const CollaborationProcess = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { label, heading, subtitle, steps, footer } = collaborationProcess;

  const getConnectorNumber = (step, index) =>
    step.connector || String(index + 1).padStart(2, "0");

  return (
    <section className="section collaboration-process-section" id="process">
      <div className="container">
        <motion.div
          className="collaboration-header"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="collaboration-label">{label}</span>
          <h2>
            {heading.before}
            <span className="heading-highlight">{heading.highlight1}</span>
            {heading.middle}
            <span className="heading-highlight">{heading.highlight2}</span>
          </h2>
          <p className="collaboration-subtitle">{subtitle}</p>
        </motion.div>

        <div className="process-timeline-wrapper">
          <div className="process-timeline">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <ProcessStep
                  step={step}
                  inView={inView}
                  delay={index * 0.08}
                />
                {index < steps.length - 1 && (
                  <TimelineConnector
                    number={getConnectorNumber(step, index)}
                    inView={inView}
                    delay={index * 0.08 + 0.04}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* <motion.div
          className="collaboration-footer"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="footer-star">✦</span>
          <p>{footer}</p>
          <span className="footer-star">✦</span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default CollaborationProcess;
