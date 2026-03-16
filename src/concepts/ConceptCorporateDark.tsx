import { competitionData } from "@/data/competitionData";
import { contactContent, heroContent } from "@/data/profileData";
import { projectData } from "@/data/projectData";

const featuredAward = competitionData[0];
const supportingAwards = competitionData.slice(1);

export function ConceptCorporateDark() {
  return (
    <div className="bg-[#ede7df] px-4 py-8 lg:px-8">
      <section className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#07090f] text-white shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${heroContent.gallery[0].src})` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,88,255,0.35),transparent_28%),linear-gradient(135deg,rgba(5,7,11,0.2),rgba(5,7,11,0.94))]" />
        <div className="absolute left-[8%] top-[18%] h-[54%] w-px bg-white/30" />
        <div className="absolute bottom-[21%] left-[8%] h-px w-[62%] bg-white/40" />
        <div className="absolute left-[8%] top-[18%] h-3 w-3 rounded-full border-4 border-[#9d8cff] bg-white" />
        <div className="absolute left-[8%] top-[72%] h-3 w-3 rounded-full border-4 border-[#9d8cff] bg-white" />
        <div className="absolute left-[44%] top-[18%] h-3 w-3 rounded-full border-4 border-[#9d8cff] bg-white" />
        <div className="absolute bottom-[21%] right-[24%] h-3 w-3 rounded-full border-4 border-[#9d8cff] bg-white" />

        <div className="relative z-10 flex min-h-[760px] flex-col justify-between px-6 py-6 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
            <div>
              <p className="font-display text-2xl font-bold text-white">정예림</p>
              <p className="mt-1">Data Strategy Portfolio</p>
            </div>
            <nav className="flex flex-wrap gap-6">
              <a href="#corporate-awards" className="transition hover:text-white">
                Awards
              </a>
              <a href="#corporate-projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#corporate-contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          <div className="grid gap-10 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#b9afff]">
                Strategic Analytics
              </p>
              <h2 className="mt-5 font-sans text-[clamp(3.2rem,8vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.06em] text-white">
                데이터 기반 문제를
                <br />
                구조화하고,
                <br />
                결정 가능한
                <br />
                인사이트로 연결합니다.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/72 sm:text-lg">
                AI 연구와 데이터 분석, 그리고 대회 기반 검증 경험을 통해 비즈니스와 공공 영역의 문제를
                해석 가능한 구조로 바꾸고 있습니다.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#corporate-awards"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/16"
                >
                  수상 및 사례 보기
                </a>
                <a
                  href="#corporate-projects"
                  className="rounded-full bg-[#7a63ff] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a76ff]"
                >
                  프로젝트 보기
                </a>
              </div>
            </div>

            <div className="justify-self-end rounded-[28px] border border-white/10 bg-black/35 p-6 backdrop-blur-md lg:max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                Featured Validation
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight">{featuredAward.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/72">{featuredAward.summary}</p>
              <div className="mt-6 space-y-2 text-sm text-white/78">
                <p>Host: {featuredAward.host}</p>
                <p>Period: {featuredAward.period}</p>
                <p>Track: {featuredAward.track === "visualization" ? "시각화" : "분석"}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/10 pt-8 text-sm text-white/78 lg:grid-cols-3">
            {heroContent.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">{metric.label}</p>
                <p className="mt-3 font-display text-4xl font-bold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate-awards" className="mx-auto mt-8 max-w-7xl rounded-[30px] bg-white px-6 py-8 shadow-paper sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-500">Validated Cases</p>
            <h3 className="mt-4 font-display text-4xl font-bold text-ink-900">
              수상 및 문제해결 사례를
              <br />
              전략 포트폴리오처럼 구성한 버전
            </h3>
            <p className="mt-5 max-w-lg text-base leading-8 text-ink-700">
              첫 번째 시안은 도시적이고 프리미엄한 컨설팅 브랜드 톤을 참고해, 검증된 대회 경험이 가장
              앞에 보이도록 설계했습니다.
            </p>
          </div>
          <div className="grid gap-5">
            {supportingAwards.map((entry, index) => (
              <article key={entry.id} className="rounded-[24px] border border-ink-200 bg-ink-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
                  0{index + 2} Supporting Case
                </p>
                <h4 className="mt-3 font-display text-2xl font-bold text-ink-900">{entry.title}</h4>
                <p className="mt-2 text-sm leading-7 text-ink-700">{entry.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate-projects" className="mx-auto mt-8 max-w-7xl grid gap-6 lg:grid-cols-2">
        {projectData.map((project) => (
          <article
            key={project.id}
            className="rounded-[30px] border border-black/10 bg-[#13151c] p-8 text-white shadow-paper"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/45">{project.period}</p>
            <h3 className="mt-4 font-display text-3xl font-bold">{project.title}</h3>
            <p className="mt-4 text-base leading-8 text-white/72">{project.summary}</p>
            <div className="mt-6 grid gap-4 text-sm leading-7 text-white/70">
              <p>
                <span className="font-semibold text-white">Role:</span> {project.role}
              </p>
              <p>
                <span className="font-semibold text-white">Outcome:</span> {project.outcome}
              </p>
            </div>
          </article>
        ))}
      </section>

      <section id="corporate-contact" className="mx-auto mt-8 max-w-7xl rounded-[30px] bg-[#090b10] px-8 py-10 text-white shadow-paper">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">Contact</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="font-display text-4xl font-bold">Open for strategic analytics roles</h3>
            <p className="mt-3 text-white/68">{contactContent.location}</p>
          </div>
          <a href={`mailto:${contactContent.email}`} className="text-2xl font-semibold text-white">
            {contactContent.email}
          </a>
        </div>
      </section>
    </div>
  );
}
