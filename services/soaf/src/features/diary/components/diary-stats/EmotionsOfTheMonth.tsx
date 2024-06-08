import { Flex } from "@soaf/react-components-layout";

import { EMOTIONS } from "@/shared/constants";
import { EmotionKey } from "@/shared/types";
import { cn } from "@/shared/utils";

import { DiaryStatsCard } from "./DiaryStatsCard";

type EmotionsOfTheMonthProps = {
  data: {
    [key in EmotionKey]?: number;
  };
};

export const EmotionsOfTheMonth = ({ data }: EmotionsOfTheMonthProps) => {
  return (
    <DiaryStatsCard title="이 달의 감정">
      <Flex direction="column" gap={16} align="center">
        {(Object.entries(data) as [EmotionKey, number][]).map(
          ([emotion, count]) => {
            return (
              <Flex key={emotion} gap={12} className="w-full">
                <img
                  src={EMOTIONS[emotion].icon}
                  alt={emotion}
                  className="w-[27px] h-[27px]"
                />
                <Flex
                  direction="column"
                  gap={4}
                  className="flex-1"
                  align="start"
                >
                  <p className="label3">
                    {EMOTIONS[emotion].noun}{" "}
                    <span className="body3 text-gray200">{count}개 ()</span>
                  </p>
                  <div
                    className={cn([
                      "w-full h-[4px] rounded-full",
                      EMOTIONS[emotion].color,
                    ])}
                  />
                </Flex>
              </Flex>
            );
          },
        )}
      </Flex>
    </DiaryStatsCard>
  );
};
