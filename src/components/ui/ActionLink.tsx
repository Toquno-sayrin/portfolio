import type { LinkItem } from "@/types/content";

type ActionLinkProps = {
  item: LinkItem;
  variant?: "primary" | "secondary" | "inline";
};

export function ActionLink({ item, variant = "inline" }: ActionLinkProps) {
  const variants = {
    primary: "bg-ink-900 text-white hover:bg-ink-800",
    secondary: "border border-ink-300 text-ink-900 hover:border-ink-500",
    inline: "text-ink-700 hover:text-ink-900",
  };

  return (
    <a
      href={item.href}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${variants[variant]}`}
    >
      {item.label}
    </a>
  );
}
