import { TagList } from "@/components/ui/TagList";
import type { ResearchEntry } from "@/types/content";

type ResearchCardProps = {
  entry: ResearchEntry;
};

export function ResearchCard({ entry }: ResearchCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-ink-200 bg-white p-6 shadow-paper transition duration-200 hover:-translate-y-1 hover:border-ink-400">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
            {entry.year}
          </p>
          <h3 className="mt-3 font-serif text-2xl leading-snug text-ink-900">{entry.title}</h3>
        </div>
      </div>
      <p className="mt-5 flex-1 leading-7 text-ink-600">{entry.shortDescription}</p>
      <div className="mt-6">
        <TagList items={entry.tags} />
      </div>
      {entry.link ? (
        <div className="mt-6 border-t border-ink-100 pt-4">
          <a
            href={entry.link.href}
            className="inline-flex items-center text-sm font-medium text-ink-700 transition hover:text-ink-900"
          >
            {entry.link.label}
          </a>
        </div>
      ) : null}
    </article>
  );
}
