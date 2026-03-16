import { ItemCard } from "@/components/ui/ItemCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { competitionData } from "@/data/competitionData";

const statusCopy = {
  ongoing: "Ongoing",
  finalist: "Finalist",
  awarded: "Awarded",
} as const;

const trackCopy = {
  analysis: "분석 부문",
  visualization: "시각화 부문",
  general: "일반",
} as const;

export function AwardsSection() {
  return (
    <SectionShell
      id="awards"
      eyebrow="Validation"
      title="수상 및 문제해결 사례"
    >
      <div className="grid gap-6 xl:grid-cols-3">
        {competitionData.map((entry) => (
          <ItemCard
            key={entry.id}
            title={entry.title}
            summary={entry.summary}
            period={entry.period}
            meta={entry.host}
            tags={entry.tags}
            links={entry.links}
          >
            <p className="text-sm leading-7 text-ink-100">
              <span className="font-semibold text-frost-300">Status:</span>{" "}
              <span className="font-medium text-white">{statusCopy[entry.status]}</span>
            </p>
            <p className="text-sm leading-7 text-ink-100">
              <span className="font-semibold text-frost-300">Track:</span>{" "}
              <span className="font-medium text-white">{trackCopy[entry.track]}</span>
            </p>
            <p className="text-sm leading-7 text-ink-100">
              <span className="font-semibold text-frost-300">Challenge:</span>{" "}
              <span className="text-ink-50">{entry.challenge}</span>
            </p>
            <p className="text-sm leading-7 text-ink-100">
              <span className="font-semibold text-frost-300">Role:</span>{" "}
              <span className="text-ink-50">{entry.role}</span>
            </p>
            <p className="text-sm leading-7 text-ink-100">
              <span className="font-semibold text-frost-300">Data:</span>{" "}
              <span className="text-ink-50">{entry.data}</span>
            </p>
            <p className="text-sm leading-7 text-ink-100">
              <span className="font-semibold text-frost-300">Result:</span>{" "}
              <span className="text-ink-50">{entry.result}</span>
            </p>
          </ItemCard>
        ))}
      </div>
    </SectionShell>
  );
}
