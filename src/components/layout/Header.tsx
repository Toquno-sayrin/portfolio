import { Container } from "@/components/layout/Container";

const navItems = [
  { label: "수상 및 사례", href: "#awards" },
  { label: "프로젝트", href: "#projects" },
  { label: "연락처", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink-200/70 bg-ink-50/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#top" className="font-serif text-lg font-semibold tracking-wide text-ink-900">
          Yearim Jeoung
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
