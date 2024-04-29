import { Flex } from "@soaf/react-components-layout";
import { BackButton, PageLayout } from "@/shared/components";
import { MyHomeDrawer, MusicList } from "@/features/myHome/components";

import { useState } from "react";
import { useGetMusics } from "@/features/myHome/queries";

const MyMusic = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { musics } = useGetMusics({ value: searchQuery });

  console.log(musics);

  return (
    <PageLayout
      header={{
        leftSlot: <BackButton />,
        title: <span className="head6b">나의 음악</span>,
        rightSlot: (
          <MyHomeDrawer
            type="music"
            setSearchQuery={setSearchQuery}
            list={<MusicList musics={musics} />}
          />
        ),
      }}
    >
      <Flex
        direction="column"
        gap={8}
        align="center"
        className="body2m text-gray200 mt-"
      >
        <p>좋아하는 음악을 추가해</p>
        <p>나만의 취향 목록을 만들어보세요</p>
      </Flex>
    </PageLayout>
  );
};

export default MyMusic;
