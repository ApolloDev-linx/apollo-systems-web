"use client";

import { motion, type Variants } from "framer-motion";

const sectionVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl font-semibold mb-6"
        >
          Let’s Work Together
        </motion.h2>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false }}
        >
          <a
            href="#contact"
            className="relative px-6 py-3 rounded-lg border border-[var(--primary)] overflow-hidden group"
          >
            <span className="relative z-10">
              Book a Call
            </span>

            {/* Glow hover layer */}
            <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* Text color overlay */}
            <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition">
              Book a Call
            </span>
          </a>
        </motion.div>

      </motion.div>

    </section>
  );
}
