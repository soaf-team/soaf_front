import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "src/shared/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border text-[12px] text-white",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gray300 px-[12px] py-[4px]",
        chat: "border-transparent bg-warn p-[6px] min-w-[24px]",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
