import { Button, PageLayout } from "@shared/components";
import { Flex } from "@soaf/react-components-layout";
import { useToast } from "@shared/hooks";
import { useFlow } from "@/pages/stackflow";

const DiaryCalendar = () => {
  const { toast } = useToast();
  const { push } = useFlow();

  return (
    <PageLayout
      header={{
        title: "",
        leftSlot: null,
        rightSlot: "아이콘",
      }}
    >
      <div>DiaryCalendar</div>
      <Flex direction="column" gap={10} justify="flex-end" className="h-full">
        <Button
          onClick={() => {
            console.log("버튼 클릭");
            push("Asdf", {});
          }}
        >
          버튼
        </Button>
      </Flex>
    </PageLayout>
  );
};

export default DiaryCalendar;
