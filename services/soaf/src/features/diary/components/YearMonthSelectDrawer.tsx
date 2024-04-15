import { Flex } from "@soaf/react-components-layout";
import { DrawerClose, DrawerContent } from "@/shared/components/dialog";
import { Check } from "@/shared/components";

type YearMonthSelectDrawerProps = {
  currentDate: Date;
  handleYearMonthChange: (date: string) => void;
};

export const YearMonthSelectDrawer = ({
  currentDate,
  handleYearMonthChange,
}: YearMonthSelectDrawerProps) => {
  return (
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
                  gap={8}
                  onClick={() => {
                    handleYearMonthChange(
                      `${currentDate.getFullYear()}.${i + 1}`,
                    );
                  }}
                >
                  <span className={textClass}>
                    {currentDate.getFullYear()}년 {i + 1}월
                  </span>
                  {isSelected && <Check isChecked />}
                </Flex>
              </DrawerClose>
            );
          })}
        </Flex>
      </Flex>
    </DrawerContent>
  );
};
