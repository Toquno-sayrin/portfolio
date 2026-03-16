import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionShell } from "@/components/ui/SectionShell";
import { projectData } from "@/data/projectData";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Practical projects focused on structured problem solving"
      description="Projects are presented first to emphasize applied analysis, implementation, and decision-oriented outcomes."
    >
      <div className="grid gap-6 xl:grid-cols-2">
        {projectData.map((entry) => (
          <ProjectCard key={entry.id} entry={entry} />
        ))}
      </div>
    </SectionShell>
  );
}
