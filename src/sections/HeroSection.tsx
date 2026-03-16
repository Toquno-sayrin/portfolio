import { Container } from "@/components/layout/Container";
import { HeroPhotoCollage } from "@/components/ui/HeroPhotoCollage";
import { ProfileSnapshot } from "@/components/ui/ProfileSnapshot";
import { HeroCompetitionCard } from "@/components/ui/HeroCompetitionCard";
import { competitionData } from "@/data/competitionData";
import { heroContent } from "@/data/profileData";

export function HeroSection() {
  const featuredCompetitions = competitionData.slice(0, 2);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(79,115,217,0.22),transparent_32%),linear-gradient(180deg,rgba(10,15,24,0.92),rgba(10,15,24,0.76))]"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] opacity-40" />
      <Container className="relative grid gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:py-24">
        <div className="max-w-4xl">
          <p className="font-display text-xl font-bold tracking-tight text-frost-300 md:text-2xl">
            {heroContent.title}
          </p>
          <h1 className="mt-3 whitespace-nowrap font-display text-[clamp(3.2rem,8vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.05em] text-white">
            {heroContent.name}
          </h1>
          <div className="mt-6">
            <HeroPhotoCollage images={heroContent.gallery} />
          </div>
          <ProfileSnapshot content={heroContent} />
        </div>
        <div className="space-y-5 lg:pt-14">
          <div className="max-w-md">
            <h2 className="font-display text-3xl font-bold leading-tight text-white">
              수상 및 문제해결 사례
            </h2>
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
