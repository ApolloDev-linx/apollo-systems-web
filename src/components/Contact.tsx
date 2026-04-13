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

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
        className="max-w-2xl mx-auto"
      >
        {/* Card */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Ambient Glow Behind Card */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--accent)]/20 blur-2xl opacity-60 pointer-events-none" />

          {/* Floating Orbs */}
          <motion.div
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 15, 0],
              scale: [1, 1.3, 0.9, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-12 w-32 h-32 bg-[var(--primary)] opacity-15 blur-[80px] rounded-full pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -20, 30, 0],
              y: [0, 20, -15, 0],
              scale: [1, 0.8, 1.2, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 left-8 w-40 h-40 bg-[var(--accent)] opacity-10 blur-[90px] rounded-full pointer-events-none"
          />

          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-8 py-20 text-center">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
            >
              Ready to stop losing{" "}
              <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
                customers to a bad website?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              viewport={{ once: false }}
              className="text-[var(--muted)] text-base leading-relaxed max-w-md mx-auto mb-10"
            >
              Book a free 15-minute call. We&apos;ll review your current site, identify
              what&apos;s costing you leads, and map out exactly how to fix it.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              viewport={{ once: false }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[var(--accent)] text-black font-semibold text-base overflow-hidden group"
              >
                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10">Book Your Free Call</span>
                <motion.span
                  className="relative z-10 text-lg"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Reassurance */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              viewport={{ once: false }}
              className="text-[var(--muted)] text-sm mt-6"
            >
              No commitment. No pressure. Just clarity.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
