import { Flex } from "@soaf/react-components-layout";

import { DrawerTrigger, Drawer, DrawerContent, DrawerClose } from "../dialog";
import { Check } from "../ui";

import triangle from "@assets/icons/triangle.svg";

type YearMonthSelectProps = {
  currentDate: Date;
  handleCurrentDate: (newDate: Date) => void;
};

export const YearMonthSelect = ({
  currentDate,
  handleCurrentDate,
}: YearMonthSelectProps) => {
  const handleYearMonthChange = (newYearMonth: string) => {
    const [newYear, newMonth] = newYearMonth.split(".");
    handleCurrentDate(new Date(+newYear, +newMonth - 1));
  };

  return (
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
      <DrawerContent>
        <Flex direction="column" gap={16} align="center" className="pb-[12px]">
          <h2 className="label1">월 선택하기</h2>
          <Flex
            direction="column"
            gap={16}
            className="overflow-scroll h-[330px] w-full items-center"
          >
            {Array.from({ length: 12 }, (_, i) => {
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
                    gap={8}
                    onClick={() => {
                      handleYearMonthChange(
                        `${currentDate.getFullYear()}.${i + 1}`,
                      );
                    }}
                    className="relative"
                  >
                    <span className={textClass}>
                      {currentDate.getFullYear()}년 {i + 1}월
                    </span>
                    {isSelected && (
                      <div className="absolute right-[-30px]">
                        <Check isChecked />
                      </div>
                    )}
                  </Flex>
                </DrawerClose>
              );
            })}
            <div className="absolute bottom-[40px] h-[50px] w-full bg-gradient-to-b from-transparent to-white" />
          </Flex>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};
