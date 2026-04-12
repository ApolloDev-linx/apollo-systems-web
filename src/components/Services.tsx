"use client";
import { useState } from "react";
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
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const services = [
    {
      title: "Website Design",
      description:
        "We design your site from the ground up shaping layout, branding, and user flow into a clean experience that guides visitors toward action.",
    },
    {
      title: "Website Redesign",
      description:
        "We transform outdated websites into modern, high-performing experiences with stronger structure, cleaner visuals, and better usability.",
    },
    {
      title: "Performance Optimization",
      description:
        "We optimize your site for speed, clarity, and conversion improving load times, user flow, and calls-to-action so more visitors become customers.",
    },
  ];

  const toggleCard = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index)
        ? prev.filter((card) => card !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="services" className="py-24 px-6">
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        <h2 className="text-3xl font-semibold mb-12 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const isFlipped = flippedCards.includes(i);
            return (
             <div key={service.title} className="relative">
  <motion.button
    type="button"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: i * 0.15 }}
    viewport={{ once: false }}
    onClick={() => toggleCard(i)}
    className="relative w-full rounded-2xl text-left cursor-pointer [perspective:1000px]"
  >
    {/* Glow Layer (NOW ATTACHED TO CARD) */}
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

    {/* Clipping Layer */}
    <div className="rounded-2xl overflow-hidden">
      {/* Flip Container */}
      <div
        className={`relative min-h-[220px] transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
<div className="absolute inset-0 rounded-2xl bg-[var(--bg)] px-8 py-8 backdrop-blur [backface-visibility:hidden] flex flex-col justify-center items-center text-center bg-[var(--bg)] backdrop-blur-md">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm text-[var(--muted)] mt-3">
            Tap to view
          </p>
        </div>

        {/* Back */}
<div className="absolute inset-0 rounded-2xl bg-[var(--bg)] px-8 py-8 backdrop-blur [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center text-center bg-[var(--bg)] backdrop-blur-md">
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  </motion.button>
</div>            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
