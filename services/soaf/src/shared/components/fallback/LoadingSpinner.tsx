import { Flex } from "@soaf/react-components-layout";

import LoadingSpinnerIcon from "@assets/icons/loading/loadingSpinner.png";
import { cn } from "@/shared/utils";

type LoadingSpinnerProps = {
  size?: "sm" | "md" | "lg";
  text?: string;
  color?: string;
};

export function LoadingSpinner({
  text,
  size = "lg",
  color,
}: LoadingSpinnerProps) {
  const textColor = `text-${color}`;

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap={TYPE_GAP_SIZE[size]}
    >
      <img
        src={LoadingSpinnerIcon}
        alt="loading_spinner"
        className={cn(["animate-spin", TYPE_SPINNER_SIZE[size]])}
      />
      {text && <p className={cn([TYPE_TEXT_SIZE[size], textColor])}>{text}</p>}
    </Flex>
  );
}

const TYPE_SPINNER_SIZE = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

const TYPE_TEXT_SIZE = {
  sm: "body2",
  md: "body1",
  lg: "head4",
};

const TYPE_GAP_SIZE = {
  sm: 10,
  md: 12,
  lg: 14,
};
