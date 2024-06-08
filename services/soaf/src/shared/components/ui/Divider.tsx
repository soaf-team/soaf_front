import { cn } from "@/shared/utils";

interface Props {
  className?: string;
  vertical?: boolean;
}

export function Divider({ className = "", vertical = false }: Props) {
  return (
    <div
      className={cn(
        "border-t border-border",
        vertical ? "w-0 h-full" : "w-full h-px",
        className,
      )}
    />
  );
}
