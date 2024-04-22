import { useState } from "react";

import {
  PageLayout,
  BackButton,
  YearMonthSelect,
  AsyncBoundary,
} from "@/shared/components";
import { Flex } from "@soaf/react-components-layout";
import { MyDiaryList } from "@/features/diary";
import { DiaryFilter } from "@/features/myHome/components";

const MyDiary = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isPrivate, setIsPrivate] = useState(true);

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
          <MyDiaryList currentDate={currentDate} isPrivate={isPrivate} />
        </AsyncBoundary>
      </Flex>
    </PageLayout>
  );
};

export default MyDiary;
