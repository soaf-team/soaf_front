import { Emotion } from "@/features/diary/components/emotion/types";
import { EMOTION_ICON } from "@/shared/constants/emotion";
import { cn } from "@/shared/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  emotion: Emotion;
  size?: string;
}

const EmotionSticker = ({ emotion, size = "md", className, style }: Props) => {
  const stickerSize = size === "md" ? "w-[42px] h-[42px]" : "w-[16px] h-[16px]";

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
