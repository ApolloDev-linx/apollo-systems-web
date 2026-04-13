"use client";
import { motion } from "framer-motion";

const sectionVariant = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const services = [
  {
    title: "Website Design",
    description:
      "Custom-built from scratch. We design every page to match your brand and guide visitors toward booking, buying, or calling you.",
    bullets: [
      "Custom design — no templates",
      "Mobile-first responsive",
      "Built for conversions",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" />
      </svg>
    ),
  },
  {
    title: "Website Redesign",
    description:
      "Your current site isn't working. We'll rebuild it with modern structure, clean visuals, and better usability that actually converts.",
    bullets: [
      "Full visual overhaul",
      "Improved site structure",
      "Better user experience",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "We optimize your site for speed, clarity, and conversion — improving load times, user flow, and calls-to-action so more visitors become customers.",
    bullets: [
      "Speed & Core Web Vitals",
      "SEO improvements",
      "Conversion rate optimization",
    ],
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-[var(--primary)] mb-3">
          What We Do
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold mb-14 text-center leading-tight">
          Services that{" "}
          <span className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-transparent bg-clip-text">
            drive revenue
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false }}
              className="relative rounded-2xl overflow-hidden"
            >
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

              <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/15 border border-[var(--primary)]/30 flex items-center justify-center text-[var(--primary)] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-3">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-center gap-3 text-sm text-[var(--muted)]"
                    >
                      <span className="text-[var(--primary)] text-base">→</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
