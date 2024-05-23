import { useFlow } from "@/pages/stackflow";
import { useDiaryStore } from "../store";

import {
  Button,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components";
import { Flex } from "@soaf/react-components-layout";

type DiaryWriteCancelDialogProps = {
  popCount: number;
};

export const DiaryWriteCancelDialog = ({
  popCount,
}: DiaryWriteCancelDialogProps) => {
  const { pop } = useFlow();
  const { resetAllDiaryState } = useDiaryStore();

  const handleCancelClick = () => {
    pop(popCount);
    resetAllDiaryState();
  };

  return (
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
  );
};
