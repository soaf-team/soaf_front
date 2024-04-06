import { Button, PageLayout } from "@shared/components";
import { useToast } from "@shared/hooks";
import { useFlow } from "@pages/stackflow";

const Asdf = () => {
  const { push } = useFlow();

  return (
    <PageLayout
      header={{
        title: "asdf",
      }}
    >
      <div>asdf</div>
      <Button onClick={() => push("Asdf", {})}>토스트</Button>
    </PageLayout>
  );
};

export default Asdf;
