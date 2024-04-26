import { BackButton, PageLayout } from "@/shared/components";
import { MyHomeDrawer } from "@/features/myHome/components";

const MyMusic = () => {
  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        title: <span className="head6b">나의 음악</span>,
        rightSlot: <MyHomeDrawer type="music" />,
      }}
    >
      하잉
    </PageLayout>
  );
};

export default MyMusic;
