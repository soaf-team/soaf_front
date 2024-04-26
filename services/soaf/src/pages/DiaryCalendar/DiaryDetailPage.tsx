import { ActivityComponentType } from "@stackflow/react";
import { BackButton, DotVerticalButton, PageLayout } from "@/shared/components";
import { useDiaryQuery } from "@/features/diary/queries";
import { DiaryDetail } from "@/features/diary/components";

const DiaryDetailPage: ActivityComponentType = () => {
  const { myDiaries } = useDiaryQuery();

  const diary = myDiaries[0];

  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        rightSlot: <DotVerticalButton />,
      }}
    >
      <DiaryDetail diary={diary} />
    </PageLayout>
  );
};

export default DiaryDetailPage;
