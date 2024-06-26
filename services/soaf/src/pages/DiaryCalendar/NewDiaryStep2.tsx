import { useEffect } from "react";
import { ActivityComponentType } from "@stackflow/react";

import { useFlow } from "../stackflow";
import { EmotionKey } from "@/shared/types";
import { useDiaryStore } from "@/features/diary/store";

import {
  BackButton,
  Button,
  Dialog,
  DialogTrigger,
  PageLayout,
  Spacing,
  XButton,
} from "@/shared/components";
import {
  DiaryCancelComfirmDialog,
  EmotionButtonList,
  Step,
} from "@/features/diary/components";

const STEP_MAIN_MESSAGE = `좀 더 구체적인\n감정을 선택해주세요.`;
const STEP_SUB_MESSAGE = "가장 먼저 선택한 감정이 일기 캘린더에 표시돼요.";

const NewDiaryStep2: ActivityComponentType = () => {
  const { diary, resetAllDiaryState, onChangeEmotions } = useDiaryStore();
  const { push, replace } = useFlow();
  const isUnusualApproach = diary.rating === null || !diary.date;

  const handleEmotionButtonClick = (emotion: EmotionKey) => {
    const newEmotions = diary.emotions.includes(emotion)
      ? diary.emotions.filter(e => e !== emotion)
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
        <Step
          currentStep={2}
          totalStep={2}
          mainMessage={STEP_MAIN_MESSAGE}
          subMessage={STEP_SUB_MESSAGE}
        />
        <Spacing size={20} />
        <EmotionButtonList
          diary={diary}
          handleEmotionButtonClick={handleEmotionButtonClick}
        />
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
