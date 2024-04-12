import { PageLayout } from "@shared/components";
import Hamburger from "@assets/icons/header/hamburger.svg";
import { MyDiaryCalendar } from "@/features/diary/components";
import { useToast } from "@/shared/hooks";

const DiaryCalendar = () => {
  const { toast } = useToast();

  return (
    <PageLayout
      header={{
        rightSlot: (
          <img
            src={Hamburger}
            alt="hamburger"
            onClick={() => toast({ description: "Hamburger clicked" })}
          />
        ),
      }}
    >
      <MyDiaryCalendar />
    </PageLayout>
  );
};

export default DiaryCalendar;
