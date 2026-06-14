import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DesignerTestimonials from "../DesignerTestimonials/DesignerTestimonials";
import "./CollaborationHub.css";

const CollaborationHub = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="collaboration-hub-section testimonials-only" id="collaborate">
      <div className="container">
        <motion.div
          ref={ref}
          className="collaboration-hub-grid collaboration-hub-grid--full"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <DesignerTestimonials />
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationHub;
