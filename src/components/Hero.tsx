"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative text-center py-36 px-6 overflow-hidden">

      {/* Grid background that fades out at edges */}
      <div
        className="absolute inset-0 pointer-events-none grid-bg"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 15%, black 60%, transparent 100%)",
        }}
      />

      {/* Animated Grid Wave — also faded */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-55"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
            linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 55%, transparent 100%)",
        }}
        animate={{
          backgroundPositionX: ["0px", "200px", "0px"],
          backgroundPositionY: ["0px", "100px", "0px"],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Glow Orb */}
      <motion.div
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[var(--primary)] opacity-[0.26] blur-[168px] rounded-full"
      />

      {/* Bottom fade overlay — dissolves into page bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        }}
      />

      {/* Top subtle fade (so navbar transition is smooth too) */}
      <div
        className="absolute top-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)",
        }}
      />

      {/* Content Layer */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold leading-tight"
        >
          Modern Websites That{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
            Convert
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          transition={{ duration: 0.8 }}
          className="mt-6 text-[var(--muted)] max-w-xl mx-auto"
        >
          Fast. Clean. Scalable. Designed to make your business stand out and grow.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={item}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="relative px-8 py-3 rounded-xl bg-[var(--primary)] text-black font-semibold overflow-hidden group"
          >
            <span className="relative z-10">Get a Website</span>
            <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-20 blur-xl transition"></div>
          </a>

          <a
            href="/labs"
            className="relative px-8 py-3 rounded-xl border border-red-500/40 text-red-400 font-semibold overflow-hidden group hover:border-red-400 transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-red-300 transition-colors">Explore AI Labs</span>
            <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-10 blur-xl transition"></div>
          </a>
        </motion.div>
      </motion.div>

    </section>
  );
}
