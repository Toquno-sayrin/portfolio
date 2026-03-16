import type { ProjectEntry } from "@/types/content";

type HeroProjectCardProps = {
  index: number;
  project: ProjectEntry;
};

export function HeroProjectCard({ index, project }: HeroProjectCardProps) {
  return (
    <article className="rounded-[30px] border border-ink-200 bg-white p-6 shadow-paper">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-ink-500">
            {String(index + 1).padStart(2, "0")} CURRENT PROJECT
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink-900">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full border border-ink-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
          In Progress
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-700">{project.summary}</p>
      <div className="mt-6 grid gap-4 border-t border-ink-100 pt-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Focus</p>
          <p className="mt-2 text-sm leading-7 text-ink-800">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Current Outcome</p>
          <p className="mt-2 text-sm leading-7 text-ink-800">{project.outcome}</p>
        </div>
      </div>
    </article>
  );
}
