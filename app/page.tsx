import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Projects from "../src/components/Projects";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import StarfieldBackground from "../src/components/StarfieldBackground";

export default function Home() {
  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)]">
      {/* Animated starfield canvas — sits behind everything */}
      <StarfieldBackground />

      {/* All content on top */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
