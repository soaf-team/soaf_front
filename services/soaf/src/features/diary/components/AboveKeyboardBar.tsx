import { useRef } from "react";

import { DiaryFormType, useDiaryStore } from "../store";
import { cn } from "@/shared/utils";
import { useKeboardHeight } from "@/shared/hooks";

import { Flex } from "@soaf/react-components-layout";

import photo from "@assets/icons/shared/photo.svg";
import lock from "@assets/icons/shared/lock.svg";
import unLock from "@assets/icons/shared/unLock.svg";

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
  const photoInputRef = useRef<HTMLInputElement>(null);
  const { keyboardHeight } = useKeboardHeight();
  const { onChangePhotos } = useDiaryStore();
  const contentLengthColor =
    diary.content.length < 2000 ? "text-gray300" : "text-red";

  const handleAddPhotoButtonClick = () => {
    photoInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const newImage = URL.createObjectURL(img);

      onChangePhotos([...diary.photos, newImage]);
    }
  };

  return (
    <Flex
      justify="space-between"
      className="fixed left-0 right-0 w-full h-[39px] border-t border-solid border-gray100 px-[18px]"
      style={{
        bottom: keyboardHeight || 34,
      }}
    >
      <Flex align="center" gap={16}>
        <div>
          <input
            ref={photoInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
          <img src={photo} alt="photo" onClick={handleAddPhotoButtonClick} />
        </div>
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
