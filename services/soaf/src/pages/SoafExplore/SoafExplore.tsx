import dayjs from "dayjs";

import { useState } from "react";
import { useFlow } from "@/pages/stackflow";
import { useCalendar } from "@/features/diary/hooks";
import { useDiaryQueryByMonth } from "@/shared/hooks";
import triangle from "@assets/icons/triangle.svg";
import { YearMonthSelectDrawer, DiaryCard } from "@/features/diary/components";
import { PageLayout, Button } from "@shared/components";
import { IconBack } from "@stackflow/plugin-basic-ui";
import { Flex } from "@soaf/react-components-layout";
import { Drawer, DrawerTrigger } from "@/shared/components/dialog";
import { Diary } from "@/shared/types";
import { NoneDiary } from "@/features/explore/components";

const SoafExplore = () => {
  const { replace, push } = useFlow();
  const { currentDate, handleYearMonthChange } = useCalendar();
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

        <Drawer>
          <DrawerTrigger className="mb-[24px]">
            <Flex align="center" gap={4}>
              <h2 className="label1sb">
                {currentDate.getFullYear()}.
                {currentDate.getMonth() + 1 < 10
                  ? `0${currentDate.getMonth() + 1}`
                  : `${currentDate.getMonth() + 1}`}
              </h2>
              <img src={triangle} alt="triangle" className="w-[8px] h-[5px]" />
            </Flex>
          </DrawerTrigger>
          <YearMonthSelectDrawer
            currentDate={currentDate}
            handleYearMonthChange={handleYearMonthChange}
          />
        </Drawer>

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
