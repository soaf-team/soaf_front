import { useFlow } from "@src/stackflow";

type HeaderProps = {
  children: React.ReactNode;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

export const Header = (props: HeaderProps) => {
  const { children, leftSlot = <BackIcon />, rightSlot } = props;

  return (
    <div className="relative flex items-center justify-center h-14">
      {leftSlot && (
        <div className="absolute left-[18px] top-1/2 translate-y-[-50%]">
          {leftSlot}
        </div>
      )}
      {children}
      {rightSlot && (
        <div className="absolute right-[18px] top-1/2 translate-y-[-50%]">
          {rightSlot}
        </div>
      )}
    </div>
  );
};

const BackIcon = () => {
  const { pop } = useFlow();

  return (
    <button onClick={pop}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};
