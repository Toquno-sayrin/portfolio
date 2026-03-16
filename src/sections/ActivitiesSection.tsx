import { ItemCard } from "@/components/ui/ItemCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { activityData } from "@/data/activityData";

export function ActivitiesSection() {
  return (
    <SectionShell
      id="activities"
      eyebrow="Activities"
      title="Competitions, communication, and collaborative practice"
      description="Activities highlight how analytical work has been applied in teams, seminars, competitions, and mentoring contexts."
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {activityData.map((entry) => (
          <ItemCard
            key={entry.id}
            title={entry.title}
            summary={entry.summary}
            period={entry.period}
            meta={`${entry.organization} · ${entry.category}`}
            tags={entry.tags}
          >
            <p className="text-sm leading-7 text-ink-700">
              Status: <span className="font-medium capitalize">{entry.status}</span>
            </p>
          </ItemCard>
        ))}
      </div>
    </SectionShell>
  );
}
