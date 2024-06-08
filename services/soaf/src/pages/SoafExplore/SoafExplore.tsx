import dayjs from "dayjs";

import { useState } from "react";
import {
  PageLayout,
  Button,
  YearMonthSelect,
  BackButton,
  NonDataFallback,
} from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useFlow } from "@/pages/stackflow";
import { useDiaryQueryByMonth } from "@/features/diary/queries";
import { Diary } from "@/shared/types";
import { DiaryCard } from "@/features/diary/components";

function SoafExplore() {
  const { replace, push } = useFlow();
  const [currentDate, setCurrentDate] = useState(new Date());
  const { diariesByMonth } = useDiaryQueryByMonth({
    params: dayjs(currentDate).format("YYYY.MM"),
  });

  const [isSelected, setIsSelected] = useState<Diary[]>([]);

  const handleDiarySelect = (index: number) => {
    setIsSelected(prev => {
      if (prev.includes(diariesByMonth[index])) {
        return prev.filter(diary => diary !== diariesByMonth[index]);
      }
      return [...prev, diariesByMonth[index]];
    });
  };

  const handleButtonClick = () => {
    if (diariesByMonth.length === 0) {
      replace("NewDiaryStep1", {});
      return;
    }

    // TODO: 소프 탐색 기능 추가
    push("MatchedUser", {});
  };

  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
      }}
      className="overflow-y-auto"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="overflow-hidden"
      >
        <Flex direction="column" gap={8} className="mb-[22px]">
          <p className="text-[20px] leading-[32px] font-bold">소프 탐색</p>

          <Flex direction="column" className="font-normal label3 text-gray800">
            <p>원하는 일기를 고르고 탐색하기 버튼을 누르면</p>
            <p>비슷한 이야기를 가진 상대의 홈을 탐색할 수 있어요.</p>
          </Flex>
        </Flex>

        <YearMonthSelect
          currentDate={currentDate}
          handleCurrentDate={setCurrentDate}
        />

        {diariesByMonth.length === 0 ? (
          <div className="w-full absolute_center">
            <NonDataFallback>
              <p>아직 작성된 일기가 없어요.</p>
              <p>일기를 먼저 작성해야 탐색이 가능해요.</p>
            </NonDataFallback>
          </div>
        ) : (
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap={12}
            className="w-[95%] mt-[24px]"
          >
            {diariesByMonth.map((diary: Diary, index: number) => (
              <DiaryCard
                key={diary.id}
                diary={diary}
                isCheckable
                isSelected={isSelected.includes(diary)}
                onClick={() => handleDiarySelect(index)}
                className={
                  index === diariesByMonth.length - 1 ? "mb-[100px]" : ""
                }
              />
            ))}
          </Flex>
        )}

        <div className="bg-white fixed left-0 right-0 bottom-0 z-50 h-[150px] px-[16px]">
          <Button
            variant={
              diariesByMonth.length > 0 && isSelected.length === 0
                ? "primary_disabled"
                : "primary"
            }
            disabled={diariesByMonth.length > 0 && isSelected.length === 0}
            onClick={handleButtonClick}
          >
            {diariesByMonth.length === 0 ? "일기 작성" : "소프 탐색"}
          </Button>
        </div>
      </Flex>
    </PageLayout>
  );
}

export default SoafExplore;
