export type LinkItem = {
  label: string;
  href: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type HeroImage = {
  src: string;
  alt: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TargetRoleGroup = {
  company: string;
  roles: string[];
};

export type BaseEntry = {
  id: string;
  title: string;
  summary: string;
  period: string;
  status: "ongoing" | "published" | "completed" | "archived";
  tags: string[];
  links?: LinkItem[];
};

export type ResearchEntry = BaseEntry & {
  year: string;
  shortDescription: string;
  link?: LinkItem;
};

export type ProjectEntry = BaseEntry & {
  role: string;
  problem: string;
  data: string;
  method: string;
  outcome: string;
  technologies: string[];
  caseStudyLink?: LinkItem;
};

export type CompetitionEntry = {
  id: string;
  title: string;
  host: string;
  period: string;
  status: "ongoing" | "finalist" | "awarded";
  category: "competition" | "capstone" | "award";
  track: "analysis" | "visualization" | "general";
  summary: string;
  challenge: string;
  role: string;
  data: string;
  result: string;
  tags: string[];
  links?: LinkItem[];
};

export type ActivityEntry = BaseEntry & {
  organization: string;
  category: "competition" | "leadership" | "teaching" | "community" | "award";
};

export type HeroContent = {
  name: string;
  title: string;
  tagline: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  metrics: Metric[];
  gallery: HeroImage[];
  strengths: string[];
  skillGroups: SkillGroup[];
  targetRoles: TargetRoleGroup[];
};

export type AboutContent = {
  heading: string;
  paragraphs: string[];
  focusAreas: string[];
};

export type CoreStrength = {
  title: string;
  description: string;
};

export type ContactContent = {
  email: string;
  location: string;
  links: LinkItem[];
};

export type AgentDefinition = {
  name: string;
  responsibility: string;
  outputs: string[];
};
