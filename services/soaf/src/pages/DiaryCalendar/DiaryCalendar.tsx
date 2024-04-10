import { PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useToast } from "@shared/hooks";
import Hamburger from "@assets/icons/header/hamburger.svg";

import { Card } from "@/shared/components/ui/Card";

const DiaryCalendar = () => {
  const { toast } = useToast();
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
        <Card shadow>
          <span>카드에요</span>
          <span>카드에요</span>
          <span>카드에요</span>
        </Card>
      </Flex>
    </PageLayout>
  );
};

export default DiaryCalendar;
