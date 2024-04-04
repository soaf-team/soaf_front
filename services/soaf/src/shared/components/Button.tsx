import * as React from "react";

import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@src/shared/utils";

const buttonVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-[16px] 
   w-full ring-offset-background transition-colors`,
  {
    variants: {
      variant: {
        primary: "bg-main_gradient text-white font-bold",
        primary_disabled: "bg-gray100 text-white font-bold",
        secondary: "bg-gray50 text-black font-semibold",
        warn: "bg-warn text-white font-semibold",
        ghost: "bg-transparent tex-black font-semibold",
      },
      size: {
        md: "h-[52px] text-[18px]",
        sm: "h-[48px] text-[18px]",
        xs: "h-[42px] text-[14px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
