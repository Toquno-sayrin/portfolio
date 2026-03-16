import type { ProjectEntry } from "@/types/content";

type ProjectCardProps = {
  entry: ProjectEntry;
};

export function ProjectCard({ entry }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-card backdrop-blur-sm transition hover:-translate-y-1 hover:border-frost-300/60">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-frost-300">{entry.period}</p>
          <h3 className="mt-1 font-display text-[1.7rem] font-bold leading-tight text-white">
            {entry.title}
          </h3>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-100">{entry.role}</p>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-100">{entry.summary}</p>
      <div className="mt-6 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost-300">Problem</p>
          <p className="mt-1 text-sm leading-7 text-ink-50">{entry.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost-300">Result</p>
          <p className="mt-1 text-sm leading-7 text-ink-50">{entry.outcome}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost-300">
            Technologies
          </p>
          <p className="mt-1 text-sm leading-7 text-ink-50">{entry.technologies.join(", ")}</p>
        </div>
      </div>
      <div className="mt-auto pt-8">
        <a
          href={entry.caseStudyLink?.href ?? "#"}
          className="inline-flex items-center text-sm font-semibold text-frost-300 transition hover:text-white"
        >
          {entry.caseStudyLink?.label ?? "View Case Study"} {"->"}
        </a>
      </div>
    </article>
  );
}
