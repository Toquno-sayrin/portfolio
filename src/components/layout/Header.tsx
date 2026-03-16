import { Container } from "@/components/layout/Container";

const navItems = [
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-200/70 bg-ink-50/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-serif text-lg font-semibold tracking-wide text-ink-900">
          Research Archive
        </a>
        <nav className="hidden gap-6 text-sm text-ink-700 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink-900">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
