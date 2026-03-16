import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { HeroPhotoCollage } from "@/components/ui/HeroPhotoCollage";
import { ProfileSnapshot } from "@/components/ui/ProfileSnapshot";
import { HeroCompetitionCard } from "@/components/ui/HeroCompetitionCard";
import { competitionData } from "@/data/competitionData";
import { heroContent } from "@/data/profileData";

export function HeroSection() {
  const featuredCompetitions = competitionData.slice(0, 2);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 18 });

  const spotlightStyle = useMemo(
    () => ({
      background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(140,184,255,0.22), transparent 24%)`,
    }),
    [spotlight],
  );

  const updateSpotlight = (clientX: number, clientY: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;

    setSpotlight({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(79,115,217,0.22),transparent_32%),linear-gradient(180deg,rgba(10,15,24,0.92),rgba(10,15,24,0.76))]"
      onMouseMove={(event) => updateSpotlight(event.clientX, event.clientY, event.currentTarget.getBoundingClientRect())}
      onTouchMove={(event) => {
        const touch = event.touches[0];
        if (!touch) return;
        updateSpotlight(touch.clientX, touch.clientY, event.currentTarget.getBoundingClientRect());
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:64px_64px] opacity-40" />
      <div className="pointer-events-none absolute inset-0 transition duration-300" style={spotlightStyle} />
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
