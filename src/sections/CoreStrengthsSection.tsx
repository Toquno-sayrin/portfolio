import { SectionShell } from "@/components/ui/SectionShell";
import { StrengthCard } from "@/components/ui/StrengthCard";
import { coreStrengths } from "@/data/profileData";

export function CoreStrengthsSection() {
  return (
    <SectionShell
      id="core-strengths"
      eyebrow="Core Strengths"
      title="Analytical capabilities that connect research to execution"
      description="This section highlights the core skills that shape the portfolio's consultant-oriented positioning."
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {coreStrengths.map((strength) => (
          <StrengthCard key={strength.title} strength={strength} />
        ))}
      </div>
    </SectionShell>
  );
}
