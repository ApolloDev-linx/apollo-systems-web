"use client";

import { motion, type Variants } from "framer-motion";

const containerVariant: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const titleVariant: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const projects = [
    {
      name: "Judah Nails",
      description:
        "Full booking system with modern UI — designed to convert walk-ins into repeat clients.",
      link: "https://www.judahnails.net",
      tags: ["Booking System", "Custom Design", "Mobile-First"],
    },
    {
      name: "RAW Detail",
      description:
        "High-end auto detailing site with gallery system — built to showcase premium work and book jobs.",
      link: "https://www.rawdm.com",
      tags: ["Gallery", "Lead Generation", "Brand Identity"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-80px" }}
      >
        {/* Section Title */}
        <motion.h2
          variants={titleVariant}
          className="text-3xl sm:text-4xl font-bold mb-14 text-center"
        >
          Real results for{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
            real businesses
          </span>
        </motion.h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariant}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative block"
            >
              {/* Card hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--accent)]/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden">
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
                  {/* Header row: name + link icon */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold group-hover:text-[var(--primary)] transition-colors duration-300">
                      {project.name}
                    </h3>
                    {/* External link icon */}
                    <svg
                      className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
