import { PageLayout } from "@src/shared/components";
import { Button } from "@src/shared/components/ui/button";

const DiaryCalendar = () => {
  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: null,
        rightSlot: "아이콘",
      }}
    >
      <div>DiaryCalendar</div>
      <Button>버튼</Button>
    </PageLayout>
  );
};

export default DiaryCalendar;
