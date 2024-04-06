import { LoadingSpinner, PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useToast } from "@shared/hooks";
import { useFlow } from "@pages/stackflow";

import Hamburger from "@assets/icons/header/hamburger.svg";

const DiaryCalendar = () => {
  const { toast } = useToast();
  const { push } = useFlow();

  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: null,
        rightSlot: (
          <img
            src={Hamburger}
            alt="hamburger"
            onClick={() => toast({ description: "Hamburger clicked" })}
          />
        ),
      }}
    >
      <Flex
        direction="column"
        gap={10}
        justify="center"
        align="center"
        className="h-full"
      >
        <LoadingSpinner text="소프를 찾는 중이에요" size="md" />
      </Flex>
    </PageLayout>
  );
};

export default DiaryCalendar;
