"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const projects = [
  {
    name: "VERITY",
    tagline: "AI Behavioral Analysis",
    description:
      "A lie-detector and interrogation simulator powered by behavioral AI. Analyzes micro-expressions, speech patterns, and response timing to evaluate truthfulness in real time.",
    link: "https://lie-detector-chi.vercel.app/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    name: "Pattern Breaker",
    tagline: "Predictive Intelligence",
    description:
      "A lightweight model that learns your behavior in real time and predicts your next move. Designed to demonstrate how quickly AI can map human decision patterns.",
    link: "https://apollo-cortex.vercel.app/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a3.187 3.187 0 01-2.282.886L12 17.856m-7-3.356l2.47 2.47a3.187 3.187 0 002.282.886L12 17.856m0 0v3.394"
        />
      </svg>
    ),
  },
];

export default function LabsPage() {
  return (
    <main
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "#FAFAFA",
        color: "#1a1a1a",
      }}
    >
      {/* Light dot grid — opposite of dark grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Red glow orb — opposite of blue */}
      <motion.div
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -40, 40, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-4 border-b border-black/8">
        <Link
          href="/"
          className="text-xl font-semibold"
          style={{ color: "#EF4444" }}
        >
          Apollo Systems
        </Link>

        <Link
          href="/"
          className="text-sm hover:opacity-70 transition-opacity"
          style={{ color: "#6b7280" }}
        >
          &larr; Back to Home
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 text-center pt-24 pb-16 px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} transition={{ duration: 0.7 }}>
            <span
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border mb-8"
              style={{
                color: "#EF4444",
                borderColor: "rgba(239,68,68,0.3)",
                background: "rgba(239,68,68,0.05)",
              }}
            >
              Experimental
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl font-bold leading-tight"
            style={{ color: "#111" }}
          >
            AI{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #EF4444, #F97316)",
              }}
            >
              Experiments
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            transition={{ duration: 0.7 }}
            className="mt-5 max-w-lg mx-auto text-base"
            style={{ color: "#6b7280" }}
          >
            Live web apps exploring behavioral AI, pattern recognition,
            and predictive intelligence. Built by Apollo Systems.
          </motion.p>
        </motion.div>
      </section>

      {/* Project Cards */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group block rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                borderColor: "rgba(0,0,0,0.08)",
              }}
              whileHover={{
                borderColor: "rgba(239,68,68,0.3)",
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  color: "#EF4444",
                }}
              >
                {project.icon}
              </div>

              {/* Name + Tagline */}
              <h3
                className="text-xl font-bold group-hover:text-red-500 transition-colors duration-300"
                style={{ color: "#111" }}
              >
                {project.name}
              </h3>
              <p
                className="text-xs font-semibold tracking-widest uppercase mt-1"
                style={{ color: "#EF4444" }}
              >
                {project.tagline}
              </p>

              {/* Description */}
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "#6b7280" }}
              >
                {project.description}
              </p>

              {/* Launch CTA */}
              <div
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                style={{ color: "#EF4444" }}
              >
                Launch App
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className="relative z-10 text-center py-6 text-sm border-t"
        style={{
          color: "#9ca3af",
          borderColor: "rgba(0,0,0,0.06)",
        }}
      >
        &copy; {new Date().getFullYear()} Apollo Systems &middot; Labs Division
      </footer>
    </main>
  );
}
