import { PageLayout } from "@shared/components";

const MyHome = () => {
  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: null,
        rightSlot: "아이콘",
      }}
    >
      <div>MyHome</div>
    </PageLayout>
  );
};

export default MyHome;
