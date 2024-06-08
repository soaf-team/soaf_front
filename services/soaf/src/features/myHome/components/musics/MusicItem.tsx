import defaultImg from "@assets/icons/my-home/music-default.svg";

import { Flex } from "@soaf/react-components-layout";
import { Album, IAlbumDetail } from "@/shared/types";

import { cn } from "@/shared/utils";

interface Props {
  music: Album | IAlbumDetail;
  type?: "search" | "list" | "detail";
  onClick?: () => void;
}

export function MusicItem({ type = "search", onClick, music }: Props) {
  const coverClass = cn({
    "min-w-[56px] w-[56px] h-[56px] rounded-[4px]": type === "search",
    "w-[88px] h-[88px] rounded-[8px]": type === "list",
    "w-[96px] h-[96px] rounded-[8px]": type === "detail",
  });

  const titleClass = cn(
    {
      label2: type === "search",
      head6sb: type === "list",
      head5b: type === "detail",
    },
    "text-black",
  );

  const artistClass = cn(
    {
      label4: type === "search" || type === "list",
      label3: type === "detail",
    },
    "text-gray600",
  );

  return (
    <Flex
      direction="row"
      gap={16}
      align={type === "search" ? "center" : "flex-start"}
      className="py-[8px] border-solid border-b border-border"
      onClick={onClick}
    >
      <div className={coverClass}>
        <img
          src={
            music.image[3]["#text"] === ""
              ? defaultImg
              : music.image[3]["#text"]
          }
          alt="cover"
          className={coverClass}
        />
      </div>

      <Flex direction="column" align="left" gap={4} className="py-[8px]">
        <p className={cn("line-clamp-1", titleClass)}>
          {music.name === "(null)" ? "제목 불명" : music.name}
        </p>
        <p className={cn("line-clamp-1", artistClass)}>{music.artist}</p>
      </Flex>
    </Flex>
  );
}
