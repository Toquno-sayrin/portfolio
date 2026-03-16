import { useEffect, useState } from "react";
import type { ProjectEntry } from "@/types/content";

type ProjectCardProps = {
  entry: ProjectEntry;
};

export function ProjectCard({ entry }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePoint((current) => (current + 1) % 3);
    }, 1400);

    return () => window.clearInterval(interval);
  }, []);

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
      <div className="mt-6 grid gap-2 sm:grid-cols-3">
        {[
          { label: "Period", value: entry.period },
          { label: "Role", value: entry.role },
          { label: "Tech", value: entry.technologies.slice(0, 2).join(" / ") },
        ].map((point, index) => (
          <div
            key={`${entry.id}-${point.label}`}
            className={`rounded-2xl border px-3 py-2 text-xs transition ${
              activePoint === index
                ? "border-frost-300 bg-frost-500/15 text-white"
                : "border-white/10 bg-white/5 text-ink-100"
            }`}
          >
            <p className="uppercase tracking-[0.16em] text-frost-300">{point.label}</p>
            <p className="mt-1 text-sm font-medium text-white">{point.value}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-frost-300/60 hover:bg-white/10"
      >
        {isExpanded ? "상세 접기" : "상세 보기"}
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isExpanded ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4">
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
