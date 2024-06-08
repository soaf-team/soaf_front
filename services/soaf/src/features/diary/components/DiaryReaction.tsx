import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import heartCircle from "@assets/icons/heart-circle.svg";
import reactionCloud from "@assets/icons/reaction-cloud.svg";

import best from "@assets/icons/emoji/best.svg";
import sympathy from "@assets/icons/emoji/sympathy.svg";
import cheer from "@assets/icons/emoji/cheer.svg";
import okay from "@assets/icons/emoji/okay.svg";
import impression from "@assets/icons/emoji/impression.svg";
import amazing from "@assets/icons/emoji/amazing.svg";
import fighting from "@assets/icons/emoji/fighting.svg";
import funny from "@assets/icons/emoji/funny.svg";
import angry from "@assets/icons/emoji/angry.svg";
import sad from "@assets/icons/emoji/sad.svg";
import { cn } from "@/shared/utils";

type DiaryReactionProps = {
  reactions: {
    [key: string]: number;
  };
};

export function DiaryReaction({ reactions }: DiaryReactionProps) {
  const [isOpened, setIsOpened] = useState(false);

  const handleHeartButtonClick = () => {
    setIsOpened(true);
  };

  return (
    <div className="relative w-full border-t border-solid border-border h-[85px] py-[16px]">
      {Object.keys(reactions).length > 0 ? (
        <div className="flex flex-wrap gap-[6px]">
          {Object.entries(reactions).map(([key, count]) => (
            <div
              key={key}
              className="flex items-center gap-[4px] label4 text-black/70"
            >
              <img
                src={REACTION_EMOJI[key as keyof typeof REACTION_EMOJI].icon}
                alt={REACTION_EMOJI[key as keyof typeof REACTION_EMOJI].label}
                className="w-[20px] h-[20px]"
              />
              {REACTION_EMOJI[key as keyof typeof REACTION_EMOJI].label} {count}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-[10px] body4">
          <img
            src={heartCircle}
            alt="heart-circle"
            className="w-[22px] h-[20px]"
            onClick={handleHeartButtonClick}
          />
          일기에 대한 따뜻한 마음을 남겨보세요.
        </div>
      )}
      {createPortal(
        <ReactionCloud
          isVisible={isOpened}
          onCloudClose={() => setIsOpened(false)}
        />,
        document.getElementById("modal") as HTMLElement,
      )}
    </div>
  );
}

function ReactionCloud({
  isVisible,
  onCloudClose,
}: {
  isVisible: boolean;
  onCloudClose: () => void;
}) {
  const [visible, setVisible] = useState(isVisible);
  const visibleStyle = isVisible ? "animate-fadeIn" : "animate-fadeOut";

  const handleEmojiClick = (emoji: string) => {
    console.log(emoji);
    onCloudClose();
  };

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 300);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isVisible]);

  if (!visible) return null;

  return (
    <div
      className={cn([
        "absolute inset-0 max-w-window m-auto transition-all duration-300 z-[9999]",
        visibleStyle,
      ])}
    >
      <div
        className={cn(["absolute inset-0 max-w-window m-auto bg-overlay"])}
        onClick={e => {
          e.stopPropagation();
          onCloudClose();
        }}
      />
      <div className="absolute flex bottom-[78px] left-[16px] m-auto w-[288px] h-[133px] z-[10000]">
        <div className="absolute w-full h-full grid grid-cols-5 gap- py-[12px] px-[12px]">
          {Object.values(REACTION_EMOJI).map((emoji, index) => (
            <div
              key={index}
              onClick={() => handleEmojiClick(emoji.label)}
              className="flex flex-col items-center justify-center text-[10px] leading-[12px] font-semibold"
            >
              <img
                src={emoji.icon}
                alt={emoji.label}
                className="w-[38px] h-[38px]"
              />
              {emoji.label}
            </div>
          ))}
        </div>
        <img
          src={reactionCloud}
          alt="reaction-cloud"
          className="abosute w-[296px] h-[157px] z-[-1]"
        />
      </div>
    </div>
  );
}

const REACTION_EMOJI = {
  best: { label: "최고예요", icon: best },
  sympathy: { label: "공감해요", icon: sympathy },
  cheer: { label: "응원해요", icon: cheer },
  okay: { label: "괜찮아요", icon: okay },
  impression: { label: "감동이예요", icon: impression },
  amazing: { label: "대단해요", icon: amazing },
  fighting: { label: "힘내요", icon: fighting },
  funny: { label: "웃겨요", icon: funny },
  angry: { label: "화냐요", icon: angry },
  sad: { label: "슬퍼요", icon: sad },
};
