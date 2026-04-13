import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import Services from "../src/components/Services";
import Projects from "../src/components/Projects";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import StarfieldBackground from "../src/components/StarfieldBackground";
import MouseGlow from "../src/components/MouseGlow";

export default function Home() {
  return (
    <main className="relative bg-[var(--bg)] text-[var(--text)]">
      {/* Animated starfield canvas — deepest layer */}
      <StarfieldBackground />

      {/* Mouse-follow glow — subtle interactive light */}
      <MouseGlow />

      {/* All content on top */}
      <div className="relative z-10">
        <Navbar />
        {/* pt-20 compensates for the fixed navbar */}
        <div className="pt-20">
          <Hero />
          <Services />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
