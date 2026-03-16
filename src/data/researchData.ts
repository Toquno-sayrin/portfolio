import type { ResearchEntry } from "@/types/content";

export const researchData: ResearchEntry[] = [
  {
    id: "research-llm-eval",
    title: "도메인 특화 언어모델의 강건성 평가 연구",
    summary: "AI 모델의 신뢰도와 평가 체계를 구조화해 의사결정에 활용할 수 있도록 다룬 연구입니다.",
    period: "2025 - Present",
    status: "ongoing",
    year: "2025",
    shortDescription:
      "특정 도메인 환경에서 사용되는 언어모델의 실패 유형을 분석하고, 재현 가능한 평가 기준과 벤치마크 설계 방식을 정리하는 연구입니다.",
    tags: ["LLM", "Evaluation", "Benchmarking"],
    link: { label: "Paper Draft", href: "#" },
  },
  {
    id: "research-cv-medical",
    title: "이미지 분류를 위한 표현학습 기반 성능 개선 연구",
    summary: "데이터가 제한된 환경에서 모델 성능 개선 전략을 검증하고 비교한 연구입니다.",
    period: "2024 - 2025",
    status: "published",
    year: "2024",
    shortDescription:
      "데이터가 제한된 이미지 분류 환경에서 feature quality와 transferability를 높이기 위한 표현학습 기반 접근을 다룬 연구입니다.",
    tags: ["Computer Vision", "Representation Learning", "Transfer Learning"],
    link: { label: "Poster", href: "#" },
  },
];
