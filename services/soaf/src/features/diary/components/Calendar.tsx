import { Flex } from "@soaf/react-components-layout";
import { useCalendar } from "../hooks";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/components/dialog";
import triangle from "@assets/icons/triangle.svg";
import { cn } from "@/shared/utils";

type CalendarProps = {
  render: (day: Date, index: number, isToday: boolean) => JSX.Element;
};

export const Calendar = ({ render }: CalendarProps) => {
  const { today, currentDate, getMonthMatrix, handleYearMonthChange } =
    useCalendar();

  return (
    <Drawer>
      <div className="flex flex-col items-center justify-center w-full">
        <DrawerTrigger>
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
        <div className="grid grid-cols-7 gap-x-2 gap-y-4 mt-[22px] w-full">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <span key={day} className={cn(["label text-center text-gray200"])}>
              {day}
            </span>
          ))}
          {getMonthMatrix()
            .flat()
            .map((day, index) => {
              const isToday =
                today?.toISOString().slice(0, 10) ===
                day?.toISOString().slice(0, 10);
              return render(day, index, isToday);
            })}
        </div>
      </div>

      <DrawerContent>
        <Flex direction="column" gap={16} align="center" className="pb-[12px]">
          <h2 className="label1">월 선택하기</h2>
          <Flex
            direction="column"
            gap={16}
            className="overflow-scroll h-[300px] w-full items-center"
          >
            {Array.from({ length: 10 }, (_, i) => {
              const isSelected = currentDate.getMonth() === i;
              const textClass = isSelected
                ? "text-primary font-bold text-[18px] leading-[28px]"
                : "body1";

              return (
                <DrawerClose key={i}>
                  <Flex
                    direction="row"
                    justify="space-between"
                    align="center"
                    gap={16}
                    onClick={() => {
                      handleYearMonthChange(
                        `${currentDate.getFullYear()}.${i + 1}`,
                      );
                    }}
                  >
                    <span className={textClass}>
                      {currentDate.getFullYear()}년 {i + 1}월
                    </span>
                  </Flex>
                </DrawerClose>
              );
            })}
          </Flex>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};
