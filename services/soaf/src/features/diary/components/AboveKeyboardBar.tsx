import { DiaryFormType } from "../store";
import { cn } from "@/shared/utils";

import { Flex } from "@soaf/react-components-layout";

import photo from "@assets/icons/shared/photo.svg";
import lock from "@assets/icons/shared/lock.svg";
import unLock from "@assets/icons/shared/unLock.svg";
import { useKeboardHeight } from "@/shared/hooks";

type AboveKeyboardBarProps = {
  diary: DiaryFormType;
  handleAddPhoto: (photos: string[]) => void;
  handleSaveDiary: () => void;
  togglePrivate: () => void;
};

export const AboveKeyboardBar = ({
  diary,
  handleSaveDiary,
  togglePrivate,
}: AboveKeyboardBarProps) => {
  const { keyboardHeight } = useKeboardHeight();
  const contentLengthColor =
    diary.content.length > 2000 ? "text-red" : "text-gray300";

  return (
    <Flex
      justify="space-between"
      className="fixed left-0 right-0 w-full h-[39px] border-t border-solid border-gray100 px-[18px]"
      style={{
        bottom: keyboardHeight || 34,
      }}
    >
      <Flex align="center" gap={16}>
        <img src={photo} alt="photo" onClick={() => {}} />
        <img
          src={diary.private ? lock : unLock}
          alt="emoji"
          onClick={togglePrivate}
        />
      </Flex>
      <Flex align="center" gap={16}>
        <span>
          <span className={cn(contentLengthColor)}>{diary.content.length}</span>
          /2000
        </span>
        <button className="head6sb" onClick={handleSaveDiary}>
          저장
        </button>
      </Flex>
    </Flex>
  );
};
