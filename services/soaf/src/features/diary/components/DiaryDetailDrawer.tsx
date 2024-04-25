import { useFlow } from "@/pages/stackflow";
import { DrawerClose, DrawerContent } from "@/shared/components/dialog";
import { Diary } from "@/shared/types";
import { cn } from "@/shared/utils";
import { Flex } from "@soaf/react-components-layout";
import { useEffect, useRef, useState } from "react";
import { DiaryDetail } from "./DiaryDetail";

type DiaryDetailDrawerProps = {
  diary: Diary;
};

export const DiaryDetailDrawer = ({ diary }: DiaryDetailDrawerProps) => {
  const ref = useRef(null);
  const { push } = useFlow();
  const [shouldDisappear, setShouldDisappear] = useState(false);
  const opacity = shouldDisappear ? "opacity-0" : "opacity-100";
  const rounded = shouldDisappear ? "rounded-none" : "rounded-[28px]";

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

  const handleClick = ({ animate }: { animate?: boolean }) => {
    push("DiaryDetailPage", { diaryId: diary.id }, { animate });
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
        <DrawerClose onClick={() => handleClick({ animate: true })}>
          <DiaryDetail diary={diary} />
        </DrawerClose>
        <DrawerClose
          ref={ref}
          onClick={() => handleClick({ animate: false })}
        />
      </Flex>
    </DrawerContent>
  );
};
