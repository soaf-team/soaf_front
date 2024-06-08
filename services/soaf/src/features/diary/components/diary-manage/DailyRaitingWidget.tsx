import { Flex } from "@soaf/react-components-layout";
import { cn } from "@/shared/utils";
import { LEVELS } from "@/shared/constants";

type DailyRaitingWidgetProps = {
  selectedRating: number | null;
  handleSelectRating: (index: number) => void;
};

export function DailyRaitingWidget({
  selectedRating,
  handleSelectRating,
}: DailyRaitingWidgetProps) {
  return (
    <Flex gap={12}>
      {LEVELS.map((level, index) => {
        const isSelected = selectedRating === index + 1;
        const selectedClass = isSelected ? "opacity-100" : "opacity-30";

        return (
          <img
            onClick={() => handleSelectRating(index + 1)}
            key={index}
            src={level}
            alt={`level${index + 1}`}
            className={cn(["w-[50px] h-[50px]"], selectedClass)}
          />
        );
      })}
    </Flex>
  );
}
