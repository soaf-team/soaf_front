import { useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/shared/utils";
import heartCircle from "@assets/icons/heart-circle.svg";
import reactionCloud from "@assets/icons/reaction-cloud.svg";

export const DiaryReaction = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleHeartButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="w-full border-t border-solid border-border h-[85px] py-[16px]">
      <div className="flex items-center gap-[10px] body4">
        <img
          src={heartCircle}
          alt="heart-circle"
          className="w-[20px] h-[20px]"
          onClick={handleHeartButtonClick}
        />
        일기에 대한 따뜻한 마음을 남겨보세요.
      </div>
      {createPortal(
        <ReactionCloud
          isVisible={isOpened}
          setIsVisible={handleHeartButtonClick}
        />,
        document.getElementById("modal") as HTMLElement,
      )}
    </div>
  );
};

const ReactionCloud = ({
  isVisible,
  setIsVisible,
}: {
  isVisible: boolean;
  setIsVisible: () => void;
}) => {
  const visibleStyle = isVisible ? "block" : "hidden";

  return (
    <div
      className={cn([
        "fixed inset-0 transition-all duration-300 z-[9999]",
        visibleStyle,
      ])}
    >
      <div
        className={cn(["fixed inset-0 bg-overlay"])}
        onClick={setIsVisible}
      />
      <div className="fixed bottom-[75px] left-[18px] p-[20px] w-[288px] h-[133px]">
        <img
          src={reactionCloud}
          alt="reaction-cloud"
          className="fixed bottom-[60px] left-[12px] w-[296px] h-[153px] z-[-1]"
        />
      </div>
    </div>
  );
};
