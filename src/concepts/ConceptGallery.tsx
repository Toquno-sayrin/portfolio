import { useState } from "react";
import { ConceptCorporateDark } from "@/concepts/ConceptCorporateDark";
import { ConceptEditorialPortrait } from "@/concepts/ConceptEditorialPortrait";
import { ConceptStructuredSplit } from "@/concepts/ConceptStructuredSplit";

const concepts = [
  {
    id: "corporate",
    label: "Concept 1",
    title: "Corporate Dark",
    description: "도시적이고 전략 컨설팅 톤이 강한, 다크 기반의 프리미엄 시안",
  },
  {
    id: "editorial",
    label: "Concept 2",
    title: "Editorial Portrait",
    description: "인물 브랜딩과 분위기를 강조하는 에디토리얼 중심 시안",
  },
  {
    id: "split",
    label: "Concept 3",
    title: "Structured Split",
    description: "화면 분할과 정보 구조화가 돋보이는 실험적인 시안",
  },
] as const;

type ConceptId = (typeof concepts)[number]["id"];

export function ConceptGallery() {
  const [activeConcept, setActiveConcept] = useState<ConceptId>("corporate");

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-ink-900">
      <div className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f1ea]/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-ink-500">
              Design Exploration
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold text-ink-900">
              정예림 포트폴리오 UI 시안 3종
            </h1>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {concepts.map((concept) => {
              const isActive = activeConcept === concept.id;

              return (
                <button
                  key={concept.id}
                  type="button"
                  onClick={() => setActiveConcept(concept.id)}
                  className={`rounded-[24px] border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-ink-900 bg-ink-900 text-white shadow-paper"
                      : "border-black/10 bg-white/60 text-ink-900 hover:border-ink-500"
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
                    {concept.label}
                  </p>
                  <p className="mt-2 font-display text-lg font-bold">{concept.title}</p>
                  <p className="mt-1 text-sm leading-6 opacity-80">{concept.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {activeConcept === "corporate" ? <ConceptCorporateDark /> : null}
      {activeConcept === "editorial" ? <ConceptEditorialPortrait /> : null}
      {activeConcept === "split" ? <ConceptStructuredSplit /> : null}
    </div>
  );
}
