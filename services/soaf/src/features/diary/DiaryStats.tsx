import {
  MoodFlow,
  MoodDistribution,
  EmotionsOfTheMonth,
} from "./components/diary-stats";

type DiaryStatsProps = {
  currentDate: Date;
};

export const DiaryStats = ({ currentDate }: DiaryStatsProps) => {
  console.log(currentDate);

  return (
    <>
      <MoodFlow data={MOOD_FLOW_DATA} />
      <MoodDistribution data={MOOD_DISTRIBUTION_DATA} />
      <EmotionsOfTheMonth data={EMOTIONS_OF_THE_MONTH_DATA} />
    </>
  );
};

const MOOD_FLOW_DATA = [2, 3, 3];

const MOOD_DISTRIBUTION_DATA = {
  "1": 18,
  "2": 29,
  "3": 6,
  "4": 29,
  "5": 18,
};

const EMOTIONS_OF_THE_MONTH_DATA = {
  슬픈: 4,
  설레는: 3,
  화난: 2,
};
