import { useDiaryQuery } from "@/shared/hooks";
import { Flex } from "@soaf/react-components-layout";
import { useState } from "react";

import { getDateStatus } from "./utils";
import { cn } from "@/shared/utils";
import { Diary } from "@/shared/types";
import { useFlow } from "@/pages/stackflow";

import { Calendar, DiaryDetailDrawer } from "./components";
import {
  Drawer,
  DrawerTrigger,
  YearMonthSelect,
  EmotionSticker,
} from "@/shared/components";
import plus from "@assets/icons/plus.svg";

export const MyDiaryCalendar = () => {
  const { push } = useFlow();
  const { myDiaries } = useDiaryQuery();
  const [selectedDiary, setSelectedDiary] = useState<Diary | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDateClick = (diaryAtDate: Diary, isFuture: boolean) => {
    if (diaryAtDate) {
      setSelectedDiary(diaryAtDate);
    }
    if (isFuture || diaryAtDate) return;
    push("NewDiaryPage", { step: 1 });
  };

  const resetSelectedDiary = () => {
    setTimeout(() => {
      setSelectedDiary(null);
    }, 300);
  };

  return (
    <Drawer
      snapPoints={[0.25, 0.5, 0.95]}
      closeThreshold={0.6}
      fadeFromIndex={4}
      onClose={resetSelectedDiary}
      activeSnapPoint={0.5}
    >
      <Flex direction="column" className="h-full items-center">
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
            // const dayCircleClass = isFuture
            //   ? "cursor-default"
            //   : "cursor-pointer transition-all duration-200 ease-in-out hover:shadow-hover";

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
                    "relative h-[40px] w-[40px] bg-gray50 rounded-full",
                    // dayCircleClass,
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

      {selectedDiary && <DiaryDetailDrawer diary={selectedDiary} />}
    </Drawer>
  );
};
