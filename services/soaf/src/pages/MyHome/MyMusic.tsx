import { Flex } from "@soaf/react-components-layout";
import { BackButton, PageLayout } from "@/shared/components";
import { MyHomeDrawer, RegisterMusicForm } from "@/features/myHome/components";

function MyMusic() {
  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        title: <h1 className="head6b">나의 음악</h1>,
        rightSlot: <MyHomeDrawer component={<RegisterMusicForm />} />,
      }}
    >
      <Flex
        direction="column"
        gap={8}
        align="center"
        justify="center"
        className="h-full body2m text-gray200"
      >
        <p>좋아하는 음악을 추가해</p>
        <p>나만의 취향 목록을 만들어보세요</p>
      </Flex>
    </PageLayout>
  );
}

export default MyMusic;
