import React from "react";
import { useNavigate } from "react-router-dom";
import "./PolicyPage.css";

const TermsOfService = () => {
  const navigate = useNavigate();
  return (
    <div className="policy-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: October 9, 2025</p>

        <section className="policy-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Sparklus Lamps website, you accept and
            agree to be bound by the terms and provisions of this agreement. If
            you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Products and Services</h2>
          <p>
            Sparklus Lamps offers luxury lighting products and custom lighting
            design services. All product descriptions, images, and
            specifications are provided for informational purposes and may be
            subject to change without notice.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Orders and Payments</h2>
          <ul>
            <li>All orders are subject to acceptance and availability</li>
            <li>Prices are subject to change without notice</li>
            <li>Payment must be received before order processing</li>
            <li>We accept major credit cards and wire transfers</li>
            <li>Custom orders may require a deposit</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Shipping and Delivery</h2>
          <p>
            Shipping times vary based on location and product availability.
            Custom pieces may take 8-12 weeks for completion. We are not
            responsible for delays caused by shipping carriers or customs.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Returns and Refunds</h2>
          <p>
            Standard products may be returned within 30 days of delivery in
            original condition. Custom-made products are non-refundable. Please
            refer to our Return Policy for detailed information.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Warranty</h2>
          <p>
            All products come with a 5-year warranty covering manufacturing
            defects and electrical components. The warranty does not cover
            damage from misuse, accidents, or normal wear and tear.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website, including images, text, logos, and
            designs, is the property of Sparklus Lamps and is protected by
            copyright laws. Unauthorized use is prohibited.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            Sparklus Lamps shall not be liable for any indirect, incidental,
            special, or consequential damages arising from the use of our
            products or services.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting to the website.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. Contact Information</h2>
          <p>
            For questions about these Terms of Service, contact us at:
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

export default TermsOfService;
