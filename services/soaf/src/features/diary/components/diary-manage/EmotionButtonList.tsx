import { Emotion } from "@/shared/types";
import { DiaryFormType } from "../../store";

import { EmotionButton } from "@/shared/components";

type EmotionButtonProps = {
  diary: DiaryFormType;
  handleEmotionButtonClick: (emotion: Emotion) => void;
};

const EMOTIONS: Emotion[] = [
  "행복한",
  "기분좋은",
  "즐거운",
  "설레는",
  "뿌듯한",
  "편안한",
  "피곤한",
  "외로운",
  "슬픈",
  "우울한",
  "불안한",
  "화난",
];

export const EmotionButtonList = ({
  diary,
  handleEmotionButtonClick,
}: EmotionButtonProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-[12px] gap-y-[10px] w-full mb-[150px]">
      {EMOTIONS.map((emotion: Emotion) => {
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
