import dotVertical from "@assets/icons/header/dotVertical.svg";

type XButtonProps = {
  onClick?: () => void;
};

export function DotVerticalButton({ onClick }: XButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={dotVertical} alt="dot_vertical" className="w-[24px] h-[24px]" />
    </button>
  );
}
