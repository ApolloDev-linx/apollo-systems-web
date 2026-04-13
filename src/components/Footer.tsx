"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Animated gradient divider line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="h-[1px] max-w-md mx-auto mb-8 origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--primary), var(--accent), var(--primary), transparent)",
        }}
      />

      {/* Pulsing glow behind the divider */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleX: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-8 bg-[var(--primary)] blur-[40px] rounded-full pointer-events-none"
      />

      {/* Footer content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="text-center relative z-10"
      >
        <motion.p
          className="text-[var(--muted)] text-sm"
          whileHover={{ color: "var(--accent)" }}
          transition={{ duration: 0.3 }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--primary)] font-medium">
            Apollo Systems
          </span>
        </motion.p>

        {/* Subtle tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: false }}
          className="text-[var(--muted)]/50 text-xs mt-2 tracking-widest uppercase"
        >
          Built Different
        </motion.p>
      </motion.div>
    </footer>
  );
}
