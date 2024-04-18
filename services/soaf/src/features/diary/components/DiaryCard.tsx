import dayjs from "dayjs";

import { useFlow } from "@/pages/stackflow";
import { Flex } from "@soaf/react-components-layout";
import { EmotionSticker, CheckBox, Card } from "@/shared/components";
import { Diary } from "@/shared/types";
import { cn, removeHtmlTags } from "@/shared/utils";

interface Props {
  diary: Diary;
  isCheckable?: boolean;
  isSelected?: boolean;
  shadow?: boolean;
  onClick?: () => void;
  className?: string;
}

export const DiaryCard = ({
  diary,
  isCheckable = false,
  isSelected = false,
  shadow,
  onClick,
  className,
}: Props) => {
  const { push } = useFlow();

  return (
    <Card
      direction="row"
      gap={12}
      shadow={shadow}
      isSelected={isSelected}
      onClick={() => {
        push("DiaryDetail", { diaryId: diary.id });
      }}
      className={cn(["relative w-full", className])}
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="w-[40px] min-w-[40px] h-[40px] bg-gray50 px-[10px] py-[6px] rounded-lg"
      >
        <p className="text-[16px] text-gray400 font-black leading-[20px]">
          {diary.date.split(".")[2]}
        </p>
        <p className="text-[10px] text-gray200 leading-[12px] font-semibold">
          {dayjs(diary.date).format("ddd")}
        </p>
      </Flex>
      <Flex direction="column" gap={15}>
        <Flex align="center">
          <Flex direction="column" align="left" gap={4}>
            <p className="label2">{diary.title}</p>
            <Flex>
              {diary.emotions.map((emotion, index) => (
                <EmotionSticker
                  key={index}
                  emotion={emotion}
                  size="sm"
                  style={{
                    transform: `translateX(-${index * 5}px)`,
                    zIndex: diary.emotions.length - index,
                  }}
                />
              ))}
            </Flex>
          </Flex>

          {isCheckable && (
            <div className="absolute top-[16px] right-[16px]">
              <CheckBox
                isChecked={isSelected}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
              />
            </div>
          )}
        </Flex>
        <div className="w-full h-px bg-border" />
        <Flex align="center" gap={17}>
          <p className="overflow-hidden body4 line-clamp-3 overflow-ellipsis">
            {removeHtmlTags(diary.content)}
          </p>
          <div className="w-[48px] min-w-[48px] h-[48px] rounded-[10px] bg-gray50">
            <img
              src={diary.photos[0]}
              alt="diary-photo"
              className="object-cover w-full h-full rounded-[10px]"
            />
          </div>
        </Flex>
      </Flex>
    </Card>
  );
};
