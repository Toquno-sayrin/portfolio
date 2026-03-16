import type { AgentDefinition } from "@/types/content";

type AgentCardProps = {
  agent: AgentDefinition;
};

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <article className="rounded-[28px] border border-ink-200 bg-white p-6 shadow-paper">
      <h3 className="font-serif text-2xl text-ink-900">{agent.name}</h3>
      <p className="mt-3 leading-7 text-ink-600">{agent.responsibility}</p>
      <ul className="mt-4 space-y-2 text-sm text-ink-700">
        {agent.outputs.map((output) => (
          <li key={output}>- {output}</li>
        ))}
      </ul>
    </article>
  );
}
