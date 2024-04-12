import { useDiaryQuery } from "@/shared/hooks";
import { Calendar } from "./Calendar";
import { cn } from "@/shared/utils";
import { Flex } from "@soaf/react-components-layout";

export const MyDiaryCalendar = () => {
  const { myDiaries } = useDiaryQuery();

  return (
    <Calendar
      render={(day, index, isToday) => {
        const dayClass = isToday
          ? "text-white bg-gray600 rounded-full"
          : "text-gray200";
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
            <div
              key={index}
              className="h-10 w-10 flex items-center justify-center bg-gray50 rounded-full"
            />
          </Flex>
        );
      }}
    />
  );
};
