export default function Footer() {
  return (
    <footer className="text-center py-6 text-[var(--muted)] text-sm border-t border-white/10">
      © {new Date().getFullYear()} Apollo Systems
    </footer>
  );
}
