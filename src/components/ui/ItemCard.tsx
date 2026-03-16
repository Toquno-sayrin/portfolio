import { useEffect, useState, type PropsWithChildren } from "react";
import { ActionLink } from "@/components/ui/ActionLink";
import { TagList } from "@/components/ui/TagList";
import type { LinkItem } from "@/types/content";

type ItemCardProps = PropsWithChildren<{
  title: string;
  summary: string;
  period: string;
  meta: string;
  tags: string[];
  links?: LinkItem[];
  dataPoints?: Array<{ label: string; value: string }>;
}>;

export function ItemCard({
  title,
  summary,
  period,
  meta,
  tags,
  links,
  dataPoints = [],
  children,
}: ItemCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    if (!isHovered || dataPoints.length === 0) return;

    const interval = window.setInterval(() => {
      setActivePoint((current) => (current + 1) % dataPoints.length);
    }, 1200);

    return () => window.clearInterval(interval);
  }, [dataPoints.length, isHovered]);

  return (
    <article
      className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-paper backdrop-blur-sm transition hover:-translate-y-1 hover:border-frost-300/60"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-frost-300">{period}</p>
          <p className="text-sm text-ink-100">{meta}</p>
        </div>
        <h3 className="font-serif text-2xl text-white">{title}</h3>
        <p className="leading-7 text-ink-100">{summary}</p>
        <TagList items={tags} />
        {dataPoints.length ? (
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {dataPoints.map((point, index) => {
              const isActive = index === activePoint;

              return (
                <div
                  key={`${title}-${point.label}`}
                  className={`rounded-2xl border px-3 py-2 text-xs transition ${
                    isActive
                      ? "border-frost-300 bg-frost-500/15 text-white"
                      : "border-white/10 bg-white/5 text-ink-100"
                  }`}
                >
                  <p className="uppercase tracking-[0.16em] text-frost-300">{point.label}</p>
                  <p className="mt-1 text-sm font-medium text-white">{point.value}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => setIsExpanded((current) => !current)}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-frost-300/60 hover:bg-white/10"
      >
        {isExpanded ? "상세 접기" : "상세 보기"}
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isExpanded ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pt-1">{children}</div>
        </div>
      </div>
      {links?.length ? (
        <div className="mt-5 flex flex-wrap gap-3">
          {links.map((link) => (
            <ActionLink key={`${title}-${link.label}`} item={link} />
          ))}
        </div>
      ) : null}
    </article>
  );
}
