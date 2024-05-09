import { useState } from "react";
import { useGetMusics } from "@/features/myHome/queries";

import { Flex } from "@soaf/react-components-layout";

import { MusicItem } from "./MusicItem";
import { Album } from "@/shared/types";
import { SearchInput } from "../SearchInput";

interface Props {
  onNextStep: () => void;
}

export const SearchMusicList = ({ onNextStep }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { musics } = useGetMusics({ value: searchQuery });

  if (!musics) return null;

  return (
    <Flex direction="column">
      <SearchInput type="music" setSearchQuery={setSearchQuery} />

      {musics.map((music: Album) => (
        <MusicItem
          type="search"
          key={music.url}
          music={music}
          onClick={onNextStep}
        />
      ))}
    </Flex>
  );
};
