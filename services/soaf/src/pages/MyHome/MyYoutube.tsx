import { Flex } from "@soaf/react-components-layout";
import { BackButton, PageLayout } from "@/shared/components";
import {
  MyHomeDrawer,
  RegisterYoutubeForm,
} from "@/features/myHome/components";

const MyYoutube = () => {
  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        title: <h1 className="head6b">나의 유튜브</h1>,
        rightSlot: <MyHomeDrawer component={<RegisterYoutubeForm />} />,
      }}
    >
      <Flex
        direction="column"
        gap={8}
        align="center"
        justify="center"
        className="h-full body2m text-gray200"
      >
        <p>좋아하는 유튜브 링크를 추가해</p>
        <p>나만의 취향 목록을 만들어보세요</p>
      </Flex>
    </PageLayout>
  );
};

export default MyYoutube;
