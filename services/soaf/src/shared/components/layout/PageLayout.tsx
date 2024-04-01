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
    <>
      {header && (
        <Header leftSlot={header.leftSlot} rightSlot={header.rightSlot}>
          {header.title}
        </Header>
      )}
      <main className="px-[18px]">{children}</main>
    </>
  );
};
