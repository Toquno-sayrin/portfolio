import { competitionData } from "@/data/competitionData";
import { contactContent, heroContent } from "@/data/profileData";
import { projectData } from "@/data/projectData";

export function ConceptStructuredSplit() {
  return (
    <div className="bg-[#eef0e7] px-4 py-8 lg:px-8">
      <section className="mx-auto grid max-w-7xl overflow-hidden rounded-[34px] border border-[#cad0be] bg-[#dbdfd2] shadow-[0_30px_80px_rgba(59,72,42,0.15)] lg:grid-cols-[88px_1.05fr_0.95fr]">
        <div className="flex flex-col items-center justify-between bg-[#234528] px-3 py-6 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-xs">YJ</div>
          <div className="h-8 w-8 rounded-full border border-white/30" />
          <div className="flex flex-col gap-1">
            <span className="block h-0.5 w-6 bg-white/60" />
            <span className="block h-0.5 w-6 bg-white/60" />
            <span className="block h-0.5 w-6 bg-white/60" />
          </div>
        </div>

        <div className="relative border-r border-[#c8cebf] p-6 sm:p-8">
          <div
            className="absolute inset-6 rounded-[28px] border border-white/80 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroContent.gallery[2].src})` }}
          />
          <div className="absolute inset-6 rounded-[28px] bg-[linear-gradient(180deg,rgba(21,33,18,0.18),rgba(21,33,18,0.48))]" />
          <div className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#69b55b]" />
          <div className="relative z-10 flex min-h-[760px] flex-col justify-between">
            <div className="rounded-[26px] border border-white/70 bg-white/10 p-5 text-white backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.28em] text-white/70">Structured Split</p>
              <h2 className="mt-3 font-display text-4xl font-bold leading-tight">정예림 포트폴리오</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/82">
                세 번째 시안은 좌우 화면 분할과 정보 박스를 통해 데이터 구조화 역량이 보이게 만든 버전입니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {heroContent.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[20px] border border-white/50 bg-black/20 p-4 text-white backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/68">{metric.label}</p>
                  <p className="mt-2 text-2xl font-bold">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div className="rounded-[28px] border border-white/70 bg-[#f3f4ed] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6f7b64]">Primary Positioning</p>
            <h3 className="mt-4 font-display text-[clamp(3rem,7vw,4.8rem)] font-bold leading-[0.92] tracking-[-0.05em] text-[#24502a]">
              Data
              <br />
              Problem
              <br />
              Solver
            </h3>
            <p className="mt-4 text-base leading-8 text-[#5a6550]">{heroContent.description}</p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {competitionData.slice(0, 2).map((entry) => (
              <article key={entry.id} className="rounded-[24px] border border-[#b9c4af] bg-white p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[#79936c]">
                  {entry.track === "visualization" ? "Visualization" : "Analysis"}
                </p>
                <h4 className="mt-3 font-display text-2xl font-bold leading-tight text-[#20331c]">
                  {entry.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-[#586350]">{entry.summary}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-[24px] border border-[#b9c4af] bg-white p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-[#7d8b73]">Target Roles</p>
            <div className="mt-4 grid gap-4">
              {heroContent.targetRoles.map((group) => (
                <div key={group.company} className="flex flex-col gap-1 border-b border-[#dfe5d7] pb-3 last:border-b-0 last:pb-0">
                  <p className="font-semibold text-[#1f321c]">{group.company}</p>
                  <p className="text-sm leading-7 text-[#5b6650]">{group.roles.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-3">
        {projectData.map((project) => (
          <article key={project.id} className="rounded-[28px] border border-[#c7cfbc] bg-white p-6 shadow-paper">
            <p className="text-xs uppercase tracking-[0.24em] text-[#7f8f73]">{project.period}</p>
            <h4 className="mt-3 font-display text-2xl font-bold leading-tight text-[#243320]">{project.title}</h4>
            <p className="mt-4 text-sm leading-7 text-[#5f6b54]">{project.summary}</p>
          </article>
        ))}
        <article className="rounded-[28px] border border-[#c7cfbc] bg-[#234528] p-6 text-white shadow-paper">
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">Contact</p>
          <h4 className="mt-3 font-display text-3xl font-bold">정리된 정보 구조와 시각 흐름</h4>
          <p className="mt-4 text-sm leading-7 text-white/78">
            세 번째 시안은 정보를 명확한 블록으로 나눠, 구조화 능력과 체계적인 인상을 동시에 만들기 위한 버전입니다.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/85">
            <p>{contactContent.email}</p>
            <p>{contactContent.location}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
