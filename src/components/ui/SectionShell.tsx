import type { PropsWithChildren } from "react";
import { Container } from "@/components/layout/Container";

type SectionShellProps = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}>;

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  className = "",
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${className}`}>
      <Container>
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-frost-300">
            {eyebrow}
          </p>
          <h2 className="break-words font-serif text-[clamp(2.4rem,8vw,3.5rem)] leading-tight text-white">
            {title}
          </h2>
          {description ? <p className="mt-4 text-base leading-7 text-ink-100">{description}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
