import { Flex } from "@soaf/react-components-layout";
import { BackButton, PageLayout } from "@/shared/components";
import { MyHomeDrawer, RegisterBookForm } from "@/features/myHome/components";

function MyBooks() {
  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        title: <h1 className="head6b">나의 도서</h1>,
        rightSlot: <MyHomeDrawer component={<RegisterBookForm />} />,
      }}
    >
      <Flex
        direction="column"
        gap={8}
        align="center"
        justify="center"
        className="h-full body2m text-gray200"
      >
        <p>좋아하는 도서를 추가해</p>
        <p>나만의 취향 목록을 만들어보세요</p>
      </Flex>
    </PageLayout>
  );
}

export default MyBooks;
