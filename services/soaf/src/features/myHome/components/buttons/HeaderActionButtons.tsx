import { Flex } from "@soaf/react-components-layout";
import brush from "@/assets/icons/my-home/header/brush.svg";
import bell from "@/assets/icons/my-home/header/bell.svg";
import setting from "@/assets/icons/my-home/header/setting.svg";
import check from "@/assets/icons/my-home/header/check.svg";

interface Props {
  onBrushClick?: () => void;
}

export function HeaderActionButtons({ onBrushClick }: Props) {
  return (
    <Flex gap={14}>
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
}

export function CheckButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="w-[24px] h-[24px]" onClick={onClick}>
      <img src={check} alt="check-icon" className="full_img_cover" />
    </button>
  );
}
