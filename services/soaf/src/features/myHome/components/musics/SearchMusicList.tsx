import { useState } from "react";
import { useGetMusics } from "@/features/myHome/queries";
import { useObserver } from "@/shared/hooks";

import { Flex } from "@soaf/react-components-layout";

import { MusicItem } from "./MusicItem";
import { Album } from "@/shared/types";
import { SearchInput } from "../SearchInput";

interface Props {
  onNextStep: () => void;
  setMusic: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export const SearchMusicList = ({ onNextStep, setMusic }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { musics, handleFetchNextPage, isFetching } = useGetMusics({
    value: searchQuery,
  });
  const pageRef = useObserver(() => handleFetchNextPage());

  const handleItemClick = (music: Album) => {
    setMusic({
      name: music.name,
      artist: music.artist,
    });
    onNextStep();
  };

  return (
    <Flex direction="column">
      <SearchInput type="music" setSearchQuery={setSearchQuery} />

      {musics?.map((music: Album) => (
        <MusicItem
          type="search"
          key={music.url}
          music={music}
          onClick={() => handleItemClick(music)}
        />
      ))}
      {isFetching ? (
        <div>로딩 중...</div>
      ) : (
        <div ref={pageRef} className="h-px" />
      )}
    </Flex>
  );
};
