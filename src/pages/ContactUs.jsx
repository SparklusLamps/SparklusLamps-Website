import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingContactIcons from "../components/FloatingContactIcons/FloatingContactIcons";
import CustomizationForm from "../components/CustomizationForm/CustomizationForm";
import { contactPage, faqs } from "../constants";
import "./ContactUs.css";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ContactIcon = ({ type }) => {
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
    case "email":
      return (
        <svg {...props}>
          <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
          <path d="M3 7.5l9 6.5 9-6.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <path d="M6.5 4.5h3.5l1.8 4.5-2.3 1.5a11 11 0 005.5 5.5l1.5-2.3 4.5 1.8v3.5a1.5 1.5 0 01-1.5 1.5C9.8 20.5 3.5 14.2 3.5 6a1.5 1.5 0 011.5-1.5z" />
        </svg>
      );
    case "location":
      return (
        <svg {...props}>
          <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v4.5l3 2" />
        </svg>
      );
    default:
      return null;
  }
};

const PartnerIcon = ({ type }) => {
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
    case "designer":
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M8 16l3-4 2.5 3 2.5-5 3 6" />
        </svg>
      );
    case "architect":
      return (
        <svg {...props}>
          <path d="M4 18l8-14 8 14z" />
          <path d="M9 18h6" />
        </svg>
      );
    case "hospitality":
      return (
        <svg {...props}>
          <path d="M4 10h16v9H4z" />
          <path d="M8 10V6h8v4" />
          <path d="M12 14v2" />
        </svg>
      );
    case "retail":
      return (
        <svg {...props}>
          <path d="M6 8l1.5-3h9L18 8" />
          <path d="M5 8h14v11H5z" />
          <path d="M9 12h6" />
        </svg>
      );
    case "bespoke":
      return (
        <svg {...props}>
          <path d="M12 3l7 4v10l-7 4-7-4V7z" />
          <path d="M12 11v10" />
          <path d="M5 7l7 4 7-4" />
        </svg>
      );
    default:
      return null;
  }
};

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
    case "submit":
      return (
        <svg {...props}>
          <rect x="5" y="4" width="14" height="16" rx="1" />
          <path d="M9 9h6M9 12.5h6M9 16h4" />
        </svg>
      );
    case "call":
      return (
        <svg {...props}>
          <path d="M6.5 4.5h3.5l1.8 4.5-2.3 1.5a11 11 0 005.5 5.5l1.5-2.3 4.5 1.8v3.5a1.5 1.5 0 01-1.5 1.5C9.8 20.5 3.5 14.2 3.5 6a1.5 1.5 0 011.5-1.5z" />
        </svg>
      );
    case "design":
      return (
        <svg {...props}>
          <path d="M14 3l7 7-10 10H4v-7z" />
          <path d="M16 5l3 3" />
        </svg>
      );
    case "prototype":
      return (
        <svg {...props}>
          <path d="M12 3.5l6.5 4v7c0 3.8-2.9 6.5-6.5 8.5C8.4 20.5 5.5 17.8 5.5 14.5v-7z" />
          <path d="M12 10v5.5" />
        </svg>
      );
    case "production":
      return (
        <svg {...props}>
          <path d="M7.5 17.5c1.2-3.2 3.2-5.5 4.5-7.5 1.3 2 3.3 4.3 4.5 7.5" />
          <path d="M12 10v7.5" />
          <path d="M5.5 19.5h13" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...props}>
          <path d="M5.5 9h13l-1.2 10.5H6.7z" />
          <path d="M8.5 9V7a3.5 3.5 0 017 0v2" />
          <path d="M15.5 12.5l1.3 1.3 2.7-3" />
        </svg>
      );
    default:
      return null;
  }
};

const ProcessStepContent = ({ step }) => (
  <>
    <div className="contact-process-icon">
      <ProcessIcon type={step.icon} />
    </div>
    <h3>{step.title}</h3>
    <p>{step.description}</p>
  </>
);

const isExternalHref = (href) =>
  href.startsWith("http") ||
  href.startsWith("tel:") ||
  href.startsWith("mailto:");

