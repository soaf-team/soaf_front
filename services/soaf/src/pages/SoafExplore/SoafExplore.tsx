import dayjs from "dayjs";

import { useState } from "react";
import { useFlow } from "@/pages/stackflow";
import { useDiaryQueryByMonth } from "@/shared/hooks";
import { PageLayout, Button, YearMonthSelect } from "@shared/components";
import { IconBack } from "@stackflow/plugin-basic-ui";
import { Flex } from "@soaf/react-components-layout";
import { Diary } from "@/shared/types";
import { NoneDiary } from "@/features/explore/components";
import { DiaryCard } from "@/features/diary/components";

const SoafExplore = () => {
  const { replace, push } = useFlow();
  const [currentDate, setCurrentDate] = useState(new Date());
  const { diariesByMonth } = useDiaryQueryByMonth({
    params: dayjs(currentDate).format("YYYY.MM"),
  });

  const [isSelected, setIsSelected] = useState<Diary[]>([]);

  const handleDiarySelect = (index: number) => {
    setIsSelected((prev) => {
      if (prev.includes(diariesByMonth[index])) {
        return prev.filter((diary) => diary !== diariesByMonth[index]);
      } else {
        return [...prev, diariesByMonth[index]];
      }
    });
  };

  const handleButtonClick = () => {
    if (diariesByMonth.length === 0) {
      replace("NewDiary", {});
      return;
    }

    // TODO: 소프 탐색 기능 추가
    push("MatchedUser", {});
  };

  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: (
          <button onClick={() => replace("DiaryCalendar", {})}>
            <IconBack />
          </button>
        ),
        rightSlot: null,
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
            <NoneDiary />
          </div>
        ) : (
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap={12}
            className="w-[95%]"
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

        <div className="fixed_bottom_button">
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
};

export default SoafExplore;
