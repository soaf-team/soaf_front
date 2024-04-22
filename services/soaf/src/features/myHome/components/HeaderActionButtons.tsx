import brush from "@/assets/icons/my-home/header/brush.svg";
import bell from "@/assets/icons/my-home/header/bell.svg";
import setting from "@/assets/icons/my-home/header/setting.svg";
import x from "@/assets/icons/header/x.svg";
import check from "@/assets/icons/my-home/header/check.svg";

import { Flex } from "@soaf/react-components-layout";

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

export const Xbutton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="w-[12px] h-[12px]" onClick={onClick}>
      <img src={x} alt="x-icon" className="full_img_cover" />
    </button>
  );
};

export const CheckButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="w-[24px] h-[24px]" onClick={onClick}>
      <img src={check} alt="check-icon" className="full_img_cover" />
    </button>
  );
};
