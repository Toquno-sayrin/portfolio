import type { HeroContent } from "@/types/content";

type ProfileSnapshotProps = {
  content: HeroContent;
};

export function ProfileSnapshot({ content }: ProfileSnapshotProps) {
  const programmingGroup = content.skillGroups.find((group) => group.title === "Programming");

  return (
    <div className="mt-10 grid gap-10">
      <div>
        <h3 className="font-display text-2xl font-bold text-ink-900">희망 직무</h3>
        <div className="mt-4 grid gap-5">
          {content.targetRoles.map((group) => (
            <div key={group.company}>
              <p className="text-lg font-semibold text-ink-900">{group.company}</p>
              <p className="mt-2 text-lg leading-8 text-ink-700">{group.roles.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
      {programmingGroup ? (
        <div>
          <h3 className="font-display text-2xl font-bold text-ink-900">기술 스택</h3>
          <p className="mt-4 text-lg leading-8 text-ink-700">
            {programmingGroup.items.join(" · ")}
          </p>
        </div>
      ) : null}
    </div>
  );
}
