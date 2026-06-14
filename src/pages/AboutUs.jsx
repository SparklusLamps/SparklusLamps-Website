import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FloatingContactIcons from "../components/FloatingContactIcons/FloatingContactIcons";
import CraftsmanshipVideo from "../components/CraftsmanshipVideo/CraftsmanshipVideo";
import { aboutPage } from "../constants";
import "./AboutUs.css";

const ValueIcon = ({ type }) => {
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
    case "handmade":
      return (
        <svg {...props}>
          <path d="M8 14c0-3 1.5-5.5 4-8 2.5 2.5 4 5 4 8" />
          <path d="M12 6v6" />
          <path d="M9.5 18c.5-1.5 1.5-2.5 2.5-2.5s2 1 2.5 2.5" />
        </svg>
      );
    case "sustainable":
      return (
        <svg {...props}>
          <path d="M12 21c-4-3-7-6-7-10a7 7 0 0114 0c0 4-3 7-7 10z" />
          <path d="M12 11v10" />
        </svg>
      );
    case "customisable":
      return (
        <svg {...props}>
          <path d="M14 3l7 7-10 10H4v-7z" />
          <path d="M16 5l3 3" />
        </svg>
      );
    default:
      return null;
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const AboutUs = () => {
  const { hero, ourStory, production, workshop, team, values } = aboutPage;

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero */}
      <section className="about-section about-hero">
        <div className="container about-hero-container">
          <motion.div className="about-hero-content" {...fadeInUp}>
            <span className="about-label">{hero.label}</span>
            <h2 className="about-hero-title">{hero.title}</h2>
            <p className="about-hero-description">{hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="about-section about-section-dark about-story">
        <div className="container about-story-grid">
          <motion.div className="about-story-text" {...fadeInUp}>
            <h2 className="about-story-heading">{ourStory.heading}</h2>
            {ourStory.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div className="about-founder-image" {...fadeInUp}>
            <img src={ourStory.founderImage} alt={ourStory.founderName} />
          </motion.div>

          <motion.div className="about-founder-quote" {...fadeInUp}>
            <span className="about-quote-icon" aria-hidden="true">
              &ldquo;
            </span>
            <p>{ourStory.quote}</p>
            <p className="about-founder-name">{ourStory.founderName}</p>
            <span className="about-founder-title">{ourStory.founderTitle}</span>
          </motion.div>
        </div>
      </section>

      {/* From Raw Paper to Finished Light */}
      <CraftsmanshipVideo
        embedded
        sectionHeading={production.heading}
      />

      {/* Workshop */}
      <section className="about-section about-section-light about-workshop">
        <div className="container">
          <motion.div className="section-title" {...fadeInUp}>
            <h2>{workshop.heading}</h2>
          </motion.div>
          <div className="about-workshop-grid">
            {workshop.images.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                className="about-workshop-item"
                {...fadeInUp}
                transition={{ delay: index * 0.04 }}
              >
                <img src={image} alt={`Workshop moment ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-section about-section-dark about-team">
        <div className="container">
          <motion.div className="section-title" {...fadeInUp}>
            <h2>{team.heading}</h2>
          </motion.div>
          <div className="about-team-grid">
            {team.members.map((member, index) => (
              <motion.div
                key={member.id}
                className="about-team-card"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="about-team-avatar">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="about-team-info">
                  <h3>{member.name}</h3>
                  <span className="about-team-role">{member.role}</span>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-section about-section-light about-values">
        <div className="container">
          <motion.div className="section-title" {...fadeInUp}>
            <h2>{values.heading}</h2>
          </motion.div>
          <div className="about-values-grid">
            {values.items.map((item, index) => (
              <motion.div
                key={item.id}
                className="about-value-card"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="about-value-icon">
                  <ValueIcon type={item.icon} />
                </div>
                <div className="about-value-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FloatingContactIcons />
      <Footer />
    </div>
  );
};

export default AboutUs;
