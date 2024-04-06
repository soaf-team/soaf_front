import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useStack } from "@stackflow/react";
import { Header } from "./Header";

import { cn } from "@shared/utils";
import { useActiveActivity } from "@shared/hooks";

type PageLayoutProps = {
  children: React.ReactNode;
  header?: {
    title: React.ReactNode;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
  };
};

export const PageLayout = ({ children, header }: PageLayoutProps) => {
  const stack = useStack();
  const { isBottomTabAcitivity } = useActiveActivity(stack);
  const marginBottom = isBottomTabAcitivity ? "103px" : "20px";

  return (
    <AppScreen>
      {header != null ? (
        <Header leftSlot={header.leftSlot} rightSlot={header.rightSlot}>
          {header.title}
        </Header>
      ) : null}
      <main className={cn(["px-[18px]", marginBottom])}>{children}</main>
    </AppScreen>
  );
};
