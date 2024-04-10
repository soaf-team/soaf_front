import { cn } from "@/shared/utils";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, shadow, className }: CardProps) => {
  return <div className={cn(["rounded-2xl", className])}>Card</div>;
};
