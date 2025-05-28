import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">ارتباط با</h2>
      <h2 className="contact-sub-title">دکتر آجودان‌زاده</h2>
      <p className="contact-text">
      آدرس دفاتر مردمی :
      </p>
      <div className="contact-cta">
        <Button link="#" text="گوگل مپ"  />
      </div>
    </motion.div>
  );
}

export default Contact;