const ContactProcessStep = ({ step, index }) => {
  const motionProps = {
    className: `contact-process-step${
      step.href ? " contact-process-step-action" : ""
    }`,
    ...fadeInUp,
    transition: { delay: index * 0.06 },
  };

  if (step.href) {
    if (
      step.external ||
      isExternalHref(step.href) ||
      step.href.startsWith("#")
    ) {
      return (
        <motion.a
          {...motionProps}
          href={step.href}
          target={step.href.startsWith("http") ? "_blank" : undefined}
          rel={step.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={step.title}
        >
          <ProcessStepContent step={step} />
        </motion.a>
      );
    }

    return (
      <motion.a {...motionProps} href={step.href} aria-label={step.title}>
        <ProcessStepContent step={step} />
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <ProcessStepContent step={step} />
    </motion.div>
  );
};

const TimelineArrow = () => (
  <svg
    className="contact-timeline-arrow"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13.172 12L8.222 7.05l1.415-1.414L16 12l-6.363 6.364-1.415-1.414z" />
  </svg>
);

const getConversationHref = (id, value) => {
  if (id === "email") return `mailto:${value}`;
  if (id === "phone") return `tel:${value.replace(/\s/g, "")}`;
  return null;
};

const ContactUs = () => {
  const { hero, conversation, collaboration, process, faq, bottomCta } =
    contactPage;
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="contact-page">
      <Navbar />

      {/* Hero */}
      <section
        className="contact-section contact-section-dark contact-hero"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="contact-hero-overlay" />
        <div className="container contact-hero-content">
          <motion.div {...fadeInUp}>
            <span className="contact-label">{hero.label}</span>
            <h1 className="contact-hero-title">
              {hero.title.before}
              <span className="contact-hero-highlight">
                {hero.title.highlight}
              </span>
            </h1>
            <span className="contact-hero-star" aria-hidden="true">
              ✦
            </span>
            <p className="contact-hero-subtitle">{hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Conversation + Form */}
      <section
        id="project-enquiry"
        className="contact-section contact-section-dark contact-enquiry"
      >
        <div className="container contact-enquiry-grid">
          <motion.div className="contact-conversation" {...fadeInUp}>
            <div className="section-title contact-column-title">
              <h2>{conversation.heading}</h2>
            </div>
            <ul className="contact-details-list">
              {conversation.items.map((item) => {
                const href = getConversationHref(item.id, item.value);
                return (
                  <li key={item.id} className="contact-detail-item">
                    <span className="contact-detail-icon">
                      <ContactIcon type={item.icon} />
                    </span>
                    <div className="contact-detail-text">
                      <span className="contact-detail-label">{item.label}</span>
                      {href ? (
                        <a href={href} className="contact-detail-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-detail-value">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            className="contact-enquiry-form"
            {...fadeInUp}
            transition={{ delay: 0.1 }}
          >
            <CustomizationForm variant="contact" />
          </motion.div>
        </div>
      </section>

      {/* Collaboration + FAQ */}
      <section className="contact-section contact-section-alt contact-collaboration">
        <div className="container contact-collaboration-grid">
          <motion.div className="contact-working" {...fadeInUp}>
            <div className="section-title contact-column-title">
              <h2>{collaboration.working.heading}</h2>
            </div>
            <p className="contact-working-subtitle">
              {collaboration.working.subtitle}
            </p>
            <div className="contact-partners">
              {collaboration.working.partners.map((partner) => (
                <div key={partner.label} className="contact-partner">
                  <span className="contact-partner-icon">
                    <PartnerIcon type={partner.icon} />
                  </span>
                  <span className="contact-partner-label">{partner.label}</span>
                </div>
              ))}
            </div>
            <a
              href={collaboration.working.ctaLink}
              className="contact-btn contact-btn-solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              {collaboration.working.ctaText}
            </a>
          </motion.div>

          <motion.div className="contact-faq-column" {...fadeInUp}>
            <div className="section-title contact-column-title">
              <h2>{faq.heading}</h2>
            </div>
            <div className="contact-faq-list">
              {faqs.map((item) => (
                <div
                  key={item.id}
                  className={`contact-faq-item ${
                    openFaqId === item.id ? "active" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="contact-faq-question"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={openFaqId === item.id}
                  >
                    <span>{item.question.trim()}</span>
                    <span className="contact-faq-toggle">
                      {openFaqId === item.id ? <FaMinus /> : <FaPlus />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaqId === item.id && (
                      <motion.div
                        className="contact-faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p>{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="contact-section contact-section-dark contact-process">
        <div className="container">
          <motion.div
            className="section-title contact-process-header"
            {...fadeInUp}
          >
            <h2>{process.heading}</h2>
          </motion.div>

          <div className="contact-process-timeline-wrapper">
            <div className="contact-process-timeline">
              {process.steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <ContactProcessStep step={step} index={index} />
                  {index < process.steps.length - 1 && (
                    <div
                      className="contact-timeline-connector"
                      aria-hidden="true"
                    >
                      <span className="contact-timeline-line" />
                      <TimelineArrow />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        id="bring-your-vision-to-light"
        className="contact-section contact-section-dark contact-bottom-cta"
        style={{ backgroundImage: `url(${bottomCta.accentImage})` }}
      >
        <div className="contact-bottom-overlay" aria-hidden="true" />
        <div className="container contact-bottom-content">
          <motion.div {...fadeInUp}>
            <div className="section-title contact-bottom-title">
              <h2>{bottomCta.heading}</h2>
            </div>
            <p className="contact-bottom-subtitle">{bottomCta.subtitle}</p>
            <div className="contact-bottom-buttons">
              <a
                href={bottomCta.primaryLink}
                className="contact-btn contact-btn-solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bottomCta.primaryCta}
              </a>
              <a
                href={bottomCta.secondaryLink}
                download={bottomCta.secondaryFileName}
                className="contact-btn contact-btn-outline-gold"
              >
                {bottomCta.secondaryCta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContactIcons />
      <Footer />
    </div>
  );
};

export default ContactUs;
