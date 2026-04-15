"use client";
import { motion, type Variants } from "framer-motion";
const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background breathing glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--primary)] rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-80px" }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        {/* CTA Card */}
        <motion.div
          variants={blurUp}
          className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-10 sm:p-14 text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            Ready to stop losing{" "}
            <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
              customers to a bad website?
            </span>
          </h2>
          {/* Description */}
          <p className="text-[var(--muted)] leading-relaxed mb-8 max-w-lg mx-auto">
            Book a free 15-minute call. We&apos;ll review your current site,
            identify what&apos;s costing you leads, and map out exactly how to
            fix it.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--primary)] text-black font-semibold text-base overflow-hidden group"
            >
              <span className="relative z-10">Book Your Free Call</span>
              <svg
                className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              {/* Glow hover effect */}
              <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="/labs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-red-500/40 text-red-400 font-semibold text-base overflow-hidden group hover:border-red-400 transition-colors duration-300"
            >
              <span className="relative z-10 group-hover:text-red-300 transition-colors">View AI Projects</span>
              <svg
                className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
            </motion.a>
          </div>
          {/* Reassurance text */}
          <p className="text-[var(--muted)]/60 text-sm mt-6">
            No commitment. No pressure. Just clarity.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
