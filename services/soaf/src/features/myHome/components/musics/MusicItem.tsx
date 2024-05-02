import { Flex } from "@soaf/react-components-layout";
import { Music } from "@/shared/types";

import { cn } from "@/shared/utils";

interface Props extends Music {
  type?: "search" | "list" | "detail";
  onClick?: () => void;
}

export const MusicItem = ({
  type = "search",
  onClick,
  name,
  artist,
  image,
  review,
}: Props) => {
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
      align="center"
      className="py-[8px] border-solid border-b border-border"
      onClick={onClick}
    >
      <div className={coverClass}>
        <img src={image} alt="cover" className={coverClass} />
      </div>

      <Flex
        direction="column"
        justify={cn({
          "space-between": type === "list",
        })}
      >
        <Flex direction="column" align="left" gap={4}>
          <p className={cn("line-clamp-1", titleClass)}>{name}</p>
          <p className={cn("line-clamp-1", artistClass)}>{artist}</p>
        </Flex>

        {review && <p className="body4">{review}</p>}
      </Flex>
    </Flex>
  );
};