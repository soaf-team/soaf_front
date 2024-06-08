import { useState } from "react";
import { Flex } from "@soaf/react-components-layout";
import { useGetMusics } from "@/features/myHome/queries";

import { MusicItem } from "./MusicItem";
import { Album } from "@/shared/types";
import { SearchInput } from "../SearchInput";

interface Props {
  onNextStep: () => void;
  setMusic: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export function SearchMusicList({ onNextStep, setMusic }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const { musics } = useGetMusics({ value: searchQuery });

  const handleItemClick = (music: Album) => {
    setMusic({
      name: music.name,
      artist: music.artist,
    });
    onNextStep();
  };

  if (!musics) return null;

  return (
    <Flex direction="column">
      <SearchInput type="music" setSearchQuery={setSearchQuery} />

      {musics.map((music: Album) => (
        <MusicItem
          type="search"
          key={music.url}
          music={music}
          onClick={() => handleItemClick(music)}
        />
      ))}
    </Flex>
  );
}
