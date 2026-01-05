import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PastWorks from "../components/PastWorks/PastWorks";
import "./DesignersArchitects.css";

const DesignersArchitects = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/SparklusLamps-Website/images/pastwork1.jpg",
    "/SparklusLamps-Website/images/pastwork2.jpg",
    "/SparklusLamps-Website/images/pastwork3.jpg",
  ];

  // Image crossfade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your interest. We'll be in touch soon!");
    setFormData({ name: "", email: "", phone: "" });
  };

  const handleEmailPopupSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", emailInput);
    alert("Thank you! We'll keep you updated on our upcoming projects.");
    setEmailInput("");
    setShowEmailPopup(false);
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
            <AnimatePresence mode="wait">
              {heroImages.map((img, index) =>
                index === currentImageIndex ? (
                  <motion.img
                    key={img}
                    src={img}
                    alt="Custom lighting installation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="da-hero-crossfade-img"
                  />
                ) : null
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Featured Projects */}
      <section className="da-section da-featured-projects">
        <div className="da-container-full">
          <motion.div {...fadeInUp} className="da-featured-header">
            <h2 className="da-section-title">Featured Projects</h2>
            <p className="da-featured-subtext">
              Real installations showcasing our custom lighting solutions
            </p>
          </motion.div>
          <PastWorks />
          <motion.div {...fadeInUp} className="da-cta-center">
            <button
              onClick={() => setShowEmailPopup(true)}
              className="da-btn da-btn-primary"
            >
              Know More About Upcoming Projects
            </button>
          </motion.div>
        </div>
      </section>

      {/* Email Popup Modal */}
      <AnimatePresence>
        {showEmailPopup && (
          <motion.div
            className="da-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEmailPopup(false)}
          >
            <motion.div
              className="da-popup-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="da-popup-close"
                onClick={() => setShowEmailPopup(false)}
              >
                ×
              </button>
              <h3>Stay Updated on Our Projects</h3>
              <p>Enter your email to receive updates on upcoming projects</p>
              <form onSubmit={handleEmailPopupSubmit}>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                />
                <button type="submit" className="da-btn da-btn-submit">
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section 3: Our Process - Timeline */}
      <section className="da-section da-process">
        <div className="da-container">
          <motion.h2 className="da-section-title" {...fadeInUp}>
            Our Process
          </motion.h2>
          <motion.p className="da-process-intro" {...fadeInUp}>
            A transparent, step-by-step approach from concept to installation
          </motion.p>
          <div className="da-timeline">
            {[
              {
                title: "Consultation & Brief",
                bullets: [
                  "Understanding your vision and project requirements",
                  "Site assessment and space analysis",
                  "Budget discussion and timeline planning",
                ],
              },
              {
                title: "Concept & Design Options",
                bullets: [
                  "Multiple design concepts tailored to your aesthetic",
                  "3D renders and technical drawings",
                  "Lighting calculations and specifications",
                ],
              },
              {
                title: "Material Selection",
                bullets: [
                  "Curated material palette presentation",
                  "Sustainable and premium material options",
                  "Finish samples for your approval",
                ],
              },
              {
                title: "Sampling",
                bullets: [
                  "Physical prototypes for evaluation",
                  "Iterative refinements based on feedback",
                  "Final approval before production",
                ],
              },
              {
                title: "Craftsmanship (Artisans at Work)",
                bullets: [
                  "Handcrafted by skilled artisans",
                  "Quality control at every stage",
                  "Progress updates and documentation",
                ],
              },
              {
                title: "Delivery & Installation",
                bullets: [
                  "Secure packaging and logistics",
                  "Installation guidance and support",
                  "Post-installation service and warranty",
                ],
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="da-timeline-item"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="da-timeline-marker">
                  <div className="da-timeline-dot"></div>
                  {index < 5 && <div className="da-timeline-line"></div>}
                </div>
                <div className="da-timeline-content">
                  <h4>{step.title}</h4>
                  <ul>
                    {step.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="da-cta-center">
            <a href="#contact" className="da-btn da-btn-primary">
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Who We Partner With */}
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

      {/* Section 5: Artisans & Craftsmanship Gallery */}
      <section className="da-section da-artisans">
        <div className="da-container">
          <motion.h2 className="da-section-title" {...fadeInUp}>
            Artisans & Craftsmanship Gallery
          </motion.h2>
          <motion.p className="da-artisans-intro" {...fadeInUp}>
            Witness the dedication and skill behind every piece
          </motion.p>
          <div className="da-artisans-grid">
            {[
              { img: "pastwork4.jpg", caption: "Hand-forging brass fixtures" },
              { img: "pastwork5.jpg", caption: "Precision assembly" },
              { img: "pastwork6.jpg", caption: "Quality finishing touches" },
              { img: "pastwork1.jpg", caption: "Material preparation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="da-artisan-card"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={`/SparklusLamps-Website/images/${item.img}`}
                  alt={item.caption}
                />
                <p>{item.caption}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="da-cta-center">
            <a
              href="https://wa.me/919548218100?text=I'd%20like%20to%20see%20how%20it's%20made"
              target="_blank"
              rel="noopener noreferrer"
              className="da-btn da-btn-primary"
            >
              See Artisans at Work
            </a>
          </motion.div>
        </div>
      </section>

      {/* Materials & Technical Specs Subsection */}
      <section className="da-section da-materials">
        <div className="da-container">
          <motion.h2 className="da-section-title" {...fadeInUp}>
            Materials & Technical Specs
          </motion.h2>
          <div className="da-materials-grid">
            <motion.div className="da-material-card" {...fadeInUp}>
              <h4>Premium Metals</h4>
              <p>
                Brass, copper, bronze, and stainless steel with various finishes
              </p>
            </motion.div>
            <motion.div
              className="da-material-card"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h4>Natural Materials</h4>
              <p>Reclaimed wood, bamboo, stone, and eco-friendly composites</p>
            </motion.div>
            <motion.div
              className="da-material-card"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <h4>Glass & Acrylics</h4>
              <p>Hand-blown glass, frosted panels, and custom acrylic shapes</p>
            </motion.div>
            <motion.div
              className="da-material-card"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <h4>Technical Specifications</h4>
              <p>
                IP ratings, LED compatibility, dimming options, and
                certifications
              </p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} className="da-cta-center">
            <a
              href="https://wa.me/919548218100?text=I'd%20like%20to%20view%20material%20options"
              target="_blank"
              rel="noopener noreferrer"
              className="da-btn da-btn-secondary"
            >
              View Material Options
            </a>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Keep as is */}
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

      {/* Craft, Materials & Origin - Keep as is */}
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

      {/* Past Projects - Remove this old section */}

      {/* Section 6: Let's Create Something Exceptional with Quality Assurance */}
      <section className="da-section da-collab-cta">
        <div className="da-container">
          <motion.div className="da-collab-content" {...fadeInUp}>
            <h2>Let's Create Something Exceptional</h2>
            <p>
              Every great project begins with a conversation. Share your vision,
              and we'll craft the light to bring it to life.
            </p>
            <div className="da-quality-assurance">
              <h3>Quality Assurance</h3>
              <p>
                Every fixture undergoes rigorous quality checks, material
                verification, and performance testing before delivery. We stand
                behind our craftsmanship with comprehensive warranties and
                post-installation support.
              </p>
            </div>
            <div className="da-collab-btns">
              <a
                href="https://wa.me/919548218100?text=I'd%20like%20to%20understand%20your%20quality%20standards"
                target="_blank"
                rel="noopener noreferrer"
                className="da-btn da-btn-primary"
              >
                Understand Our Quality Standards
              </a>
              <a href="#contact" className="da-btn da-btn-secondary">
                Discuss Your Project
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Contact Capture - Keep as is */}
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

      {/* Footer Reinforcement - Keep as is */}
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
