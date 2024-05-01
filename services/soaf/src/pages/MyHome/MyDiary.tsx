import { useState } from "react";
import { useFilterdDiary } from "@/features/diary/queries";

import {
  PageLayout,
  BackButton,
  YearMonthSelect,
  AsyncBoundary,
} from "@/shared/components";
import { Flex } from "@soaf/react-components-layout";
import { DiaryFilter } from "@/features/myHome/components";
import { DiaryList } from "@/features/diary/components";

const MyDiary = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isPrivate, setIsPrivate] = useState(true);

  const { diaries } = useFilterdDiary({
    isPrivate: isPrivate.toString(),
    date: String(currentDate.getMonth() + 1),
  });

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

        <AsyncBoundary loadingFallback={<div>로딩중...</div>}>
          <DiaryList diariesByMonth={diaries} />
        </AsyncBoundary>
      </Flex>
    </PageLayout>
  );
};

export default MyDiary;
