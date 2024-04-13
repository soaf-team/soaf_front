import { Flex } from "@soaf/react-components-layout";
import { useCalendar } from "../hooks";
import { Drawer, DrawerTrigger } from "@/shared/components/dialog";
import { YearMonthSelectDrawer } from "./YearMonthSelectDrawer";
import triangle from "@assets/icons/triangle.svg";
import { cn } from "@/shared/utils";
import { getDateStatus } from "../utils";

type CalendarProps = {
  render: (day: Date, index: number, isToday: boolean) => JSX.Element;
};

export const Calendar = ({ render }: CalendarProps) => {
  const { today, currentDate, getMonthMatrix, handleYearMonthChange } =
    useCalendar();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full">
        <Drawer>
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
          <YearMonthSelectDrawer
            currentDate={currentDate}
            handleYearMonthChange={handleYearMonthChange}
          />
        </Drawer>
        <div className="grid grid-cols-7 gap-x-2 gap-y-4 mt-[22px] w-full">
          {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
            <span key={day} className={cn(["label text-center text-gray200"])}>
              {day}
            </span>
          ))}
          {getMonthMatrix()
            .flat()
            .map((day, index) => {
              const isToday = day && getDateStatus(day, today) === "today";
              return render(day, index, isToday);
            })}
        </div>
      </div>
    </>
  );
};
