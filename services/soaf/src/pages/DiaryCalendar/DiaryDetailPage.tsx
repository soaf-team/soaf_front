/* eslint-disable react/prop-types */

import { ActivityComponentType } from "@stackflow/react";
import {
  AsyncBoundary,
  BackButton,
  DotVerticalButton,
  PageLayout,
} from "@/shared/components";
import { DiaryDetail } from "@/features/diary";

type DiaryDetailPageParams = {
  diaryId: string;
};

const DiaryDetailPage: ActivityComponentType<DiaryDetailPageParams> = ({
  params,
}) => {
  const diaryId = params.diaryId;

  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        rightSlot: <DotVerticalButton />,
      }}
    >
      <AsyncBoundary>
        <DiaryDetail diaryId={diaryId} />
      </AsyncBoundary>
    </PageLayout>
  );
};

export default DiaryDetailPage;
