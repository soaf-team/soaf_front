import { Flex } from "@soaf/react-components-layout";
import { Diary } from "@/shared/types";
import { DiaryCard } from "./DiaryCard";

type DiaryListProps = {
  diariesByMonth: Diary[];
  isSelected?: Diary[];
  isCheckable?: boolean;
  shadow?: boolean;
  handleDiarySelect?: (index: number) => void;
};

export function DiaryList({
  diariesByMonth,
  isSelected,
  isCheckable,
  shadow,
  handleDiarySelect,
}: DiaryListProps) {
  const _handleDiarySelect = (index: number) => {
    if (!handleDiarySelect) return;

    handleDiarySelect(index);
  };

  return (
    <Flex direction="column" align="center" justify="center" gap={12}>
      {diariesByMonth.map((diary: Diary, index: number) => (
        <DiaryCard
          key={diary.id}
          diary={diary}
          isCheckable={isCheckable}
          shadow={shadow}
          isSelected={
            isSelected === undefined ? false : isSelected.includes(diary)
          }
          onClick={() => _handleDiarySelect(index)}
          className={index === diariesByMonth.length - 1 ? "mb-[50px]" : ""}
        />
      ))}
    </Flex>
  );
}
