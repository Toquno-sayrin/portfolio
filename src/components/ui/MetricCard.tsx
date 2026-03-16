import type { Metric } from "@/types/content";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <div className="rounded-[28px] border border-ink-200 bg-white p-5 shadow-paper">
      <p className="text-3xl font-bold text-ink-900">{metric.value}</p>
      <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-ink-600">{metric.label}</p>
    </div>
  );
}
