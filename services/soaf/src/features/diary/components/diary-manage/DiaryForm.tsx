import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { Flex } from "@soaf/react-components-layout";

import { EmotionKey } from "@/shared/types";
import { DiaryFormType } from "../../store";

import { EmotionSticker } from "@/shared/components";

import { AboveKeyboardBar } from "./AboveKeyboardBar";
import deletePhoto from "@assets/icons/shared/deletePhoto.svg";

const CONTENT_PLACEHOLDER = "오늘 하루는 어땠나요?";

type DiaryFormProps = {
  diary: DiaryFormType;
  handleReorderEmotions: (emotions: EmotionKey[]) => void;
  handleTitleChange: (title: string) => void;
  handleContentChange: (content: string) => void;
  handlePhotosChange: (photos: string[]) => void;
  handleTogglePrivate: () => void;
};

export const DiaryForm = (props: DiaryFormProps) => {
  const {
    diary,
    handleReorderEmotions,
    handleTitleChange,
    handleContentChange,
    handlePhotosChange,
    handleTogglePrivate,
  } = props;
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const monthDay = new Date(diary.date).toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
  const week = new Date(diary.date).toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  const handleDeletePhoto = (index: number) => {
    const newPhotos = diary.photos.filter((_, i) => i !== index);
    handlePhotosChange(newPhotos);
  };

  const handleKeepKeyboard = () => {
    contentRef.current?.focus();
  };

  useEffect(() => {
    contentRef.current?.focus();

    const handleClickOutside = (event: any) => {
      if (titleRef.current && titleRef.current.contains(event.target)) {
        titleRef.current.focus();
      } else {
        contentRef.current?.focus();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Flex direction="column" className="text-left">
        <EmotionSticker
          emotion={diary.emotions[0]}
          onClick={() => handleReorderEmotions(diary.emotions)}
        />
        <span className="head3 mt-[8px]">
          <span>{monthDay}</span> <span className="text-gray300">{week}</span>
          <TitleInput
            ref={titleRef}
            diary={diary}
            handleTitleChange={handleTitleChange}
          />
        </span>
        {diary.photos.length > 0 && (
          <Flex gap={8} className="mb-[16px]">
            {diary.photos.map((photo, index) => (
              <div
                key={index}
                className="w-[92px] h-[92px] rounded-[16px] overflow-hidden relative"
              >
                <div
                  onClick={() => handleDeletePhoto(index)}
                  className="absolute top-[8px] right-[8px] rounded-full w-[20px] h-[20px]"
                >
                  <img src={deletePhoto} alt="delete_photo" />
                </div>
                <img
                  src={photo}
                  alt={photo}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </Flex>
        )}
        <textarea
          ref={contentRef}
          placeholder={CONTENT_PLACEHOLDER}
          value={diary.content}
          onChange={e => handleContentChange(e.target.value)}
          className="body2 resize-none focus:outline-none h-[300px]"
        />
      </Flex>
      <AboveKeyboardBar
        diary={diary}
        handleAddPhoto={handlePhotosChange}
        handleSaveDiary={() => {}}
        handleTogglePrivate={handleTogglePrivate}
        handleKeepKeyboard={handleKeepKeyboard}
      />
    </>
  );
};

type TitleInputProps = {
  diary: DiaryFormType;
  handleTitleChange: (title: string) => void;
};

const TitleInput = forwardRef(
  (props: TitleInputProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { diary, handleTitleChange, ...rest } = props;
    const initialTitle = `${diary.emotions.join(", ")} 하루`;

    const adjustHeight = () => {
      const textarea = (ref as any)?.current;
      if (!textarea) return;
      textarea.style.height = "27px";
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    useEffect(() => {
      adjustHeight();
      handleTitleChange(initialTitle);
    }, []);

    return (
      <textarea
        {...rest}
        ref={ref}
        value={diary.title}
        className="focus:outline-none w-full caret-primary resize-none"
        onChange={e => {
          adjustHeight();
          handleTitleChange(e.target.value);
        }}
        onBlur={
          diary.title === "" ? () => handleTitleChange(initialTitle) : undefined
        }
      />
    );
  },
);

TitleInput.displayName = "TitleInput";
