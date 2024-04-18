import { useState } from "react";

import { AsyncBoundary, PageLayout, YearMonthSelect } from "@shared/components";
import { MyDiaryList } from "@/features/diary";
import { Flex } from "@soaf/react-components-layout";

const DiaryListPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <PageLayout header={{ leftSlot: "back" }}>
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
