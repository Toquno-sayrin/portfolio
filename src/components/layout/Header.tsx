import { Container } from "@/components/layout/Container";

const navItems = [
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0a0f18]/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-serif text-lg font-semibold tracking-wide text-white">
          정예림(Yearim Jeoung)
        </a>
        <nav className="hidden gap-6 text-sm text-ink-100 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
