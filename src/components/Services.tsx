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

export default function Services() {
  const services = [
    "Website Design",
    "Website Redesign",
    "Performance Optimization",
  ];

  return (
    <section id="services" className="py-24 px-6">

      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-[var(--primary)] hover:scale-[1.05] transition duration-300"
            >
              <h3 className="text-lg font-semibold">{service}</h3>
              <p className="text-sm text-[var(--muted)] mt-2">
                High-quality, performance-focused solutions.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
