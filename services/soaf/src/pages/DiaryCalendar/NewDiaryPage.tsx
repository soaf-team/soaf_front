/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { ActivityComponentType } from "@stackflow/react";

import { useFlow } from "../stackflow";
import { useDiaryStore } from "@/features/diary/store";

import { BackButton, PageLayout, XButton } from "@/shared/components";
import { DiaryForm } from "@/features/diary/components";

const NewDiaryPage: ActivityComponentType = () => {
  const { pop, replace } = useFlow();
  const {
    diary,
    onChangeEmotionOrder,
    onChangeTitle,
    onChangeContent,
    onChangePhotos,
    resetAllDiaryState,
  } = useDiaryStore();
  const isUnusualApproach =
    diary.emotions.length === 0 || diary.rating === 0 || !diary.date;

  const handleXButtonClick = () => {
    pop(3);
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
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        rightSlot: <XButton onClick={handleXButtonClick} />,
      }}
    >
      <DiaryForm
        diary={diary}
        handleReorderEmotions={onChangeEmotionOrder}
        handleTitleChange={onChangeTitle}
        handleContentChange={onChangeContent}
        handlePhotosChange={onChangePhotos}
      />
    </PageLayout>
  );
};

export default NewDiaryPage;
