import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categoryStyles: Record<string, string> = {
  Coffee: "border-[#d8c0ae] bg-[#efe2d6] text-[#6b4226]",
  Honey: "border-[#ead49c] bg-[#faeed0] text-[#8a5a0f]",
  Spices: "border-[#cdd5ae] bg-[#e8ecd9] text-[#5f6c36]",
  Recipes: "border-[#cdd5ae] bg-[#e8ecd9] text-[#5f6c36]",
  Gifting: "border-[#e6c9ae] bg-[#f6e5d6] text-[#7a4012]",
  Export: "border-[#c9d2ca] bg-[#e5ebe6] text-[#36503e]"
};

export function CategoryBadge({
  category,
  className
}: {
  category: string;
  className?: string;
}) {
  return (
    <Badge
      variant="outline"
      className={cn("border px-3 py-1 text-[10px] tracking-[0.16em]", categoryStyles[category], className)}
    >
      {category}
    </Badge>
  );
}
