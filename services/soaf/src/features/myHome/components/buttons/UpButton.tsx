import { Flex } from "@soaf/react-components-layout";
import up from "@/assets/icons/my-home/up.svg";

import { useBottomTabStore } from "@/shared/store";

export function UpButton() {
  const { handleOpen } = useBottomTabStore();

  return (
    <Flex
      align="center"
      justify="center"
      className="absolute left-0 right-0 w-full bottom-10 animate-bounce"
    >
      <button className="w-[40px] h-[40px]" onClick={handleOpen}>
        <img src={up} alt="up-icon" className="full_img_cover" />
      </button>
    </Flex>
  );
}
