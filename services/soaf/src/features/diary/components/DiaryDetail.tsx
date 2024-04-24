import { EmotionSticker } from "@/shared/components";
import { Diary, Emotion } from "@/shared/types";
import { Flex } from "@soaf/react-components-layout";

type DiaryDetailProps = {
  diary: Diary;
};

export const DiaryDetail = ({ diary }: DiaryDetailProps) => {
  const monthDay = new Date(diary.date).toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
  const week = new Date(diary.date).toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <Flex direction="column">
      <EmotionSticker
        emotion={diary.emotions[0] as Emotion}
        className="mb-[10px]"
      />
      <Flex direction="column" className="text-left">
        <span className="head3 mb-[16px] gap-[4px]">
          <span>{monthDay}</span> <span className="text-gray300">{week}</span>
          <h1>{diary.title}</h1>
        </span>
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
        <div
          dangerouslySetInnerHTML={{ __html: diary.content }}
          className="body2 "
        />
      </Flex>
    </Flex>
  );
};