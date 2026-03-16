import type { AgentDefinition } from "@/types/content";

export const agentDefinitions: AgentDefinition[] = [
  {
    name: "Site Architect Agent",
    responsibility:
      "Designs the overall folder structure, defines schema boundaries, and protects the separation between data, layout, and reusable components.",
    outputs: [
      "Project structure decisions",
      "Shared content types",
      "Scalability rules for future sections",
    ],
  },
  {
    name: "UI Builder Agent",
    responsibility:
      "Builds responsive React + Tailwind components and ensures every section is assembled from reusable presentation primitives.",
    outputs: [
      "Section layouts",
      "Cards, badges, buttons, navigation",
      "Mobile and desktop responsive behavior",
    ],
  },
  {
    name: "Content Writer Agent",
    responsibility:
      "Writes concise academic copy, section summaries, and item descriptions so content remains clear, consistent, and easy to update from data files.",
    outputs: [
      "Hero and About copy",
      "Research and project summaries",
      "Contact and call-to-action text",
    ],
  },
  {
    name: "Update Agent",
    responsibility:
      "Adds new research, project, and activity entries by editing data files only, preserving schema consistency and avoiding UI regressions.",
    outputs: [
      "New data entries",
      "Schema-safe updates",
      "Content validation checks before release",
    ],
  },
];
