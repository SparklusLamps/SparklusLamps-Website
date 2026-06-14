import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { FaWhatsapp, FaCloudUploadAlt } from "react-icons/fa";
import {
  emailJSConfig,
  collaborationForm,
  contactForm,
} from "../../constants";
import "./CustomizationForm.css";

const CustomizationForm = ({ embedded = false, variant = "collaboration" }) => {
  const isContact = variant === "contact";
  const formConfig = isContact ? contactForm : collaborationForm;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const {
    title,
    fields,
    projectTypes,
    submitText,
    uploadLabel = "",
    uploadHint = "",
    whatsappNumber = "",
    whatsappMessage = "",
    quantityOptions = [],
    bestTimeOptions = [],
  } = formConfig;

  const [formData, setFormData] = useState(
    isContact
      ? {
          name: "",
          city: "",
          email: "",
          phone: "",
          projectType: "",
          bestTimeToCall: "",
          message: "",
        }
      : {
          name: "",
          studioName: "",
          projectType: "",
          projectLocation: "",
          estimatedQuantity: "",
          timeline: "",
        }
  );

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const timeoutRef = useRef(null);

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

  const handleFiles = (files) => {
    const fileList = Array.from(files || []);
    if (!fileList.length) return;
    setSelectedFiles((prev) => [...prev, ...fileList].slice(0, 5));
  };

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
    e.target.value = "";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const resetForm = () => {
    if (isContact) {
      setFormData({
        name: "",
        city: "",
        email: "",
        phone: "",
        projectType: "",
        bestTimeToCall: "",
        message: "",
      });
    } else {
      setFormData({
        name: "",
        studioName: "",
        projectType: "",
        projectLocation: "",
        estimatedQuantity: "",
        timeline: "",
      });
      setSelectedFiles([]);
    }
  };

  const buildWhatsAppLink = () => {
    const text = isContact
      ? [
          "Hi Sparklus Lamps, I'd like to discuss my project:",
          `Name: ${formData.name}`,
          `City: ${formData.city}`,
          `Email: ${formData.email}`,
          `Phone: ${formData.phone}`,
          `Project Type: ${formData.projectType}`,
          `Best Time to Call: ${formData.bestTimeToCall}`,
          `Message: ${formData.message}`,
        ]
      : [
          whatsappMessage,
          `Name: ${formData.name}`,
          `Studio: ${formData.studioName}`,
          `Project Type: ${formData.projectType}`,
          `Location: ${formData.projectLocation}`,
          `Quantity: ${formData.estimatedQuantity}`,
          `Timeline: ${formData.timeline}`,
          selectedFiles.length
            ? `Files: ${selectedFiles.map((f) => f.name).join(", ")}`
            : "",
        ];

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text.filter(Boolean).join("\n")
    )}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", type: "" });

    const fileNames = selectedFiles.map((f) => f.name).join(", ");

    try {
      if (emailjs && typeof emailjs.init === "function") {
        try {
          emailjs.init(emailJSConfig.publicKey);
        } catch {
          /* already initialized */
        }
      }

      const templateParams = isContact
        ? {
            from_name: (formData.name || "").trim(),
            from_email: (formData.email || "").trim(),
            phone_number: (formData.phone || "").trim(),
            city: (formData.city || "").trim(),
            project_type: (formData.projectType || "").trim(),
            best_time_to_call: (formData.bestTimeToCall || "").trim(),
            message: (formData.message || "").trim(),
          }
        : {
            from_name: (formData.name || "").trim(),
            from_email: "",
            phone_country: "",
            phone_number: "",
            city: (formData.projectLocation || "").trim(),
            service_type: (formData.projectType || "").trim(),
            fixtures: (formData.studioName || "").trim(),
            dimensions: `Qty: ${(formData.estimatedQuantity || "").trim()}`,
            message: [
              `Studio: ${(formData.studioName || "").trim()}`,
              `Project Type: ${(formData.projectType || "").trim()}`,
              `Location: ${(formData.projectLocation || "").trim()}`,
              `Estimated Quantity: ${(formData.estimatedQuantity || "").trim()}`,
              `Timeline: ${(formData.timeline || "").trim()}`,
              fileNames ? `Mood Board Files: ${fileNames}` : "",
            ]
              .filter(Boolean)
              .join("\n"),
          };

      await emailjs.send(
        emailJSConfig.serviceID,
        emailJSConfig.templateID,
        templateParams,
        emailJSConfig.publicKey
      );

      setStatus({
        loading: false,
        message: isContact
          ? "Your enquiry has been sent successfully! We will contact you soon."
          : "Your project details have been sent successfully! We will contact you soon.",
        type: "success",
      });

      resetForm();

      if (!isContact) {
        window.open(buildWhatsAppLink(), "_blank", "noopener,noreferrer");
      }
    } catch (error) {
      console.error("EmailJS send error:", error);
      setStatus({
        loading: false,
        message:
          "Failed to send your request. Please try again or contact us directly.",
        type: "error",
      });
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setStatus({ loading: false, message: "", type: "" });
    }, 5000);
  };

  useEffect(() => {
    if (emailjs && typeof emailjs.init === "function") {
      try {
        emailjs.init(emailJSConfig.publicKey);
      } catch {
        /* ignore */
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const collaborationFields = (
    <>
      <div className="collab-form-row">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.name}
          required
          disabled={status.loading}
        />
        <input
          type="text"
          name="studioName"
          value={formData.studioName}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.studioName}
          disabled={status.loading}
        />
      </div>

      <div className="collab-form-row">
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="collab-input collab-select"
          required
          disabled={status.loading}
        >
          <option value="" disabled>
            {fields.projectType}
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="projectLocation"
          value={formData.projectLocation}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.projectLocation}
          disabled={status.loading}
        />
      </div>

      <div className="collab-form-row">
        <input
          type="text"
          name="estimatedQuantity"
          value={formData.estimatedQuantity}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.estimatedQuantity}
          disabled={status.loading}
        />
        <input
          type="text"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.timeline}
          disabled={status.loading}
        />
      </div>

      <div
        className={`collab-upload ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*,.pdf"
          onChange={handleFileChange}
          className="collab-file-input"
          disabled={status.loading}
        />
        <FaCloudUploadAlt className="upload-icon" />
        <p className="upload-label">{uploadLabel}</p>
        <p className="upload-hint">{uploadHint}</p>
        {selectedFiles.length > 0 && (
          <p className="upload-files">
            {selectedFiles.map((f) => f.name).join(", ")}
          </p>
        )}
      </div>
    </>
  );

  const contactFields = (
    <>
      <div className="collab-form-row">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.name}
          required
          disabled={status.loading}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.email}
          required
          disabled={status.loading}
        />
      </div>

      <div className="collab-form-row">
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.phone}
          disabled={status.loading}
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="collab-input"
          placeholder={fields.city}
          disabled={status.loading}
        />
      </div>

      <div className="collab-form-row">
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          className="collab-input collab-select"
          required
          disabled={status.loading}
        >
          <option value="" disabled>
            {fields.projectType}
          </option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          name="bestTimeToCall"
          value={formData.bestTimeToCall}
          onChange={handleChange}
          className="collab-input collab-select"
          disabled={status.loading}
        >
          <option value="" disabled>
            {fields.bestTimeToCall}
          </option>
          {bestTimeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="collab-input collab-textarea"
        placeholder={fields.message}
        rows={5}
        disabled={status.loading}
      />
    </>
  );

  const formContent = (
    <>
      {isContact ? (
        <div className="section-title contact-column-title">
          <h2>{title}</h2>
        </div>
      ) : (
        <h3 className="hub-column-title">{title}</h3>
      )}

      {isContact ? (
        <form onSubmit={handleSubmit} className="collaboration-form contact-enquiry-form-fields">
          {contactFields}

          <button
            type="submit"
            className="collab-submit-btn contact-submit-btn"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : submitText}
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="collaboration-form">
          {collaborationFields}

          <button
            type="submit"
            className="collab-submit-btn"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : submitText}
            <FaWhatsapp />
          </button>
        </form>
      )}
    </>
  );

  const toast = (
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
  );

  if (embedded) {
    return (
      <div className="hub-column collaboration-form-column">
        {formContent}
        {toast}
      </div>
    );
  }

  if (isContact) {
    return (
      <div className="contact-form-panel">
        {formContent}
        {toast}
      </div>
    );
  }

  return (
    <section className="section customization-form-section">
      <div className="container">
        <motion.div
          ref={ref}
          className="form-container standalone-form"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hub-column collaboration-form-column standalone">
            {formContent}
          </div>
        </motion.div>
        {toast}
      </div>
    </section>
  );
};

export default CustomizationForm;
