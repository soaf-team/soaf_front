import { PageLayout } from "@shared/components";

const MyHome = () => {
  return (
    <PageLayout
      header={{
        title: "마이홈",
        leftSlot: "back",
        rightSlot: "아이콘",
        headerClass: "bg-transparent",
      }}
    >
      <div>MyHome</div>
    </PageLayout>
  );
};

export default MyHome;
