import type { CompetitionEntry } from "@/types/content";

type HeroCompetitionCardProps = {
  index: number;
  entry: CompetitionEntry;
};

const statusLabelMap: Record<CompetitionEntry["status"], string> = {
  ongoing: "진행 중",
  finalist: "본선",
  awarded: "수상",
};

const trackLabelMap: Record<CompetitionEntry["track"], string> = {
  analysis: "분석 부문",
  visualization: "시각화 부문",
  general: "일반",
};

export function HeroCompetitionCard({ index, entry }: HeroCompetitionCardProps) {
  return (
    <article className="rounded-[30px] border border-ink-200 bg-white p-6 shadow-paper">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-ink-500">
            {String(index + 1).padStart(2, "0")} 검증된 사례
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-ink-900">
            {entry.title}
          </h3>
        </div>
        <span className="rounded-full border border-ink-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-600">
          {statusLabelMap[entry.status]}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-ink-700">
          {trackLabelMap[entry.track]}
        </span>
      </div>
      <div className="mt-4 space-y-2 text-sm leading-6 text-ink-700">
        <p>
          <span className="font-semibold text-ink-800">주최:</span> {entry.host}
        </p>
        <p>
          <span className="font-semibold text-ink-800">기간:</span> {entry.period}
        </p>
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-700">{entry.summary}</p>
      <div className="mt-6 grid gap-4 border-t border-ink-100 pt-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Challenge</p>
          <p className="mt-2 text-sm leading-7 text-ink-800">{entry.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Role</p>
          <p className="mt-2 text-sm leading-7 text-ink-800">{entry.role}</p>
        </div>
      </div>
    </article>
  );
}
