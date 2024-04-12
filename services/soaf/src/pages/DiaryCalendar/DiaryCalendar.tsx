import { AsyncBoundary, PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
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
      <Flex direction="column" className="h-full">
        <MyDiaryCalendar />
      </Flex>
    </PageLayout>
  );
};

export default DiaryCalendar;
