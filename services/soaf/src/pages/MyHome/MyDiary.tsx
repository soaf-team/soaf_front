import { useState } from "react";
import { Flex } from "@soaf/react-components-layout";
import { useFilterdDiary } from "@/features/diary/queries";
import { useFlow } from "@/pages/stackflow";

import {
  PageLayout,
  BackButton,
  YearMonthSelect,
  AsyncBoundary,
  NonDataFallback,
  Button,
} from "@/shared/components";
import { DiaryFilter } from "@/features/myHome/components";
import { DiaryList } from "@/features/diary/components";

function MyDiary() {
  const { push } = useFlow();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isPrivate, setIsPrivate] = useState(true);

  const { diaries } = useFilterdDiary({
    isPrivate: isPrivate.toString(),
    date: String(currentDate.getMonth() + 1),
  });

  const handleClickWriteDiaryButton = () => {
    push("NewDiaryStep1", {});
  };

  return (
    <PageLayout
      header={{
        title: <span className="head6b">나의 일기</span>,
        leftSlot: <BackButton />,
      }}
    >
      <Flex direction="column" align="center" gap={22}>
        <DiaryFilter setIsPrivate={setIsPrivate} />

        <YearMonthSelect
          currentDate={currentDate}
          handleCurrentDate={setCurrentDate}
        />

        {diaries.length === 0 ? (
          <>
            <div className="w-full absolute_center">
              <NonDataFallback>
                <p>아직 작성된 일기가 없어요.</p>
                <p>오늘의 일기를 작성해보실래요?</p>
              </NonDataFallback>
            </div>
            <div className="fixed_bottom_button">
              <Button variant="primary" onClick={handleClickWriteDiaryButton}>
                일기 작성
              </Button>
            </div>
          </>
        ) : (
          <AsyncBoundary>
            <DiaryList diariesByMonth={diaries} />
          </AsyncBoundary>
        )}
      </Flex>
    </PageLayout>
  );
}

export default MyDiary;
