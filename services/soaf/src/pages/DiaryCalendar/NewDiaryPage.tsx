import { useEffect } from "react";
import { ActivityComponentType } from "@stackflow/react";

import { useFlow } from "../stackflow";
import { useDiaryStore } from "@/features/diary/store";

import {
  BackButton,
  Dialog,
  DialogTrigger,
  PageLayout,
  XButton,
} from "@/shared/components";
import {
  DiaryForm,
  DiaryCancelComfirmDialog,
} from "@/features/diary/components";

const NewDiaryPage: ActivityComponentType = () => {
  const { replace } = useFlow();
  const {
    diary,
    onChangeEmotionOrder,
    onChangeTitle,
    onChangeContent,
    onChangePhotos,
    togglePrivate,
    resetAllDiaryState,
  } = useDiaryStore();
  const isUnusualApproach =
    diary.emotions.length === 0 || diary.rating === null || !diary.date;

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
        <DiaryForm
          diary={diary}
          handleReorderEmotions={onChangeEmotionOrder}
          handleTitleChange={onChangeTitle}
          handleContentChange={onChangeContent}
          handlePhotosChange={onChangePhotos}
          handleTogglePrivate={togglePrivate}
        />
        <DiaryCancelComfirmDialog popCount={3} />
      </PageLayout>
    </Dialog>
  );
};

export default NewDiaryPage;
