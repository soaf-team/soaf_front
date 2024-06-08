import { DiaryStatsCard } from "./DiaryStatsCard";

type MoodFlowProps = {
  data: number[];
};

export function MoodFlow({ data }: MoodFlowProps) {
  console.log(data);
  return <DiaryStatsCard title="기분 흐름">기분 흐름 차트</DiaryStatsCard>;
}
