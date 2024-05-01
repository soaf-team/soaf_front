import { Flex } from "@soaf/react-components-layout";
import { BackButton, PageLayout, AsyncBoundary } from "@/shared/components";
import { MyHomeDrawer, MusicList } from "@/features/myHome/components";

import { useState } from "react";

const MyMusic = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        title: <span className="head6b">나의 음악</span>,
        rightSlot: (
          <MyHomeDrawer
            type="music"
            setSearchQuery={setSearchQuery}
            list={
              <AsyncBoundary loadingFallback={<>로딩중 ..</>}>
                <MusicList searchQuery={searchQuery} />
              </AsyncBoundary>
            }
          />
        ),
      }}
    >
      <Flex
        direction="column"
        gap={8}
        align="center"
        className="body2m text-gray200 mt-[16px]"
      >
        <p>좋아하는 음악을 추가해</p>
        <p>나만의 취향 목록을 만들어보세요</p>
      </Flex>
    </PageLayout>
  );
};

export default MyMusic;
