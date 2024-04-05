import { PageLayout } from "@src/shared/components";
import { Button } from "@src/shared/components/Button";
import Stars from "@src/shared/components/ui/Stars";

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
      <div className="pt-4" />
      <Stars size={26} onChange={() => console.log("hi")} />
    </PageLayout>
  );
};

export default DiaryCalendar;
