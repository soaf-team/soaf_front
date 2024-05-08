/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { ActivityComponentType } from "@stackflow/react";

import { useFlow } from "../stackflow";
import { useDiaryStore } from "@/features/diary/store";

import {
  BackButton,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  PageLayout,
  XButton,
} from "@/shared/components";
import { DiaryForm } from "@/features/diary/components";
import { Flex } from "@soaf/react-components-layout";

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

  const handleCancelClick = () => {
    pop(3);
    resetAllDiaryState();
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
        <DiaryForm
          diary={diary}
          handleReorderEmotions={onChangeEmotionOrder}
          handleTitleChange={onChangeTitle}
          handleContentChange={onChangeContent}
          handlePhotosChange={onChangePhotos}
        />
      </PageLayout>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>일기를 그만 쓸까요?</DialogTitle>
          <DialogDescription>지금까지 입력한 내용이 사라져요</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Flex gap={8} className="w-full">
            <DialogClose className="flex-1">
              <Button size="sm" variant="secondary">
                아니요
              </Button>
            </DialogClose>
            <DialogClose className="flex-1">
              <Button size="sm" onClick={handleCancelClick} variant="warn">
                네, 취소할래요
              </Button>
            </DialogClose>
          </Flex>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NewDiaryPage;
