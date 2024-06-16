import { ActivityComponentType } from "@stackflow/react";
import { useState } from "react";
import { Flex } from "@soaf/react-components-layout";

import { PageLayout, YearMonthSelect } from "@shared/components";
import { DiaryStats } from "@/features/diary";

const DiaryStatsPage: ActivityComponentType = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <PageLayout>
      <Flex direction="column" align="center" gap={16} className="pb-[20px]">
        <Flex justify="center" align="center" className="pt-[14px] pb-[6px]">
          <YearMonthSelect
            currentDate={currentDate}
            handleCurrentDate={setCurrentDate}
          />
        </Flex>
        <DiaryStats currentDate={currentDate} />
      </Flex>
    </PageLayout>
  );
};

export default DiaryStatsPage;
