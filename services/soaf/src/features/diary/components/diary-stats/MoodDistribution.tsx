import { MOOD_RATINGS, MOOD_RATING_COLORS } from "@/shared/constants";

import { Flex } from "@soaf/react-components-layout";
import { BarChart } from "@/shared/components";
import { DiaryStatsCard } from "./DiaryStatsCard";

type MoodDistributionProps = {
  data: {
    [key: string]: number;
  };
};

export const MoodDistribution = ({ data }: MoodDistributionProps) => {
  const barChartData = Object.entries(data).map(([level, ratio], index) => ({
    level,
    ratio,
    color: MOOD_RATING_COLORS[index],
  }));

  return (
    <DiaryStatsCard title="기분 분포">
      <Flex direction="column" gap={15} align="center">
        <Flex gap={12}>
          {MOOD_RATINGS.map((level, index) => {
            return (
              <Flex key={index} direction="column" gap={8} className="w-[42px]">
                <img
                  key={index}
                  src={level}
                  alt={`level${index + 1}`}
                  className="w-[36px] h-[36px]"
                />
                <span className="label4eb text-gray300">
                  {data[index + 1]}%
                </span>
              </Flex>
            );
          })}
        </Flex>
        <BarChart data={barChartData} />
      </Flex>
    </DiaryStatsCard>
  );
};
