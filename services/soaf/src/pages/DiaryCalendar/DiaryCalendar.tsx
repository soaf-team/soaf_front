import { PageLayout } from "@shared/components";
import Hamburger from "@assets/icons/header/hamburger.svg";
import { MyDiaryCalendar } from "@/features/diary";
import { useFlow } from "../stackflow";

const DiaryCalendar = () => {
  const { push } = useFlow();

  return (
    <PageLayout
      header={{
        rightSlot: (
          <img
            src={Hamburger}
            alt="hamburger"
            onClick={() => push("Login", {})}
          />
        ),
      }}
    >
      <MyDiaryCalendar />
    </PageLayout>
  );
};

export default DiaryCalendar;
