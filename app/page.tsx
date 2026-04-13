import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Projects from "../src/components/Projects";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <Hero />

      <div className="section-divider" />

      <Services />

      <div className="section-divider" />

      <Projects />

      <div className="section-divider" />

      <About />

      <div className="section-divider" />

      <Contact />
      <Footer />
    </main>
  );
}
