import dayjs from "dayjs";

import { useDiaryQueryByMonth } from "@/shared/hooks";
import { DiaryList } from "./components";

type MyDiaryListProps = {
  currentDate: Date;
};

export const MyDiaryList = ({ currentDate }: MyDiaryListProps) => {
  const { diariesByMonth } = useDiaryQueryByMonth({
    params: dayjs(currentDate).format("YYYY.MM"),
  });

  return <DiaryList diariesByMonth={diariesByMonth} shadow={false} />;
};
