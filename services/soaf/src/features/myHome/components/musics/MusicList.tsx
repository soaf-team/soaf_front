import { Flex } from "@soaf/react-components-layout";

import { MusicList as MusicListType } from "@/shared/types";
import { MusicItem } from "./MusicItem";

export const MusicList = ({ musics }: { musics: MusicListType["musics"] }) => {
  if (!musics) return null;

  return (
    <Flex direction="column">
      {musics.map((music) => (
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
