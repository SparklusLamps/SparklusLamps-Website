import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { emailJSConfig } from "../../constants";
import { FaPaperPlane } from "react-icons/fa";
import "./CustomizationForm.css";

const CustomizationForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCountry: "+91",
    phoneNumber: "",
    city: "",
    serviceType: "home",
    fixtures: [],
    dimensions: "",
    customNeed: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFixture = (fixture) => {
    setFormData((prev) => {
      const set = new Set(prev.fixtures || []);
      if (set.has(fixture)) set.delete(fixture);
      else set.add(fixture);
      return { ...prev, fixtures: Array.from(set) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    try {
      // Ensure EmailJS is initialized (some SDKs require init)
      if (emailjs && typeof emailjs.init === "function") {
        try {
          emailjs.init(emailJSConfig.publicKey);
        } catch (initErr) {
          // init may already have been called elsewhere; ignore
        }
      }

      // Clean up template params
      // prepare fixtures as comma-separated string
      const fixturesList = (formData.fixtures || []).join(", ");

      const templateParams = {
        from_name: (formData.name || "").trim(),
        from_email: (formData.email || "").trim(),
        phone_country: (formData.phoneCountry || "").trim(),
        phone_number: (formData.phoneNumber || "").trim(),
        city: (formData.city || "").trim(),
        service_type: (formData.serviceType || "").trim(),
        fixtures: fixturesList,
        dimensions: (formData.dimensions || "").trim(),
        message: (formData.customNeed || "").trim(),
      };

      // EmailJS send
      console.log("EmailJS: sending", templateParams);
      const sendResult = await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        templateParams,
        emailJSConfig.publicKey
      );
      console.log("EmailJS send result:", sendResult);

      setStatus({
        loading: false,
        message:
          "Your customization request has been sent successfully! We will contact you soon.",
        type: "success",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phoneCountry: "+91",
        phoneNumber: "",
        city: "",
        serviceType: "home",
        fixtures: [],
        dimensions: "",
        customNeed: "",
      });
    } catch (error) {
      // log full error for debugging, but show only generic message to the user
      console.error("EmailJS send error:", error);
      setStatus({
        loading: false,
        message:
          "Failed to send your request. Please try again or contact us directly.",
        type: "error",
      });
      // Also clear the form on failure per user request
      setFormData({
        name: "",
        email: "",
        phoneCountry: "+91",
        phoneNumber: "",
        city: "",
        serviceType: "home",
        fixtures: [],
        dimensions: "",
        customNeed: "",
      });
    }

    // Clear message after 5 seconds (store timeout ref so we can clear on unmount)
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setStatus({ loading: false, message: "", type: "" });
    }, 5000);
  };

  // Initialize EmailJS once on mount (defensive)
  useEffect(() => {
    if (emailjs && typeof emailjs.init === "function") {
      try {
        emailjs.init(emailJSConfig.publicKey);
      } catch (err) {
        // ignore if already initialized
      }
    }

    return () => {
      // cleanup any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // ref to hold timeout id
  const timeoutRef = useRef(null);

  return (
    <section className="section customization-form-section">
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Need Customization?</h2>
          <p className="section-subtitle">
            Tell us about your unique lighting needs and let us create something
            extraordinary for you
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="form-container"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="customization-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                  disabled={status.loading}
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group phone-group">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number *
                </label>
                <div className="phone-row">
                  <select
                    name="phoneCountry"
                    value={formData.phoneCountry}
                    onChange={handleChange}
                    disabled={status.loading}
                    className="phone-select"
                    aria-label="Country code"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+49">🇩🇪 +49</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="form-input phone-input"
                    required
                    disabled={status.loading}
                    placeholder="8012345678"
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                  disabled={status.loading}
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Mumbai"
                  disabled={status.loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="serviceType" className="form-label">
                  Type of Service Required
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="form-input"
                  disabled={status.loading}
                >
                  <option value="home">Home</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                  <option value="office">Office</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Type of Fixture Required</label>
                <div className="fixtures-grid">
                  {["pendant", "floor", "table", "wall", "custom idea"].map(
                    (f) => (
                      <label key={f} className="fixture-item">
                        <input
                          type="checkbox"
                          name="fixtures"
                          value={f}
                          checked={(formData.fixtures || []).includes(f)}
                          onChange={() => toggleFixture(f)}
                          disabled={status.loading}
                        />
                        <span className="fixture-label">{f}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dimensions" className="form-label">
                Size / Dimensions (optional)
              </label>
              <input
                type="text"
                id="dimensions"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., 120cm x 40cm x 30cm"
                disabled={status.loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="customNeed" className="form-label">
                Describe Your Custom Need (optional)
              </label>
              <textarea
                id="customNeed"
                name="customNeed"
                value={formData.customNeed}
                onChange={handleChange}
                className="form-textarea"
                disabled={status.loading}
                rows="6"
                placeholder="Tell us about your project, space dimensions, design preferences, and any specific requirements..."
              />
            </div>

            {/* status message removed from inline form; toast appears in top-right */}

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status.loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {status.loading ? (
                "Sending..."
              ) : (
                <>
                  <span>Send Request</span>
                  {/* <FaPaperPlane /> */}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
        {/* Toast - top-right */}
        <AnimatePresence>
          {status.message && (
            <motion.div
              className={`toast ${status.type}`}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              role="status"
            >
              <div className="toast-inner">
                <div className="toast-header">
                  <span className="toast-brand">Sparklus Lamps</span>
                  <span className={`toast-status ${status.type}`}>
                    {status.type === "success" ? "Success" : "Error"}
                  </span>
                </div>
                <div className="toast-body">
                  <p>{status.message}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CustomizationForm;
