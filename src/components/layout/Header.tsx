import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";

const navItems = [
  { label: "Awards", href: "#awards" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type HeaderProps = {
  activeSection: "awards" | "projects" | "contact";
  onSelect: (section: "awards" | "projects" | "contact") => void;
};

export function Header({ activeSection, onSelect }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b border-white/10 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "bg-[#070c14]/92 shadow-paper" : "bg-[#0a0f18]/72"
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#top"
          className={`font-serif font-semibold tracking-wide text-white transition-all duration-300 ${
            isScrolled ? "text-base" : "text-lg"
          }`}
        >
          정예림(Yearim Jeoung)
        </a>
        <nav className="hidden gap-3 text-sm text-ink-100 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => onSelect(item.href.slice(1) as "awards" | "projects" | "contact")}
              className={`rounded-full border px-4 py-2 transition ${
                activeSection === item.href.slice(1)
                  ? "border-frost-300 bg-frost-500/15 text-white"
                  : "border-white/10 bg-white/5 text-ink-100 hover:border-frost-300/50 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </Container>
    </header>
  );
}
