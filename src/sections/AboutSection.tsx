import { SectionShell } from "@/components/ui/SectionShell";
import { TagList } from "@/components/ui/TagList";
import { aboutContent } from "@/data/profileData";
import { agentDefinitions } from "@/data/agentData";
import { AgentCard } from "@/components/ui/AgentCard";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Profile"
      title={aboutContent.heading}
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-ink-700">
              {paragraph}
            </p>
          ))}
          <div>
            <p className="mb-4 text-lg font-semibold uppercase tracking-[0.18em] text-ink-700">
              Focus Areas
            </p>
            <TagList items={aboutContent.focusAreas} />
          </div>
        </div>
        <div className="grid gap-5">
          {agentDefinitions.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
