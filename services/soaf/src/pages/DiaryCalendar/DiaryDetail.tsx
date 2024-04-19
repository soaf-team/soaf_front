import { ActivityComponentType } from "@stackflow/react";
import { BackButton, PageLayout } from "@/shared/components";

const DiaryDetail: ActivityComponentType = () => {
  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        rightSlot: "아이콘",
      }}
    >
      <div>일기내용</div>
    </PageLayout>
  );
};

export default DiaryDetail;
