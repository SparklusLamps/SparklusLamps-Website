import React from "react";
import { useNavigate } from "react-router-dom";
import "./PolicyPage.css";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="policy-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: October 9, 2025</p>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p>
            At Sparklus Lamps, we collect information that you provide directly
            to us when you:
          </p>
          <ul>
            <li>Fill out our customization form</li>
            <li>Make purchases on our website</li>
            <li>Contact us for customer support</li>
            <li>Subscribe to our newsletter</li>
          </ul>
          <p>
            This information may include your name, email address, phone number,
            company name, and any other details you choose to provide.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your orders and deliver products</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates about your orders</li>
            <li>Improve our products and services</li>
            <li>Send marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent, except as
            required by law or as necessary to provide our services (e.g.,
            shipping partners, payment processors).
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze site
            traffic, and personalize content. You can control cookie settings
            through your browser preferences.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
            <br />
            <strong>Email:</strong> info@sparkluslamps.com
            <br />
            <strong>Phone:</strong> +1 (555) 123-4567
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
