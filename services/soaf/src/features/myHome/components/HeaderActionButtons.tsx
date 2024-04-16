import { Flex } from "@soaf/react-components-layout";
import brush from "@/assets/icons/my-home/header/brush.svg";
import bell from "@/assets/icons/my-home/header/bell.svg";
import setting from "@/assets/icons/my-home/header/setting.svg";

// TODO: add onClick

export const HeaderActionButtons = () => {
  return (
    <Flex gap={8}>
      <div className="w-[24px] h-[24px]">
        <img src={brush} alt="brush-icon" className="full_img_cover" />
      </div>
      <div className="w-[24px] h-[24px]">
        <img src={bell} alt="brush-icon" className="full_img_cover" />
      </div>
      <div className="w-[24px] h-[24px]">
        <img src={setting} alt="brush-icon" className="full_img_cover" />
      </div>
    </Flex>
  );
};
