import { useFlow } from "@/pages/stackflow";
import { EmotionSticker } from "@/shared/components";
import { DrawerClose, DrawerContent } from "@/shared/components/dialog";
import { Diary, Emotion } from "@/shared/types";
import { Flex } from "@soaf/react-components-layout";
import { useEffect, useRef } from "react";

type DiaryDetailDrawerProps = {
  diary: Diary;
};

export const DiaryDetailDrawer = ({ diary }: DiaryDetailDrawerProps) => {
  const ref = useRef(null);
  const { push } = useFlow();

  const monthDay = new Date(diary.date).toLocaleDateString("ko-KR", {
    month: "short",
    day: "numeric",
  });
  const week = new Date(diary.date).toLocaleDateString("ko-KR", {
    weekday: "long",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // @ts-ignore
            ref.current.click();
          }
        });
      },
      { threshold: 1.0 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [diary, ref]);

  const handleClick = () => {
    push("DiaryDetail", { diaryId: diary.id });
  };

  return (
    <DrawerContent>
      <Flex direction="column" className="h-[100vh] justify-between pb-[10vh]">
        <Flex direction="column">
          <EmotionSticker
            emotion={diary.emotions[0] as Emotion}
            className="mb-[10px]"
          />
          <span className="head3 mb-[16px]">
            <span>{monthDay}</span> <span className="text-gray300">{week}</span>
            <h1>{diary.title}</h1>
          </span>
          <div
            dangerouslySetInnerHTML={{ __html: diary.content }}
            className="body2 "
          />
        </Flex>
        <DrawerClose ref={ref} onClick={handleClick} />
      </Flex>
    </DrawerContent>
  );
};
