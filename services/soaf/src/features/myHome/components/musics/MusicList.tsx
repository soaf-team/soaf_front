import { useGetMusics } from "@/features/myHome/queries";

import { Flex } from "@soaf/react-components-layout";

import { MusicItem } from "./MusicItem";
import { Music } from "@/shared/types";

export const MusicList = ({ searchQuery }: { searchQuery: string }) => {
  const { musics } = useGetMusics({ value: searchQuery });

  console.log(musics);

  if (!musics) return null;

  return (
    <Flex direction="column">
      {musics.map((music: Music) => (
        <MusicItem
          key={music.url}
          url={music.url}
          name={music.name}
          artist={music.artist}
          image={music.image[3]["#text"]}
        />
      ))}
    </Flex>
  );
};
