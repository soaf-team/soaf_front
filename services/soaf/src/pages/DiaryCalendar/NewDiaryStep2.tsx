import {
  BackButton,
  Button,
  EmotionButton,
  PageLayout,
  XButton,
} from "@/shared/components";
import { ActivityComponentType } from "@stackflow/react";
import { useFlow } from "../stackflow";
import { useDiaryStore } from "@/features/diary/store";
import { Flex } from "@soaf/react-components-layout";
import { Emotion } from "@/shared/types";

const NewDiaryStep2: ActivityComponentType = () => {
  const { diary, resetAllDiaryState, handleEmotions } = useDiaryStore();
  const { push, pop } = useFlow();

  const handleXButtonClick = () => {
    pop(2);
    resetAllDiaryState();
  };

  const handleEmotionButtonClick = (emotion: Emotion) => {
    const newEmotions = diary.emotions.includes(emotion)
      ? diary.emotions.filter((e) => e !== emotion)
      : [...diary.emotions, emotion];

    handleEmotions(newEmotions);
  };

  const handleActionButtonClick = () => {
    if (diary.emotions.length === 0) {
      return;
    }

    push("NewDiaryPage", {});
  };

  console.log(diary.emotions);

  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        rightSlot: <XButton onClick={handleXButtonClick} />,
      }}
    >
      <p className="body2 text-gray300 text-center mb-[6px]">STEP 2/2</p>
      <Flex direction="column" align="center" className="text-center mb-[20px]">
        <h2 className="head3">좀 더 구체적인</h2>
        <h2 className="head3">감정을 선택해주세요.</h2>
        <p className="py-[8px] text-gray800 body3">
          가장 먼저 선택한 감정이 일기 캘린더에 표시돼요.
        </p>
      </Flex>
      <div className="grid grid-cols-2 gap-x-[12px] gap-y-[10px] w-full">
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
      <div className="fixed_bottom_button">
        <Button
          onClick={handleActionButtonClick}
          variant={diary.emotions.length > 0 ? "primary" : "primary_disabled"}
        >
          감정선택 완료
        </Button>
      </div>
    </PageLayout>
  );
};

export default NewDiaryStep2;

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