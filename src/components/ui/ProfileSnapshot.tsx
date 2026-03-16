import type { HeroContent } from "@/types/content";

type ProfileSnapshotProps = {
  content: HeroContent;
};

export function ProfileSnapshot({ content }: ProfileSnapshotProps) {
  const programmingGroup = content.skillGroups.find((group) => group.title === "Programming");

  return (
    <div className="mt-10 grid gap-10">
      <div>
        <h3 className="font-display text-2xl font-bold text-ink-900">Target Roles</h3>
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
          <h3 className="font-display text-2xl font-bold text-ink-900">{programmingGroup.title}</h3>
          <p className="mt-4 text-lg leading-8 text-ink-700">
            {programmingGroup.items.join(" · ")}
          </p>
        </div>
      ) : null}
      <div>
        <h3 className="font-display text-2xl font-bold text-ink-900">Core Strengths</h3>
        <ul className="mt-5 space-y-3 text-lg leading-8 text-ink-800">
          {content.strengths.map((strength) => (
            <li key={strength} className="flex items-start gap-3">
              <span className="mt-3 h-2 w-2 rounded-full bg-ink-900" />
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
