import type { ProjectEntry } from "@/types/content";

type ProjectCardProps = {
  entry: ProjectEntry;
};

export function ProjectCard({ entry }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[28px] border border-ink-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-ink-400">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ink-700">{entry.period}</p>
          <h3 className="mt-1 font-display text-[1.7rem] font-bold leading-tight text-ink-900">
            {entry.title}
          </h3>
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-ink-500">{entry.role}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-ink-700">{entry.summary}</p>
      <div className="mt-6 space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Problem</p>
          <p className="mt-1 text-sm leading-6 text-ink-800">{entry.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Result</p>
          <p className="mt-1 text-sm leading-6 text-ink-800">{entry.outcome}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Technologies
          </p>
          <p className="mt-1 text-sm leading-6 text-ink-800">{entry.technologies.join(", ")}</p>
        </div>
      </div>
      <div className="mt-auto pt-8">
        <a
          href={entry.caseStudyLink?.href ?? "#"}
          className="inline-flex items-center text-sm font-semibold text-ink-700 transition hover:text-ink-900"
        >
          {entry.caseStudyLink?.label ?? "View Case Study"} {"->"}
        </a>
      </div>
    </article>
  );
}
