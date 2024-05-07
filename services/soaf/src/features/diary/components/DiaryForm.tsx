import { EmotionSticker } from "@/shared/components";
import { Emotion } from "@/shared/types";
import { Flex } from "@soaf/react-components-layout";
import { DiaryFormType } from "../store";
import { useEffect, useRef } from "react";

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
  } = props;

  const monthDay = new Date(diary.date).toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
  const week = new Date(diary.date).toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <Flex direction="column" className="text-left">
      <EmotionSticker
        emotion={diary.emotions[0]}
        onClick={() => handleReorderEmotions(diary.emotions)}
      />
      <span className="head3 mt-[8px]">
        <span>{monthDay}</span> <span className="text-gray300">{week}</span>
        <TitleInput diary={diary} handleTitleChange={handleTitleChange} />
      </span>
      {diary.photos.length > 0 && (
        <Flex gap={8} className="mb-[16px]">
          {diary.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={photo}
              className="w-[92px] h-[92px] rounded-[16px]"
            />
          ))}
        </Flex>
      )}
      <textarea
        placeholder="오늘 하루는 어떘나요?"
        value={diary.content}
        onChange={(e) => handleContentChange(e.target.value)}
        className="body2 focus:outline-none"
      />
    </Flex>
  );
};

type TitleInputProps = {
  diary: DiaryFormType;
  handleTitleChange: (title: string) => void;
};

const TitleInput = (props: TitleInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { diary, handleTitleChange } = props;
  const initialTitle = `${diary.emotions.join(", ")} 하루`;

  const adjustHeight = () => {
    const textarea = textareaRef.current;
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
      ref={textareaRef}
      value={diary.title}
      className="focus:outline-none w-full caret-primary"
      onChange={(e) => {
        adjustHeight();
        handleTitleChange(e.target.value);
      }}
      onBlur={
        diary.title === "" ? () => handleTitleChange(initialTitle) : undefined
      }
    />
  );
};
