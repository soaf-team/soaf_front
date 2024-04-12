import { PageLayout } from "@/shared/components";

const DiaryDetail = () => {
  return (
    <PageLayout
      header={{
        leftSlot: "back",
        rightSlot: "아이콘",
      }}
    >
      <div>일기내용</div>
    </PageLayout>
  );
};

export default DiaryDetail;
