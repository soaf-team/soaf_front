import { EMOTION_ICON } from "@/shared/constants";
import { Emotion } from "@/shared/types";
import { cn } from "@/shared/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  emotion: Emotion;
  size?: string;
}

const EmotionSticker = ({ emotion, size = "lg", className, style }: Props) => {
  const stickerSize = {
    sm: "w-[16px] h-[16px]",
    md: "w-[32px] h-[32px]",
    lg: "w-[42px] h-[42px]",
  }[size];

  return (
    <div className={cn(stickerSize, className)} style={style}>
      <img
        src={EMOTION_ICON[emotion]}
        alt="emotion_icon"
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default EmotionSticker;
