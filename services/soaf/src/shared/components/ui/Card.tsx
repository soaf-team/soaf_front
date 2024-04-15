import { ReactNode, Ref, forwardRef } from "react";
import { FlexProps, Flex } from "@soaf/react-components-layout";
import { cn } from "@/shared/utils";

type CardProps = {
  children: ReactNode;
  shadow?: boolean;
  isSelected?: boolean;
} & FlexProps;

const Card = (
  {
    children,
    shadow,
    className,
    direction = "column",
    isSelected,
    ...props
  }: CardProps,
  ref: Ref<HTMLDivElement>,
) => {
  const shadowClass = shadow ? "shadow-shadow1" : "";

  // TODO: 그라이데이션 컬러 checkbox 추가
  const selectedClass = isSelected
    ? "border-primary border-[2px] border-solid"
    : "";

  return (
    <Flex
      ref={ref}
      direction={direction}
      className={cn([
        "rounded-2xl p-[16px] bg-white",
        shadowClass,
        selectedClass,
        className,
      ])}
      {...props}
    >
      {children}
    </Flex>
  );
};

const _Card = forwardRef(Card);
export { _Card as Card };
