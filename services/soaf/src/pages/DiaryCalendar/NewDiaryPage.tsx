/* eslint-disable react/prop-types */
import { ActivityComponentType } from "@stackflow/react";

import { BackButton, PageLayout } from "@/shared/components";

const NewDiaryPage: ActivityComponentType = () => {
  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
      }}
    >
      <div>작성</div>
    </PageLayout>
  );
};

export default NewDiaryPage;
