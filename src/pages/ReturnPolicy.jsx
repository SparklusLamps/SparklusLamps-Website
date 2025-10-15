import React from "react";
import { useNavigate } from "react-router-dom";
import "./PolicyPage.css";

const ReturnPolicy = () => {
  const navigate = useNavigate();
  return (
    <div className="policy-page">
      <div className="container">
        <button className="back-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
        <h1>Return Policy</h1>
        <p className="last-updated">Last Updated: October 9, 2025</p>

        <section className="policy-section">
          <h2>1. Returns and Exchanges</h2>
          <p>
            At Sparklus Lamps, we want you to be completely satisfied with your
            purchase. If for any reason you are not happy with your luxury
            lighting product, we offer a comprehensive return and exchange
            policy.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Eligibility for Returns</h2>
          <p>You may return items within 30 days of delivery if:</p>
          <ul>
            <li>The item is in its original condition and packaging</li>
            <li>All tags, labels, and accessories are intact</li>
            <li>The item has not been used or installed</li>
            <li>You have your proof of purchase</li>
          </ul>
          <p>
            Custom-made or personalized items are not eligible for return unless
            they arrive damaged or defective.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. Return Process</h2>
          <p>To initiate a return:</p>
          <ol>
            <li>
              Contact our customer service team within 30 days of delivery
            </li>
            <li>Provide your order number and reason for return</li>
            <li>Receive a return authorization number</li>
            <li>Pack the item securely in its original packaging</li>
            <li>Ship the item to the address provided by our team</li>
          </ol>
          <p>
            Please note that you are responsible for return shipping costs
            unless the item is defective or we made an error in your order.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Refunds and Exchanges</h2>
          <p>
            Once we receive and inspect your returned item, we will process your
            refund or exchange within 5-7 business days. Refunds will be issued
            to your original payment method. For exchanges, we will ship the
            replacement item at no additional cost.
          </p>
          <p>
            Please allow additional time for your bank or credit card company to
            process the refund.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Damaged or Defective Items</h2>
          <p>
            If your item arrives damaged or defective, please contact us
            immediately with photos of the damage. We will arrange for a
            replacement or full refund at no cost to you, including return
            shipping.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Non-Returnable Items</h2>
          <p>The following items cannot be returned:</p>
          <ul>
            <li>Custom-designed or made-to-order products</li>
            <li>Items that have been used, installed, or altered</li>
            <li>Items without original packaging or documentation</li>
            <li>Gift items that have been opened</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our return policy or need to
            initiate a return, please contact us:
            <br />
            <strong>Email:</strong> returns@sparkluslamps.com
            <br />
            <strong>Phone:</strong> +1 (555) 123-4567
            <br />
            <strong>Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;
