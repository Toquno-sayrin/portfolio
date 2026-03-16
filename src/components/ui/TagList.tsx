type TagListProps = {
  items: string[];
};

export function TagList({ items }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
