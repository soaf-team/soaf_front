import { ActivityComponentType } from "@stackflow/react";

import { Flex } from "@soaf/react-components-layout";
import { DailyRaitingWidget } from "@/features/diary/components";
import { PageLayout, Spacing, XButton } from "@/shared/components";
import { useDiaryStore } from "@/features/diary/store";
import { useFlow } from "../stackflow";

const NewDiaryStep1: ActivityComponentType = () => {
  const { diary, handleRating, resetAllDiaryState } = useDiaryStore();
  const { push, pop } = useFlow();
  const nickname = "뽀송하루";

  const handleXButtonClick = () => {
    pop(1);
    resetAllDiaryState();
  };

  const handleSelectRating = (rating: number) => {
    handleRating(rating);
    push("NewDiaryStep2", {});
  };

  return (
    <PageLayout
      header={{
        rightSlot: <XButton onClick={handleXButtonClick} />,
      }}
    >
      <p className="body2 text-gray300 text-center mb-[6px]">STEP 1/2</p>
      <Flex direction="column" align="center" className="text-center">
        <h2 className="head3">{nickname}님,</h2>
        <h2 className="head3">오늘 하루는 어떠셨나요?</h2>
        <Spacing size={24} />
        <DailyRaitingWidget
          selectedRating={diary.rating}
          handleSelectRating={handleSelectRating}
        />
      </Flex>
    </PageLayout>
  );
};

export default NewDiaryStep1;
