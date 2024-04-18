import dayjs from "dayjs";

import { useDiaryQueryByMonth } from "@/shared/hooks";
import { DiaryList } from "./components";
import { Button, NonDataFallback } from "@/shared/components";
import { useFlow } from "@/pages/stackflow";

type MyDiaryListProps = {
  currentDate: Date;
};

export const MyDiaryList = ({ currentDate }: MyDiaryListProps) => {
  const { diariesByMonth } = useDiaryQueryByMonth({
    params: dayjs(currentDate).format("YYYY.MM"),
  });
  const { push } = useFlow();

  const handleClickWriteDiaryButton = () => {
    push("NewDiary", {});
  };

  if (diariesByMonth.length === 0) {
    return (
      <>
        <div className="absolute_center">
          <NonDataFallback>
            <p>아직 작성된 일기가 없어요.</p>
            <p>오늘의 일기를 작성해보실래요?</p>
          </NonDataFallback>
        </div>
        <div className="flex fixed left-[18px] right-[18px] bottom-[50px]">
          <Button variant="primary" onClick={handleClickWriteDiaryButton}>
            일기 작성
          </Button>
        </div>
      </>
    );
  }

  return <DiaryList diariesByMonth={diariesByMonth} shadow={false} />;
};
