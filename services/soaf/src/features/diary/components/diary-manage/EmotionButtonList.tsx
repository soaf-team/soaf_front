import { EmotionKey } from "@/shared/types";
import { EMOTIONS } from "@/shared/constants";
import { DiaryFormType } from "../../store";

import { EmotionButton } from "@/shared/components";

type EmotionButtonProps = {
  diary: DiaryFormType;
  handleEmotionButtonClick: (emotion: EmotionKey) => void;
};

export const EmotionButtonList = ({
  diary,
  handleEmotionButtonClick,
}: EmotionButtonProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-[12px] gap-y-[10px] w-full mb-[150px]">
      {(Object.keys(EMOTIONS) as EmotionKey[]).map(emotion => {
        const isSelected = diary.emotions.includes(emotion);

        return (
          <EmotionButton
            key={emotion}
            emotion={emotion}
            selected={isSelected}
            onClick={handleEmotionButtonClick}
          />
        );
      })}
    </div>
  );
};
