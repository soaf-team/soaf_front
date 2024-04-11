import { PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useToast } from "@shared/hooks";
import Hamburger from "@assets/icons/header/hamburger.svg";
import { Calendar } from "@/features/diary/components";

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
        <Calendar
          render={(day, index) => (
            <Flex direction="column" gap={5} justify="flex-end" align="center">
              <span className="body4 text-gray300">{day?.getDate()}</span>
              <div
                key={index}
                className="h-10 w-10 flex items-center justify-center bg-gray50 rounded-full"
              />
            </Flex>
          )}
        />
      </Flex>
    </PageLayout>
  );
};

export default DiaryCalendar;
