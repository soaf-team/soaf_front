import { useFlow } from "@/pages/stackflow";

import x from "@assets/icons/header/x.svg";

type XButtonProps = {
  onClick?: () => void;
};

export const XButton = ({ onClick }: XButtonProps) => {
  const { pop } = useFlow();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    pop();
  };

  return (
    <button onClick={handleClick}>
      <img src={x} alt="x" className="w-[12px] h-[12px]" />
    </button>
  );
};
