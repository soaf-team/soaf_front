import { ActivityComponentType } from "@stackflow/react";
import { useState } from "react";

import {
  AsyncBoundary,
  BackButton,
  PageLayout,
  YearMonthSelect,
} from "@shared/components";
import { MyDiaryList } from "@/features/diary";
import { Flex } from "@soaf/react-components-layout";

const DiaryListPage: ActivityComponentType = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <PageLayout header={{ leftSlot: <BackButton /> }}>
      <Flex direction="column" align="center" gap={22}>
        <YearMonthSelect
          currentDate={currentDate}
          handleCurrentDate={setCurrentDate}
        />
        <AsyncBoundary loadingFallback={<>로딩중...</>}>
          <MyDiaryList currentDate={currentDate} />
        </AsyncBoundary>
      </Flex>
    </PageLayout>
  );
};

export default DiaryListPage;
