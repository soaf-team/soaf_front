import { useRef } from "react";

import { Divider, Flex } from "@soaf/react-components-layout";

import { Textarea } from "@/shared/components";

interface Props {
  type: "music" | "movie" | "book" | "youtube";
}

export const ReviewSection = ({ type }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const placeholder = {
    music: "음악 감상 후 어떤 생각이 드셨나요?",
    movie: "영화를 본 후 어떤 생각이 드셨나요?",
    book: "책을 읽은 후 어떤 생각이 드셨나요?",
    youtube: "영상을 본 후 어떤 생각이 드셨나요?",
  } as const;

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  return (
    <Flex direction="column" gap={16}>
      <p className="head6sb">감상평</p>

      <Textarea
        ref={textareaRef}
        placeholder={placeholder[type]}
        maxLength={1000}
        className="min-h-0 h-[20px] p-0 border-none rounded-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
        onInput={autoResizeTextarea}
      />

      <Divider />
    </Flex>
  );
};
