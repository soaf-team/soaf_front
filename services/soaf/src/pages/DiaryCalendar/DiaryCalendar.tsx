import { Button, PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useToast } from "@shared/hooks";
import { useFlow } from "@pages/stackflow";

import Hamburger from "@assets/icons/header/hamburger.svg";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/components/dialog";

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
        <Drawer snapPoints={[0.6, 1]} fadeFromIndex={0}>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent className="max-h-[90vh] h-full border-none text-center">
            <Flex
              direction="column"
              justify="space-between"
              gap={40}
              className="h-full"
            >
              드로어
              <DrawerClose>
                <Button>확인</Button>
              </DrawerClose>
            </Flex>
          </DrawerContent>
        </Drawer>
      </Flex>
    </PageLayout>
  );
};

export default DiaryCalendar;
