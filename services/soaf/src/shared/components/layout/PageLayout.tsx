import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useStack } from "@stackflow/react";
import { Header } from "./Header";

import { cn } from "@shared/utils";
import { useActiveActivity } from "@shared/hooks";

type PageLayoutProps = {
  children: React.ReactNode;
  header?: {
    title?: React.ReactNode;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
    headerClass?: string;
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
      <div className={cn(["h-screen box-border", paddingBottom, paddingTop])}>
        {header != null ? (
          <Header
            leftSlot={header.leftSlot}
            rightSlot={header.rightSlot}
            className={header.headerClass}
          >
            {header.title}
          </Header>
        ) : null}
        <main className={cn(["px-[18px] h-full", className])}>{children}</main>
      </div>
    </AppScreen>
  );
};
