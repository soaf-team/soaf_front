import { ForwardedRef, forwardRef, useEffect, useRef } from "react";
import { Flex } from "@soaf/react-components-layout";

import { Emotion } from "@/shared/types";
import { DiaryFormType } from "../store";

import { EmotionSticker } from "@/shared/components";

import deletePhoto from "@assets/icons/shared/deletePhoto.svg";

type DiaryFormProps = {
  diary: DiaryFormType;
  handleReorderEmotions: (emotions: Emotion[]) => void;
  handleTitleChange: (title: string) => void;
  handleContentChange: (content: string) => void;
  handlePhotosChange: (photos: string[]) => void;
};

export const DiaryForm = (props: DiaryFormProps) => {
  const {
    diary,
    handleReorderEmotions,
    handleTitleChange,
    handleContentChange,
    handlePhotosChange,
  } = props;
  const titleRef = useRef<HTMLTextAreaElement>(null);

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

  return (
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
        placeholder="오늘 하루는 어떘나요?"
        value={diary.content}
        onChange={(e) => handleContentChange(e.target.value)}
        className="body2 resize-none focus:outline-none "
      />
    </Flex>
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
        onChange={(e) => {
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
