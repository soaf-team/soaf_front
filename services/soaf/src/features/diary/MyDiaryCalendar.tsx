import { useDiaryListQuery } from "@/features/diary/queries";
import { Flex } from "@soaf/react-components-layout";
import { useState } from "react";

import { getDateStatus } from "./utils";
import { cn } from "@/shared/utils";
import { Diary } from "@/shared/types";
import { useFlow } from "@/pages/stackflow";

import { Calendar, DiaryContentDrawer } from "./components";
import {
  Drawer,
  DrawerTrigger,
  YearMonthSelect,
  EmotionSticker,
} from "@/shared/components";
import plus from "@assets/icons/plus.svg";

export const MyDiaryCalendar = () => {
  const { push } = useFlow();
  const { myDiaries } = useDiaryListQuery();
  const [selectedDiary, setSelectedDiary] = useState<Diary | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeSnapPoint, setActiveSnapPoint] = useState<
    string | number | null
  >(0.5);

  const handleDateClick = (diaryAtDate: Diary, isFuture: boolean) => {
    setActiveSnapPoint(0.5);
    if (diaryAtDate) {
      setSelectedDiary(diaryAtDate);
    }
    if (isFuture || diaryAtDate) return;
    push("NewDiaryStep1", {});
  };

  const resetSelectedDiary = () => {
    setTimeout(() => {
      setSelectedDiary(null);
    }, 300);
  };

  return (
    <Drawer
      snapPoints={[0.25, 0.5, 0.92]}
      closeThreshold={0.6}
      fadeFromIndex={3}
      onClose={resetSelectedDiary}
      activeSnapPoint={activeSnapPoint}
      setActiveSnapPoint={setActiveSnapPoint}
    >
      <Flex direction="column" className="items-center h-full">
        <YearMonthSelect
          currentDate={currentDate}
          handleCurrentDate={setCurrentDate}
        />
        <Calendar
          currentDate={currentDate}
          render={(day, index, isToday) => {
            const isFuture = day && getDateStatus(day, new Date()) === "future";
            const diaryAtDate = myDiaries.find(
              (diary: Diary) =>
                day && getDateStatus(new Date(diary.date), day) === "today",
            );
            const diaryMainEmotion = diaryAtDate?.emotions[0];
            const dayTextClass = isToday
              ? "text-white bg-gray600 rounded-full"
              : "text-gray200";
            const dayCircleClass = isFuture
              ? "cursor-default bg-[#F0F1F466]"
              : "cursor-pointer transition-all duration-200 ease-in-out bg-gray50";

            if (day == null) return <div key={index} />;

            return (
              <Flex
                key={index}
                direction="column"
                gap={5}
                justify="flex-end"
                align="center"
              >
                <span
                  className={cn([
                    "body4 w-[30px] h-[17px] text-gray300",
                    dayTextClass,
                  ])}
                >
                  {day?.getDate()}
                </span>
                <Flex
                  key={index}
                  align="center"
                  justify="center"
                  onClick={() => handleDateClick(diaryAtDate, isFuture)}
                  className={cn([
                    "relative h-[40px] w-[40px] rounded-full",
                    dayCircleClass,
                  ])}
                >
                  <DrawerTrigger disabled={!diaryAtDate}>
                    {diaryMainEmotion && (
                      <EmotionSticker emotion={diaryAtDate?.emotions[0]} />
                    )}
                    {isToday && !diaryMainEmotion && (
                      <img
                        src={plus}
                        alt="add_icon"
                        className="absolute_center w-[12px] h-[12px] pointer-events-none"
                      />
                    )}
                  </DrawerTrigger>
                </Flex>
              </Flex>
            );
          }}
        />
      </Flex>

      {selectedDiary && <DiaryContentDrawer diary={selectedDiary} />}
    </Drawer>
  );
};
