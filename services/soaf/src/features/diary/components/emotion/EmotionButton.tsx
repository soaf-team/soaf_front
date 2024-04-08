import angry from "@assets/emotions/angry.svg";
import anxious from "@assets/emotions/anxious.svg";
import comportable from "@assets/emotions/comportable.svg";
import flutter from "@assets/emotions/flutter.svg";
import funny from "@assets/emotions/funny.svg";
import gloomy from "@assets/emotions/gloomy.svg";
import happy from "@assets/emotions/happy.svg";
import lonely from "@assets/emotions/lonely.svg";
import proud from "@assets/emotions/proud.svg";
import pleased from "@assets/emotions/pleased.svg";
import sad from "@assets/emotions/sad.svg";
import tired from "@assets/emotions/tired.svg";

import { cn } from "@/shared/utils";
import { Emotion } from "./types";

type EmotionButtonProps = {
  emotion: Emotion;
  selected?: boolean;
  onClick?: (emotion: Emotion) => void;
} & Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick">;

export const EmotionButton = ({
  emotion,
  selected,
  onClick,
  ...props
}: EmotionButtonProps) => {
  const colorStyle = selected
    ? "bg-white text-black shadow-shadow1"
    : "bg-[#F0F1F4] text-gray300";

  const imageOpacity = selected ? "opacity-100" : "opacity-0";

  return (
    <button
      {...props}
      className={cn([
        "relative flex items-center rounded-[16px] h-[52px] p-[15px] overflow-hidden min-w-[163px] transition-all duration-300 ease-in-out",
        colorStyle,
      ])}
      onClick={() => onClick?.(emotion)}
    >
      {emotion}
      <img
        src={EMOTION_ICON[emotion]}
        alt="emotion_icon"
        className={cn(
          [
            "absolute right-[-8px] h-[60px] w-[60px] transition-opacity duration-300 ease-in-out",
          ],
          imageOpacity,
        )}
      />
    </button>
  );
};

const EMOTION_ICON = {
  행복한: happy,
  기분좋은: pleased,
  즐거운: funny,
  설레는: flutter,
  뿌듯한: proud,
  편안한: comportable,
  피곤한: tired,
  외로운: lonely,
  슬픈: sad,
  우울한: gloomy,
  불안한: anxious,
  화난: angry,
};
