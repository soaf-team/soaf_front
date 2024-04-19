import { Flex } from "@soaf/react-components-layout";
import brush from "@/assets/icons/my-home/header/brush.svg";
import bell from "@/assets/icons/my-home/header/bell.svg";
import setting from "@/assets/icons/my-home/header/setting.svg";

interface Props {
  onBrushClick?: () => void;
}

export const HeaderActionButtons = ({ onBrushClick }: Props) => {
  return (
    <Flex gap={8}>
      <button className="w-[24px] h-[24px]" onClick={onBrushClick}>
        <img src={brush} alt="brush-icon" className="full_img_cover" />
      </button>
      <button className="w-[24px] h-[24px]">
        <img src={bell} alt="brush-icon" className="full_img_cover" />
      </button>
      <button className="w-[24px] h-[24px]">
        <img src={setting} alt="brush-icon" className="full_img_cover" />
      </button>
    </Flex>
  );
};
