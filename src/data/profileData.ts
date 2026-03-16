import type { AboutContent, ContactContent, CoreStrength, HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  name: "Yearim Jeoung",
  title: "Product & Business Data Analyst",
  tagline: "",
  description:
    "AI 연구와 데이터 분석을 통한 인사이트 도출을 수행하고 있습니다.\n제 주요 연구 및 프로젝트와 진행중인 활동들에 대한 기록을 공유합니다.",
  primaryCta: {
    label: "Projects 보기",
    href: "#projects",
  },
  secondaryCta: {
    label: "Contact",
    href: "#contact",
  },
  metrics: [
    { label: "AI & Analytics", value: "01" },
    { label: "Problem Solving", value: "02" },
    { label: "Decision Support", value: "03" },
  ],
  gallery: [
    {
      src: "/images/profile-main.png",
      alt: "Formal portrait of Yearim Jeoung",
    },
    {
      src: "/images/profile-casual-1.jpg",
      alt: "Casual photo of Yearim Jeoung",
    },
    {
      src: "/images/profile-casual-2.jpg",
      alt: "Lifestyle photo of Yearim Jeoung",
    },
  ],
  strengths: [
    "Data-driven Problem Structuring",
    "AI Research & Applied Analytics",
    "Analytical Thinking & Experiment Design",
    "Data Architecture & Information Structuring",
    "Insight Communication",
  ],
  skillGroups: [
    {
      title: "Programming",
      items: ["Python", "SQL", "JavaScript", "TypeScript"],
    },
  ],
  targetRoles: [
    {
      company: "쿠팡",
      roles: ["Growth Analyst", "Product Strategy"],
    },
    {
      company: "토스",
      roles: ["Data Strategy", "Business Analyst"],
    },
    {
      company: "네이버",
      roles: ["서비스 기획", "데이터 분석"],
    },
    {
      company: "컨설팅 회사",
      roles: ["데이터 기반 전략 컨설턴트"],
    },
  ],
};

export const aboutContent: AboutContent = {
  heading: "About",
  paragraphs: [
    "저는 데이터를 통해 문제를 이해하고 구조화하는 과정에 관심이 있습니다. AI 연구, 데이터 분석 프로젝트, 시스템 설계를 통해 복잡한 문제를 분석 가능한 형태로 정리하고, 그 결과를 실제 의사결정이나 서비스 설계에 연결하는 경험을 쌓고 있습니다.",
    "이 포트폴리오는 이러한 과정을 기록하기 위해 만들어졌습니다. 각 항목은 단순히 결과만 보여주는 것이 아니라 문제 정의, 접근 방법, 분석 과정, 그리고 얻은 인사이트를 함께 담도록 구성되어 있습니다.",
    "즉 이 사이트는 보여주기 위한 페이지라기보다 연구와 분석 기록을 축적하는 작업 공간에 가깝습니다.",
  ],
  focusAreas: [
    "Deep Learning",
    "Computer Vision",
    "AI Systems",
    "Data Analysis",
    "데이터 아키텍처",
  ],
};

export const coreStrengths: CoreStrength[] = [
  {
    title: "Data Analysis",
    description: "데이터를 해석 가능한 구조로 정리하고, 의미 있는 패턴과 문제 신호를 도출합니다.",
  },
  {
    title: "Problem Structuring",
    description: "복잡한 문제를 정의 가능한 단위로 나누고, 분석 가능한 질문으로 재구성합니다.",
  },
  {
    title: "AI Research",
    description: "모델 성능, 실험 설계, 평가 기준을 연구 관점에서 정교하게 다룹니다.",
  },
  {
    title: "Decision Support",
    description: "분석 결과를 실행 가능한 인사이트로 연결해 실제 판단과 전략 수립을 돕습니다.",
  },
  {
    title: "Communication",
    description: "기술적 내용을 보고서, 발표, 시각화 형태로 정리해 이해 가능한 언어로 전달합니다.",
  },
];

export const contactContent: ContactContent = {
  email: "your.email@example.com",
  location: "Seoul, South Korea",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Google Scholar", href: "https://scholar.google.com/" },
  ],
};
