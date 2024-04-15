import { Card } from "@/shared/components";
import { cn } from "@/shared/utils";

interface Props {
  name: string;
  percent: number;
  onClick?: () => void;
  isSelected?: boolean;
  className?: string;
}

export const MatchedUserItem = ({
  name,
  percent,
  onClick,
  isSelected,
  className,
}: Props) => {
  return (
    <Card
      direction="row"
      align="center"
      justify="space-between"
      isSelected={isSelected}
      onClick={onClick}
      shadow
      className={cn(["w-full", className])}
    >
      <p className="label2">{name}</p>

      <p className="text-gray-400 label3">유사율 {percent}%</p>
    </Card>
  );
};
