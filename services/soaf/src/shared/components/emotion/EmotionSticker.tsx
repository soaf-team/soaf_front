import { EMOTION_ICON } from "@/shared/constants";
import { Emotion } from "@/shared/types";
import { cn } from "@/shared/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  emotion: Emotion;
  size?: string;
}

export const EmotionSticker = ({
  emotion,
  size = "lg",
  className,
  ...props
}: Props) => {
  const stickerSize = {
    sm: "w-[16px] h-[16px]",
    md: "w-[32px] h-[32px]",
    lg: "w-[42px] h-[42px]",
  }[size];

  return (
    <div className={cn(stickerSize, className)} {...props}>
      <img
        src={EMOTION_ICON[emotion]}
        alt="emotion_icon"
        className="object-cover w-full h-full"
      />
    </div>
  );
};
