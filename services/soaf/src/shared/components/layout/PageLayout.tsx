import { AppScreen } from "@stackflow/plugin-basic-ui";
import { BottomTab } from "./BottomTab";
import { Header } from "./Header";

type PageLayoutProps = {
  children: React.ReactNode;
  header?: {
    title: React.ReactNode;
    leftSlot?: React.ReactNode;
    rightSlot?: React.ReactNode;
  };
};

export const PageLayout = ({ children, header }: PageLayoutProps) => {
  return (
    <AppScreen>
      {header != null ? (
        <Header leftSlot={header.leftSlot} rightSlot={header.rightSlot}>
          {header.title}
        </Header>
      ) : null}
      <main className="px-[18px]">{children}</main>
      <BottomTab />
    </AppScreen>
  );
};
