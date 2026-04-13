"use client";

import { motion, type Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const blurUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const checkItems = [
  "No bloated agencies — you work directly with the person building your site",
  "Obsessed with speed, clean code, and user experience",
  "Every site is custom — zero templates, zero cookie-cutter layouts",
  "Built to perform on every device, every browser",
];

export default function About() {
  return (
    <section className="relative py-24 px-6 max-w-3xl mx-auto overflow-hidden">
      {/* Floating accent orb */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 15, -15, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-48 h-48 bg-[var(--accent)] rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-80px" }}
        className="relative z-10"
      >
        {/* Subtitle */}
        <motion.p
          variants={blurUp}
          className="text-[var(--primary)] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Why Apollo
        </motion.p>

        {/* Title */}
        <motion.h2
          variants={blurUp}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Built different.{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
            On purpose.
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          variants={blurUp}
          className="text-[var(--muted)] leading-relaxed mb-10"
        >
          I&apos;m not a massive agency. I&apos;m a developer who builds
          high-performance websites for businesses that want real results — not a
          logo carousel and a contact form.
        </motion.p>

        {/* Checkmark List */}
        <div className="space-y-5 mb-12">
          {checkItems.map((item, i) => (
            <motion.div
              key={i}
              variants={blurUp}
              className="flex items-start gap-3"
            >
              {/* Cyan check circle icon */}
              <svg
                className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--primary)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-[var(--muted)] text-sm leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats Card */}
        <motion.div
          variants={blurUp}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Trace glow border */}
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
              rx="8"
              ry="8"
              pathLength="100"
              className="trace-path"
            />
          </svg>

          <div className="relative p-8 rounded-2xl bg-[var(--bg)] backdrop-blur-md">
            <span className="text-3xl font-bold text-[var(--primary)]">
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
