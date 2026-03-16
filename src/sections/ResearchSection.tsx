import { ResearchCard } from "@/components/ui/ResearchCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { researchData } from "@/data/researchData";

export function ResearchSection() {
  return (
    <SectionShell
      id="research"
      eyebrow="Research"
      title="Research as a supporting strength for analytical problem solving"
      description="Research complements the project portfolio by showing how experimental thinking, evaluation design, and AI methodology support practical decision making."
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {researchData.map((entry) => (
          <ResearchCard key={entry.id} entry={entry} />
        ))}
      </div>
    </SectionShell>
  );
}
