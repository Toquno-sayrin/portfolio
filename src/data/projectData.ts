import type { ProjectEntry } from "@/types/content";

export const projectData: ProjectEntry[] = [
  {
    id: "project-research-dashboard",
    title: "연구 및 분석 이력 관리 Dashboard",
    summary:
      "복수의 프로젝트와 실험 기록을 한 화면에서 관리할 수 있도록 구조화한 데이터 기반 대시보드입니다.",
    period: "2025 - Present",
    status: "ongoing",
    tags: ["Dashboard", "Analytics", "Workflow Design"],
    role: "기획 / 설계 / 개발",
    problem:
      "연구 주제와 분석 결과가 여러 문서와 메모에 분산되어 있어 진행 상황을 통합적으로 파악하기 어려웠습니다.",
    data: "실험 로그, 주간 업데이트, 프로젝트 메모, 진행 상태 메타데이터",
    method:
      "React와 TypeScript 기반의 단일 인터페이스를 설계하고, 항목별 상태와 요약 정보를 카드 구조로 시각화했습니다.",
    outcome:
      "프로젝트 진행 상황과 핵심 인사이트를 빠르게 검토할 수 있게 되었고, 반복적인 정리 비용을 줄였습니다.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    caseStudyLink: { label: "View Case Study", href: "#" },
    links: [
      { label: "Repository", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    id: "project-paper-parser",
    title: "논문 정리 및 분석 메모 워크플로우",
    summary:
      "리서치 문헌을 읽고 요약하는 과정을 구조화해, 분석 메모와 인사이트 축적이 가능하도록 만든 개인 workflow 프로젝트입니다.",
    period: "2024 - Present",
    status: "ongoing",
    tags: ["Knowledge System", "Automation", "Research Ops"],
    role: "개인 설계 / 구현",
    problem:
      "논문 요약과 태그, 인사이트가 비정형적으로 쌓이면서 주제별 비교와 재활용이 어려웠습니다.",
    data: "논문 메타데이터, 읽기 노트, 주제 태그, 요약 문장",
    method:
      "메모와 메타데이터를 분리해 저장하고, 주제 단위로 다시 조회할 수 있는 문서 구조와 정리 규칙을 설계했습니다.",
    outcome:
      "문헌 리뷰의 일관성이 높아졌고, 제안서나 발표 자료를 준비할 때 필요한 내용을 빠르게 재구성할 수 있게 되었습니다.",
    technologies: ["Python", "Markdown", "Automation"],
    caseStudyLink: { label: "View Case Study", href: "#" },
    links: [{ label: "Process Notes", href: "#" }],
  },
];
