import { ActivityComponentType } from "@stackflow/react";
import { useEffect } from "react";
import { useFlow } from "../stackflow";

import { useDiaryStore } from "@/features/diary/store";

import { Flex } from "@soaf/react-components-layout";
import {
  Dialog,
  DialogTrigger,
  PageLayout,
  Spacing,
  XButton,
} from "@/shared/components";
import {
  DailyRaitingWidget,
  DiaryWriteCancelDialog,
} from "@/features/diary/components";

const 임시닉네임 = "뽀송하루";

const NewDiaryStep1: ActivityComponentType = () => {
  const { diary, onChangeRating, resetAllDiaryState, onChangeDate } =
    useDiaryStore();
  const { push, pop } = useFlow();

  const canBackWithoutDialog = diary.rating == null;
  const headerRightButton = canBackWithoutDialog ? (
    <XButton onClick={handleXButtonClick} />
  ) : (
    <DialogTrigger>
      <XButton onClick={() => {}} />
    </DialogTrigger>
  );

  function handleXButtonClick() {
    pop(1);
    resetAllDiaryState();
  }

  function handleSelectRating(rating: number) {
    onChangeRating(rating);
    push("NewDiaryStep2", {});
  }

  useEffect(() => {
    onChangeDate(new Date());
  }, []);

  return (
    <Dialog>
      <PageLayout header={{ rightSlot: headerRightButton }}>
        <p className="body2 text-gray300 text-center mb-[6px]">STEP 1/2</p>
        <Flex direction="column" align="center" className="text-center">
          <h2 className="head3">{임시닉네임}님,</h2>
          <h2 className="head3">오늘 하루는 어떠셨나요?</h2>
          <Spacing size={24} />
          <DailyRaitingWidget
            selectedRating={diary.rating}
            handleSelectRating={handleSelectRating}
          />
        </Flex>
      </PageLayout>
      <DiaryWriteCancelDialog popCount={1} />
    </Dialog>
  );
};

export default NewDiaryStep1;
