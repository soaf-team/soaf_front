import { useDiaryQuery } from "@/shared/hooks";
import { Flex } from "@soaf/react-components-layout";

import { cn } from "@/shared/utils";

import { Calendar } from "./Calendar";
import { EmotionSticker } from "@/shared/components";
import { useFlow } from "@/pages/stackflow";

import plus from "@assets/icons/plus.svg";

export const MyDiaryCalendar = () => {
  const { push } = useFlow();
  const { myDiaries } = useDiaryQuery();

  const handleDiaryClick = (diary, isToday: boolean) => {
    if (isToday) return push("NewDiary", {});

    push("DiaryDetail", { diaryId: diary.id });
  };

  return (
    <Flex direction="column" className="h-full">
      <Calendar
        render={(day, index, isToday) => {
          const dayClass = isToday
            ? "text-white bg-gray600 rounded-full"
            : "text-gray200";

          const diaryAtDate = myDiaries.find((diary) => {
            const diaryDate = new Date(diary.date);
            return (
              day?.getFullYear() === diaryDate.getFullYear() &&
              day?.getMonth() === diaryDate.getMonth() &&
              day?.getDate() === diaryDate.getDate()
            );
          });

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
                  "body4 w-[30px] h-[17px] text-gray300 text-center",
                  dayClass,
                ])}
              >
                {day?.getDate()}
              </span>
              <Flex
                key={index}
                align="center"
                justify="center"
                onClick={() => handleDiaryClick(diaryAtDate, isToday)}
                className="relative h-10 w-10 bg-gray50 rounded-full"
              >
                {diaryAtDate?.emotions[0] && (
                  <EmotionSticker emotion={diaryAtDate?.emotions[0]} />
                )}
                {isToday && !diaryAtDate?.emotions[0] && (
                  <img
                    src={plus}
                    alt="plus"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[12px] h-[12px]"
                  />
                )}
              </Flex>
            </Flex>
          );
        }}
      />
    </Flex>
  );
};
