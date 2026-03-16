import type { CompetitionEntry } from "@/types/content";

export const competitionData: CompetitionEntry[] = [
  {
    id: "competition-trade-statistics",
    title: "제1회 무역통계 활용·분석 경진대회",
    host: "관세청 · 한국무역통계진흥원",
    period: "2026.03 - 2026.05",
    status: "ongoing",
    category: "competition",
    track: "analysis",
    summary:
      "수출입무역통계와 공공데이터, API를 결합해 산업·시장 이슈를 구조화하고 실무형 인사이트를 도출하는 분석 프로젝트입니다.",
    challenge:
      "복잡한 무역 데이터를 산업과 정책 관점의 질문으로 재구성하고, 실제 의사결정에 연결될 수 있는 분석 스토리로 정리하는 것이 핵심 과제입니다.",
    role: "문제 정의, 데이터 구조화, 인사이트 도출, 발표 스토리라인 설계",
    data: "수출입무역통계 데이터, 공공데이터, 통계자료 기반 API",
    result: "진행 중: 공공·산업 데이터를 활용한 실전형 분석 역량을 검증하는 프로젝트로 발전시키고 있습니다.",
    tags: ["Trade Analytics", "Public Data", "Applied Insight"],
  },
  {
    id: "competition-seoul-bigdata",
    title: "2026 서울시 빅데이터 활용 경진대회",
    host: "서울특별시 · 숙명여대 빅데이터혁신융합사업단",
    period: "2026.03 - 2026.07",
    status: "ongoing",
    category: "competition",
    track: "analysis",
    summary:
      "서울시 생활인구, 소비, 이동, 상권 데이터를 바탕으로 도시 문제 해결과 공공 가치 창출이 가능한 주제를 분석하는 프로젝트입니다.",
    challenge:
      "여러 생활 데이터와 개방형 데이터를 결합해 도시 현상을 해석 가능한 질문으로 바꾸고, 공공성과 실행 가능성을 동시에 갖춘 분석 결과를 설계하는 것이 핵심입니다.",
    role: "문제 정의, 데이터 결합 구조 설계, 분석 방향 설정, 인사이트 스토리 구성",
    data: "서울시 유동인구, 카드소비, 생활이동, 상권, 공간데이터 및 개방형 데이터",
    result: "진행 중: 도시 데이터 기반 문제 해결 역량과 공공 데이터 해석 능력을 확장하는 프로젝트로 준비하고 있습니다.",
    tags: ["Urban Analytics", "Public Data", "City Problem Solving"],
  },
  {
    id: "competition-seoul-visualization",
    title: "2026 서울시 빅데이터 활용 경진대회 시각화 부문",
    host: "서울특별시 · 숙명여대 빅데이터혁신융합사업단",
    period: "2026.03 - 2026.07",
    status: "ongoing",
    category: "competition",
    track: "visualization",
    summary:
      "서울 데이터 허브의 공공데이터를 활용해 도시 현상을 직관적으로 전달하는 시각화 결과물을 설계하는 프로젝트입니다.",
    challenge:
      "공공데이터를 단순 그래프로 나열하지 않고, 시민과 평가자가 빠르게 이해할 수 있는 메시지와 스토리 중심의 시각화 결과물로 정리하는 것이 핵심입니다.",
    role: "주제 기획, 데이터 해석, 시각화 구조 설계, 결과물 스토리 구성",
    data: "서울 데이터 허브 공공데이터 및 주제별 개방형 데이터",
    result: "진행 중: 데이터 분석 결과를 전달력 있는 시각 언어로 전환하는 역량을 강화하는 프로젝트로 준비하고 있습니다.",
    tags: ["Data Visualization", "Public Data", "Storytelling"],
  },
];
