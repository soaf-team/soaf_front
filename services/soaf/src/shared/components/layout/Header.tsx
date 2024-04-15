import { useFlow } from "@pages/stackflow";

type HeaderProps = {
  children: React.ReactNode;
  leftSlot?: React.ReactNode | "back";
  rightSlot?: React.ReactNode;
};

export const Header = (props: HeaderProps) => {
  const { children, leftSlot, rightSlot } = props;

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-[56px] bg-white z-50">
      {leftSlot && (
        <div className="absolute left-[18px] top-1/2 translate-y-[-50%]">
          {leftSlot === "back" ? <BackIcon /> : leftSlot}
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
