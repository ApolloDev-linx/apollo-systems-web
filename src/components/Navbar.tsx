export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-white/10">
      <h1 className="text-xl font-semibold text-[var(--primary)]">
        Apollo Systems
      </h1>

      <div className="flex gap-6 text-sm text-[var(--muted)]">
        <a href="#services" className="hover:text-white transition">Services</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
}
