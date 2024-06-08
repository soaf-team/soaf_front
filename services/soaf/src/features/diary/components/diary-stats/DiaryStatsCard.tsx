import { ReactNode } from "react";
import { Card } from "@/shared/components";

type MoodFlowProps = {
  title: string;
  children: ReactNode;
};

export function DiaryStatsCard({ children, title }: MoodFlowProps) {
  return (
    <Card className="w-full p-[24px] gap-[24px]">
      <h2 className="head6sb text-left">{title}</h2>
      {children}
    </Card>
  );
}
