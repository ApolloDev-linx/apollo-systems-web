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
        viewport={{ once: false, margin: "-100px" }}
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
  		transition={{ duration: 0.6, delay: i * 0.15 }}
  		viewport={{ once: false }}
  		className="relative rounded-2xl p-[1px] overflow-hidden"
			>
  			{/* animated border */}
  			<svg
			  className="absolute inset-0 w-full h-full pointer-events-none"
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

  			{/* inner card */}
 	 <div className="relative z-10 h-full rounded-2xl bg-[var(--bg)] px-8 py-8 border border-white/10 backdrop-blur transition duration-300">
    		<h3 className="text-lg font-semibold">{service}</h3>
   		 <p className="text-sm text-[var(--muted)] mt-2">
     	 	High-quality, performance-focused solutions.
		    </p>
		  </div>
			</motion.div>          ))}
		        </div>
		      </motion.div>
			    </section>
	  );
}
