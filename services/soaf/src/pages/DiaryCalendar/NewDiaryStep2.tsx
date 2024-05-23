import { useEffect } from "react";
import { ActivityComponentType } from "@stackflow/react";

import { useFlow } from "../stackflow";
import { Emotion } from "@/shared/types";
import { useDiaryStore } from "@/features/diary/store";

import {
  BackButton,
  Button,
  Dialog,
  DialogTrigger,
  EmotionButton,
  PageLayout,
  XButton,
} from "@/shared/components";
import { Flex } from "@soaf/react-components-layout";
import { DiaryCancelComfirmDialog, Step } from "@/features/diary/components";

const STEP_MAIN_MESSAGE = `좀 더 구체적인\n감정을 선택해주세요.`;
const STEP_SUB_MESSAGE = "가장 먼저 선택한 감정이 일기 캘린더에 표시돼요.";

const NewDiaryStep2: ActivityComponentType = () => {
  const { diary, resetAllDiaryState, onChangeEmotions } = useDiaryStore();
  const { push, replace } = useFlow();
  const isUnusualApproach = diary.rating === 0 || !diary.date;

  const handleEmotionButtonClick = (emotion: Emotion) => {
    const newEmotions = diary.emotions.includes(emotion)
      ? diary.emotions.filter((e) => e !== emotion)
      : [...diary.emotions, emotion];

    onChangeEmotions(newEmotions);
  };

  const handleActionButtonClick = () => {
    if (diary.emotions.length === 0) {
      return;
    }
    push("NewDiaryPage", {});
  };

  useEffect(() => {
    if (isUnusualApproach) {
      replace("DiaryCalendar", {});
      resetAllDiaryState();
    }
  }, []);

  if (isUnusualApproach) {
    return null;
  }

  return (
    <Dialog>
      <PageLayout
        header={{
          leftSlot: <BackButton />,
          rightSlot: (
            <DialogTrigger>
              <XButton onClick={() => {}} />
            </DialogTrigger>
          ),
        }}
      >
        <Flex
          direction="column"
          align="center"
          className="text-center mb-[20px]"
        >
          <Step
            currentStep={2}
            totalStep={2}
            mainMessage={STEP_MAIN_MESSAGE}
            subMessage={STEP_SUB_MESSAGE}
          />
        </Flex>
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
        <div className="fixed_bottom_button">
          <Button
            onClick={handleActionButtonClick}
            variant={diary.emotions.length > 0 ? "primary" : "primary_disabled"}
          >
            감정선택 완료
          </Button>
        </div>
      </PageLayout>
      <DiaryCancelComfirmDialog popCount={2} />
    </Dialog>
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
