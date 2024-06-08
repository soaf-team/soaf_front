import { Flex } from "@soaf/react-components-layout";
import { Thumbnail, Youtube } from "@/shared/types";

import { cn, detailDate } from "@/shared/utils";

export interface YoutubeItemProps
  extends Pick<
    Youtube["items"][0]["snippet"],
    "title" | "channelTitle" | "publishedAt"
  > {
  thumbnail: Thumbnail["url"];
}

interface Props {
  type?: "search" | "list" | "detail";
  onClick?: () => void;
  youtube: YoutubeItemProps;
}

export function YoutubeItem({ type = "search", onClick, youtube }: Props) {
  const posterClass = cn({
    "min-w-[154px] w-[154px] h-[86px] rounded-[8px]":
      type === "search" || "list",
    "w-full h-[197px] rounded-[8px]": type === "detail",
  });

  const titleClass = cn(
    {
      label2: type === "search" || "list",
      head5b: type === "detail",
    },
    "text-black",
  );

  if (!youtube) return null;

  return (
    <Flex
      direction="column"
      gap={16}
      className="border-b border-solid border-border py-[8px]"
    >
      <Flex direction="row" gap={16} onClick={onClick}>
        <div className={posterClass}>
          <img src={youtube.thumbnail} alt="cover" className={posterClass} />
        </div>

        <Flex
          direction="column"
          justify="space-between"
          gap={8}
          className="py-[8px]"
        >
          <p className={cn("line-clamp-2", titleClass)}>{youtube.title}</p>
          <Flex gap={4} align="center" className="label4 text-gray200">
            <p>{detailDate(youtube.publishedAt)}</p>

            <p>{youtube.channelTitle}</p>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
