"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    // Scroll detection for glass effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // IntersectionObserver for active section — fires when section enters viewport
    const sectionIds = ["services", "projects", "contact"];
    const visibleSections = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });
        // Pick the last visible section in page order
        let current = "";
        for (const id of sectionIds) {
          if (visibleSections.has(id)) {
            current = id;
          }
        }
        setActiveSection(current);
      },
      {
        // Higher threshold — section needs ~20% visible before it counts
        threshold: 0.2,
        // Chop off the bottom 55% of the viewport as a detection zone.
        // A section only counts as "entered" once it scrolls into the
        // top 45% of the screen — feels natural and avoids premature jumps.
        rootMargin: "0px 0px -55% 0px",
      }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg)]/70 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo with subtle glow */}
      <motion.h1
        className="text-xl font-semibold text-[var(--primary)] relative"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <span className="relative z-10">Apollo Systems</span>
        <div className="absolute inset-0 bg-[var(--primary)] opacity-0 hover:opacity-20 blur-xl transition-opacity duration-300 rounded-full" />
      </motion.h1>
      {/* Nav links */}
      <div className="flex gap-8 text-sm">
        {links.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[var(--muted)] hover:text-white transition-colors duration-300"
            >
              <span
                className={`transition-colors duration-300 ${
                  isActive ? "text-white" : ""
                }`}
              >
                {link.label}
              </span>
              {/* Active glow underline */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    exit={{ opacity: 0, scaleX: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--primary)] rounded-full"
                    style={{
                      boxShadow:
                        "0 0 8px rgba(14,165,233,0.6), 0 0 20px rgba(14,165,233,0.3)",
                    }}
                  />
                )}
              </AnimatePresence>
              {/* Hover glow dot */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[var(--primary)] rounded-full opacity-0 hover:opacity-60 transition-opacity duration-300 blur-[2px]" />
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
