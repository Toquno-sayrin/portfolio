import { competitionData } from "@/data/competitionData";
import { contactContent, heroContent } from "@/data/profileData";
import { projectData } from "@/data/projectData";

export function ConceptEditorialPortrait() {
  return (
    <div className="bg-[#f2ede5] px-4 py-8 lg:px-8">
      <section className="mx-auto max-w-7xl rounded-[34px] bg-[#1a140d] px-4 py-4 shadow-[0_30px_80px_rgba(0,0,0,0.12)] sm:px-8 sm:py-8">
        <div className="relative overflow-hidden rounded-[24px] border border-white/70">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroContent.gallery[1].src})` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,17,10,0.82),rgba(24,17,10,0.28))]" />
          <div className="relative z-10 flex min-h-[680px] flex-col px-6 py-6 text-[#f8f0e7] sm:px-10">
            <div className="flex items-center justify-between gap-4 text-sm text-[#f8f0e7]/75">
              <span className="font-serif text-lg tracking-[0.14em]">YJ</span>
              <nav className="hidden gap-8 md:flex">
                <a href="#editorial-awards">Awards</a>
                <a href="#editorial-projects">Projects</a>
                <a href="#editorial-contact">Contact</a>
              </nav>
            </div>

            <div className="flex flex-1 items-center">
              <div className="max-w-xl">
                <p className="font-serif text-[clamp(3rem,7vw,5.3rem)] leading-[0.94] tracking-[-0.04em]">
                  정예림
                </p>
                <p className="mt-2 text-base uppercase tracking-[0.42em] text-[#e7d8c7]/70">
                  Yearim Jeoung Portfolio
                </p>
                <p className="mt-8 max-w-lg text-lg leading-8 text-[#f8f0e7]/80">
                  분석 역량을 차분하고 인물 중심의 분위기로 보여주는 시안입니다. 수상 경험과 프로젝트를
                  개인 브랜딩 관점에서 읽히게 설계했습니다.
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#b26d42] text-sm font-semibold text-white">
              YJ
            </div>

            <div className="mt-auto grid gap-6 border-t border-white/20 pt-6 text-[#f8f0e7]/78 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.22em]">Primary Positioning</p>
                <p className="mt-3 text-xl font-medium">Product & Business Data Analyst</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {heroContent.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#f8f0e7]/55">{metric.label}</p>
                    <p className="mt-2 text-lg">{metric.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="editorial-awards" className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[30px] bg-[#f8f3eb] p-8 shadow-paper">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7f6a58]">Editorial Notes</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight text-[#1e1811]">
            분위기와 신뢰감,
            <br />
            그리고 개인 브랜딩을 강조한 버전
          </h3>
          <p className="mt-6 text-base leading-8 text-[#5d5147]">
            두 번째 시안은 사진과 인상, 톤 앤 무드를 중심으로 설계했습니다. 포트폴리오를 정보판보다 한
            사람의 작업 세계를 소개하는 공간처럼 읽히게 하는 방식입니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {competitionData.map((entry) => (
            <article key={entry.id} className="rounded-[30px] bg-white p-7 shadow-paper">
              <p className="text-sm uppercase tracking-[0.22em] text-[#9d8570]">{entry.period}</p>
              <h4 className="mt-3 font-serif text-3xl leading-tight text-[#201812]">{entry.title}</h4>
              <p className="mt-4 text-sm leading-7 text-[#62564d]">{entry.summary}</p>
              <p className="mt-5 text-sm text-[#7f6e61]">{entry.host}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="editorial-projects" className="mx-auto mt-8 max-w-7xl rounded-[30px] bg-[#f8f3eb] p-8 shadow-paper">
        <div className="grid gap-8 lg:grid-cols-2">
          {projectData.map((project) => (
            <article key={project.id} className="border-b border-[#dfd4c8] pb-8 last:border-b-0 last:pb-0 lg:last:border-b">
              <p className="text-xs uppercase tracking-[0.28em] text-[#a48974]">{project.period}</p>
              <h4 className="mt-3 font-serif text-3xl leading-tight text-[#1d1711]">{project.title}</h4>
              <p className="mt-4 text-base leading-8 text-[#5a4f47]">{project.summary}</p>
              <p className="mt-4 text-sm leading-7 text-[#7c6d61]">{project.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="editorial-contact" className="mx-auto mt-8 max-w-7xl rounded-[30px] bg-[#1b140d] px-8 py-10 text-[#f8f0e7] shadow-paper">
        <p className="text-xs uppercase tracking-[0.28em] text-[#d8c6b5]/60">Contact</p>
        <h3 className="mt-4 font-serif text-4xl">Open for thoughtful analytics work</h3>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <p className="text-lg">{contactContent.email}</p>
          <p className="text-lg lg:text-right">{contactContent.location}</p>
        </div>
      </section>
    </div>
  );
}
