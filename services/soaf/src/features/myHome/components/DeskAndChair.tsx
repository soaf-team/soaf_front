import mainDay from "@/assets/icons/my-home/interior/main-day.svg";
import mainNight from "@/assets/icons/my-home/interior/main-night.svg";

interface Props {
  className?: string;
  isAfter6PM: boolean;
}

export const DeskAndChair = (props: Props) => {
  const { className, isAfter6PM } = props;

  return (
    <div className={className}>
      <img
        src={isAfter6PM ? mainNight : mainDay}
        alt="desk-and-chair"
        className="full_img_cover"
      />
    </div>
  );
};
