import type { CompetitionEntry } from "@/types/content";

type HeroCompetitionCardProps = {
  index: number;
  entry: CompetitionEntry;
};

const statusLabelMap: Record<CompetitionEntry["status"], string> = {
  ongoing: "Ongoing",
  finalist: "Finalist",
  awarded: "Awarded",
};

const trackLabelMap: Record<CompetitionEntry["track"], string> = {
  analysis: "분석 부문",
  visualization: "시각화 부문",
  general: "일반",
};

export function HeroCompetitionCard({ index, entry }: HeroCompetitionCardProps) {
  return (
    <article className="rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-paper backdrop-blur-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-frost-300">
            {String(index + 1).padStart(2, "0")} VALIDATED CASE
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white">
            {entry.title}
          </h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-50">
          {statusLabelMap[entry.status]}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-frost-500/15 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-frost-300">
          {trackLabelMap[entry.track]}
        </span>
      </div>
      <div className="mt-4 space-y-2 text-sm leading-6 text-ink-100">
        <p>
          <span className="font-semibold text-white">Host:</span> {entry.host}
        </p>
        <p>
          <span className="font-semibold text-white">Period:</span> {entry.period}
        </p>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-100">{entry.summary}</p>
      <div className="mt-6 grid gap-4 border-t border-white/10 pt-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost-300">Challenge</p>
          <p className="mt-2 text-sm leading-7 text-ink-50">{entry.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-frost-300">Role</p>
          <p className="mt-2 text-sm leading-7 text-ink-50">{entry.role}</p>
        </div>
      </div>
    </article>
  );
}
