import { ActivityComponentType } from "@stackflow/react";
import { useFlow } from "@src/stackflow";
import { PageLayout } from "@src/shared/components";
import { AppScreen } from "@stackflow/plugin-basic-ui";

const Main: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push("Article", {
      title: "Hello",
    });
  };

  return (
    <AppScreen>
      <PageLayout
        header={{
          title: "메인",
        }}
      >
        <div>
          My Activity
          <button onClick={onClick}>Go to article page</button>
        </div>
      </PageLayout>
    </AppScreen>
  );
};

export default Main;
