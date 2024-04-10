import { ReactNode, Ref, forwardRef } from "react";
import { FlexProps, Flex } from "@soaf/react-components-layout";
import { cn } from "@/shared/utils";

type CardProps = {
  children: ReactNode;
  shadow?: boolean;
} & FlexProps;

const Card = (
  { children, shadow, className, direction = "column", ...props }: CardProps,
  ref: Ref<HTMLDivElement>,
) => {
  const shadowClass = shadow ? "shadow-shadow1" : "";

  return (
    <Flex
      ref={ref}
      direction={direction}
      className={cn(["rounded-2xl p-[16px] bg-white", shadowClass, className])}
      {...props}
    >
      {children}
    </Flex>
  );
};

const _Card = forwardRef(Card);
export { _Card as Card };
