import x from "@assets/icons/header/x.svg";
import { useFlow } from "@/pages/stackflow";

type XButtonProps = {
  onClick?: () => void;
};

export function XButton({ onClick }: XButtonProps) {
  const { pop } = useFlow();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    pop();
  };

  return (
    <img onClick={handleClick} src={x} alt="x" className="w-[12px] h-[12px]" />
  );
}
