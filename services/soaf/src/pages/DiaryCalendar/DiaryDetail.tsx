import { ActivityComponentType } from "@stackflow/react";
import { BackButton, EmotionSticker, PageLayout } from "@/shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useDiaryQuery } from "@/shared/hooks";
import { Emotion } from "@/shared/types";

const DiaryDetail: ActivityComponentType = () => {
  const { myDiaries } = useDiaryQuery();

  const diary = myDiaries[0];

  const monthDay = new Date(diary.date).toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
  const week = new Date(diary.date).toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        rightSlot: "아이콘",
      }}
    >
      <Flex
        direction="column"
        className="h-[100vh] justify-between pb-[10vh] pt-[2px]"
      >
        <Flex direction="column">
          <EmotionSticker
            emotion={diary.emotions[0] as Emotion}
            className="mb-[10px]"
          />
          <span className="head3 mb-[20px] gap-[4px]">
            <span>{monthDay}</span> <span className="text-gray300">{week}</span>
            <h1>{diary.title}</h1>
          </span>
          <div
            dangerouslySetInnerHTML={{ __html: diary.content }}
            className="body2 "
          />
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default DiaryDetail;
