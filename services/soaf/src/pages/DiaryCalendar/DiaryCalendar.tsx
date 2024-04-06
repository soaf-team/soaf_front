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
      <Button>버튼</Button>
      <div className="pt-4" />
      <Stars size={26} onChange={(value) => console.log(value)} />
      <div className="pt-4" />
    </PageLayout>
  );
};

export default DiaryCalendar;
