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
      description="대회, 공모전, 캡스톤 활동을 단순 이력으로 나열하지 않고 어떤 문제를 다뤘고 어떤 방식으로 분석을 설계했는지까지 함께 정리했습니다."
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
            <p className="text-sm leading-7 text-ink-700">
              Status: <span className="font-medium">{statusCopy[entry.status]}</span>
            </p>
            <p className="text-sm leading-7 text-ink-700">
              Track: <span className="font-medium text-ink-800">{trackCopy[entry.track]}</span>
            </p>
            <p className="text-sm leading-7 text-ink-700">
              Challenge: <span className="text-ink-800">{entry.challenge}</span>
            </p>
            <p className="text-sm leading-7 text-ink-700">
              Role: <span className="text-ink-800">{entry.role}</span>
            </p>
            <p className="text-sm leading-7 text-ink-700">
              Data: <span className="text-ink-800">{entry.data}</span>
            </p>
            <p className="text-sm leading-7 text-ink-700">
              Result: <span className="text-ink-800">{entry.result}</span>
            </p>
          </ItemCard>
        ))}
      </div>
    </SectionShell>
  );
}
