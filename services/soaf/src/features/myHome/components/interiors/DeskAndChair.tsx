import { useFlow } from "@/pages/stackflow";

import mainDay from "@/assets/icons/my-home/interior/main-day.svg";
import mainNight from "@/assets/icons/my-home/interior/main-night.svg";
import diary from "@/assets/icons/my-home/interior/diary.svg";

import { cn } from "@/shared/utils";

interface Props {
  className?: string;
  isAfter6PM: boolean;
}

export const DeskAndChair = (props: Props) => {
  const { push } = useFlow();

  const { className, isAfter6PM } = props;

  return (
    <div className={cn("relative", className)}>
      <img
        src={isAfter6PM ? mainNight : mainDay}
        alt="desk-and-chair"
        className="full_img_cover"
      />

      <img
        src={diary}
        alt="diary"
        className="absolute_center w-[36%] ml-[3%] mt-[3px]"
        onClick={() => push("MyDiary", {})}
      />
    </div>
  );
};
