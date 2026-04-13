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

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-14 text-center leading-tight">
          Real results for{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
            real businesses
          </span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl trace-card-glow block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false }}
            >
              {/* Glowing Trace Border */}
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

              {/* Card Content */}
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 h-full flex flex-col">
                {/* Header Row */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-[var(--primary)] transition">
                    {project.name}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--muted)] group-hover:text-[var(--primary)] transition shrink-0 mt-1"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full border border-[var(--primary)]/30 text-[var(--primary)] bg-[var(--primary)]/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
