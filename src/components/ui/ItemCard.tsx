import type { PropsWithChildren } from "react";
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
}>;

export function ItemCard({ title, summary, period, meta, tags, links, children }: ItemCardProps) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-paper backdrop-blur-sm transition hover:-translate-y-1 hover:border-frost-300/60">
      <div className="flex flex-col gap-3 border-b border-white/10 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-frost-300">{period}</p>
          <p className="text-sm text-ink-100">{meta}</p>
        </div>
        <h3 className="font-serif text-2xl text-white">{title}</h3>
        <p className="leading-7 text-ink-100">{summary}</p>
        <TagList items={tags} />
      </div>
      <div className="space-y-4 pt-5">{children}</div>
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
