import { ActivityComponentType } from "@stackflow/react";
import { useEffect } from "react";
import { useFlow } from "../stackflow";

import { useDiaryStore } from "@/features/diary/store";

import {
  Dialog,
  DialogTrigger,
  PageLayout,
  Spacing,
  XButton,
} from "@/shared/components";
import {
  DailyRaitingWidget,
  DiaryCancelComfirmDialog,
  Step,
} from "@/features/diary/components";

const NICK_NAME = "뽀송하루";
const MAIN_MESSAGE = `${NICK_NAME}님,\n오늘 하루는 어떠셨나요?`;

const NewDiaryStep1: ActivityComponentType = () => {
  const { diary, onChangeRating, resetAllDiaryState, onChangeDate } =
    useDiaryStore();
  const { push, pop } = useFlow();

  const canBackWithoutDialog = diary.rating == null;

  const handleXButtonClick = () => {
    pop(1);
    resetAllDiaryState();
  };

  const handleSelectRating = (rating: number) => {
    onChangeRating(rating);
    push("NewDiaryStep2", {});
  };

  useEffect(() => {
    onChangeDate(new Date());
  }, []);

  const headerRightButton = canBackWithoutDialog ? (
    <XButton onClick={handleXButtonClick} />
  ) : (
    <DialogTrigger>
      <XButton />
    </DialogTrigger>
  );

  return (
    <Dialog>
      <PageLayout
        header={{ rightSlot: headerRightButton }}
        className="items-center"
      >
        <Step currentStep={1} totalStep={2} mainMessage={MAIN_MESSAGE} />
        <Spacing size={24} />
        <DailyRaitingWidget
          selectedRating={diary.rating}
          handleSelectRating={handleSelectRating}
        />
      </PageLayout>
      <DiaryCancelComfirmDialog popCount={1} />
    </Dialog>
  );
};

export default NewDiaryStep1;
