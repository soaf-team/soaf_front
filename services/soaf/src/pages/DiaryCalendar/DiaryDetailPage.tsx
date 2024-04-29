import { ActivityComponentType } from "@stackflow/react";
import { BackButton, DotVerticalButton, PageLayout } from "@/shared/components";
import { DiaryDetail, DiaryReaction } from "@/features/diary/components";
import { useDiaryQuery } from "@/features/diary/queries";

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
      <div className="flex flex-col justify-between h-full">
        {diary && <DiaryDetail diary={diary} />}
        <DiaryReaction />
      </div>
    </PageLayout>
  );
};

export default DiaryDetailPage;
