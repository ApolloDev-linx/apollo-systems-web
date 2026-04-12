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

export default function Projects() {
  const projects = [
    {
      name: "Judah Nails",
      description: "Full booking system + modern UI.",
      link: "https://www.judahnails.net",
    },
    {
      name: "RAW Detail",
      description: "High-end detailing website with gallery system.",
      link: "https://www.rawdm.com",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: false }}
            >
              <div className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-[var(--primary)] hover:scale-[1.05] transition duration-300">
                <h3 className="text-lg font-semibold group-hover:text-[var(--primary)] transition">
                  {project.name}
                </h3>

                <p className="text-sm text-[var(--muted)] mt-2">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
