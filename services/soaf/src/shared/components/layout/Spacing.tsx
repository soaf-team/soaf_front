import { cn } from "@/shared/utils";

type SpacingProps = {
  size?: number;
  direction?: "vertical" | "horizontal";
};

export function Spacing({ size = 10, direction = "vertical" }: SpacingProps) {
  const className =
    direction === "vertical" ? `h-[${size}px] w-0` : `w-[${size}px] h-0`;

  return <div className={cn(className)} />;
}
