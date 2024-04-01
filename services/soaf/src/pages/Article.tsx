import { PageLayout } from "@src/shared/components";
import { AppScreen } from "@stackflow/plugin-basic-ui";
const Article = () => {
  return (
    <AppScreen>
      <PageLayout
        header={{
          title: "아티클",
        }}
      >
        <div>
          아티클
          <button onClick={() => {}}>Go to article page</button>
        </div>
      </PageLayout>
    </AppScreen>
  );
};

export default Article;
