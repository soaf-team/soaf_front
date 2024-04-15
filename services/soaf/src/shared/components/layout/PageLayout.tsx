import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useStack } from "@stackflow/react";
import { Header } from "./Header";

import { cn } from "@shared/utils";
import { useActiveActivity } from "@shared/hooks";

type PageLayoutProps = {
  children: React.ReactNode;
  header?: {
    title?: React.ReactNode;
    leftSlot?: React.ReactNode | "back";
    rightSlot?: React.ReactNode;
  };
  className?: string;
};

export const PageLayout = ({
  children,
  header,
  className,
}: PageLayoutProps) => {
  const stack = useStack();
  const { isBottomTabAcitivity } = useActiveActivity(stack);
  const paddingBottom = isBottomTabAcitivity ? "pb-[83px]" : "pb-0";
  const paddingTop = header != null ? "pt-[56px]" : "pt-0";

  return (
    <AppScreen>
      <div
        className={cn([
          "h-screen box-border",
          paddingBottom,
          paddingTop,
          className,
        ])}
      >
        {header != null ? (
          <Header leftSlot={header.leftSlot} rightSlot={header.rightSlot}>
            {header.title}
          </Header>
        ) : null}
        <main className={"px-[18px] h-full"}>{children}</main>
      </div>
    </AppScreen>
  );
};
