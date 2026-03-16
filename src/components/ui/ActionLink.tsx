import type { LinkItem } from "@/types/content";

type ActionLinkProps = {
  item: LinkItem;
  variant?: "primary" | "secondary" | "inline";
};

export function ActionLink({ item, variant = "inline" }: ActionLinkProps) {
  const variants = {
    primary: "bg-frost-500 text-white hover:bg-frost-400",
    secondary: "border border-white/20 bg-white/5 text-white hover:border-frost-300 hover:bg-white/10",
    inline: "text-ink-100 hover:text-white",
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
