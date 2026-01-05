import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./DesignersArchitects.css";

const DesignersArchitects = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your interest. We'll be in touch soon!");
    setFormData({ name: "", email: "", phone: "" });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="designers-page">
      <Navbar />
      {/* Hero Section */}
      <section className="da-hero">
        <div className="da-container">
          <motion.div className="da-hero-content" {...fadeInUp}>
            <h1>Crafting Light for Visionaries</h1>
            <p className="da-hero-subtext">
              Custom lighting solutions for architects and interior designers
              who demand precision, artistry, and collaboration
            </p>
            <div className="da-hero-ctas">
              <a href="#contact" className="da-btn da-btn-primary">
                Discuss Your Project
              </a>
              <a
                href="https://wa.me/919548218100"
                target="_blank"
                rel="noopener noreferrer"
                className="da-btn da-btn-secondary"
              >
                Book a Design Call
              </a>
            </div>
          </motion.div>
          <motion.div
            className="da-hero-image"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/SparklusLamps-Website/images/pastwork1.jpg"
              alt="Custom lighting installation"
            />
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="da-section da-who">
        <div className="da-container">
          <motion.h2 className="da-section-title" {...fadeInUp}>
            Who We Partner With
          </motion.h2>
          <div className="da-who-grid">
            <motion.div className="da-who-card" {...fadeInUp}>
              <div className="da-who-icon">📐</div>
              <h3>Interior Designers</h3>
              <p>
                Elevate residential and hospitality spaces with bespoke lighting
                that complements your design narrative
              </p>
            </motion.div>
            <motion.div
              className="da-who-card"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="da-who-icon">🏛️</div>
              <h3>Architects</h3>
              <p>
                Integrate architectural lighting solutions that enhance spatial
                experience and meet technical specifications
              </p>
            </motion.div>
            <motion.div
              className="da-who-card"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="da-who-icon">✨</div>
              <h3>Design Studios</h3>
              <p>
                Collaborate on concept-to-completion projects with a partner who
                understands design intent and execution
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="da-section da-what">
        <div className="da-container">
          <motion.div className="da-what-content" {...fadeInUp}>
            <h2 className="da-section-title">What We Create</h2>
            <div className="da-what-list">
              <div className="da-what-item">
                <span className="da-bullet">•</span>
                <div>
                  <h4>Custom Lamps & Fixtures</h4>
                  <p>
                    Handcrafted pieces tailored to your project's aesthetic and
                    functional requirements
                  </p>
                </div>
              </div>
              <div className="da-what-item">
                <span className="da-bullet">•</span>
                <div>
                  <h4>Material-Led Lighting</h4>
                  <p>
                    Exploring brass, copper, wood, glass, and sustainable
                    materials to create unique lighting experiences
                  </p>
                </div>
              </div>
              <div className="da-what-item">
                <span className="da-bullet">•</span>
                <div>
                  <h4>Project-Based Customization</h4>
                  <p>
                    From single statement pieces to complete lighting schemes
                    for residential, hospitality, and commercial spaces
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="da-what-image"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/SparklusLamps-Website/images/pastwork2.jpg"
              alt="Custom lighting design"
            />
          </motion.div>
        </div>
      </section>

      {/* Customisation Process */}
      <section className="da-section da-process">
        <div className="da-container">
          <motion.h2 className="da-section-title" {...fadeInUp}>
            Our Collaboration Process
          </motion.h2>
          <motion.p className="da-process-intro" {...fadeInUp}>
            A transparent, step-by-step approach from concept to installation
          </motion.p>
          <div className="da-process-steps">
            {[
              {
                num: "01",
                title: "Brief",
                desc: "Understanding your vision, space requirements, and design intent",
              },
              {
                num: "02",
                title: "Concept",
                desc: "Sketches, material exploration, and technical specifications",
              },
              {
                num: "03",
                title: "Sampling",
                desc: "Physical prototypes for your review and feedback",
              },
              {
                num: "04",
                title: "Production",
                desc: "Handcrafted execution with quality control at every stage",
              },
              {
                num: "05",
                title: "Delivery Support",
                desc: "Packaging, logistics, and installation guidance",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="da-process-step"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="da-step-number">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft, Materials & Origin */}
      <section className="da-section da-craft">
        <div className="da-container">
          <motion.div className="da-craft-content" {...fadeInUp}>
            <h2 className="da-section-title">Craft, Materials & Origin</h2>
            <div className="da-craft-pillars">
              <div className="da-pillar">
                <h4>Handmade Craftsmanship</h4>
                <p>
                  Every piece is shaped by skilled artisans, ensuring attention
                  to detail and character
                </p>
              </div>
              <div className="da-pillar">
                <h4>Sustainable Materials</h4>
                <p>
                  Responsibly sourced brass, copper, reclaimed wood, and
                  eco-conscious finishes
                </p>
              </div>
              <div className="da-pillar">
                <h4>Indian Manufacturing</h4>
                <p>
                  Export-ready quality standards, rooted in traditional
                  techniques and modern precision
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="da-craft-image"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/SparklusLamps-Website/images/pastwork3.jpg"
              alt="Craftsmanship detail"
            />
          </motion.div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="da-section da-projects">
        <div className="da-container">
          <motion.h2 className="da-section-title" {...fadeInUp}>
            Projects That Speak
          </motion.h2>
          <motion.p className="da-projects-intro" {...fadeInUp}>
            Real installations and high-quality renders showcasing our work
          </motion.p>
          <div className="da-projects-grid">
            {[
              { img: "pastwork1.jpg", caption: "Residential Villa, Gurgaon" },
              { img: "pastwork2.jpg", caption: "Boutique Hotel, Jaipur" },
              { img: "pastwork3.jpg", caption: "Commercial Office, Mumbai" },
              { img: "pastwork4.jpg", caption: "Restaurant Interior, Delhi" },
              { img: "pastwork5.jpg", caption: "Private Residence, Bangalore" },
              { img: "pastwork6.jpg", caption: "Hospitality Project, Goa" },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="da-project-card"
                {...fadeInUp}
                transition={{ delay: index * 0.05 }}
              >
                <img
                  src={`/SparklusLamps-Website/images/${project.img}`}
                  alt={project.caption}
                />
                <p className="da-project-caption">{project.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="da-section da-collab-cta">
        <div className="da-container">
          <motion.div className="da-collab-content" {...fadeInUp}>
            <h2>Let's Create Something Exceptional</h2>
            <p>
              Every great project begins with a conversation. Share your vision,
              and we'll craft the light to bring it to life.
            </p>
            <div className="da-collab-btns">
              <a href="#contact" className="da-btn da-btn-primary">
                Discuss Your Project
              </a>
              <a
                href="https://wa.me/919548218100"
                target="_blank"
                rel="noopener noreferrer"
                className="da-btn da-btn-secondary"
              >
                Book a Design Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Contact Capture */}
      <section className="da-section da-contact" id="contact">
        <div className="da-container">
          <motion.div className="da-contact-wrapper" {...fadeInUp}>
            <h2>Stay Connected</h2>
            <p>
              Leave your details and we'll reach out when you're ready to start
              your next project
            </p>
            <form onSubmit={handleSubmit} className="da-contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <button type="submit" className="da-btn da-btn-submit">
                Stay Connected
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Reinforcement */}
      <section className="da-footer-reinforcement">
        <div className="da-container">
          <div className="da-footer-content">
            <div className="da-footer-col">
              <h4>Handmade Excellence</h4>
              <p>Artisanal craftsmanship in every fixture</p>
            </div>
            <div className="da-footer-col">
              <h4>Sustainable Approach</h4>
              <p>Responsible materials and processes</p>
            </div>
            <div className="da-footer-col">
              <h4>Long-Term Partnership</h4>
              <p>Supporting your vision from concept to completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DesignersArchitects;
