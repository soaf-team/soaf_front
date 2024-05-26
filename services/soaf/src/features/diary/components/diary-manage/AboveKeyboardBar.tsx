import { useEffect, useRef } from "react";

import { DiaryFormType, useDiaryStore } from "../../store";
import { useKeboardHeight } from "@/shared/hooks";

import { Flex } from "@soaf/react-components-layout";

import photo from "@assets/icons/shared/photo.svg";
import lock from "@assets/icons/shared/lock.svg";
import unLock from "@assets/icons/shared/unLock.svg";

type AboveKeyboardBarProps = {
  diary: DiaryFormType;
  handleAddPhoto: (photos: string[]) => void;
  handleSaveDiary: () => void;
  handleTogglePrivate: () => void;
  handleKeepKeyboard: () => void;
};

export const AboveKeyboardBar = ({
  diary,
  handleSaveDiary,
  handleTogglePrivate,
  handleKeepKeyboard,
}: AboveKeyboardBarProps) => {
  const photoInputRef = useRef<HTMLInputElement>(null);
  const { keyboardHeight, isOnKeyboard } = useKeboardHeight();
  const { onChangePhotos } = useDiaryStore();

  const handleAddPhotoButtonClick = () => {
    if (isOnKeyboard) {
      handleKeepKeyboard();
    }
    photoInputRef.current?.click();
  };

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      const newImage = URL.createObjectURL(img);

      onChangePhotos([...diary.photos, newImage]);
    }
  };

  const handleTogglePrivateButtonClick = () => {
    if (isOnKeyboard) {
      handleKeepKeyboard();
    }
    handleTogglePrivate();
  };

  useEffect(() => {
    const mainEl = document.querySelector("main")!;

    if (isOnKeyboard) {
      mainEl.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      mainEl.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }

    return () => {
      mainEl.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, [isOnKeyboard]);

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
            onChange={onImageChange}
            hidden
          />
          <img src={photo} alt="photo" onClick={handleAddPhotoButtonClick} />
        </div>
        <img
          src={diary.private ? lock : unLock}
          alt="emoji"
          onClick={handleTogglePrivateButtonClick}
        />
      </Flex>
      <Flex align="center" gap={16}>
        <span>
          <span
            style={{
              color: diary.content.length < 2000 ? "#8a91a8" : "#ff3c3c",
            }}
          >
            {diary.content.length}
          </span>
          /2000
        </span>
        <button className="head6sb" onClick={handleSaveDiary}>
          저장
        </button>
      </Flex>
    </Flex>
  );
};
