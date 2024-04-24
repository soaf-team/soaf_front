import { useFlow } from "@/pages/stackflow";
import { EmotionSticker } from "@/shared/components";
import { DrawerClose, DrawerContent } from "@/shared/components/dialog";
import { Diary, Emotion } from "@/shared/types";
import { cn } from "@/shared/utils";
import { Flex } from "@soaf/react-components-layout";
import { useEffect, useRef, useState } from "react";

type DiaryDetailDrawerProps = {
  diary: Diary;
};

export const DiaryDetailDrawer = ({ diary }: DiaryDetailDrawerProps) => {
  const ref = useRef(null);
  const { push } = useFlow();
  const [shouldDisappear, setShouldDisappear] = useState(false);
  const opacity = shouldDisappear ? "opacity-0" : "opacity-100";
  const rounded = shouldDisappear ? "rounded-none" : "rounded-[28px]";

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
    push("DiaryDetail", { diaryId: diary.id }, { animate });
    setShouldDisappear(true);
  };

  return (
    <DrawerContent
      className={cn([
        "shadow-shadow1 transition-all duration-300",
        opacity,
        rounded,
      ])}
      overlayStyle="bg-transparent"
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
          <DrawerClose
            onClick={() => handleClick(true)}
            className="flex flex-col text-left"
          >
            <span className="head3 mb-[20px] gap-[4px]">
              <span>{monthDay}</span>{" "}
              <span className="text-gray300">{week}</span>
              <h1>{diary.title}</h1>
            </span>
            <div
              dangerouslySetInnerHTML={{ __html: diary.content }}
              className="body2 "
            />
          </DrawerClose>
        </Flex>
        <DrawerClose ref={ref} onClick={() => handleClick(false)} />
      </Flex>
    </DrawerContent>
  );
};
