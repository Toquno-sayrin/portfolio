import { Container } from "@/components/layout/Container";
import { HeroPhotoCollage } from "@/components/ui/HeroPhotoCollage";
import { ProfileSnapshot } from "@/components/ui/ProfileSnapshot";
import { HeroCompetitionCard } from "@/components/ui/HeroCompetitionCard";
import { competitionData } from "@/data/competitionData";
import { heroContent } from "@/data/profileData";

export function HeroSection() {
  const featuredCompetitions = competitionData.slice(0, 2);

  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-200 bg-white">
      <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:py-24">
        <div className="max-w-4xl">
          <p className="font-display text-xl font-bold tracking-tight text-ink-800 md:text-2xl">
            {heroContent.title}
          </p>
          <h1 className="mt-3 whitespace-nowrap font-display text-[clamp(3.6rem,8vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.05em] text-ink-900">
            {heroContent.name}
          </h1>
          <div className="mt-6">
            <HeroPhotoCollage images={heroContent.gallery} />
          </div>
          <p className="mt-5 max-w-2xl whitespace-pre-line text-lg leading-8 text-ink-700">
            {heroContent.description}
          </p>
          <ProfileSnapshot content={heroContent} />
        </div>
        <div className="space-y-5 lg:pt-14">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-bold leading-tight text-ink-900">
              수상 및 문제해결 사례
            </h2>
            <p className="mt-3 text-sm leading-7 text-ink-700">
              대회와 공모전에서 검증받은 분석 경험을 중심으로, 어떤 문제를 정의하고 어떻게 인사이트로
              연결했는지 보여줍니다.
            </p>
          </div>
          <div className="grid gap-5">
            {featuredCompetitions.map((entry, index) => (
              <HeroCompetitionCard key={entry.id} index={index} entry={entry} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
