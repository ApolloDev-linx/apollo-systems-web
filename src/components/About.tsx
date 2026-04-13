"use client";

import { motion, type Variants } from "framer-motion";

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const bullets = [
  "No bloated agencies — you work directly with the person building your site",
  "Obsessed with speed, clean code, and user experience",
  "Every site is custom — zero templates, zero cookie-cutter layouts",
  "Built to perform on every device, every browser",
];

export default function About() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--primary)] mb-3"
        >
          Why Apollo
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
        >
          Built different.{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
            On purpose.
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: false }}
          className="text-[var(--muted)] leading-relaxed text-base sm:text-lg mb-10"
        >
          I&apos;m not a massive agency. I&apos;m a developer who builds high-performance
          websites for businesses that want real results — not a logo carousel and
          a contact form.
        </motion.p>

        {/* Bullet Points */}
        <div className="space-y-5 mb-12">
          {bullets.map((bullet, i) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              viewport={{ once: false }}
              className="flex items-start gap-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[var(--primary)] shrink-0 mt-0.5"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                {bullet}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: false }}
          className="relative rounded-2xl trace-card-glow"
        >
          {/* Trace Border */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <rect
              x="1.5"
              y="1.5"
              width="97"
              height="97"
              rx="10"
              ry="10"
              pathLength="100"
              className="trace-path"
            />
          </svg>

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-8">
            <span className="text-3xl sm:text-4xl font-bold text-[var(--primary)]">
              10+
            </span>
            <p className="text-[var(--muted)] text-sm mt-1">
              Projects delivered
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
