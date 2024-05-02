import { useState } from "react";
import { useGetMusics } from "@/features/myHome/queries";
import { useMusicStore } from "../../store";

import { Flex } from "@soaf/react-components-layout";

import { MusicItem } from "./MusicItem";
import { Music } from "@/shared/types";
import { SearchInput } from "../SearchInput";

interface Props {
  onNextStep: () => void;
}

export const SearchMusicList = ({ onNextStep }: Props) => {
  const { setMusic } = useMusicStore();
  const [searchQuery, setSearchQuery] = useState("");
  const { musics } = useGetMusics({ value: searchQuery });

  console.log(musics);

  const handleSelectMusic = (music: Music) => {
    setMusic(music);
    onNextStep();
  };

  if (!musics) return null;

  return (
    <Flex direction="column">
      <SearchInput type="music" setSearchQuery={setSearchQuery} />

      {musics.map((music: Music) => (
        <MusicItem
          key={music.url}
          url={music.url}
          name={music.name}
          artist={music.artist}
          image={music.image[3]["#text"]}
          onClick={() => handleSelectMusic(music)}
        />
      ))}
    </Flex>
  );
};
