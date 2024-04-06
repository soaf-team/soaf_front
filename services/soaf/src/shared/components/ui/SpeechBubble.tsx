// TODO: 글자 스타일링 필요함

import dayjs from "dayjs";
import { cn } from "@shared/utils";
import { VariantProps, cva } from "class-variance-authority";

const bubbleVariants = cva(
  `inline-flex items-center justify-center whitespace-nowrap rounded-[16px] 
   max-w-[80%] py-[8px] px-[12px]`,
  {
    variants: {
      variant: {
        isMine: "bg-primary text-white",
        isOpponent: "bg-gray50 text-black",
      },
      order: {
        isFirst: "rounded-tr-[4px]",
        isOpponentFirst: "rounded-bl-[4px]",
      },
    },
  },
);

interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants> {
  nickname?: string;
  message: string;
  sentAt: string;
}

const SpeechBubble = ({
  nickname,
  message,
  sentAt,
  variant,
  order,
  className,
  ...props
}: Props) => {
  const isMine = variant === "isMine";

  return (
    <article
      className={`flex gap-[4px] ${isMine ? "flex-row-reverse" : "flex-col"}`}
    >
      {!isMine && (
        <div className="leading-[16px] text-#1212129C">{nickname}</div>
      )}

      <div className={`flex items-end gap-[4px]`}>
        {isMine && <div>{dayjs(sentAt).format("a HH:mm")}</div>}
        <div
          {...props}
          className={cn(bubbleVariants({ variant, order, className }))}
        >
          <div>{message}</div>
        </div>
        {!isMine && <div>{dayjs(sentAt).format("a HH:mm")}</div>}
      </div>
    </article>
  );
};

export default SpeechBubble;
