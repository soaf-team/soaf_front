import { useState } from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onToggle?: () => void;
}

function ToggleButton({ className, onToggle, ...props }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(prev => !prev);

    onToggle?.();
  };

  return (
    <button
      {...props}
      className={`${className} ${isActive ? "bg-primary" : "bg-gray50"}
        w-[47px] h-[28px] rounded-[16px] relative transition-colors duration-200
      `}
      onClick={handleClick}
      {...props}
    >
      <div
        className={`bg-white rounded-full
            w-[21px] h-[21px] absolute top-[3px] left-[3.5px] transition-transform duration-200
            transform translate-x-[0px] ${isActive ? "translate-x-[19px]" : ""}
        `}
      />
    </button>
  );
}

export default ToggleButton;
