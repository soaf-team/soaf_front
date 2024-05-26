import { Flex } from "@soaf/react-components-layout";
import { cn } from "@/shared/utils";

import level1 from "@assets/emotions/5level/level1.svg";
import level2 from "@assets/emotions/5level/level2.svg";
import level3 from "@assets/emotions/5level/level3.svg";
import level4 from "@assets/emotions/5level/level4.svg";
import level5 from "@assets/emotions/5level/level5.svg";

const LEVELS = [level1, level2, level3, level4, level5];

type DailyRaitingWidgetProps = {
  selectedRating: number | null;
  handleSelectRating: (index: number) => void;
};

export const DailyRaitingWidget = ({
  selectedRating,
  handleSelectRating,
}: DailyRaitingWidgetProps) => {
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
};
