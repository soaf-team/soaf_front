import { useFlow } from "@/pages/stackflow";
import { EmotionSticker } from "@/shared/components";
import { DrawerClose, DrawerContent } from "@/shared/components/dialog";
import { Diary, Emotion } from "@/shared/types";
import { Flex } from "@soaf/react-components-layout";
import { useEffect, useRef, useState } from "react";
import { DiaryDetail } from "./DiaryDetail";

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

  const handleClick = (animate?: boolean) => {
    push("DiaryDetailPage", { diaryId: diary.id }, { animate });
    setShouldDisappear(true);
  };

  return (
    <DrawerContent className="shadow-shadow1">
      <Flex
        direction="column"
        className="h-[100vh] justify-between pb-[10vh] pt-[2px]"
      >
        <DiaryDetail diary={diary} />
        <DrawerClose ref={ref} onClick={() => handleClick(false)} />
      </Flex>
    </DrawerContent>
  );
};
