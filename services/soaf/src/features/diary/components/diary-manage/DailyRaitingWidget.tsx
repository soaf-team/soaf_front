import { Flex } from "@soaf/react-components-layout";
import { cn } from "@/shared/utils";
import { MOOD_RATINGS } from "@/shared/constants";
import { MoodRating } from "@/shared/types";

type DailyRaitingWidgetProps = {
  selectedRating: MoodRating | null;
  handleSelectRating: (index: number) => void;
};

export const DailyRaitingWidget = ({
  selectedRating,
  handleSelectRating,
}: DailyRaitingWidgetProps) => {
  return (
    <Flex gap={12}>
      {MOOD_RATINGS.map((level, index) => {
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
};
