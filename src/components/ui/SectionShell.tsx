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
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-ink-500">
            {eyebrow}
          </p>
          <h2 className="font-serif text-3xl text-ink-900 md:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-ink-600">{description}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
