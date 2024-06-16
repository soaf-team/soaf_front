import { ActivityComponentType } from "@stackflow/react";
import { PageLayout } from "@shared/components";
import ListIcon from "@assets/icons/header/list.svg";
import { MyDiaryCalendar } from "@/features/diary";
import { useFlow } from "../stackflow";

const DiaryCalendar: ActivityComponentType = () => {
  const { push } = useFlow();

  const handleClickListButton = () => {
    push("DiaryListPage", {});
  };

  return (
    <PageLayout
      header={{
        rightSlot: (
          <img src={ListIcon} alt="list" onClick={handleClickListButton} />
        ),
      }}
    >
      하이루
      <MyDiaryCalendar />
    </PageLayout>
  );
};

export default DiaryCalendar;
