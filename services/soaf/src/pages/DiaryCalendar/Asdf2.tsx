import { Button, PageLayout } from "@/src/shared/components";
import { useToast } from "@/src/shared/hooks";

const Asdf2 = () => {
  const { toast } = useToast();

  return (
    <PageLayout
      header={{
        title: "asdf",
      }}
    >
      <div>asdf</div>
      <Button onClick={() => toast({ description: "하위" })}>토스트</Button>
    </PageLayout>
  );
};

export default Asdf2;
