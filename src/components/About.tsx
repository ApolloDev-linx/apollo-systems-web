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

export default function About() {
  return (
    <section className="py-20 px-6 text-center max-w-2xl mx-auto">

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
          About
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-[var(--muted)]"
        >
          I build modern, high-performance websites designed to help businesses grow.
          My focus is clean design, fast performance, and real-world usability.
        </motion.p>

      </motion.div>

    </section>
  );
}
