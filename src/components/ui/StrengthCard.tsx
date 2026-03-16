import type { CoreStrength } from "@/types/content";

type StrengthCardProps = {
  strength: CoreStrength;
};

export function StrengthCard({ strength }: StrengthCardProps) {
  return (
    <article className="rounded-[28px] border border-ink-200 bg-white p-6 shadow-paper">
      <h3 className="font-serif text-2xl text-ink-900">{strength.title}</h3>
      <p className="mt-4 leading-7 text-ink-600">{strength.description}</p>
    </article>
  );
}
